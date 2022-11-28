import React from "react"
import thisStyle from "./styles/App.module.css"
import bgImg from "./assets/universe-113.jpg"

function App() {
  return (
    <>
      <header></header>
      <main>
        <img className={thisStyle.bg} src={bgImg} alt="bg-img" />
      </main>
      <footer></footer>
    </>
  )
}

export default App
