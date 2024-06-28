import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function to import all images from the specified context
const importAll = (requireContext) => requireContext.keys().map(requireContext);

// Import all images from the 'images' folder
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  return (
    <div className='galleryCont text-center'>
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
            onClick={() => handleShow(image)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>IC Landscaping</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentImage && <img src={currentImage} alt="Large view" className="img-fluid" />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
