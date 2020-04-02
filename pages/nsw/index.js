import { AppLayout } from '../../src/components/layout';
import { NSWContainer } from '../../src/components/nsw';

const NSW = ({
  nswSexAndAgeGroupData,
  nswLocalDistrictData,
  nswCasesData,
  nswTestedData,
  nswSouceOfInfectionData,
  statesCasesData
}) => {
  return (
    <AppLayout state='nsw'>
        <NSWContainer
          nswSexAndAgeGroupData={nswSexAndAgeGroupData}
          nswLocalDistrictData={nswLocalDistrictData}
          nswCasesData={nswCasesData}
          nswTestedData={nswTestedData}
          nswSouceOfInfectionData={nswSouceOfInfectionData}
          statesCasesData={statesCasesData}
        />
    </AppLayout>
  );
}

export async function getStaticProps() { 
  const nswSexAndAgeGroupData = require('../../src/data/nsw/sex_age_group.json');
  const nswLocalDistrictData = require('../../src/data/nsw/local_district_cases.json');
  const nswCasesData = require('../../src/data/nsw/cases.json');
  const nswTestedData = require('../../src/data/nsw/tested.json');
  const nswSouceOfInfectionData = require('../../src/data/nsw/sources_of_infection.json');
  const statesCasesData = require('../../src/data/states_cases.json');

  return {
    props: {
      nswSexAndAgeGroupData,
      nswLocalDistrictData,
      nswCasesData,
      nswTestedData,
      nswSouceOfInfectionData,
      statesCasesData,
    },
  }
}

export default NSW;

