import React from 'react'
import { render } from 'react-dom'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'

import 'graphiql/graphiql.css'
import './styles.sass'

const graphQLFetcher = (graphQLParams) => {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
    credentials: 'include',
  }).then(response => response.json());
}

render(
  <GraphiQL fetcher={graphQLFetcher} />,
  document.getElementById("graphiql")
)
