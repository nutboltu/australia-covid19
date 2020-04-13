import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'qld';
const stateName = 'Queensland';

const QLD = ({
  localDistrictData,
  testedData,
  CDRData,
  historicalData,
  activeCases,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          localDistrictData={localDistrictData}
          testedData={testedData}
          CDRData={CDRData}
          historicalData={historicalData}
          activeCases={activeCases}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const localDistrictData = require('../../src/data/qld/local_district_cases.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const allActiveCases = require('../../src/data/aus_active_cases.json');

  return {
    props: {
      CDRData: AusCDRTData.QLD,
      localDistrictData,
      testedData: alltestedData.QLD,
      activeCases: allActiveCases.QLD,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default QLD;

