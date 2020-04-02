import { AppLayout } from '../../src/components/layout';
import { QLDContainer } from '../../src/components/qld';

const QLD = ({
  qldLocalDistrictData,
  qldTestedData,
  statesCasesData,
  qldCasesData
}) => {
  return (
    <AppLayout state='qld'>
        <QLDContainer
           qldLocalDistrictData={qldLocalDistrictData}
           qldTestedData={qldTestedData}
           statesCasesData={statesCasesData}
           qldCasesData={qldCasesData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const qldLocalDistrictData = require('../../src/data/qld/local_district_cases.json');
  const qldTestedData = require('../../src/data/qld/tested.json');
  const statesCasesData = require('../../src/data/states_cases.json');
  const qldCasesData = require('../../src/data/qld/cases.json');
  return {
    props: {
      qldLocalDistrictData,
      qldTestedData,
      statesCasesData,
      qldCasesData
    },
  }
}

export default QLD;

