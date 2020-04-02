import {AppLayout} from '../src/components/layout'; 
import { AustraliaContainer } from '../src/components/australia';

const App = ({
  ausCasesData,
  statesCasesData,
  statesCasesTodayData,
  globalCases,
  ausHistoricalData,
  ausDailyHistoricalData,
}) => {
  return (
    <AppLayout>
      <AustraliaContainer
      ausCasesData={ausCasesData}
      statesCasesData={statesCasesData}
      statesCasesTodayData={statesCasesTodayData}
      globalCases={globalCases}
      ausHistoricalData={ausHistoricalData}
      ausDailyHistoricalData={ausDailyHistoricalData}
      />
    </AppLayout>
  );
}
export async function getStaticProps() { 
  const ausCasesData = require('../src/data/aus_cases.json');
  const statesCasesData = require('../src/data/states_cases.json');
  const statesCasesTodayData = require('../src/data/states_cases_today.json');
  const globalCases = require('../src/data/global_cases.json');
  const ausHistoricalData = require('../src/data/aus_historical_data.json');
  const ausDailyHistoricalData = require('../src/data/aus_daily_historical_data.json');

  return {
    props: {
      ausCasesData,
      statesCasesData,
      statesCasesTodayData,
      globalCases,
      ausHistoricalData,
      ausDailyHistoricalData,
    },
  }
}

export default App
