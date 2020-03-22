import Head from 'next/head'
import { ResponsiveLine } from '@nivo/line'
import data from "../data/australia/confirmed.json";

function padDigits(number, digits) {
  return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}
const dateFormat = (date) => {
  const str = date.split('/');
  return `2020-${padDigits(str[0], 2)}-${padDigits(str[1], 2)}`;
};

const LineGraph = ({ data }) => (
  <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        curve='monotoneX'
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day'
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: 'linear',
          stacked: false,
      }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            format: "%Y-%m-%d",
            legend: "day",
            legendOffset: -80,
            legendPosition: "middle"
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'category10' }}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="day"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
);

const Home = ({ confirmed }) => (
  <div className="container">
    <Head>
      <title>Australia COVID-19</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div style={{ height: '400px', width: '900px'}}>
        <LineGraph data={confirmed} />
      </div>
    </main>

    <footer>
      
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:fos,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export async function getStaticProps() { 
//   const { timeline } = data;
//   const nsw = [
//     {id: 'confirmed', color: "hsl(207, 70%, 50%)", data:[]},
//     {id: 'deaths', color: "hsl(257, 70%, 50%)", data:[]},
//     {id: 'recovered', color: "hsl(322, 70%, 50%)", data:[]}
// ]
// const yValues = [];
//   const timelineKey = Object.keys(timeline);
//   timelineKey.forEach((date, index) => {
//     const dFormt = dateFormat(date);
//     nsw[0].data.push({ x: dFormt, y: timeline[date].confirmed});
//     nsw[1].data.push({ x: dFormt, y: timeline[date].deaths});
//     nsw[2].data.push({ x: dFormt, y: timeline[date].recovered});
//     if(index % 4 == 0) {
//       yValues.push(dFormt);
//     }
//   })
  return {
    props: {
      confirmed: data,
    },
  }
}

export default Home
