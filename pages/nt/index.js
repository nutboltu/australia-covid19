import { AppLayout } from '../../src/components/layout';
import { StateContainer } from '../../src/components/state-container';

const stateName = 'Northern Territory';

const NT = ({
  CDRData,
}) => {
  return (
    <AppLayout state='nt'>
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

export default NT;