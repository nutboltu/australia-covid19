import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export const LineGraph = ({ data }) => (
  <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 180, bottom: 50, left: 60 }}
        curve='catmullRom'
        enableSlices='x'
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day'
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: 'linear',
          stacked: false,
      }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            format: '%d-%b',
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Number of people',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 160,
                translateY: 10,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 140,
                itemHeight: 30,
                itemOpacity: 0.75,
                symbolSize: 18,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
);