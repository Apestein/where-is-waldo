import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import theLocNar from "./assets/the-loc-nar.jpg"
import universe113 from "./assets/universe-113.jpg"
import bowserImg from "./assets/bowser.png"
import knightImg from "./assets/the-knight.webp"
import yubabaImg from "./assets/yubaba.png"
import cacodemonImg from "./assets/cacodemon.png"
import billCipherImg from "./assets/bill-cipher.png"
import courageImg from "./assets/courage.png"
import styles from "./styles/Modal.module.css"

function Modal(props: any) {
  const { startTimer, map, setMap } = props
  function handleClose() {
    const modal = document.querySelector(
      `.${styles.modal}`
    ) as HTMLElement | null
    if (modal) modal.style.display = "none"
    startTimer()
  }

  function changeMap(index: number) {
    index === 0 ? setMap("the-loc-nar") : setMap("universe-113")
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Choose Your Map</h2>
        <p>The Loc Nar</p>
        <div className={styles.wrapper}>
          <Carousel
            width={"80vw"}
            infiniteLoop={true}
            showThumbs={false}
            emulateTouch={true}
            onChange={changeMap}
          >
            <div>
              <img className={styles.image} src={theLocNar} alt="map1" />
            </div>
            <div>
              <img className={styles.image} src={universe113} alt="map2" />
            </div>
          </Carousel>
          <div className={styles.charWrapper}>
            {map === "the-loc-nar" ? (
              <>
                <img
                  className={styles.modalChar}
                  src={bowserImg}
                  alt="bowser"
                />
                <img
                  className={styles.modalChar}
                  src={yubabaImg}
                  alt="yubaba"
                />
                <img
                  className={styles.modalChar}
                  src={knightImg}
                  alt="knight"
                />
              </>
            ) : (
              <>
                <img
                  className={styles.modalChar}
                  src={cacodemonImg}
                  alt="cacodemon"
                />
                <img
                  className={styles.modalChar}
                  src={billCipherImg}
                  alt="bill cipher"
                />
                <img
                  className={styles.modalChar}
                  src={courageImg}
                  alt="courage"
                />
              </>
            )}
          </div>
        </div>
        <button onClick={handleClose}>Start</button>
      </div>
    </div>
  )
}

export default Modal
