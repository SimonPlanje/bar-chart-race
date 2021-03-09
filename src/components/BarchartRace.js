import * as d3 from 'd3';
import { sliderBottom } from 'd3-simple-slider';
import React, { useEffect} from 'react'

export default function BarchartRace({ data, eventData }) {
  d3.select('.barchartdiv').selectAll('svg').remove()

  useEffect(() => {
    //remove the useless zero value out of the dataset
    data = data.filter((d) => d.partij !== '0');
    // console.log(data);
    // console.log(eventData);

    // The data from the "day dashboard" maintained by FTM
    let partijen = new Set(data.map((d) => d.partij));
    console.log(partijen)
    // Unique political party names
    let partijNames = d3.group(data, (d) => d.partij);

    // Spending per unique date per political party
    // d.midden = average cumulative value
    // d.datum = date
    // d.partij = political party name
    const datevalues = Array.from(
      d3.rollup(
        data,
        ([d]) => d.midden,
        (d) => d.datum,
        (d) => d.partij
      )
    )
      .map(([date, data]) => [new Date(date), data])
      .sort(([a], [b]) => d3.ascending(a, b));

    // Display settings
    //source: https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
    const width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const margin = { top: 16, right: 120, bottom: 65, left: 5 };
    const barSize = 33;

    // Maximum number of bars
    const n = 15;

    // Speed between dates displayed (used for keyframes)
    // The higher the number, the slower the total duration of the animation
    const k = 1.5;

    // Duration between keyframes (in milliseconds)
    const duration = 100;

    const height = margin.top + barSize * n + margin.bottom;

    // Appending SVG element to div
    const svg = d3
      .select('.barchartdiv')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'barchart');

    // Format numbers to local (Dutch) format
    // Sources: https://github.com/d3/d3-format#locale_format & https://observablehq.com/@d3/d3-format
    const numLocale = d3.formatLocale({
      decimal: ',',
      thousands: '.',
      grouping: [3],
      currency: ['€', ''],
    });

    // Format time and dates to local (Dutch) format
    // Source: https://github.com/d3/d3-time-format#locales
    const timeLocale = d3.timeFormatLocale({
      dateTime: '%a %b %e %X %Y',
      date: '%d/%m/%Y',
      time: '%H:%M:%S',
      periods: ['AM', 'PM'],
      days: [
        'zondag',
        'maandag',
        'dinsdag',
        'woensdag',
        'donderdag',
        'vrijdag',
        'zaterdag',
      ],
      shortDays: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
      months: [
        'januari',
        'februari',
        'maart',
        'april',
        'mei',
        'juni',
        'juli',
        'augustus',
        'september',
        'oktober',
        'november',
        'december',
      ],
      shortMonths: [
        'jan',
        'feb',
        'maa',
        'apr',
        'mei',
        'jun',
        'jul',
        'aug',
        'sep',
        'okt',
        'nov',
        'dec',
      ],
    });

    // Function used to format numbers to rounded "local" number
    const formatNumber = numLocale.format(',d');

    //   console.log(formatNumber)

    // Function used to format numbers to dd-mmmm-yyyy format (eg. 4 november 2020)
    // %e instead of %d to get "4" instead of "04". Source: https://github.com/d3/d3-time-format#locale_format
    const formatDate = timeLocale.utcFormat('%e %B %Y');

    // Function used to generate a €-sign with "local" rounded number
    function euroFormat(d) {
      return '€' + numLocale.format(',d')(d);
    }

    // Setting X & Y scales
    const x = d3.scaleLinear([0, 1], [margin.left, width - margin.right]);
    const y = d3
      .scaleBand()
      .domain(d3.range(n + 1))
      .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
      .padding(0.1);

    // Create a ranking for all political parties per day
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    function rank(value) {
      const data = Array.from(partijen, (partij) => ({
        partij,
        midden: value(partij),
      }));
      data.sort((a, b) => d3.descending(a.midden, b.midden));
      for (let i = 0; i < data.length; ++i) data[i].ranking = Math.min(n, i);
      return data;
    }

    // console.log(rank((name) => datevalues[0][1].get(name)));

    // Creating keyframes: frames (per day) that display the ranking and spendings of political parties
    // Used for animating between values
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    const keyframes = [];
    let ka, a, kb, b;
    for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
      for (let i = 0; i <= k; ++i) {
        const t = i / k;
        keyframes.push([
          new Date(ka * (1 - t) + kb * t),
          rank(
            (partij) => (a.get(partij) || 0) * (1 - t) + (b.get(partij) || 0) * t
          ),
        ]);
      }
    }

    // Keyframes per political party name + previous and next frames for al parties
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    const nameframes = d3.groups(
      keyframes.flatMap(([, data]) => data),
      (d) => d.partij
    );
    const prev = new Map(
      nameframes.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a]))
    );
    const next = new Map(nameframes.flatMap(([, data]) => d3.pairs(data)));

    //    // Appending a start/stop button, used for pausing and (re)-starting the animation
    //     // Adapted from: https://medium.com/@tarsusi/make-your-own-custom-bar-chart-race-with-d3-js-b7d6cfc4d0bd
    //     d3.select(".barchartdiv")
    //         .append("button")
    //             .attr("class", "controls red button")
    //             .text("Pauzeer")
    //             .on("click", function() {
    //                 if (this.innerHTML === "Pauzeer") {
    //                     this.innerHTML = "Hervat";
    //                     stop();
    //                 } else if (this.innerHTML === "Hervat") {
    //                     this.innerHTML = "Pauzeer";
    //                     start();
    //                 } else {
    //                     this.innerHTML = "Pauzeer";
    //                     render();
    //                 }
    //             });

    // Slider for jumping to a specific date (keyframe), using D3 simple slider plugin
    // Values between 0 and last keyframe
    // Sources: https://bl.ocks.org/johnwalley/e1d256b81e51da68f7feb632a53c3518 & https://github.com/johnwalley/d3-simple-slider
    const sliderFrame = sliderBottom()
      .min(0)
      .max(keyframes.length - 1)
      .width(width - 80)
      .step(1)
      .fill('var(--ftm-red)')
      .handle(d3.symbol().type(d3.symbolCircle).size(250)())
      .on('start', (val) => {
        // When clicking somewhere on the slider > render bar chart race with new value
        render(val);
      })
      .on('drag', (val) => {
        // When dragging slider > stop bar chart race animation, render with new value
        svg.interrupt();
        render(val);
      });

    // Apend a new svg (for the slider) to the main bar chart div
    const gFrameslider = d3
      .select('.barchartdiv')
      .append('svg')
      .attr('width', width)
      .attr('height', 20)
      .attr('class', 'frameslider')
      .append('g')
      .attr('transform', 'translate(32,10)');

    gFrameslider.call(sliderFrame);

    // Coverting the date strings to real date objects (unique values), used for the timeline
    const dataDates = [...new Set(data.map((d) => d.datum))].map(function (d) {
      return new Date(d);
    });

    // Coverting the month strings to real date objects (unique values), used for the timeline tick values
    const dataMonths = [...new Set(data.map((d) => d.maand))].map(function (d) {
      return new Date(d);
    });

    // Timeline below the keyframe slider. Used D3 simple slider plugin.
    // Values are dates (in stead of keyframe numbers that are used with the slider)
    // Sources: https://bl.ocks.org/johnwalley/e1d256b81e51da68f7feb632a53c3518 & https://github.com/johnwalley/d3-simple-slider
    const timeline = sliderBottom()
      .min(d3.min(dataDates))
      .max(d3.max(dataDates))
      .width(width - margin.right + 30)
      .tickFormat(timeLocale.utcFormat('%B'))
      .tickValues(dataMonths);

    // Append a new svg for the timeline within the main bar chart div.
    const gTimeline = d3
      .select('.barchartdiv')
      .append('svg')
      .attr('class', 'scaledates')
      .attr('width', width)
      .attr('height', 40)
      .append('g')
      .attr('transform', 'translate(26.5,17)');

    gTimeline.call(timeline);

    // Create a time scale with d3.scaleTime, used for plotting the circles on the correct dates
    // Source: https://observablehq.com/@d3/d3-scaletime#scaleUtc
    const xTime = d3
      .scaleTime()
      .domain([keyframes[0][0], keyframes[keyframes.length - 1][0]])
      .range([0, width - 60]);

    // Append a div to the body, used as a tooltip
    const div = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    if (width > 400) {
      // Append circles to the timeline group, using the eventData (used for displaying political events)
      gTimeline
        .selectAll('eventCircles')
        .data(eventData)
        .enter()
        .append('circle')
        .attr('cx', function (d) {
          const cx = xTime(new Date(d.datum));
          return cx;
        })
        .attr('cy', '-3')
        .attr('r', '10')
        .attr('fill', (d) => color(d.partij))
        .style('opacity', 0.8)
        .on('mouseover', function (event, d) {
          // On hover, display the tooltip. Source: https://bl.ocks.org/d3noob/180287b6623496dbb5ac4b048813af52
          d3.select(this).style('opacity', 0.3);
          div.transition().duration(200).style('opacity', 0.9);
          div
            .html(`${d.gebeurtenis}`)
            .style('left', event.pageX - 20 + 'px')
            .style('top', event.pageY - 54 + 'px');
        })
        .on('mouseout', function () {
          d3.select(this).style('opacity', 1);
          div.transition().duration(500).style('opacity', 0);
        });
    }

    // Function used to generate the top-axis of the bar chart race, using d3.axisTop
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    function axis(svg) {
      const g = svg.append('g').attr('transform', `translate(0,${margin.top})`);

      const axis = d3
        .axisTop(x)
        .tickFormat(euroFormat)
        .ticks(width / 160)
        .tickSizeOuter(0)
        .tickSizeInner(-barSize * (n + y.padding()));

      return (_, transition) => {
        g.transition(transition).call(axis);
        g.select('.tick:first-of-type text').remove();
        g.selectAll('.tick line').attr('stroke', 'white');
        g.select('.domain').remove();
      };
    }

    // Function used to display the date of the current keyframe in the right corner.
    // Keyframes 0 0 is the first date
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    function ticker(svg) {
      const displayedDate = svg
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', width - 100)
        .attr('y', margin.top + barSize * (n + 1))
        .attr('dy', '0.32em')
        .style('font-size', '2em')
        .text(formatDate(keyframes[0][0]));

      return ([date], transition) => {
        transition
          .end()
          .then(() => displayedDate.text(formatDate(date)))
          .catch(() => {});
      };
    }

    // Function used to return the correct color for a political party
    function color(party) {
      let color = '';
      switch (party) {
        case 'D66':
          color = '#b2df8a';
          break;
        case 'Forum voor Democratie':
        case 'FvD':
        case 'Thierry Baudet':
          color = '#9c1616';
          break;
        case 'VVD':
        case 'Klaas Dijkhoff':
        case 'Silvio Erkens':
          color = '#FA9600';
          break;
        case 'GroenLinks':
        case 'Bas Eickhout':
        case 'Jesse Klaver':  
          color = '#45b825';
          break;
        case 'CDA':
        case 'Agnes Mulder':
        case 'Chris van Dam':
        case  'Harmen Krul':
        case 'Harry van der Molen':
        case 'Henri Bontenbal':
        case 'Jaco Geurts':
        case 'Lucille Werner':
        case  'Martijn van Helvert':
        case 'Mustafa Amhaouch':
        case 'Raymond Knops':
        case 'René Peters':
        case 'Wopke Hoekstra':
          color = '#428a69';
          break;
        case 'PvdA':
          color = '#fb9a99';
          break;
        case 'SP':
        case 'Lilian Marijnissen':
          color = '#DD3230';
          break;
        case 'PvdD':
          color = '#b15928';
          break;
        case 'SGP':
          color = '#f0f026';
          break;
        case 'DENK':
          color = '#53c5c9';
          break;
        case 'CU':
        case 'Christen Unie':
        case 'ChristenUnie':
        case 'Gert-Jan Segers':
          color = '#1f78b4';
          break;
        case '50 Plus':
        case '50Plus':
          color = '#972dba';
          break;
        case 'PVV':
          color = '#87C6C2';
          break;
        case 'Code Oranje':
          color = '#C85716';
          break;
        case 'JA21':
        case 'Jan Cees Vogelaar':
          color = '#000080';
          break;
        case 'Bij1':
        case 'BIJ1':
          color = '#f85080';
          break;
        case 'Volt Nederland':
        case 'Volt':
          color = '#291749';
          break;
        default:
          color = 'var(--link-color)';
          break;
      }
      return color;
    }

    function bars(svg) {
      let bar = svg.append('g').selectAll('rect');

      return ([, data], transition) =>
        (bar = bar
          .data(data.slice(0, n), (d) => d.partij)
          .join(
            (enter) =>
              enter
                .append('rect')
                .attr('fill', (d) => color(d.partij))
                .attr('height', y.bandwidth())
                .attr('x', margin.left)
                .attr('y', (d) => y((prev.get(d) || d).ranking))
                .attr('width', (d) => x((prev.get(d) || d).midden) - x(0)),
            (update) => update,
            (exit) =>
              exit
                .transition(transition)
                .remove()
                .attr('y', (d) => y((next.get(d) || d).ranking))
                .attr('width', (d) => x((next.get(d) || d).midden) - x(0))
          )
          .call((bar) =>
            bar
              .transition(transition)
              .attr('y', (d) => y(d.ranking))
              .attr('width', (d) => x(d.midden) - x(0))
          ));
    }

    // Function used to make text transitions possible > here for the spending per party
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    function textTween(a, b) {
      const i = d3.interpolateNumber(a, b);
      return function (t) {
        this.textContent = '€' + formatNumber(i(t));
      };
    }

    // Function used to append the labels with party names and spending values.
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    function labels(svg) {
      let label = svg
        .append('g')
        .style('font', 'bold 12px var(--ftm-graph)')
        .style('font-variant-numeric', 'tabular-nums')
        .attr('text-anchor', 'start')
        .selectAll('text');

      //remove all the
      d3.selectAll('.tick').selectAll('line').remove();
      d3.selectAll('.tick').selectAll('text').remove();
      d3.selectAll('.slider')
        .selectAll('.parameter-value')
        .selectAll('text')
        .remove();

      return ([, data], transition) =>
        (label = label
          .data(data.slice(0, n), (d) => d.partij)
          .join(
            (enter) =>
              enter
                .append('text')
                .attr(
                  'transform',
                  (d) =>
                    `translate(${x((prev.get(d) || d).midden)},${y(
                      (prev.get(d) || d).ranking
                    )})`
                )
                .attr('y', y.bandwidth() / 2)
                .attr('x', 10)
                .attr('dy', '-0.25em')
                .text((d) => d.partij)
                .call((text) =>
                  text
                    .append('tspan')
                    .attr('fill-opacity', 0.7)
                    .attr('font-weight', 'normal')
                    .attr('x', 10)
                    .attr('dy', '1.15em')
                ),
            (update) => update,
            (exit) =>
              exit
                .transition(transition)
                .remove()
                .attr(
                  'transform',
                  (d) =>
                    `translate(${x((next.get(d) || d).midden)},${y(
                      (next.get(d) || d).ranking
                    )})`
                )
                .call((g) =>
                  g
                    .select('tspan')
                    .tween('text', (d) =>
                      textTween(d.midden, (next.get(d) || d).midden)
                    )
                )
          )
          .call((bar) =>
            bar
              .transition(transition)
              .attr(
                'transform',
                (d) => `translate(${x(d.midden)},${y(d.ranking)})`
              )
              .call((g) =>
                g
                  .select('tspan')
                  .tween('text', (d) =>
                    textTween((prev.get(d) || d).midden, d.midden)
                  )
              )
          ));
    }

    // start() stop() functions used to start and pause the animation.
    // CurrentDataSetIndex registers the number of the displayed keyframe.
    // Adapted from: https://medium.com/@tarsusi/make-your-own-custom-bar-chart-race-with-d3-js-b7d6cfc4d0bd
    let elapsedTime = duration;
    //   let currentDataSetIndex = 0;

    //   function stop() {
    //       console.log("STOP");
    //       svg.interrupt();
    //   }

    //   function start() {
    //       render(currentDataSetIndex);
    //       console.log("START");
    //   }

    // Functions that are called to update the parts of the bar chart race.
    // Source barchart race: https://observablehq.com/@d3/bar-chart-race-explained
    const updateBars = bars(svg);
    const updateAxis = axis(svg);
    const updateLabels = labels(svg);
    const updateTicker = ticker(svg);

    // Call the render function to render the bar chart race, starting with the first frame.
    render(0);

    // Function used to render the bar chart race with a given frame number (default is 0).
    // Adapted from: https://medium.com/@tarsusi/make-your-own-custom-bar-chart-race-with-d3-js-b7d6cfc4d0bd
    async function render(index = 0) {
      //   currentDataSetIndex = index;
      
      const transition = svg
        .transition()
        .duration(elapsedTime)
        .ease(d3.easeSinInOut)
        .on('end', () => {
          if (index < keyframes.length) {
            elapsedTime = duration;
            d3.select('.controls').text('Pauzeer');

            // Render next frame
            render(index + 1);
          } else {
            // If frames ended, give option to replay animation.
            d3.select('.controls').text('Afspelen');
          }
        })
        .on('interrupt', () => {
          console.log('INTERRUPTED');
        });

      // Execute the functions that are used to update the bar chart race.
      if (index < keyframes.length) {
        sliderFrame.value(index);
        x.domain([0, keyframes[index][1][0].midden]);
        updateTicker(keyframes[index], transition);
        updateAxis(keyframes[index], transition);
        updateBars(keyframes[index], transition);
        updateLabels(keyframes[index], transition);
      }

      // Wait for the transition to end.
      // Catch promise error, generated when animation is interrupted.
      // Source: https://stackoverflow.com/questions/37624322/uncaught-in-promise-undefined-error-when-using-with-location-in-facebook-gra
      await transition
        .end()
        .then(() => {})
        .catch(() => {});
    }
  }, [])

  return <div className="barchartdiv" width="100%"></div>;
}
