import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'act';
const stateName = 'Australian Capital Territory';

const ACT = ({
  CDRData,
  localDistrictData,
  testedData,
  historicalData,
  sourceOfInfectionData,
  activeCases,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          localDistrictData={localDistrictData}
          CDRData={CDRData}
          testedData={testedData}
          sourceOfInfectionData={sourceOfInfectionData}
          historicalData={historicalData}
          activeCases={activeCases}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const sourceOfInfectionData = require('../../src/data/aus_source_of_infections.json');
  const localDistrictData = require('../../src/data/act/local_district_cases.json');
  const allActiveCases = require('../../src/data/aus_active_cases.json');
  return {
    props: {
      CDRData: AusCDRTData.ACT,
      testedData: alltestedData.ACT,
      activeCases: allActiveCases.ACT,
      sourceOfInfectionData: sourceOfInfectionData.ACT,
      localDistrictData,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default ACT;

