import React from 'react';
import { useCurrentWidth } from 'react-socks';
import { ResponsiveLine } from '@nivo/line';

const colors = ['#60acee', '#faad14',  '#13c2c2' , '#a3a8ca', '#ff4d4f', '#000b5b'];

const getColors = (line) => colors[line.rank - 1];

const getLegends = (isColumn) =>  {
    return [
        {
            anchor: 'bottom',
            direction: isColumn ? 'column' : 'row',
            justify: false,
            translateX: isColumn ? 120 : 0,
            translateY: isColumn ? 0 : 45,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 70,
            itemHeight: 25,
            itemOpacity: 0.75,
            itemTextSize: 8,
            symbolSize: 8,
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
    ];
}

export const ComparisonGraph = ({ data }) => {
    const width = useCurrentWidth();
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 0, bottom: 75, left: 60 }}
            curve='catmullRom'
            enableSlices='x'
            gridXValues={[0, 10, 20, 30, 40, 50, 60]}
            gridYValues={[100, 1000, 10000, 100000]}
            yScale={{
                type: 'log',
                base: 10,
                max: 300000
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickValues: [0, 10, 20, 30, 40, 50, 60],
                tickRotation: -59,
                legend: 'Days since the 100th total confirmed case',
                legendPosition: 'middle',
                legendOffset: 60
            }}
            axisLeft={{
                orient: 'left',
                tickValues: [100, 1000, 10000, 100000, 1000000],
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
            colors={getColors}
            pointSize={1}
            useMesh={true}
            legends={getLegends(width < 512)}
        />
    );
}