import React from "react";
import "./Gallery.css";
import gallery1 from '../../../assets/g5.jpg'
import gallery2 from '../../../assets/g2.jpg'
import gallery3 from '../../../assets/g3.jpg'
import gallery4 from '../../../assets/g4.jpg'
import gallery5 from '../../../assets/g1.jpg'
const Gallery = () => {
  const galleryImages = [
    {
      src: gallery1,
      description: "Education",
    },
    {
      src: gallery2,
      description: "Food",
    },
    {
      src:gallery3 ,
      description: "Shelter",
    },
    {
      src:gallery5,
      description: "Education",
    },
  ];
  return (
    <div className="gallery my-5">
      {galleryImages.map((image, index) => (
        <div className="gallery-image-container animated fadeInLeft" key={index}>
          <img src={image.src} alt={`Image ${index + 1}`}/>
          {/* <div className="gallery-overlay">
            <div className="gallery-overlay-text">
              <span>Charity</span>
              <h4 className="gallery-overlay-text">{image.description}</h4>
            </div>
            <div className="cut-shape">
              <img
                src="https://html.hixstudio.net/poorex-prev/assets/img/gallery/gal-shape-1.png"
                alt="Shape"
              />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};
export default Gallery;
