import Head from 'next/head';
import { FilteredGraph } from '../components/filtered-graph';
import { BarGraph } from '../components/nsw-sex-age-group';
import { PieChart } from '../components/pie-chart';
import { Home } from '../components/home';
import confirmed from "../data/australia/confirmed.json";
import deaths from "../data/australia/deaths.json";
import recovered from "../data/australia/recovered.json";
import nswSexAndAgeGroup from "../data/australia/nsw/sex-age-group.json";
import sourceOfInfection from "../data/australia/nsw/sources-of-infection.json";

const App = ({
  confirmed,
  deaths,
  recovered,
  nswSexAndAgeGroup,
  sourceOfInfection,
}) => {
  return (
  <div className="container">
    <Head>
      <title>Australia COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {/* <div style={{ height: '600px', width: '900px'}}>
        <h2>Overall Australia - cases to date</h2>
        <FilteredGraph data={confirmed} title="Confirmed" />
        <FilteredGraph data={deaths} title="Deaths" />
        <FilteredGraph data={recovered} title="Recovered" />
        <h3>By source of infections</h3>
        <PieChart data={sourceOfInfection} />
      </div> */}
      {/* <div style={{height: '400px', width: '800px'}}>
        <h2>NSW - Confirmed cases to date</h2>
        <h3>By sex and age group</h3>
        <BarGraph data={nswSexAndAgeGroup} />
      </div>
      <ConfirmedTable /> */}
      <Home />
    </main>

    <footer>
      
    </footer>
    </div>
  );
}

export async function getStaticProps() { 
  return {
    props: {
      confirmed,
      deaths,
      recovered,
      nswSexAndAgeGroup,
      sourceOfInfection,
    },
  }
}

export default App
