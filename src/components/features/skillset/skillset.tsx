import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Skillset = React.forwardRef<HTMLDivElement>((props, ref) => {

  return (
    <div ref={ref} className="skillset">
      {/* 🎯 Headings for the skillset section*/}
      <Headings title="Skillset" subtitle=''/>

      <div className="skills-wrapper">
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>Ruby</span>
        <span>Ruby on Rails</span>
        <span>Next.js</span>
        <span>TailwindCSS</span>
        <span>TypeScript</span>
        <span>NodeJS</span>
        <span>Express</span>
        <span>MongoDB</span>
        <span>PostgreSQL</span>
        <span>Postman</span>
        <span>Git</span>
        <span>Cypress</span>
      </div>
    </div>
  
  )
})

Skillset.displayName = 'Skillset'

export { Skillset }


