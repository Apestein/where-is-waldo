import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import theLocNar from "./assets/the-loc-nar.jpg"
import universe113 from "./assets/universe-113.jpg"
import styles from "./styles/Modal.module.css"

function Modal(props: any) {
  const { startTimer, setMap } = props
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
        <h2>Pick Your Map</h2>
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
        <button onClick={handleClose}>Start</button>
      </div>
    </div>
  )
}

export default Modal
