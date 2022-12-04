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
      if (bowser) bowser.style.visibility = "visible"
      const yubaba = document.querySelector(
        "div[data-char='yubaba']"
      ) as HTMLElement | null
      if (yubaba) yubaba.style.visibility = "visible"
      const theKnight = document.querySelector(
        "div[data-char='the knight']"
      ) as HTMLElement | null
      if (theKnight) theKnight.style.visibility = "visible"
    } else {
      const cacodemon = document.querySelector(
        "div[data-char='cacodemon']"
      ) as HTMLElement | null
      if (cacodemon) cacodemon.style.visibility = "visible"
      const billCipher = document.querySelector(
        "div[data-char='bill cipher']"
      ) as HTMLElement | null
      if (billCipher) billCipher.style.visibility = "visible"
      const courage = document.querySelector(
        "div[data-char='courage']"
      ) as HTMLElement | null
      if (courage) courage.style.visibility = "visible"
    }
  }

  return (
    <header>
      <H1 onClick={() => window.location.reload()}>Find Them</H1>
      <Time>
        {hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}:
        {seconds.toString().padStart(2, 0)}
      </Time>
      <button onClick={cheat}>Cheat</button>
      <div>
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
      </div>
    </header>
  )
}

export default Header

const Img = styled.img`
  /*   width: min(5vmax, 75px); */
  max-width: 5vmax;
  max-height: 75px;
  width: auto;
  height: auto;
`
const H1 = styled.h1`
  cursor: pointer;
  font-size: clamp(1rem, 5vw, 2rem);
`
const Time = styled.time`
  width: 7ch;
`
