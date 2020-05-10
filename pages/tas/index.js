import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'tas';
const stateName = 'Tasmania';

const TAS = ({
  CDRData,
  historicalData,
  testedData,
  activeCases,
  sourceOfInfectionData,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          CDRData={CDRData}
          testedData={testedData}
          historicalData={historicalData}
          activeCases={activeCases}
          sourceOfInfectionData={sourceOfInfectionData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const allActiveCases = require('../../src/data/aus_active_cases.json');
  const sourceOfInfectionData = require('../../src/data/aus_source_of_infections.json');
  return {
    props: {
      CDRData: AusCDRTData.TAS,
      testedData: alltestedData.TAS,
      activeCases: allActiveCases.TAS,
      sourceOfInfectionData: sourceOfInfectionData.TAS,
      historicalData: allHistoricalData.TAS,
   },
  }
}

export default TAS;