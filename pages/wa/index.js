import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'wa';
const stateName = 'Western Australia';

const WA = ({
  CDRData,
  testedData,
  historicalData,
  activeCases,
  sexAndAgeGroupData,
  sourceOfInfectionData,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          CDRData={CDRData}
          testedData={testedData}
          historicalData={historicalData}
          sourceOfInfectionData={sourceOfInfectionData}
          activeCases={activeCases}
          sexAndAgeGroupData={sexAndAgeGroupData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const alltestedData = require('../../src/data/aus_test_conducted.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const allActiveCases = require('../../src/data/aus_active_cases.json');
  const sexAndAgeGroupData = require('../../src/data/wa/sex_age_group.json');
  const sourceOfInfectionData = require('../../src/data/aus_source_of_infections.json');

  return {
    props: {
      sexAndAgeGroupData,
      CDRData: AusCDRTData.WA,
      sourceOfInfectionData: sourceOfInfectionData.WA,
      testedData: alltestedData.WA,
      activeCases: allActiveCases.WA,
      historicalData: allHistoricalData.WA,
   },
  }
}

export default WA;