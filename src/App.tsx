import React, { useState } from "react"
import styles from "./styles/App.module.css"
import bgImg from "./assets/the-loc-nar.jpg"
import MyStopwatch from "./Timer"

function App() {
  const [clicked, setClicked] = useState("")
  const [found, setFound] = useState([])

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
      <header>
        <MyStopwatch />
      </header>
      <main>
        <img
          onClick={closeMenu}
          className={styles.bg}
          src={bgImg}
          alt="bg-img"
        />
        <div onClick={openMenu} className={styles.bowser}></div>
        <div onClick={openMenu} className={styles.yubaba}></div>
        <div onClick={openMenu} className={styles.knight}></div>
      </main>
      <footer></footer>
      <template>
        <button onClick={checkLocation}>Bowser</button>
        <button onClick={checkLocation}>Yubaba</button>
        <button onClick={checkLocation}>Knight</button>
      </template>
    </>
  )
}

export default App
