import React, { useState, useEffect, useRef } from 'react'

function useWordGame() {
  const STARTING_TIME = 3
  const [text, setText] = useState('')
  const [wordcount, setWordcount] = useState(0)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWordcount(text) {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter((word) => word !== '').length
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000)
      textBoxRef.current.focus()
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false)
      setWordcount(calculateWordcount(text))
    }
  }, [timeRemaining, isTimeRunning])

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText('')
    setWordcount(0)
  }
  return {
    handleChange,
    text,
    isTimeRunning,
    textBoxRef,
    timeRemaining,
    startGame,
    isTimeRunning,
    wordcount,
  }
}

export { useWordGame }
