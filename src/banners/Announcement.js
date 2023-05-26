import { registrationLink } from "../Links";

const Announcement = () => {
  return (
    <div className='row bg-warning rounded mx-auto p-2'>
      <p className='col-md-6 col-sm-12 my-auto h5 text-center'>
        <b>Hurry up!</b> <br />
        Registrations for <b>Fret Scool</b> are open!</p>
      <a target="blank" className="col-md-4 col-sm-12 btn btn-dark p-3 text-xl-center mx-auto my-2" href={registrationLink}>Click Here to Register Now</a>
    </div>
  );
}

export default Announcement;