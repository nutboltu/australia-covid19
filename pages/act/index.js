import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'act';
const stateName = 'Australian Capital Territory';

const ACT = ({
  CDRData,
  ageGroupData,
  testedData,
  historicalData,
  souceOfInfectionData,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          ageGroupData={ageGroupData}
          CDRData={CDRData}
          testedData={testedData}
          souceOfInfectionData={souceOfInfectionData}
          historicalData={historicalData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const testedData = require('../../src/data/act/tested.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  const souceOfInfectionData = require('../../src/data/act/sources_of_infection.json');
  const ageGroupData = require('../../src/data/act/age_group.json');

  return {
    props: {
      CDRData: AusCDRTData.ACT,
      testedData,
      ageGroupData,
      souceOfInfectionData,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default ACT;

