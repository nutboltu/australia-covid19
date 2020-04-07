import AustraliaMap from 'react-australia-map';
import { states } from '../../constants/states';

export const COVIDAustraliaMap = ({
    data,
    total,
    onClick,
}) => {
    const mapMaxValue = data.reduce((acc, item) => Math.max(acc, item.confirmed), 0);
    const range = parseInt((mapMaxValue + 100) / 9);
    const colors = ['#fff5f0','#fee0d2','#fcbba1', '#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'];
    const mapStyling = data.reduce((acc, item) => {
        const per = (item.confirmed * 100) / total.confirmed;
        const colorIndex = parseInt(item.confirmed / range);
        acc[item.code] = {
            fill: colors[colorIndex],
            showLabels: true,
            label: {
            name: ` ${item.code}\n ${item.confirmed} (${per.toFixed(2)}%)`,
            fontSize: 4,
            fill: colorIndex > 4 ? 'white' : 'black'
            }
        }
        return acc;
    }, {});
    const handleOnClick = (event) => {
        onClick(event.target.dataset.name);
    }
    return (
        <AustraliaMap
            fill="#ffcb03"
            stroke="#ddd"
            strokeWidth={0.5}
            customize={mapStyling}
            onClick={handleOnClick}
      />
);
}