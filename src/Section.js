import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, image, leftButton, rightButton }) {
  return (
    <Wrap bgImage={image}>
      <TextItem>
        <Fade bottom>
          <h1>{title}</h1>
        </Fade>
        <Fade bottom>
          <p>{description}</p>
        </Fade>
      </TextItem>
      <Button>
        <ButtonGroup>
          <Fade left>
            <ButtonLeft>{leftButton}</ButtonLeft>
          </Fade>
          {rightButton && (
            <Fade right>
              <ButtonRight>{rightButton}</ButtonRight>
            </Fade>
          )}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;
  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 15px;
    }
  }
`;

const Button = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonLeft = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  text-transform: uppercase;
  opacity: 0.85;
  font-size: 12px;
  margin: 10px;
`;
const ButtonRight = styled(ButtonLeft)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
