import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import rtd_logo from './readthedocs.png';
import github_logo from './GitHub_Logo.png';
import dh_logo from './DockerHub_Logo.png';
import PacificaHeader from './Header';

const source_columns = [{
    Header: 'Project Name',
    accessor: 'name'
  },{
    Header: 'Source Code',
    accessor: 'github_url',
    Cell: row => (
      <div>
        <a href={row.value}>
        <img src={github_logo} alt="GitHub" style={{ width: '100px' }} />
        </a>
      </div>
    )
}]

const container_columns = [{
    Header: 'Project Name',
    accessor: 'name'
  },{
    Header: 'Docker Containers',
    accessor: 'container_urls',
    Cell: row => {
        if(row.value === undefined) {
          return (
            <div>
              <p>No Docker Containers Exist.</p>
            </div>
          )
        } else {
            return (
              row.value.map((value) =>
                <div>
                  <a href={value.url} key={value.key}>
                    <img src={dh_logo} alt={`Docker Hub ${value.name}`} style={{ width: '100px' }} />
                  </a>
                </div>
              )
            )
        }
    }
}]
const docs_columns = [{
    Header: 'Project Name',
    accessor: 'name'
  },{
    Header: 'Documentation',
    accessor: 'readthedocs_url',
    Cell: row => (
      <div>
        <a href={row.value}>
        <img src={rtd_logo} alt="Read the Docs" style={{ width: '150px', backgroundColor: '#505050' }} />
        </a>
      </div>
    )
}]

const data = [{
    name: 'Pacifica Archive Interface',
    github_url: 'https://github.com/pacifica/pacifica-archiveinterface',
    readthedocs_url: 'https://pacifica-archiveinterface.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-archiveinterface/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/archiveinterface',
        key: 'archivei',
        name: 'Archive Interface',
    }]
  },{
    name: 'Pacifica Data Cartd',
    github_url: 'https://github.com/pacifica/pacifica-cartd',
    readthedocs_url: 'https://pacifica-cartd.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-cartd/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/cartd-frontend',
        key: 'cartdfrontend',
        name: 'Cartd Frontend',
      },{
        url: 'https://hub.docker.com/r/pacifica/cartd-backend',
        key: 'cartdbackend',
        name: 'Cartd Backend',
    }]
  },{
    name: 'Pacifica Command Line Interface',
    github_url: 'https://github.com/pacifica/pacifica-cli',
    readthedocs_url: 'https://pacifica-cli.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-cli/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/cli',
        key: 'cli',
        name: 'Command Line',
    }]
  },{
    name: 'Pacifica Python Downloader',
    github_url: 'https://github.com/pacifica/pacifica-python-downloader',
    readthedocs_url: 'https://pacifica-downloader.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-downloader/'
  },{
    name: 'Pacifica Data Ingest',
    github_url: 'https://github.com/pacifica/pacifica-ingest',
    readthedocs_url: 'https://pacifica-ingest.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-ingest/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/ingest-frontend',
        key: 'ingestfrontend',
        name: 'Ingest Frontend',
      },{
        url: 'https://hub.docker.com/r/pacifica/ingest-backend',
        key: 'ingestbackend',
        name: 'Ingest Backend',
    }]
  },{
    name: 'Pacifica Metadata Store',
    github_url: 'https://github.com/pacifica/pacifica-metadata',
    readthedocs_url: 'https://pacifica-metadata.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-metadata/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/metadata',
        key: 'metadata',
        name: 'Metadata'
    }]
  },{
    name: 'Pacifica Cloud Events Notifications',
    github_url: 'https://github.com/pacifica/pacifica-notifications',
    readthedocs_url: 'https://pacifica-notifications.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-notifications/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/notifications-frontend',
        key: 'notifyfrontend',
        name: 'Notifications Frontend',
      },{
        url: 'https://hub.docker.com/r/pacifica/notifications-backend',
        key: 'notifybackend',
        name: 'Notifications Backend'
    }]
  },{
    name: 'Pacifica Institutional Policy Engine',
    github_url: 'https://github.com/pacifica/pacifica-policy',
    readthedocs_url: 'https://pacifica-policy.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-policy/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/policy',
        key: 'policy',
        name: 'Policy',
    }]
  },{
    name: 'Pacifica Data Proxy',
    github_url: 'https://github.com/pacifica/pacifica-proxy',
    readthedocs_url: 'https://pacifica-proxy.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-proxy/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/proxy',
        key: 'proxy',
        name: 'Proxy',
    }]
  },{
    name: 'Pacifica Unique Identifier Service',
    github_url: 'https://github.com/pacifica/pacifica-uniqueid',
    readthedocs_url: 'https://pacifica-uniqueid.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-uniqueid/',
    container_urls: [{
        url: 'https://hub.docker.com/r/pacifica/uniqueid',
        key: 'uniqueid',
        name: 'UniqueID',
    }]
  },{
    name: 'Pacifica Python Uploader',
    github_url: 'https://github.com/pacifica/pacifica-python-uploader',
    readthedocs_url: 'https://pacifica-uploader.readthedocs.io',
    pypi_url: 'https://pypi.org/project/pacifica-uploader/',
}]

class PacificaDocs extends Component {
    render() {
        return (
            <div>
              <PacificaHeader header="Get Pacifica" />
              <h2 className="subtitle">
                <a id="source" className="anchor" aria-hidden="true" href="#source">
                  <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
                </a>
                Get the Source
              </h2>
              <ReactTable
                data={data}
                columns={source_columns}
                showPagination={false}
                defaultPageSize={data.length}
              />
              <h2 ref="container" className="subtitle">
                <a id="container" className="anchor" aria-hidden="true" href="#container">
                  <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
                </a>
                Get Containers
              </h2>
              <ReactTable
                data={data}
                columns={container_columns}
                showPagination={false}
                defaultPageSize={data.length}
              />
              <h2 ref="docs" className="subtitle">
                <a id="docs" className="anchor" aria-hidden="true" href="#docs">
                  <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
                </a>
                Documentation
              </h2>
              <ReactTable
                data={data}
                columns={docs_columns}
                showPagination={false}
                defaultPageSize={data.length}
              />
            </div>
        )
    }
}

export default PacificaDocs;
