// Register plugins.
// require('@citation-js/plugin-bibtex')
// require('@citation-js/plugin-csl')
import PluginCSL from '@citation-js/plugin-csl'
import PluginBibtex from '@citation-js/plugin-bibtex'

// Description of output formats: https://github.com/larsgw/citation.js/blob/main/docs/output_formats.md
import {Cite} from '@citation-js/core'

import fs from 'fs'


export default function BibtexDemo({ bibtex }) {

    // Generate bibliography from BibTex file contents.
    const bib = new Cite(bibtex);


    const downloadSource = (index) => {

        // Get source located at index and dump to necessary formats.
        const cite = new Cite(bib.data[index]);
        const json = cite.format('biblatex', { type: 'object'})[0]
        const outstring = cite.format('biblatex', { type: 'text'});

        // Create file and download.
        const element = document.createElement("a");
        const file = new Blob([outstring], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = `${json.label}.bib`; // Name of file.
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    const renderSource = (source, index) => {
        const nc = new Cite([source]);
        const json = nc.format('biblatex', { type: 'object'})[0]
        console.log(`[${index}] JSON: ${JSON.stringify(json)}`)
        const html = nc.format('bibliography', { 
            type: 'text',
            lang: 'en-US',
            template: 'apa',
            format: 'html',
        })
        console.log(`[${index}] HTML: ${JSON.stringify(html)}`)
        return (
            <div key={index} href={json.properties.url} className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h3 className="m-3">[{index+1}]</h3>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    <a className="p-3" href="#" onClick={() => downloadSource(index)}>BibLaTeX</a>
                    <a className="p-3" href={json.properties.url}>URL</a>
                </div>
        </div>
        );
    }

    console.log(`typeof bib: ${typeof bib}`)
    console.log(`bib.data: ${JSON.stringify(bib.data)}`)

    return (
        <div className="m-5">
            <h1>BibTex Demo</h1>
            <div className="list-group">
                {(typeof bib !== 'undefined') ? bib.data.map(renderSource) : null}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            bibtex: fs.readFileSync('public/references.bib').toString(),
        }
    };
}