import { registrationLink } from "../../Links";

const Announcement = () => {
  return (
    <div className='row bg-secondary text-light mx-auto p-2'>
      <p className='col-md-6 col-sm-12 my-auto h5 text-center fw-light fs-5'>
        <span className="h5">Hurry up!</span> <br />
        Registrations for <span className="h5">Fret Music Scool</span> are open!</p>
      <a target="blank" className="banner-register-btn col-md-4 col-sm-12 btn p-3 text-xl-center mx-auto my-2" href={registrationLink}>Click Here to Register Now</a>
    </div>
  );
}

export default Announcement;