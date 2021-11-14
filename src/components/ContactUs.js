import React from 'react'
const ContactUs = () => {

  const email = 'fretofficial07@gmail.com'
  const mobile = '+977-9843645352'
  const mobile2 = '+977-9823330178'
  const fb = 'https://www.facebook.com/MusicFret'
  const insta = 'https://www.instagram.com/fretofficial07/'
  const youtube = 'https://www.youtube.com/channel/UCnU9CslDN4znVAuwyzCsnfw'

  return (
    <div className="bg-dark text-light text-center rounded p-4" id="contact_us">
      <div className="text-center h4" id="contact_us">Contact Us</div>
      <hr />
      <div className="container mt-4">
        <a href={'mailto:' + email} target="_blank" className="text-info btn ps-0">
          <i className="fas fa-envelope me-2"></i> {email}
        </a>
        <a href={'tel:' + mobile} target="_blank" className="text-info btn">
          <i className="fas fa-mobile ms-4 me-2"></i> {mobile}
        </a>
        <a href={'tel:' + mobile2} target="_blank" className="text-info btn">
          <i className="fas fa-mobile ms-4 me-2"></i> {mobile2}
        </a>
        <p className="text-info mt-5">
          <span className="h5">Follow us on:</span><br /><br />
          <a href={fb} target="_blank" className="btn text-info mx-1"><i class="fab fs-3 fa-facebook-square"></i> </a>
          <a href={insta} target="_blank" className="btn text-info mx-1"><i class="fab fs-2 fa-instagram"></i> </a>
          <a href={youtube} target="_blank" className="btn text-info mx-1"><i class="fab fs-2 fa-youtube"></i> </a>
        </p>
      </div>
    </div>
  )
}

export default ContactUs
