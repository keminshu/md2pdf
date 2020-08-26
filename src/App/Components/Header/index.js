import React from 'react';
import styled from 'styled-components';
import UploadButton from './Upload.js';
const Header = ({ className }) => {
  return (
    <header className={className + ' no-print'}>
      <p className="project"> md2pdf </p>
      <p className="markdown-mastering-block">
        <a href="https://guides.github.com/features/mastering-markdown/" className="markdown-mastering" target="__blank">markdown指南<sup style={{color:"red"}}>github</sup></a>
      </p>
      <div className="menu">
        <UploadButton className="button upload" />
        <p className="button download" onClick={() => window.print()}>
          <span role="img" aria-label="download">
            🎉
          </span>
          <span>转换</span>
        </p>
      </div>  
    </header>
  );
};

export default styled(Header)`
  * {
    box-sizing: border-box;
  }
  flex-shrink: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  height: 40px;
  .project {
    font-weight: bold;
    margin: 5px;
    flex-shrink: 0;
    height: 20px;
  }
  .markdown-mastering-block {
    margin-left:20px
  }
  .markdown-mastering{
    font-size:0.8em;
    white-space:nowrap;
    text-decoration:none;
  }
  div.menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      height: 80%;
      margin: 0;
      display: flex;
      align-items: center;
      margin-left: 3px;
      border-radius: 3px;
      border: 1px solid black;
      padding: 10px;
      cursor: pointer;
    }
  }

  /* span.author {
    position: fixed;
    bottom: 2px;
    left: 2px;
    opacity: 0.5;
    color: white;
    height: 20px;
    z-index:99;
  } */
  @keyframes dance {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }
`;
