import React from "react"
import bowserImg from "./assets/bowser.png"
import knightImg from "./assets/the-knight.webp"
import yubabaImg from "./assets/yubaba.png"
import cacodemonImg from "./assets/cacodemon.png"
import billCipherImg from "./assets/bill-cipher.png"
import courageImg from "./assets/courage.png"
import styled from "styled-components"

function Header(props: any) {
  const { map, hours, minutes, seconds } = props

  function cheat() {
    if (map === "the-loc-nar") {
      const bowser = document.querySelector(
        "div[data-char='bowser']"
      ) as HTMLElement | null
      if (bowser) bowser.style.cssText = "outline: 3px solid red"
      const yubaba = document.querySelector(
        "div[data-char='yubaba']"
      ) as HTMLElement | null
      if (yubaba) yubaba.style.cssText = "outline: 3px solid red"
      const theKnight = document.querySelector(
        "div[data-char='the knight']"
      ) as HTMLElement | null
      if (theKnight) theKnight.style.cssText = "outline: 3px solid red"
    } else {
      const cacodemon = document.querySelector(
        "div[data-char='cacodemon']"
      ) as HTMLElement | null
      if (cacodemon) cacodemon.style.cssText = "outline: 3px solid red"
      const billCipher = document.querySelector(
        "div[data-char='bill cipher']"
      ) as HTMLElement | null
      if (billCipher) billCipher.style.cssText = "outline: 3px solid red"
      const courage = document.querySelector(
        "div[data-char='courage']"
      ) as HTMLElement | null
      if (courage) courage.style.cssText = "outline: 3px solid red"
    }
  }

  return (
    <header>
      <H1 onClick={() => window.location.reload()}>Find Them</H1>
      <Time>
        {hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}:
        {seconds.toString().padStart(2, 0)}
      </Time>
      <Button onClick={cheat}>
        <span className="rainbow-text">Cheat</span>
      </Button>
      <FoundWrapper>
        {map === "the-loc-nar" ? (
          <>
            <Img id="char1" src={bowserImg} alt="bowser" />
            <Img id="char2" src={yubabaImg} alt="yubaba" />
            <Img id="char3" src={knightImg} alt="knight" />
          </>
        ) : (
          <>
            <Img id="char1" src={cacodemonImg} alt="cacodemon" />
            <Img id="char2" src={billCipherImg} alt="bill-cipher" />
            <Img id="char3" src={courageImg} alt="courage" />
          </>
        )}
      </FoundWrapper>
    </header>
  )
}

export default Header

const Img = styled.img`
  max-width: 10vw;
  max-height: 75px;
  width: auto;
  height: auto;
`
const H1 = styled.h1`
  cursor: pointer;
  font-size: clamp(1rem, 5vw, 2rem);
`
const Time = styled.time`
  width: 6.5ch;
  font-size: clamp(1rem, 2vw, 2rem);
`
const Button = styled.button`
  font-size: clamp(0.75rem, 2vw, 2rem);
  padding: 5px;
  border-radius: 10px;
`
const FoundWrapper = styled.div`
  min-width: fit-content;
`
