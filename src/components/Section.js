import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade"

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage = {backgroundImg}>
        <Fade bottom top>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
                <ButtonGroup>
                    <Fade left >
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    </Fade>
                    {rightBtnText && 
                    <Fade left>
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    </Fade>    
                    }
                </ButtonGroup>
         

            <DownArrow src = "/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
   
`
const Buttons = styled.div`
`

const ButtonGroup = styled.div`
    display: flex;
    margin: 30px;
    @media (max-width:786px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    margin: 8px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    opacity: 0.90;
    font-size: 12px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
`
