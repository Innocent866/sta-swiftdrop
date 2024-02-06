import FoodMenu from './foodMenu';
import EditFood from './editFood'
import { useState, useEffect } from 'react';

export default function SetMenu() {
  const [menuData, setMenuData] = useState([]);
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://swifdropp.onrender.com/api/v1/category/all');
      const data = await response.json();
      setMenuData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDataUpdate = (updatedData) => {
    setMenuData(updatedData);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditModalShow(true);
  };

  return (
    <>
      {menuData.length > 0 && ( // Add this condition
        <FoodMenu menuData={menuData} onDataUpdate={handleDataUpdate} onEditClick={handleEditClick} />
      )}
      <EditFood show={editModalShow} handleClose={() => setEditModalShow(false)} selectedItem={selectedItem} onSaveChanges={handleDataUpdate} />
    </>
  );
}