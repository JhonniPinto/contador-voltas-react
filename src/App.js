import React, {useState, useEffect} from 'react'

import './style.css'

import Display from './components/Display'
import Button from './components/Button'

function App() {
  // HOOKS
  const [turns, setTurns] = useState(0)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000)
    }
    return () => timer && clearInterval(timer)
  }, [running])

  // FUNCTIONS
  const changeTurns = e => e.target.textContent === '+' ? setTurns(turns + 1) : turns > 0 && setTurns(turns - 1)
  const timming = () => setRunning(!running)
  const formatTime = (time) => {
    const min = Math.floor(time / 60)
    const sec = Math.round(time % 60) 
    const formatMin = min < 10 ? '0' + min : min
    const formatSec = sec < 10 ? '0' + sec : sec
    return `${formatMin}:${formatSec}`
  }
  const reset = () => {
    setTime(0)
    setTurns(0)
  }

  // JSX
  return (
    <div>
      <h1>Contador de Voltas REACT</h1>
    
      <Display className='turnsDisplay' primary={turns} secondary='volta(s)' />
    
      <Button onClick={changeTurns} text='+' />
      <Button onClick={changeTurns} text='-' />

      { turns > 0 && <Display className='timeDisplay' primary={formatTime(time / turns)} secondary='tempo médio por volta(s)' />}

      <Button onClick={timming} text={running ? 'Pausar' : 'Iniciar'} />
      <Button onClick={reset} text='Reiniciar' />
    </div>
  )
}

export default App
