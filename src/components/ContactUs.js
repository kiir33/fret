import React from 'react'
const ContactUs = () => {

  const email = 'fretofficial07@gmail.com'
  const mobile = '9843645352'
  const fb = 'https://www.facebook.com/MusicFret'
  const insta = 'https://www.instagram.com/fretofficial07/'
  const youtube = 'https://www.youtube.com/channel/UCnU9CslDN4znVAuwyzCsnfw'

  return (
    <div className="bg-dark text-light py-4">
      <div className="text-center h4" id="contact_us">Contact Us</div>
      <div className="container">
        <a href={'mailto:' + email} target="_blank" className="text-light btn ps-0">
          <i className="fas fa-envelope me-2"></i> {email}
        </a>
        <a href={'tel:' + mobile} target="_blank" className="text-light btn">
          <i className="fas fa-mobile ms-4 me-2"></i> {mobile}
        </a>
        <p className="mt-4">
          Follow us on:
          <a href={fb} target="_blank" className="btn text-light mx-1"><i class="fab fs-3 fa-facebook-square"></i> </a>
          <a href={insta} target="_blank" className="btn text-light mx-1"><i class="fab fs-2 fa-instagram"></i> </a>
          <a href={youtube} target="_blank" className="btn text-light mx-1"><i class="fab fs-2 fa-youtube"></i> </a>
        </p>
      </div>
    </div>
  )
}

export default ContactUs
