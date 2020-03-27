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

const stateNames = states.map(item => item.name);

module.exports = {
    states,
    stateNames,
}