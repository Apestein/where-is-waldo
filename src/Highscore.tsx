import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  getDoc,
} from "firebase/firestore"
import uniqid from "uniqid"

const firebaseConfig = {
  apiKey: "AIzaSyDxSQFNys46hOAOCQ-wzhH1FOKRTT3UYGs",
  authDomain: "where-is-waldo-14d1c.firebaseapp.com",
  projectId: "where-is-waldo-14d1c",
  storageBucket: "where-is-waldo-14d1c.appspot.com",
  messagingSenderId: "252343576534",
  appId: "1:252343576534:web:49fcce430fb9cf9eb5e677",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

function Highscore(props: any) {
  const { hours, minutes, seconds } = props
  const [highscores, setHighscores] = useState<string[]>([])

  function loadHighscores() {
    const hsQuery = query(collection(db, "highscores"), orderBy("time"))
    const unsub = onSnapshot(hsQuery, (snapshot) => {
      const hsList: string[] = []
      snapshot.forEach((doc) => {
        const { username, time } = doc.data()
        hsList.push(`${username}: ${time}`)
      })
      console.log(hsList)
      setHighscores(hsList)
    })
  }

  async function submit(e: any) {
    try {
      const input = document.querySelector("#username") as HTMLInputElement
      const username = input.value ? input.value : null
      if (!username) return
      await addDoc(collection(db, "highscores"), {
        username: username,
        time: `${hours}:${minutes}:${seconds}`,
      })
      //e.target.disabled = true
      loadHighscores()
    } catch (error) {
      console.error("error writing to database", error)
    }
  }

  return (
    <Modal id="highscore">
      <ModalContent>
        <h2>Highscore Leaderboard</h2>
        <Wrapper>
          <Button onClick={submit}>Submit Highscore</Button>
          <Input id="username" placeholder="Username" />
        </Wrapper>
        <ol>
          {highscores.map((score) => (
            <li key={uniqid()}>{score}</li>
          ))}
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: clamp(1rem, 3vw, 2rem);
  max-height: 70%;
  overflow: scroll;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  font-size: 1rem;
  padding: 5px;
`
const Input = styled.input`
  font-size: 1rem;
  height: 37px;
`
