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
      <Layout style={{
        backgroundColor: 'white'
      }}>
        <Header
          style={{
            fontSize: '20px',
            color: '#001529',
            fontFamily: 'initial',
            backgroundColor: 'white'
          }}
        >
          AUS
          <span style={{ color: '#ffd700'}}>TRALIA</span>
          {` `}
          COVID
          <span style={{
            color: 'red',
          }}>
            19
          </span>
        </Header>
        <Content style={{ marginBottom: '100px' }}>
          <AustraliaContainer />
          <NSWContainer />
        </Content>
        <Footer
          style={{backgroundColor: 'white'}}
        ></Footer>
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
