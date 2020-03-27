import Head from 'next/head';
import { Layout } from 'antd';
import { AustraliaContainer } from '../src/components/australia';
import { NSWContainer } from '../src/components/nsw';
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
  <div className="container">
    <Head>
      <title>Australia COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Layout style={{ backgroundColor: 'white' }}>
        <Header
          style={{
            fontSize: '20px',
            color: '#ddd',
            fontFamily: 'initial',
          }}
        >
          AUS
          <span style={{ color: 'yellow'}}>TRALIA</span>
          {` `}
          COVID
          <span style={{
            color: 'red',
          }}>
            19
          </span>
        </Header>
        <Content style={{ marginBottom: '80px' }}>
          <AustraliaContainer />
          <NSWContainer />
        </Content>
        <Footer></Footer>
      </Layout>
    </main>

    <footer>
      
    </footer>
    </div>
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
