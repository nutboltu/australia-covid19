import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'nsw';
const stateName = 'New South Wales';

const NSW = ({
  CDRData,
  sexAndAgeGroupData,
  localDistrictData,
  testedData,
  souceOfInfectionData,
  historicalData,
  activeCases,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          sexAndAgeGroupData={sexAndAgeGroupData}
          localDistrictData={localDistrictData}
          CDRData={CDRData}
          testedData={testedData}
          souceOfInfectionData={souceOfInfectionData}
          historicalData={historicalData}
          activeCases={activeCases}
        />
    </AppLayout>
  );
}

export async function getServerSideProps() { 
  const sexAndAgeGroupData = require('../../src/data/nsw/sex_age_group.json');
  const localDistrictData = require('../../src/data/nsw/local_district_cases.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const souceOfInfectionData = require('../../src/data/nsw/sources_of_infection.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const allActiveCases = require('../../src/data/aus_active_cases.json');
  return {
    props: {
      CDRData: AusCDRTData.NSW,
      sexAndAgeGroupData,
      localDistrictData,
      testedData: alltestedData.NSW,
      souceOfInfectionData,
      activeCases: allActiveCases.NSW,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
    },
  }
}

export default NSW;

