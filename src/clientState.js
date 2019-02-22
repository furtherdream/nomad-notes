// 클라이언트 스테이트에서 할 첫번째는 기본이 되는 것을 정함
export const defaults = {
  notes: [] // 노트 Array 끝!!
}
export const typeDefs = [
  // 두 번째 할 일은 type Definitions를 정하는 것
  // 기본적으로 우리의 스키마가 어떤 형태인지 보여주는 것 - 크래프큐엘 표기법으로 작성

  // schema : 그래프 큐엘과 통신하는 곳 - 쿼리, 뮤테이션, 리턴
  // 우리는 스키마가 Documentation Explorer에서 사용할 수 있기를 원함
  `
    schema {             
        query: Query
        mutation: Mutation
    }
    type Query{
        notes: [Note]!
        note(id: Int!): Note
    }
    type Mutation {
        createNote(title: String!, content: String!)
        editNote(id: String!, title: String, content: String!)
    }
    type Note{
        id: Int!
        title: String!
        content: String!
    }
    `
]
export const resolvers = {
  Query: {
    notes: () => true
  }
}
