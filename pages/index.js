import {AppLayout} from '../src/components/layout'; 
import { AustraliaContainer } from '../src/components/australia';

const App = ({
  ausCDRTData,
  globalCases,
  ausHistoricalData,
  ausDailyHistoricalData,
  globalHistoricalData,
}) => {
  return (
    <AppLayout>
      <AustraliaContainer
        ausCDRTData={ausCDRTData}
        globalCases={globalCases}
        ausHistoricalData={ausHistoricalData}
        ausDailyHistoricalData={ausDailyHistoricalData}
        globalHistoricalData={globalHistoricalData}
      />
    </AppLayout>
  );
}
export async function getStaticProps() { 
  const ausCDRTData = require('../src/data/aus_cdrt.json');
  const globalCases = require('../src/data/global_cases.json');
  const ausHistoricalData = require('../src/data/aus_historical_data.json');
  const ausDailyHistoricalData = require('../src/data/aus_daily_historical_data.json');
  const globalHistoricalData = require('../src/data/global_historical_data.json');

  return {
    props: {
      ausCDRTData,
      globalCases,
      ausHistoricalData,
      ausDailyHistoricalData,
      globalHistoricalData,
    },
  }
}

export default App
