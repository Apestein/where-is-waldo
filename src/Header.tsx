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

  return (
    <header>
      <H1 onClick={() => window.location.reload()}>Find Them</H1>
      <time>
        {hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}:
        {seconds.toString().padStart(2, 0)}
      </time>
      <button>Cheat</button>
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
  width: 10vw;
`
const H1 = styled.h1`
  cursor: pointer;
  font-size: clamp(1rem, 5vw, 2rem);
`
