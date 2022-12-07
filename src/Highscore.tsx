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
  const { hours, minutes, seconds, map } = props
  const mapCollection = map === "the-loc-nar" ? "map1" : "map2"
  let scoreID = ""

  const [highscores, setHighscores] = useState<
    { username: string; time: string; id: string }[]
  >([])

  function loadHighscores() {
    const hsQuery = query(collection(db, mapCollection), orderBy("time"))
    const unsub = onSnapshot(hsQuery, (snapshot) => {
      const hsList: { username: string; time: string; id: string }[] = []
      snapshot.forEach((doc) => {
        const { username, time, id } = doc.data()
        hsList.push({ username, time, id })
      })
      setHighscores(hsList)
    })
  }

  async function submit(e: any) {
    try {
      const input = document.querySelector("#username") as HTMLInputElement
      const username = input.value ? input.value : null
      if (!username) return
      const hoursPad = hours.toString().padStart(2, 0)
      const minutesPad = minutes.toString().padStart(2, 0)
      const secondsPad = seconds.toString().padStart(2, 0)
      const id = uniqid()
      await addDoc(collection(db, mapCollection), {
        username: username,
        time: `${hoursPad}:${minutesPad}:${secondsPad}`,
        id: id,
      })
      scoreID = id
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
        <Ul>
          {highscores.map((score, index) => {
            if (index < 10)
              return (
                <li key={score.id}>
                  {index + 1}. {score.username}: {score.time}
                </li>
              )
            else if (index === highscores.findIndex((e) => e.id === scoreID))
              return (
                <>
                  <li>...</li>
                  <li key={score.id}>
                    {index + 1}. {score.username}: {score.time}
                  </li>
                </>
              )
          })}
        </Ul>
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
  min-width: 80%;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  font-size: 1rem;
  padding: 5px;
  min-width: fit-content;
`
const Input = styled.input`
  font-size: 1rem;
  height: 37px;
  width: min(50%, 200px);
`
const Ul = styled.ul`
  list-style-type: none;
`
