import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'nt';
const stateName = 'Northern Territory';

const NT = ({
  CDRData,
  historicalData,
  testedData,
  activeCases,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          CDRData={CDRData}
          historicalData={historicalData}
          testedData={testedData}
          activeCases={activeCases}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const allActiveCases = require('../../src/data/aus_active_cases.json');

  return {
    props: {
      CDRData: AusCDRTData.NT,
      testedData: alltestedData.NT,
      activeCases: allActiveCases.NT,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default NT;