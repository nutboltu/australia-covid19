import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'sa';
const stateName = 'South Australia';

const NSW = ({
  sexAndAgeGroupData,
  CDRData,
  testedData,
  souceOfInfectionData,
  historicalData
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          sexAndAgeGroupData={sexAndAgeGroupData}
          CDRData={CDRData}
          testedData={testedData}
          souceOfInfectionData={souceOfInfectionData}
          historicalData={historicalData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const sexAndAgeGroupData = require('../../src/data/sa/sex_age_group.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const souceOfInfectionData = require('../../src/data/sa/sources_of_infection.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');

  return {
    props: {
      sexAndAgeGroupData,
      CDRData: AusCDRTData.SA,
      testedData: alltestedData.SA,
      souceOfInfectionData,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
    },
  }
}

export default NSW;

