import { useState, useEffect, useRef } from 'react'

export default function Stopwatch() {
  const [time, setTime] = useState(0)
  const timerId = useRef(null)

  // const timerId = setInterval(() => console.log('count'), 1000)
  // clearInterval(timerId)

  useEffect(() => {
    return () => clearInterval(timerId.current)
  }, [])

  const startTimer = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    }
  }

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = null
  }

  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">Zamanlayıcı: {time}s</div>
      <div className="flex justify-between">
        <button onClick={stopTimer} className="text-amber-500 font-bold">
          Durdur
        </button>
        <button onClick={startTimer} className="text-green-500 font-bold">
          Başlat
        </button>
      </div>
    </div>
  )
}
