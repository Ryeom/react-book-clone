import React from "react"
import { Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import PostListPage from "./pages/PostListPage"
import PostPage from "./pages/RegisterPage"
import RegisterPage from "./pages/RegisterPage"
import WritePage from "./pages/WritePage"

function App() {
  return (
    <>
      <Route component={PostListPage} path={[`/@:username`, `/`]} exact />
      {/* 위 path에 배열을 넣어주면 한 route 컴포넌트에 여러개의 경로를 쉽게 설정가능 */}
      <Route component={LoginPage} path={`/login`} />
      <Route component={RegisterPage} path={`/register`} />
      <Route component={WritePage} path={`/write`} />
      <Route component={PostPage} path={`/@:username/:postId`} />
    </>
  )
}

export default App
