import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateName = 'Victoria';

const VIC = ({
  CDRData,
  sexAndAgeGroupData,
  souceOfInfectionData,
  testedData,
}) => {
  return (
    <AppLayout state='vic'>
        <StateContainer
          stateName={stateName}
          sexAndAgeGroupData={sexAndAgeGroupData}
          souceOfInfectionData={souceOfInfectionData}
          CDRData={CDRData}
          testedData={testedData}
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
    },
  }
}

export default VIC;

