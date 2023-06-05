import React from 'react'
import { Link } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
      <Link to="/todo">투두리스트</Link>
    </div>
  )
}
