import React from "react";
import styled from "styled-components";

function RUles() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <ul>
          <li>Select any number</li>

          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #9f9f9f;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 34px;
  }
  ul{
    font-size:20px
  }
  .text {
    margin-top: 24px;
  }
`;

export default RUles;
