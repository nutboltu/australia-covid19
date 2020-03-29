import { Divider } from 'antd';
import { ResponsivePie } from '@nivo/pie';

const color = {
    'Travel overseas': '#91d5ff',
    'Contact with a confirmed case': '#ffe58f',
    'Locally acquired – unknown source': '#b7eb8f',
    'Under investigation': '#a3a8ca',
};

const getColor = (item) => color[item.label];

export const SourceOfInfection = ({ data }) => {
    return (
    <>
        <Divider orientation="center">
            Likely source of infection of confirmed cases
        </Divider>
        <ResponsivePie
            data={data}
            margin={{ top: 0, right: 100, bottom: 100, left: 0 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'set3' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            enableRadialLabels={false}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'Travel overseas'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Contact with a confirmed case'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'Locally acquired – unknown source'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'Under investigation',
                    },
                    id: 'lines',
                }
            ]}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    translateX: 150,
                    translateY: 0,
                    itemWidth: 250,
                    itemHeight: 24,
                    itemTextColor: '#999',
                    itemTextSize: 8,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    </>
); 
}