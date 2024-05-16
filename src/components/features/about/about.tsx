import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      <Headings title="About" subtitle="" />{' '}
      <p className="about-text">
        I&apos;m a 28-year-old full-stack web developer with a fresh perspective on coding. My journey into the tech world began when I left the retail industry, driven by a desire for a better work-life balance. Inspired by my best friend&apos;s success, I enrolled in the Lighthouse Labs Full-Stack Web Development boot-camp in 2023. My goal is to seamlessly blend my passion and background in music and fitness with my newfound coding skills. This fusion of discipline and creativity has proved invaluable in learning and applying coding principles. I am excited to continue growing these life-skills, shaping a unique journey at the intersection of diverse passions.
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
