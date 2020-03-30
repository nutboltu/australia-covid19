import { ResponsiveBar } from '@nivo/bar';
import { Row, Col, Divider } from 'antd';

const commonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const colors = {
    male: '#000b5b',
    female: '#60acee',
}

const getColors = (bar) => colors[bar.id];

export const SexAgeGroup = ({ data }) => {
    let maxValue = 0;
    const numbers = data.reduce((acc, item) => {
        acc.male += item.male;
        acc.female += item.female;
        maxValue = Math.max(Math.max(item.male, item.female), maxValue);
        return acc;
    }, {male: 0, female: 0});
    const total = numbers.male + numbers.female;
    const female_percentage = ((numbers.female * 100) / total).toFixed(2);
    const male_percentage = ((numbers.male * 100) / total).toFixed(2);
    return (
        <>
            <Divider orientation="center">
                Age and sex breakdown of confirmed cases
            </Divider>
            <Row style={{ height: 50 }}>
                <Col
                    flex={female_percentage}
                    style={{ background: colors.female, ...commonStyles }}
                >
                    Female {numbers.female} ({female_percentage} %)
                </Col>
                <Col
                    flex={male_percentage}
                    style={{ background: colors.male, color: 'white', ...commonStyles }}
                    >
                        Male {numbers.male} ({male_percentage} %)
                </Col>
            </Row>
            <ResponsiveBar
                data={data}
                keys={[ 'female', 'male' ]}
                indexBy="age"
                margin={{ top: 50, right: 0, bottom: 50, left: 30 }}
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