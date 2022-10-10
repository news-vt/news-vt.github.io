import { useEffect, useState } from "react";
import { Article, fetchAuthorProfileData, ProfileData } from "../../lib/google-scholar";



export default function Publications() {

    const [authorProfileData, setAuthorProfileData] = useState<ProfileData>();

    useEffect(() => {
        const getAuthorProfileData = async () => {
            const apd = await fetchAuthorProfileData('kYDNA0UAAAAJ');
            setAuthorProfileData(apd);
        }
        getAuthorProfileData();
    }, []);

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
        <div className="m-5">
            <h1>Google Scholar Articles for {authorProfileData?.author.name} ({authorProfileData?.articles.length} total)</h1>
            <div className="list-group">
                {authorProfileData?.articles.map((article, index) => renderArticle(article, index))}
            </div>
        </div>
    );
}