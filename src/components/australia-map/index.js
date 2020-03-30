import { ResponsiveChoropleth } from '@nivo/geo';
import geo from '../../data/topology.json';

export const AustraliaMap = ({
    data,
    mapHandler,
    scale,
    translation,
}) => {
    return (
    <ResponsiveChoropleth
        data={data}
        features={geo}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors='reds'
        domain={[ 0, 1800]}
        unknownColor="#666666"
        label="properties.STATE_NAME"
        valueFormat=","
        projectionScale={scale}
        projectionTranslation={translation}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor='#152538'
        onClick={mapHandler}
        // legends={[
        //     {
        //         anchor: 'bottom-left',
        //         direction: 'column',
        //         justify: true,
        //         translateX: 40,
        //         translateY: -100,
        //         itemsSpacing: 0,
        //         itemWidth: 80,
        //         itemHeight: 18,
        //         itemDirection: 'left-to-right',
        //         itemTextColor: '#444444',
        //         itemOpacity: 0.85,
        //         symbolSize: 12,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000000',
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
);
}