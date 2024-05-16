import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="contact">
      <Headings title="Contact" subtitle=" " />
      {/* 📝 Information text about how to contact */}
      <div className="contact-text">
        Feel free to send me a message on{' '}
        <a
          href="https://linkedin.com/in/markmdoza"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        or a DM on{' '}
        <a
          href="https://instagram.com/markmdoza"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        . Whether you have a question or just want to say &quot;Hi&quot;
        I&apos;ll try my best to get back to you. For any work inquiries, please email me at marklmdoza@gmail.com.
      </div>
    </div>
  )
})

Contact.displayName = 'Contact'

export { Contact }
