import { AppLayout } from '../../src/components/layout';
import { VICContainer } from '../../src/components/vic';

const VIC = ({
  vicSexAndAgeGroupData,
  vicSouceOfInfectionData,
  vicCasesData,
  statesCasesData,
}) => {
  return (
    <AppLayout state='vic'>
        <VICContainer
          vicSexAndAgeGroupData={vicSexAndAgeGroupData}
          vicSouceOfInfectionData={vicSouceOfInfectionData}
          vicCasesData={vicCasesData}
          statesCasesData={statesCasesData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const vicSexAndAgeGroupData = require('../../src/data/vic/sex_age_group.json');
  const vicSouceOfInfectionData = require('../../src/data/vic/sources_of_infection.json');
  const vicCasesData = require('../../src/data/vic/cases.json');
  const statesCasesData = require('../../src/data/states_cases.json');

  return {
    props: {
      vicSexAndAgeGroupData,
      vicSouceOfInfectionData,
      vicCasesData,
      statesCasesData,
    },
  }
}

export default VIC;

