import Head from 'next/head';
import { FilteredGraph } from '../components/filtered-graph';
import confirmed from "../data/australia/confirmed.json";
import deaths from "../data/australia/deaths.json";
import recovered from "../data/australia/recovered.json";

const Home = ({ confirmed, deaths, recovered }) => {
  return (
  <div className="container">
    <Head>
      <title>Australia COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div style={{ height: '400px', width: '900px'}}>
        <FilteredGraph data={confirmed} title="Confirmed" />
        <FilteredGraph data={deaths} title="Deaths" />
        <FilteredGraph data={recovered} title="Recovered" />
      </div>
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
    },
  }
}

export default Home
