import React, { Component } from 'react';
import PacificaHeader from './Header';
import Mermaid from 'react-mermaid';
import "./About.css";


class PacificaAbout extends Component {
    render() {
        return (
            <div>
              <PacificaHeader header="About Pacifica" />
              <h2 className="subtitle">History</h2>
              <p>
                Pacifica started life after several iterations of data management
                systems at the Environmental Molecular Science Laboratory
                (<a href="https://www.emsl.pnl.gov">EMSL</a>). Pacifica was then
                migrated institutionally to Pacific Northwest National Laboratory
                as <a href="https://datahub.pnnl.gov">DataHub</a>.
              </p>
              <h2 className="subtitle">The Problem</h2>
              <p>
                Many United States government agencies have data sharing guidence and
                policies that talk about how important sharing is. The policies descibe
                how data sharing improves the speed of research, translating results
                into knowledge. However, these agencies are not providing software and
                resources to achieve these goals.
              </p>
              <p>
                Without any concret tools or resources to meet these policies it is up
                to the institutions (universities and national laboratories) to find
                a cost effective solution. This presents additional problems as a single
                institution often does research in many domains.
              </p>
              <p>
                There are many other facets to the data management problem at an
                institutional level. These include validation, search, administration,
                deligation, policy and trust. Each facet is a sizable software system
                to solve correctly and needs to integrate with the other facets to
                provide a total data management solution.
              </p>
              <h2 className="subtitle">Features</h2>
              <p>
                Pacifica is designed as a set of <a
                href="https://www.python.org">Python</a> <a
                href="https://en.wikipedia.org/wiki/Representational_state_transfer">REST
                </a> services that focus on specific parts of the institutional data
                management problem. These services are open source supported by <a
                href="https://github.com/pacifica">GitHub</a> and distributed by <a
                href="https://pypi.org">PyPI</a> and <a
                href="https://hub.docker.com/u/pacifica">Docker Hub</a>.
              </p>
              <p>
                Pacifica has tracked the data management problem from inception through
                dissemination. Pacifica provides tools on the frontend to upload, ingest
                and archive data, capturing metadata along the way when it is most
                convenient. Pacifica also provides tools to notifiy, stage and search
                data and metadata it stores.
              </p>
              <div className="mermaid">
                <Mermaid name="diagram">
                    graph LR;
                      A(Data Source) --> B[Uploader];
                      B --> C[Ingest];
                      C --> D[Archive];
                      C --> E[Metadata];
                      D --> F[Staging];
                      E --> G[Search];
                      E --> H[Notify];
                </Mermaid>
              </div>
            </div>
        )
    }
}

export default PacificaAbout;
