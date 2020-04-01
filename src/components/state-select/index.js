import { Radio } from 'antd';
import { routeTo } from '../../utils/route';

export const StateSelect = ({ defaultValue = ''}) => {
  const onChange = (event) => {
    routeTo(event.target.value);
  };

  return (
    <Radio.Group
      onChange={onChange}
      defaultValue={defaultValue}
      style={{
        lineHeight: 0,
        textAlign: 'center',
      }}
    >
      <Radio.Button value="nsw">NSW</Radio.Button>
      <Radio.Button value="act">ACT</Radio.Button>
      <Radio.Button value="qld">QLD</Radio.Button>
      <Radio.Button value="nt">NT</Radio.Button>
      <Radio.Button value="vic">VIC</Radio.Button>
      <Radio.Button value="sa">SA</Radio.Button>
      <Radio.Button value="wa">WA</Radio.Button>
      <Radio.Button value="tas">TAS</Radio.Button>
    </Radio.Group>
  );
}