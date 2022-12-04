import React from "react"
import map1 from "./assets/the-loc-nar.jpg"
import map2 from "./assets/universe-113.jpg"
import styles from "./styles/Main.module.css"

function Main(props: any) {
  const { map, popupMsg, setClicked } = props
  const bgImg = map === "the-loc-nar" ? map1 : map2
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

  return (
    <main>
      {popupMsg && <h2 className={styles.popup}>{popupMsg}</h2>}
      <img onClick={closeMenu} className={styles.bg} src={bgImg} alt="bg-img" />
      {map === "the-loc-nar" ? (
        <>
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
            data-char="the knight"
            className={styles.knight}
          ></div>
        </>
      ) : (
        <>
          <div
            onClick={openMenu}
            data-char="cacodemon"
            className={styles.cacodemon}
          ></div>
          <div
            onClick={openMenu}
            data-char="bill cipher"
            className={styles.billCipher}
          ></div>
          <div
            onClick={openMenu}
            data-char="courage"
            className={styles.courage}
          ></div>
        </>
      )}
    </main>
  )
}

export default Main
