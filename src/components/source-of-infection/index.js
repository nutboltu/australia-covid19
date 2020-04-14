import { Divider } from 'antd';
import { ResponsivePie } from '@nivo/pie';

const color = {
    'Overseas': '#000b5b',
    'Contact with others': '#60acee',
    'Locally acquired': '#55d0cf',
    'Under investigation': '#a3a8ca',
};
const textColor = {
    'Overseas': '#eeeeee',
    'Contact with others': '#111',
    'Locally acquired': '#111',
    'Under investigation': '#eeeeee',
};

const getColor = (item) => color[item.label];
const getTextColor = (item) => textColor[item.label];

export const SourceOfInfection = ({ data }) => {
    return (
    <>
        <Divider orientation="center">
            Source of infection of confirmed cases
        </Divider>
        <ResponsivePie
            data={data}
            background='#ffffff'
            margin={{ top: 0, right: 0, bottom: 80, left: 0 }}
            innerRadius={0.5}
            padAngle={2}
            colors={getColor}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor={getTextColor}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            sliceLabel="id"
            //radialLabelsLinkHorizontalLength='8px'
            enableRadialLabels={false}
            // legends={[
            //     {
            //         anchor: 'bottom',
            //         direction: 'row',
            //         translateX: 20,
            //         translateY: 30,
            //         itemWidth: 100,
            //         itemHeight: 24,
            //         itemTextColor: '#999',
            //         itemTextSize: 6,
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemTextColor: '#000'
            //                 }
            //             }
            //         ]
            //     }
            // ]}
        />
    </>
); 
}