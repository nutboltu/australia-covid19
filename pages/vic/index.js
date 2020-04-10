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
  localDistrictData,
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
          localDistrictData={localDistrictData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const sexAndAgeGroupData = require('../../src/data/vic/sex_age_group.json');
  const souceOfInfectionData = require('../../src/data/vic/sources_of_infection.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const localDistrictData = require('../../src/data/vic/local_district_cases.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');

  return {
    props: {
      CDRData: AusCDRTData.VIC,
      sexAndAgeGroupData,
      souceOfInfectionData,
      testedData: alltestedData.VIC,
      localDistrictData,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
    },
  }
}

export default VIC;

