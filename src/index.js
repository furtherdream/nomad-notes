import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import App from "./App"
import client from "./apollo"
import "./globalStyles"

// 우리 앱을 리액트돔을 렌더하기 위해서 아폴로 프로바이더를 사용함
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)
