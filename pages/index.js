import {AppLayout} from '../src/components/layout'; 
import { AustraliaContainer } from '../src/components/australia';

const App = () => {
  return (
    <AppLayout>
      <AustraliaContainer />
    </AppLayout>
  );
}

// export async function getStaticProps() { 
//   return {
//     props: {
//       confirmed,
//       deaths,
//       recovered,
//       nswSexAndAgeGroup,
//       sourceOfInfection,
//     },
//   }
// }

export default App
