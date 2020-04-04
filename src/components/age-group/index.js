import { ResponsiveBar } from '@nivo/bar';
import { Divider } from 'antd';

const getColors = () => '#000b5b';

export const AgeGroup = ({ data }) => {
    const maxValue = data.reduce((acc, item) =>
      Math.max(acc, item.value), 0);
    return (
        <>
            <Divider orientation="center">
                Age grouped of confirmed cases
            </Divider>
            <ResponsiveBar
                data={data}
                indexBy="age"
                margin={{ top: 50, right: 20, bottom: 70, left: 30 }}
                padding={0.3}
                groupMode="grouped"
                colors={getColors}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                maxValue={maxValue}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -59,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                }}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateY: 60,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 15,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                enableLabel={false}
            />
        </>
    );
}