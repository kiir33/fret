import { imageBaseUrl } from "../../Links";

const UpcomingAlbum = () => {
  let albumCover = imageBaseUrl + "241267187-da557c43-a812-44cd-8061-4f9bd1c22740.jpg";
  return (
    <div class="upcoming-container text-light mx-auto">
      <div class="card-body bg-dark h-100 m-auto col-md-6 col-sm-12 text-center">
        <p className="card-title">Upcoming Album</p>
        <p class="card-text">Stay Tuned . . .
        </p>
      </div>
      <div class="d-flex bg-secondary col-md-6 col-sm-12">
        <img class="card-img img-fluid rounded-circle m-auto"
          src={albumCover}
          style={{
            maxHeight: '250px',
            maxWidth: '250px'
          }}
          alt="Upcoming album cover" />
      </div>
    </div>
  );
}

export default UpcomingAlbum;
