import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateCode = 'nt';
const stateName = 'Northern Territory';

const NT = ({
  CDRData,
  historicalData,
}) => {
  return (
    <AppLayout state={stateCode}>
        <StateContainer
          stateName={stateName}
          CDRData={CDRData}
          historicalData={historicalData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const statesCasesData = require('../../src/data/states_cases.json');
  const allHistoricalData = require('../../src/data/states_historical_data.json');

  const CDRData = statesCasesData.find(item => item.location === stateName);
  return {
    props: {
      CDRData,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default NT;