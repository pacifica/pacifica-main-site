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
    Cell: row => (
      <div>
        {row.value && row.value.map((value) =>
          <a href={value.url} key={value.key}>
          <img src={dh_logo} alt={`Docker Hub ${value.name}`} style={{ width: '150px' }} />
          </a>
        )}
      </div>
    )
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
              <h2 ref="source" className="subtitle">Get the Source</h2>
              <ReactTable
                data={data}
                columns={source_columns}
                showPagination={false}
                defaultPageSize={data.length}
              />
              <h2 ref="container" className="subtitle">Get Containers</h2>
              <ReactTable
                data={data}
                columns={container_columns}
                showPagination={false}
                defaultPageSize={data.length}
              />
              <h2 ref="docs" className="subtitle">Documentation</h2>
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
