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

const stateCodeToName = {
  NSW: 'New South Wales',
  VIC: 'Victoria',
  NT: 'Northern Territory',
  QLD: 'Queensland',
  SA: 'South Australia',
  WA: 'Western Australia',
  TAS: 'Tasmania',
  ACT: 'Australian Capital Territory'
} 
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
    stateCodeToName,
    mapToStateName,
    states,
    stateNames,
}