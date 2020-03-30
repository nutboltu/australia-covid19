import { ResponsiveChoropleth } from '@nivo/geo'
import geo from '../../data/topology.json';

export const AustraliaMap = ({ data, mapHandler, mapMaxValue }) => (
    <ResponsiveChoropleth
        data={data}
        features={geo}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors='reds'
        domain={[ 0, 1800]}
        unknownColor="#666666"
        label="properties.STATE_NAME"
        valueFormat=","
        projectionScale={600}
        projectionTranslation={[ -1.20, -0.2 ]}
        projectionRotation={[ null, null, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor='#152538'
        onClick={mapHandler}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)