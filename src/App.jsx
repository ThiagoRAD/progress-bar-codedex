import { useState } from 'react'
import './App.css'
import { ProgressBar } from './ProgressBar'

function App() {
  const [progress, setProgress] = useState(0)

  const updateProgress = () => {
    setProgress((prev) => (prev >= 100 ? 100 : prev + 10))
  }

  const resetProgress = () => {
    setProgress(0)
  } 

  return (
    <>
      <ProgressBar progress={progress} />
      {progress < 100 && <button onClick={updateProgress}>Increase Progress</button>}
      {progress == 100 && <button onClick={resetProgress}>Reset Progress</button>}
    </>
  )
}

export default App
