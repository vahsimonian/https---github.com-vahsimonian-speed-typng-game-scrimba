import React from 'react'
import { useWordGame } from './useWordGame'

function App() {
  const {
    handleChange,
    text,
    textBoxRef,
    timeRemaining,
    startGame,
    isTimeRunning,
    wordcount,
  } = useWordGame()

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <br />
      <h1>Word Count: {wordcount}</h1>
    </div>
  )
}

export default App
