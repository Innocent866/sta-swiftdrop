import Spinner from 'react-bootstrap/Spinner';
import FoodMenu from './foodMenu';
import EditFood from './editFood';
import { useState, useEffect } from 'react';

export default function SetMenu() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false); // State to force re-render

  useEffect(() => {
    fetchData();
  }, [forceUpdate]); // Listen for changes in forceUpdate

  const fetchData = async () => {
    try {
      const response = await fetch('https://swifdropp.onrender.com/api/v1/category/all');
      const data = await response.json();
      setMenuData(data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDataUpdate = (updatedData) => {
    setMenuData(updatedData);
    setForceUpdate(!forceUpdate); // Toggle forceUpdate to force re-render
  };
  
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditModalShow(true);
  };

  return (
    <>
      {loading ? ( // Render loading spinner if loading is true
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          {menuData.length > 0 && (
            <FoodMenu menuData={menuData} onDataUpdate={handleDataUpdate} onEditClick={handleEditClick} />
          )}
          <EditFood show={editModalShow} handleClose={() => setEditModalShow(false)} selectedItem={selectedItem} onSaveChanges={handleDataUpdate} />
          {/* Pass onDataUpdate to EditFood */}
        </>
      )}
    </>
  );
}