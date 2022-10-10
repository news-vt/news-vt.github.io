/**
 * Helpful guide for scraping Google Scholar: https://hackernoon.com/scrape-google-scholar-results-with-nodejs-unirest-and-cheerio
 * Example scraping API with SerpAPI: https://serpapi.com/google-scholar-author-api
 */
import { load } from 'cheerio'

import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const GOOGLE_SCHOLAR_URL = serverRuntimeConfig.GOOGLE_SCHOLAR_URL || publicRuntimeConfig.GOOGLE_SCHOLAR_URL;
console.log(`GOOGLE_SCHOLAR_URL="${GOOGLE_SCHOLAR_URL}"`)


export type Article = {
    title: string;
    link: string;
    authors: string[];
    publication: string;
    cited_by: string;
    year: string;
}

export type Author = {
    name: string;
    position: string;
    email: string;
    departments: string;
}

export type CitationStatisticEntry = {
    all: string;
    since_2017: string;
}

export type CitationStatisticTableEntry = {
    citations?: CitationStatisticEntry;
    h_index?: CitationStatisticEntry;
    i_index?: CitationStatisticEntry;
}

export type CitationGraphEntry = {
    year: number;
    citations: number;
}

export type CitedBy = {
    table: CitationStatisticTableEntry[];
    graph: CitationGraphEntry[];
}

export type ProfileData = {
    author: Author;
    articles: Article[];
    cited_by: CitedBy;
}

export const fetchAuthorProfileData = async (author_id: string, pagesize: number = 10, cstart: number = 0): Promise<ProfileData> => {

    // Setup URL with query parameters.
    const params = new URLSearchParams({
        hl: 'en',
        user: author_id, //'kYDNA0UAAAAJ',
        oi: 'ao',
        cstart: JSON.stringify(cstart),
        pagesize: JSON.stringify(pagesize),
    });
    // const url = `https://scholar.google.com/citations?${params}`
    const url = `${GOOGLE_SCHOLAR_URL}/citations?${params}`

    // Fetch from URL.
    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        },
        mode: 'cors',
    })

    // Extract body of response.
    const body = await res.text();
    const selector = load(body);

    // Get author information.
    const author: Author = {
        name: selector("#gsc_prf_in").text(),
        position: selector("#gsc_prf_inw+ .gsc_prf_il").text(),
        email: selector("#gsc_prf_ivh").text(),
        departments: selector("#gsc_prf_int").text(),
    }

    // Get articles.
    const sel_art_info = selector('.gsc_a_t');
    const sel_art_citeby = selector('.gsc_a_c').toArray();
    const sel_art_year = selector('.gsc_a_y').toArray();
    const articles: Article[] = sel_art_info.map((i,elm) => {
        const art: Article = {
            title: selector(elm).find('.gsc_a_at').text(),
            link: "https://scholar.google.com" + selector(elm).find(".gsc_a_at").attr("href"),
            authors: selector(elm).find(".gsc_a_at+ .gs_gray").text().split(', '),
            publication: selector(elm).find(".gs_gray+ .gs_gray").text(),
            cited_by: selector(sel_art_citeby[i]).find(".gs_ibl").text(),
            year: selector(sel_art_year[i]).find(".gs_ibl").text(),
        }
        // Only return elements that have a title element.
        if (art.title !== '') {
            return art
        }
    }).toArray();

    // Get citation graph.
    const graph_spans = selector("#gsc_rsb_cit > div > div.gsc_md_hist_w > div > span")
    const graph_a = selector("#gsc_rsb_cit > div > div.gsc_md_hist_w > div > a > span")
    const graph: CitationGraphEntry[] = graph_spans.map((i, elm) => {
        return {
            year: Number(selector(elm).text()),
            citations: Number(selector(graph_a.toArray()[i]).text()),
        }
    }).toArray()

    // Get citation statistics.
    const cited_by: CitedBy = {
        table: [
            {
                citations: {
                    all: selector("tr:nth-child(1) .gsc_rsb_sc1+ .gsc_rsb_std").text(),
                    since_2017: selector("tr:nth-child(1) .gsc_rsb_std+ .gsc_rsb_std").text(),
                }
            },
            {
                    h_index: {
                    all: selector("tr:nth-child(2) .gsc_rsb_sc1+ .gsc_rsb_std").text(),
                    since_2017: selector("tr:nth-child(2) .gsc_rsb_std+ .gsc_rsb_std").text(),
                }
            },
            {
                    i_index: {
                    all: selector("tr~ tr+ tr .gsc_rsb_sc1+ .gsc_rsb_std").text(),
                    since_2017: selector("tr~ tr+ tr .gsc_rsb_std+ .gsc_rsb_std").text(),
                }
            },
        ],
        graph: graph,
    };

    return {
        author: author,
        articles: articles,
        cited_by: cited_by,
    }
}