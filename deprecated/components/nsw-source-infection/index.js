import { ResponsiveBar } from '@nivo/bar';

export const NSWSourceInfection = ({ data }) => (
    <ResponsiveBar
        data={data}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'pastel1' }}
        layout='horizontal'
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        maxValue={150}
        padding={0.6}
        axisBottom={null}
        axisRight={null}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'age',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Number of people',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        maxValue={700}
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
)