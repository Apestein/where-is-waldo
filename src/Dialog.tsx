import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import theLocNar from "./assets/the-loc-nar.jpg"
import universe113 from "./assets/universe-113.jpg"
import styles from "./styles/Dialog.module.css"

function Dialog() {
  return (
    <dialog className={styles.dialog}>
      <h2>Pick Your Map</h2>
      <Carousel showThumbs={false} emulateTouch={true}>
        <div>
          <img className={styles.image} src={theLocNar} />
        </div>
        <div>
          <img className={styles.image} src={universe113} />
        </div>
      </Carousel>
      <button>Start</button>
    </dialog>
  )
}

export default Dialog
