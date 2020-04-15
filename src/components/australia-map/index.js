import { Chart } from "react-google-charts";

export const  COVIDAustraliaMap = ({ data}) => {
    const dataResources = data.reduce((acc, item) => {
        acc.push([`AU-${item.code}`, item.confirmed])
        return acc;
    }, [['State', 'Confirmed']]);
    return (
        <Chart
            chartType="GeoChart"
            data={dataResources}
            options={{
                region: 'AU',
                colorAxis: { colors: ['#fff5f0', '#fb6a4a', '#67000d'] },
                datalessRegionColor: 'transparent',
                displayMode: 'regions',
                domain: 'AU',
                resolution: 'provinces',
                enableRegionInteractivity: true,
                legend: 'none',
            }}
            mapsApiKey="AIzaSyBqPPEBfBjgVjLwmh2r3ZPvOcLROOtKtks"
        />
    );
}