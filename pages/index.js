import {AppLayout} from '../src/components/layout'; 
import { AustraliaContainer } from '../src/components/australia';

const App = ({
  ausCDRTData,
  globalCases,
  ausHistoricalData,
  // ausDailyHistoricalData,
  globalHistoricalData,
  ausTestConductedData,
  ausICUCasesData,
  ausLast24hData,
}) => {
  return (
    <AppLayout>
      <AustraliaContainer
        ausCDRTData={ausCDRTData}
        globalCases={globalCases}
        ausHistoricalData={ausHistoricalData}
        // ausDailyHistoricalData={ausDailyHistoricalData}
        globalHistoricalData={globalHistoricalData}
        ausTestConductedData={ausTestConductedData}
        ausICUCasesData={ausICUCasesData}
        ausLast24hData={ausLast24hData}
      />
    </AppLayout>
  );
}
export async function getStaticProps() { 
  const ausCDRTData = require('../src/data/aus_cdrt.json');
  const globalCases = require('../src/data/global_cases.json');
  const ausHistoricalData = require('../src/data/aus_historical_data.json');
  // const ausDailyHistoricalData = require('../src/data/aus_daily_historical_data.json');
  const globalHistoricalData = require('../src/data/global_historical_data.json');
  const ausTestConductedData = require('../src/data/aus_test_conducted.json');
  const ausICUCasesData = require('../src/data/aus_active_cases.json');
  const ausLast24hData = require('../src/data/aus_last_24h_cases.json');
  return {
    props: {
      ausCDRTData,
      globalCases,
      ausHistoricalData,
      // ausDailyHistoricalData,
      globalHistoricalData,
      ausTestConductedData,
      ausICUCasesData,
      ausLast24hData,
    },
  }
}

export default App
