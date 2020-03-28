import Head from 'next/head';
import { Layout } from 'antd';
import { AppHeader } from '../src/components/header';
import { AustraliaContainer } from '../src/components/australia';
import { NSWContainer } from '../src/components/nsw';
import { VICContainer } from '../src/components/victoria';
const { Footer, Content } = Layout;

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
        <AppHeader />
        <Content style={{
          margin: '64px 0 100px'
        }}>
          <AustraliaContainer />
          <NSWContainer />
          <VICContainer />
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
