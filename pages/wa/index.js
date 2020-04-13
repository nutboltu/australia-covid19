import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'wa';
const stateName = 'Western Australia';

const WA = ({
  CDRData,
  testedData,
  historicalData,
  localDistrictData,
  activeCases,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          CDRData={CDRData}
          testedData={testedData}
          historicalData={historicalData}
          localDistrictData={localDistrictData}
          activeCases={activeCases}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const localDistrictData = require('../../src/data/wa/local_district_cases.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const allActiveCases = require('../../src/data/aus_active_cases.json');


  return {
    props: {
      CDRData: AusCDRTData.WA,
      localDistrictData,
      testedData: alltestedData.WA,
      activeCases: allActiveCases.WA,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default WA;