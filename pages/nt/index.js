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
  const allHistoricalData = require('../../src/data/states_historical_data.json');
  const AusCDRTData = require('../../src/data/aus_cdrt.json');
  
  return {
    props: {
      CDRData: AusCDRTData.NT,
      historicalData: allHistoricalData[stateCode.toUpperCase()],
   },
  }
}

export default NT;