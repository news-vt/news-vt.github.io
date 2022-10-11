import { useEffect, useState } from "react";
import { Article, fetchAuthorProfileData, ProfileData } from "../../lib/google-scholar";
import { Chart, Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    LineController,
    BarController,
    Title,
    Tooltip,
    Legend,
    Ticks,
  } from 'chart.js';

// ChartJS.defaults.font = {
//     family: "Arial",
// };
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    LineController,
    BarController,
    Title,
    Tooltip,
    Legend
);


type PublicationsDemoProps = {
    authorProfileData: ProfileData;
}

export default function PublicationsDemo({ authorProfileData }: PublicationsDemoProps) {

    // TODO fetching from client causes CORS error.
    // const [authorProfileData, setAuthorProfileData] = useState<ProfileData>();
    // useEffect(() => {
    //     const getAuthorProfileData = async () => {
    //         const apd = await fetchAuthorProfileData('kYDNA0UAAAAJ');
    //         setAuthorProfileData(apd);
    //     }
    //     getAuthorProfileData();
    // }, []);

    const chart_options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            display: false,
          },
          title: {
            display: true,
            text: 'Cited by',
          },
        },
        // scales: {
        //     x: { display: true },
        //     y: { display: true },
        // },
        // scales: {
        //     y: {
        //         ticks: {
        //             callback: (value: any, index: number, ticks: any[]) => Ticks.formatters.numeric.apply((this), [value, index, ticks]),
        //         },
        //         // ticks: {
        //         //   callback: (val: any, index: any) => {
        //         //       return this.getLabelForValue(Number(val));
        //         //   },
        //         // }
        //     }
        // },
      };
    const chart_labels = authorProfileData.cited_by.graph.map((item, index) => item.year)
    // const chart_labels = [0]
    const chart_data = {
        labels: chart_labels,
        datasets: [{
            label: "Cited By",
            // display: false,
            // data: [5],
            data: authorProfileData.cited_by.graph.map((item, index) => ({
                x: item.year,//item.year.toLocaleString('en-US', {minimumFractionDigits: 1, maximumFractionDigits: 2}),//.toLocaleString('en-us'),
                y: item.citations,//item.citations.toLocaleString('en-US', {minimumFractionDigits: 1, maximumFractionDigits: 2}),//.toLocaleString('en-us'),
            })),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
            //   borderWidth: 1,
        }],
    };

    console.log(JSON.stringify(chart_data, null, 4))

    const renderArticle = (article: Article, key: any) => {
        return (<a key={key} href={article.link} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{article.title}</h5>
                <small>{article.year}</small>
            </div>
            <p className="mb-1">{article.authors.join(', ')}</p>
            <p className="mb-1">{article.publication}</p>
        </a>);
    }

    return (
        <>
        <div>
            <h1>Citation Statistics</h1>
            {/* <Bar data={chart_data} options={chart_options} /> */}
            {/* <Bar datasetIdKey='id' data={chart_data} /> */}
            {/* <Chart type='bar' data={chart_data} /> */}
            <Line
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                    {
                        // id: 1,
                        label: '',
                        data: [5, 6, 7],
                    },
                    {
                        // id: 2,
                        label: '',
                        data: [3, 2, 1],
                    },
                    ],
                }}
                />
        </div>
        <div>
            <h1>Google Scholar Articles for {authorProfileData?.author.name} ({authorProfileData?.articles.length} total)</h1>
            <div className="list-group">
                {authorProfileData?.articles.map((article, index) => renderArticle(article, index))}
            </div>
        </div>
        </>
    );
}

export async function getStaticProps() {
    const authorProfileData = await fetchAuthorProfileData('kYDNA0UAAAAJ'); // Walid Saad.
    return {
        props: {
            authorProfileData: authorProfileData,
        }
    };
}