import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { withClientState } from "apollo-link-state"
import { ApolloLink } from "apollo-link"

import { typeDefs, defaults, resolvers } from "./clientState"

// 캐시 오브젝트를 만들어준다
// 아폴로 부스트를 쓰면 자동으로 되지만 수동으로 해보자
// 인터넷 api 온라인 부분은 빼고
const cache = new InMemoryCache()

// 링크로 이름을 짓는 이유
// 기본적으로 아폴로는 모든 명령어은 링크됨 ( HTTP LINK , ERROR LINK , STATE LINK 등등)
const stateLink = withClientState({
  // 설정이 필요함
  // 이 부분에 앱에 필요한 모든 로직을 적어넣음 : 클라이언트 스테이트를 만들어보자
  cache,
  typeDefs, // 클라이언트 스테이트파일에서 가져옴
  defaults, // 클라이언트 스테이트파일에서 가져옴
  resolvers // 클라이언트 스테이트파일에서 가져옴
})

const client = new ApolloClient({
  // 캐쉬를 갖고,
  // HTTP 링크를 만들어야 되야함, ERROR 링크와 같이, subscription을 사용할 웹소캣 링크을 넣거나
  // 아니면 전부를 넣거나
  cache,
  link: ApolloLink.from([stateLink])
})

export default client
