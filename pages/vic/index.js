import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'vic';
const stateName = 'Victoria';

const VIC = ({
  CDRData,
  sexAndAgeGroupData,
  souceOfInfectionData,
  testedData,
  historicalData,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          sexAndAgeGroupData={sexAndAgeGroupData}
          souceOfInfectionData={souceOfInfectionData}
          CDRData={CDRData}
          testedData={testedData}
          historicalData={historicalData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const sexAndAgeGroupData = require('../../src/data/vic/sex_age_group.json');
  const souceOfInfectionData = require('../../src/data/vic/sources_of_infection.json');
  const testedData = require('../../src/data/vic/tested.json');
  const newCDRData = require('../../src/data/vic/cases.json');
  const statesCasesData = require('../../src/data/states_cases.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');

  const oldCDRData = statesCasesData.find(item => item.location === stateName);
  const CDRData = {
      ...oldCDRData,
      ...newCDRData,
  }
  return {
    props: {
      CDRData,
      sexAndAgeGroupData,
      souceOfInfectionData,
      testedData,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
    },
  }
}

export default VIC;

