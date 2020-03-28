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

const mapToStateName = {
  act_australia: 'Australian Capital Territory',
  nsw_australia: 'New South Wales',
  northernterritory_australia: 'Northern Territory',
  tasmania_australia: 'Tasmania',
  westernaustralia_australia: 'Western Australia',
  southaustralia_australia: 'South Australia',
  queensland_australia: 'Queensland',
  victoria_australia: 'Victoria',
};

module.exports = {
    mapToStateName,
    states,
    stateNames,
}