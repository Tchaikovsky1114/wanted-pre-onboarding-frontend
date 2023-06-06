import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';

const StyledVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: fill;
  position: absolute;
  top: 0;
  left:0;
  z-index: -1;
  opacity: 0.68;

`;
const RNB = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: auto;
  padding: 0px 12px;
  gap: 3rem;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #2d63e2;
      text-decoration: underline;
      transition: 0.5s;
    }
  }
`
const Center = styled.div`
  width:100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  div:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
    width: fit-content;
    box-shadow: 2px 2px 2px aliceblue;
    font-family: sans-serif;
    letter-spacing: 0.1rem;
    font-size: 3rem;
    border: 1px solid #fff;
    text-align:center;
    white-space: pre-wrap;
    color: #fff;
    padding: 2.4rem;
    border-radius: 0.75rem;
    span {
      color: #2d63e2;
      text-decoration: underline;
      text-underline-offset: 0.25rem;
      
    }
  }
  }
`

export default function Root() {
  return (
    <>
      <StyledVideo
      src="assets/main-video.mp4"
      autoPlay={true}
      loop={true}
      muted={true}
       />
      <Center>
        <div>
        <h1><span>WANTED</span>에서 {'\n'} 오늘의 기록을 {'\n'} 남겨보세요!</h1>
        </div>
      <RNB>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
      <Link to="/todo">투두리스트</Link>
      </RNB>
      </Center>
    </>
  )
}
