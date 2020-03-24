import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { LineGraph } from '../line-graph';

const states = [{
  name: 'New South Wales',
  code: 'NSW'
}, {
  name: 'Victoria',
  code: 'VIC'
}, {
  name: 'Queensland',
  code: 'QLD'
},  {
  name: 'South Australia',
  code: 'SA'
}, 
{
  name: 'Western Australia',
  code: 'WA'
}, 
{
  name: 'Tasmania',
  code: 'TAS'
}, {
  name: 'Northern Territory',
  code: 'NT'
}, 
{
  name: 'Australian Capital Territory',
  code: 'ACT'
}];

export const FilteredGraph = ({ data }) => {
  const [graphData, setGraphData] = React.useState(data);
  const [stateChecked, setStateChecked] = React.useState({
    NSW: true,
    VIC: true,
    QLD: true,
    SA: true,
    WA: true,
    TAS: true,
    ACT: true,
    NT: true,
  });

  const filterData = (newStateChecked) => {
    const newData = Object.keys(newStateChecked).reduce((acc, key) => {
      if(newStateChecked[key]) {
        acc.push(data.find(item => item.id === key));
      }
      return acc;
    }, []);
    setGraphData(newData);
  }

  const handleChange = event => {
    const newStateChecked = { ...stateChecked, [event.target.name]: event.target.checked };
    setStateChecked(newStateChecked);
    filterData(newStateChecked);
  };

  return (
    <>
      <FormGroup row>
        {
          states.map((item) => (
            <FormControlLabel
              key={item.code}
              control={<Checkbox checked={stateChecked[item.code]} onChange={handleChange} name={item.code} />}
              label={item.name}
            />
          ))
        }
      </FormGroup>
      <LineGraph data={graphData} />
    </>
  )
}