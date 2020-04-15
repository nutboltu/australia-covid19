import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const colors = {
    confirmed: '#faad14',
    deaths: '#ff4d4f',
    recovered: '#13c2c2',
}
const getColors = (line) => colors[line.id];

export const TimeSeriesGraph = ({ data }) => (
  <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 0, bottom: 75, left: 60 }}
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
            tickRotation: -59,
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
        colors={getColors}
        pointSize={1}
        enableArea
        useMesh={true}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 70,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 25,
                itemOpacity: 0.75,
                symbolSize: 12,
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