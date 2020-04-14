import { ResponsiveBar } from '@nivo/bar';
import { Divider } from 'antd';

const colors = {
    cases: '#13c2c2',
    test: '#ffd700',
}

const getColors = (bar) => colors[bar.id];

export const LocalDistrictCases = ({ data, title }) => {
  data.sort((a, b) => a.cases - b.cases);
  const maxValue = data.reduce((acc, item) => Math.max(acc, item.cases), 0);
    return (
        <>
            <Divider orientation="center">
              {title}
            </Divider>
            <ResponsiveBar
                data={data}
                keys={[ 'cases' ]}
                indexBy="district"
                margin={{ top: 0, right: 0, bottom: 50, left: 125 }}
                padding={0.3}
                groupMode="grouped"
                colors={getColors}
                layout='horizontal'
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                maxValue={maxValue + 5}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 10,
                    tickPadding: 5,
                    tickRotation: -59,
                    legend: 'Number of people',
                    legendPosition: 'middle',
                    legendOffset: 45
                }}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
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