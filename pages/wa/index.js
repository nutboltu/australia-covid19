import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateName = 'Western Australia';

const WA = ({
  CDRData,
}) => {
  return (
    <AppLayout state='wa'>
        <StateContainer
          stateName={stateName}
          CDRData={CDRData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const statesCasesData = require('../../src/data/states_cases.json');
  
  const CDRData = statesCasesData.find(item => item.location === stateName);
  return {
    props: {
      CDRData,
   },
  }
}

export default WA;