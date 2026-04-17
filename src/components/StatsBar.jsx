import { useEffect, useRef, useState } from 'react'
import { FaUserInjured, FaAward, FaUserMd } from 'react-icons/fa'
import { MdOutlineHealthAndSafety } from 'react-icons/md'

const STATS = [
  { num: 300000, suffix: ' +', label: 'Patients Treated', icon: FaUserInjured },
  { num: 7, suffix: ' +', label: 'Years of Excellence', icon: FaAward },
  { num: 6, suffix: ' +', label: 'Expert Doctors', icon: FaUserMd },
  { num: 99, suffix: ' %', label: 'Success Rate', icon: MdOutlineHealthAndSafety },
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

function StatItem({ num, suffix, label, start, icon: Icon }) {
  const count = useCountUp(num, 1600, start)
  return (
    // <div className="text-center px-2 sm:px-4 md:px-6">
    //   <p className="text-2xl sm:text-3xl md:text-5xl font-light text-white leading-none">
    //     {count.toLocaleString()}<span className="text-orange-light">{suffix}</span>
    //   </p>
    //   <p className="text-xs sm:text-sm text-white/60 mt-1 sm:mt-2 tracking-wide font-medium">{label}</p>
    // </div>
    <div className="text-center px-2 sm:px-4 md:px-6 flex flex-col items-center">

      {/* ICON */}
      <Icon className="text-white text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3" />

      {/* NUMBER */}
      <p className="text-2xl sm:text-3xl md:text-5xl font-display text-white leading-none">
        {count.toLocaleString()}
        <span className="text-orangeCustom">{suffix}</span>
      </p>

      {/* LABEL */}
      <p className="text-xs sm:text-sm text-white/60 mt-1 sm:mt-2 tracking-wide font-display">
        {label}
      </p>
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
    <section id="stats" ref={ref} className="bg-tealCustom py-16 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 divide-y-0 md:divide-x divide-white/10">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} start={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
