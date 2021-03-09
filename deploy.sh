#!/bin/bash

# Build
npm run build

# Remove old static files
rm -rf ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/race/*

# Copy static files
cp -r build/static/* ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/race/

# Copy index.html
cp build/index.html ../ftm-platform/ftm/src/FTM/FrontBundle/Resources/views/Content/partijfinancieringRace.html.twig

# Adjust index.html asset paths
sed -i 's|/bar-chart-race/static/\([^"]*\)|{{asset("bundles/ftmfront/content/partijfinanciering/race/\1")}}|g' ../ftm-platform/ftm/src/FTM/FrontBundle/Resources/views/Content/partijfinancieringRace.html.twig
sed -i 's|"/bar-chart-race/"|"./"|g' ../ftm-platform/ftm/src/FTM/FrontBundle/Resources/views/Content/partijfinancieringRace.html.twig
 
# CSS paths
for i in ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/race/css/*; do
    sed -i 's|https://www.ftm.nl/assets/|../../../../../../assets/|g' $i
    sed -i 's|/bar-chart-race/static/media/|../media/|g' $i
done
 
# JS paths
for i in ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/race/js/*; do
    sed -i 's|static/media/|./bundles/ftmfront/content/partijfinanciering/race/media/|g' $i
    sed -i 's|"/bar-chart-race/"|"./"|g' $i
done