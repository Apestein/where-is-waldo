import React, { useState, useEffect } from "react"
import styles from "./styles/App.module.css"
import bgImg from "./assets/the-loc-nar.jpg"
import bowserImg from "./assets/bowser.png"
import knightImg from "./assets/the-knight.webp"
import yubabaImg from "./assets/yubaba.png"
import { FaGithub } from "react-icons/fa"
import { useStopwatch } from "react-timer-hook"
import Dialog from "./Dialog"

function App() {
  const [clicked, setClicked] = useState("")
  const [found, setFound] = useState([""])
  const [popupMsg, setPopupMsg] = useState("")
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true })

  useEffect(() => {
    if (found.length === 3) pause()
  }, [found])

  useEffect(() => {
    setTimeout(() => setPopupMsg(""), 3000)
  }, [popupMsg])

  useEffect(() => {
    const dialog = document.querySelector("dialog")
    dialog?.showModal()
    return () => dialog?.close()
  }, [])

  const menu = document.querySelector("template")

  function openMenu(e: any) {
    if (menu)
      menu.style.cssText = `
      display: block;
      position: absolute;
      left: ${e.pageX}px;
      top: ${e.pageY}px;
    `
    setClicked(e.target.dataset.char)
  }

  function closeMenu(e: any) {
    const bg = document.querySelector(`.${styles.bg}`)
    if (e.target === bg && menu) menu.style.display = "none"
  }

  function checkLocation(e: any) {
    const foundBowser = document.querySelector(
      `.${styles.foundBowser}`
    ) as HTMLElement | null
    const foundYubaba = document.querySelector(
      `.${styles.foundYubaba}`
    ) as HTMLElement | null
    const foundKnight = document.querySelector(
      `.${styles.foundKnight}`
    ) as HTMLElement | null

    if (menu) menu.style.display = "none"
    const buttonName = e.target.textContent.toLowerCase()
    if (found.includes(buttonName)) return
    if (clicked === buttonName) {
      setPopupMsg(
        `You found ${clicked.charAt(0).toUpperCase() + clicked.slice(1)}`
      )
      setFound((prev) => [...prev, buttonName])
      if (buttonName === "bowser" && foundBowser)
        foundBowser.style.opacity = "0.5"
      if (buttonName === "yubaba" && foundYubaba)
        foundYubaba.style.opacity = "0.5"
      if (buttonName === "knight" && foundKnight)
        foundKnight.style.opacity = "0.5"
    } else setPopupMsg(`Wrong guess, try again!`)
  }

  return (
    <>
      <header>
        <h1>Find Them</h1>
        <time>
          {hours}:{minutes}:{seconds}
        </time>
        <div>
          <img className={styles.foundBowser} src={bowserImg} alt="bowser" />
          <img className={styles.foundYubaba} src={yubabaImg} alt="yubaba" />
          <img className={styles.foundKnight} src={knightImg} alt="knight" />
        </div>
      </header>
      <main>
        {popupMsg && <h2 className={styles.popup}>{popupMsg}</h2>}
        <img
          onClick={closeMenu}
          className={styles.bg}
          src={bgImg}
          alt="bg-img"
        />
        <div
          onClick={openMenu}
          data-char="bowser"
          className={styles.bowser}
        ></div>
        <div
          onClick={openMenu}
          data-char="yubaba"
          className={styles.yubaba}
        ></div>
        <div
          onClick={openMenu}
          data-char="knight"
          className={styles.knight}
        ></div>
      </main>
      <footer>
        Copyright © 2022 Apestein{" "}
        <FaGithub
          onClick={() => window.open("https://github.com/Apestein", "_blank")}
        />
      </footer>
      <template>
        <button onClick={checkLocation}>Bowser</button>
        <button onClick={checkLocation}>Yubaba</button>
        <button onClick={checkLocation}>Knight</button>
      </template>
      <Dialog />
    </>
  )
}

export default App
