import { Radio } from 'antd';

export const StateSelect = ({ defaultValue = '', onStateChange }) => {
  return (
    <Radio.Group
      onChange={onStateChange}
      defaultValue={defaultValue}
      className='state-selector'
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