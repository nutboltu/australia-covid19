import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'act';
const stateName = 'Australian Capital Territory';

const ACT = ({
  CDRData,
  ageGroupData,
  testedData,
  historicalData,
  souceOfInfectionData,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          ageGroupData={ageGroupData}
          CDRData={CDRData}
          testedData={testedData}
          souceOfInfectionData={souceOfInfectionData}
          historicalData={historicalData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const statesCasesData = require('../../src/data/states_cases.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const testedData = require('../../src/data/act/tested.json');
  const newCDRData = require('../../src/data/act/cases.json');
  const souceOfInfectionData = require('../../src/data/act/sources_of_infection.json');
  const ageGroupData = require('../../src/data/act/age_group.json');

  const oldCDRData = statesCasesData.find(item => item.location === stateName);
  const CDRData = {
    ...oldCDRData,
    ...newCDRData,
  }
  return {
    props: {
      CDRData,
      testedData,
      ageGroupData,
      souceOfInfectionData,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default ACT;

