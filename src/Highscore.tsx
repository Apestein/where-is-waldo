import React, { useState } from "react"
import styled from "styled-components"

function Highscore() {
  const [highscores, setHighscores] = useState<string[]>([])

  return (
    <Modal id="highscore">
      <ModalContent>
        <h2>Highscore Leaderboard</h2>
        <ol>
          <li>ADMIN: 00:00:00</li>
        </ol>
      </ModalContent>
    </Modal>
  )
}

export default Highscore

const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
const ModalContent = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;
  font-size: clamp(1rem, 3vw, 2rem);
`
