import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateName = 'Queensland';

const QLD = ({
  localDistrictData,
  testedData,
  CDRData,
}) => {
  return (
    <AppLayout state='qld'>
        <StateContainer
          stateName={stateName}
           localDistrictData={localDistrictData}
           testedData={testedData}
           CDRData={CDRData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const localDistrictData = require('../../src/data/qld/local_district_cases.json');
  const testedData = require('../../src/data/qld/tested.json');
  const statesCasesData = require('../../src/data/states_cases.json');
  const newCDRData = require('../../src/data/qld/cases.json');
  
  const oldCDRData = statesCasesData.find(item => item.location === stateName);
  const CDRData = {
      ...oldCDRData,
      ...newCDRData,
  }
  return {
    props: {
      CDRData,
      localDistrictData,
      testedData,
   },
  }
}

export default QLD;

