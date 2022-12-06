import React, { useState, useEffect } from "react"
import styles from "./styles/App.module.css"
import { FaGithub } from "react-icons/fa"
import { useStopwatch } from "react-timer-hook"
import Modal from "./Modal"
import Header from "./Header"
import Main from "./Main"
import Template from "./Template"
import Highscore from "./Highscore"

function App() {
  const [map, setMap] = useState("the-loc-nar")
  const [clicked, setClicked] = useState("")
  const [found, setFound] = useState<string[]>([])
  const [popupMsg, setPopupMsg] = useState("")
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false })

  useEffect(() => {
    if (found.length === 3) {
      pause()
      const highscore = document.querySelector(
        "#highscore"
      ) as HTMLElement | null
      if (highscore) highscore.style.display = "block"
    }
  }, [found])

  useEffect(() => {
    setTimeout(() => setPopupMsg(""), 3000)
  }, [popupMsg])

  function checkLocation(e: any) {
    const menu = document.querySelector("template")
    const char1 = document.querySelector("#char1") as HTMLElement | null
    const char2 = document.querySelector("#char2") as HTMLElement | null
    const char3 = document.querySelector("#char3") as HTMLElement | null

    if (menu) menu.style.display = "none"
    const buttonName = e.target.textContent.toLowerCase()
    if (found.includes(buttonName)) return
    if (clicked === buttonName) {
      setPopupMsg(
        `You found ${clicked
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}`
      )
      setFound((prev) => [...prev, buttonName])
      if (buttonName === "bowser" && char1) char1.style.opacity = "0.5"
      if (buttonName === "yubaba" && char2) char2.style.opacity = "0.5"
      if (buttonName === "the knight" && char3) char3.style.opacity = "0.5"
      //map2
      if (buttonName === "cacodemon" && char1) char1.style.opacity = "0.5"
      if (buttonName === "bill cipher" && char2) char2.style.opacity = "0.5"
      if (buttonName === "courage" && char3) char3.style.opacity = "0.5"
    } else setPopupMsg(`Wrong guess, try again!`)
  }

  return (
    <>
      <Header map={map} hours={hours} minutes={minutes} seconds={seconds} />
      <Main map={map} popupMsg={popupMsg} setClicked={setClicked} />
      <footer>
        Copyright © 2022 Apestein{" "}
        <FaGithub
          onClick={() => window.open("https://github.com/Apestein", "_blank")}
        />
      </footer>
      <Template map={map} checkLocation={checkLocation} />
      <Modal map={map} setMap={setMap} startTimer={start} />
      <Highscore hours={hours} minutes={minutes} seconds={seconds} />
    </>
  )
}

export default App
