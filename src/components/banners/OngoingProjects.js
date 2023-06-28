import { imageBaseUrl } from "../../Links";

const OngoingProjects = () => {
  const fretSchoolImg = imageBaseUrl + "241741285-b9182938-0dd0-4560-8630-bb5233692a3f.jpg"
  // const albumCover = imageBaseUrl + "241267187-da557c43-a812-44cd-8061-4f9bd1c22740.jpg";

  return (
    <div class="ongoing-container">
      <p class="title h2 text-uppercase">Ongoing Projects</p>
      <div class="image-container gap-2 px-2 mb-4">
        <img src={fretSchoolImg} className="img1" alt="Fret Music School" />
      </div>
    </div>
  );
}

export default OngoingProjects;
