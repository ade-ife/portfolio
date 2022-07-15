import React from 'react'

const CTA = () => {
  return (
    <div className="cta">
        <a href="resume.pdf" className="btn" download='resume.pdf'>
            CV
        </a>

        <a href="#conctact" className="btn btn-primary">
          Let's talk
        </a>
    </div>
  )
}

export default CTA
