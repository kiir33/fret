import React from "react";

const Intro = () => {
  return (
    <div className="row p-4">
      <p className="h4 text-center fw-bolder my-4">ABOUT FRET</p>
      <div className="mx-auto my-2">
        <p>
          Fret is an instrumental trio from Nepal, creating new forms of music,
          furnishing fusion grooves in an evolved manner blending traditional
          and ethnic music with an influence of eastern classical, western music
          and world music through Sarangi, Flute and Newari drums. The trio’s
          vision is to explore their instruments in an innovative way and
          exhibit it in their style. The trio constitutes three individual
          artists from diverse musical backgrounds combined together to form a
          distinct world music genre.
        </p>
      </div>
      {/* <div className="mx-auto my-2 col-md-12 col-lg-4">
        <img src={cover} className="img-fluid rounded" />
      </div> */}
    </div>
  );
};

export default Intro;
