import { Divider } from 'antd';
import { ResponsiveCalendar } from '@nivo/calendar';
import daily from '../../data/daily_reports.json';

export const DailyCasesCalendar = ({ stateName }) => {
    return (
        <>
            <Divider orientation="center">
                Daily confirmed cases
            </Divider>
            <ResponsiveCalendar
                data={daily[stateName]}
            from="2020-02-01"
            to="2020-12-31"
            emptyColor="#eeeeee"
            colors={[ '#fcbba1', '#fc9297', '#fb614a', '#ef3b2c', '#cb181d', '#67000d' ]}
            margin={{ top: -40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={0}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: -32,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left'
                }
            ]}
        />
        </>
    );
}