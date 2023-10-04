import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import lemon from "../src/assets/lemon.png"
import seven from "../src/assets/seven.png"
import prune from "../src/assets/prune.png"
import cherry from "../src/assets/cherry.png"
import watermelon from "../src/assets/melon.png"


function App() {
  let slotImages = [
    lemon, seven, prune, cherry, watermelon
  ]

  let slot1: number = Math.floor(Math.random() * 5);
  let slot2: number = Math.floor(Math.random() * 5);
  let slot3: number = Math.floor(Math.random() * 5);

  let winning = slot1 == slot2 && slot2 == slot3

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Expressies</h2>
        <img src={lemon} alt="lemon" width={75}/>
        <img src={watermelon} alt="watermelon" width={75}/>
        <img src={prune} alt="prune" width={75}/>
        <img src={cherry} alt="cherry" width={75}/>
        <img src={seven} alt="seven" width={75}/>

        {winning ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}

        <img src={slotImages[slot1]} alt="slot1" width={175}/>
        <img src={slotImages[slot2]} alt="slot2" width={175}/>
        <img src={slotImages[slot3]} alt="slot3" width={175}/>
      <div className="card">

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
