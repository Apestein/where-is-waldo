import React, { useState } from "react"
import styles from "./styles/App.module.css"
import bgImg from "./assets/universe-113.jpg"
import { click } from "@testing-library/user-event/dist/click"

function App() {
  const [clicked, setClicked] = useState("")

  function openMenu(e: any) {
    const menu = document.querySelector("template")
    if (menu)
      menu.style.cssText = `
      display: block;
      position: absolute;
      left: ${e.pageX}px;
      top: ${e.pageY}px;
    `
    console.log(e.pageX, e.pageY)
    console.log(e.target)
    setClicked(e.target.className)
  }

  function closeMenu(e: any) {
    const menu = document.querySelector("template")
    const bg = document.querySelector(`.${styles.bg}`)
    if (e.target === bg && menu) menu.style.display = "none"
  }

  function checkLocation(e: any) {
    if (clicked.includes(e.target.textContent.toLowerCase()))
      console.log("correct")
    else console.log("incorrect")
  }

  return (
    <>
      <header></header>
      <main>
        <img
          onClick={closeMenu}
          className={styles.bg}
          src={bgImg}
          alt="bg-img"
        />
        <div onClick={openMenu} className={styles.bowser}></div>
      </main>
      <footer></footer>
      <template>
        <button onClick={checkLocation}>Bowser</button>
        <button onClick={checkLocation}>Knight</button>
      </template>
    </>
  )
}

export default App
