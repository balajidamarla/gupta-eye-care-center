import { useEffect, useRef, useState } from 'react'

const STATS = [
  { num: 200000, suffix: '+', label: 'Patients Treated' },
  { num: 35, suffix: '+', label: 'Years of Excellence' },
  { num: 10, suffix: '+', label: 'Expert Doctors' },
  { num: 99, suffix: '%', label: 'Success Rate' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ num, suffix, label, start }) {
  const count = useCountUp(num, 1600, start)
  return (
    <div className="text-center px-6">
      <p className="font-number text-5xl font-light text-white leading-none">
        {count.toLocaleString()}<span className="text-orange-light">{suffix}</span>
      </p>
      <p className="text-sm text-white/60 mt-2 tracking-wide font-medium">{label}</p>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={ref} className="bg-teal-dark py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-0 md:divide-x divide-white/10">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} start={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
