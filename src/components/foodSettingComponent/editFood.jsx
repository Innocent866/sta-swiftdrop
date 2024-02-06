import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditFood({ show, handleClose, selectedItem, onSaveChanges }) {
  const [editedTitle, setEditedTitle] = useState('');
  const [editedImage, setEditedImage] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setEditedTitle(selectedItem.title);
      setEditedImage(selectedItem.image);
    }
  }, [selectedItem]);

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`https://swifdropp.onrender.com/api/v1/category/${selectedItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: editedTitle,
          image: editedImage,
          // Add other fields as needed
        }),
      });
  
      if (response.ok) {
        const updatedData = await response.json();
        onSaveChanges(updatedData); // Notify the parent component about the data update
        handleClose(); // Close the modal
      } else {
        console.error('Error updating data:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Edit title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <Form.Group controlId="editImage">
            <Form.Label>Edit image</Form.Label>
            <Form.Control
              type="file"
              label="Choose a new image"
              onChange={handleImageChange}
            />
            {editedImage && (
              <img
                src={editedImage}
                alt="Preview"
                style={{ maxWidth: '100%', marginTop: '10px' }}
              />
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditFood;