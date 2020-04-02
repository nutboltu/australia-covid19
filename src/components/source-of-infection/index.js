import { Divider } from 'antd';
import { ResponsivePie } from '@nivo/pie';

const color = {
    'Travel overseas': '#000b5b',
    'Contact with a confirmed case': '#60acee',
    'Locally acquired – unknown source': '#45464c',
    'Under investigation': '#a3a8ca',
};

const getColor = (item) => color[item.label];

export const SourceOfInfection = ({ data }) => {
    return (
    <>
        <Divider orientation="center">
            Source of infection of confirmed cases
        </Divider>
        <ResponsivePie
            data={data}
            background='#ffffff'
            margin={{ top: 0, right: 80, bottom: 100, left: 0 }}
            innerRadius={0.5}
            padAngle={2}
            colors={getColor}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#eeeeee"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            enableRadialLabels={false}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    translateX: 230,
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