import React from 'react'

import Link from 'next/link'
import { navbarLinks } from '@constants/Data'
import { Github, Instagram, Linkedin } from 'lucide-react'

const FooterSection = () => {

    let date = new Date()
    let yy = date.toDateString().split(' ')[3]
  

  return (
    <div className="footer-container">
      <div className="footer-data">
        <div className="box-1">
          <h1 className='text-2xl font-bold'>AI.</h1>
          <p>
             Make the web a beatiful place.<br /> 
          </p>
        </div>
        <div className="box-2">
          <div className="inner-1">
            <span className='font-bold'>Links</span>
            <div className="links" id='hoverElement'>
              {navbarLinks.map((link) => (
                <li key={link.id} >
                  <Link href='/'>{link.name}</Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-links">
          <span>© Me Inc. All Rights Reserved {yy}</span>
          <div className="icons" id="hoverElement"> 
            <Link href={'https://www.instagram.com/yourrfavalex/'}><Instagram className="icon"/></Link>
            <Link href={'https://github.com/japsap'}><Github className="icon"/></Link>
            <Link href={'https://www.linkedin.com/in/aleksander-ivanov-0356a8274/'}><Linkedin className="icon"/></Link>
          </div>
      </div>
    </div>
  )
}

export default FooterSection