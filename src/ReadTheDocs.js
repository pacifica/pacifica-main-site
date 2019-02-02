import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import rtd_logo from './readthedocs.png';
import github_logo from './GitHub_Logo.png';

const columns = [{
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
    readthedocs_url: 'https://pacifica-archiveinterface.readthedocs.io'
  },{
    name: 'Pacifica Data Cartd',
    github_url: 'https://github.com/pacifica/pacifica-cartd',
    readthedocs_url: 'https://pacifica-cartd.readthedocs.io'
  },{
    name: 'Pacifica Command Line Interface',
    github_url: 'https://github.com/pacifica/pacifica-cli',
    readthedocs_url: 'https://pacifica-cli.readthedocs.io'
  },{
    name: 'Pacifica Python Downloader',
    github_url: 'https://github.com/pacifica/pacifica-python-downloader',
    readthedocs_url: 'https://pacifica-downloader.readthedocs.io'
  },{
    name: 'Pacifica Data Ingest',
    github_url: 'https://github.com/pacifica/pacifica-ingest',
    readthedocs_url: 'https://pacifica-ingest.readthedocs.io'
  },{
    name: 'Pacifica Metadata Store',
    github_url: 'https://github.com/pacifica/pacifica-metadata',
    readthedocs_url: 'https://pacifica-metadata.readthedocs.io'
  },{
    name: 'Pacifica Cloud Events Notifications',
    github_url: 'https://github.com/pacifica/pacifica-notifications',
    readthedocs_url: 'https://pacifica-notifications.readthedocs.io'
  },{
    name: 'Pacifica Institutional Policy Engine',
    github_url: 'https://github.com/pacifica/pacifica-policy',
    readthedocs_url: 'https://pacifica-policy.readthedocs.io'
  },{
    name: 'Pacifica Data Proxy',
    github_url: 'https://github.com/pacifica/pacifica-proxy',
    readthedocs_url: 'https://pacifica-proxy.readthedocs.io'
  },{
    name: 'Pacifica Unique Identifier Service',
    github_url: 'https://github.com/pacifica/pacifica-uniqueid',
    readthedocs_url: 'https://pacifica-uniqueid.readthedocs.io'
  },{
    name: 'Pacifica Python Uploader',
    github_url: 'https://github.com/pacifica/pacifica-python-uploader',
    readthedocs_url: 'https://pacifica-uploader.readthedocs.io'
}]

class PacificaDocs extends Component {
    render() {
        return (
            <div>
              <h1>Pacifica Source Code Documentation</h1>
              <Link to='/'>Home</Link>
              <ReactTable
                data={data}
                columns={columns}
                showPagination={false}
                defaultPageSize={data.length}
              />
            </div>
        )
    }
}

export default PacificaDocs;
