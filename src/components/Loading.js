import React from 'react'
import ContentLoader from 'react-content-loader'

const Loading = props => {
  return (
    <ContentLoader width={200} height={200} viewBox="0 0 200 200" {...props}>
      <rect y="30" x="30" rx="0" ry="0" height="25" width="40" />
      <rect y="60" x="30" rx="0" ry="0" height="25" width="55" />
      <rect y="90" x="30" rx="0" ry="0" height="25" width="74" />
      <rect y="120" x="30" rx="0" ry="0" height="25" width="120" />
      <rect y="150" x="30" rx="0" ry="0" height="25" width="58" />
    </ContentLoader>
  )
}

Loading.metadata = {
  name: 'Phuong Dao',
  github: 'dao-phuong',
  description: 'Bar Chart',
  filename: 'BarChart',
}

export default Loading