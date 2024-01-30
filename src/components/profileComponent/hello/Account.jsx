import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Account from "./Test" 
function Display() {
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch('https://swifdropp.onrender.com/api/v1/company/details/6581527dc96a438562098fef')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setInfo(data);

        setTimeout(() => {
          setLoading(false);
        }, 4000);
      })
   
      .catch(() => {
        console.error("Error fetching data:");
      });
      
  }, []);

  return (
    <>
     {loading ? (
        // Display loading spinner for 8 seconds
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', marginLeft:'-40px'  }}>
      <Spinner animation="border" style={{ width: '4rem', height: '4rem'}} />
    </div>
      ) : (
        // Display the Account component with fetched data
        <Account
          company={info.Companyname}
          email={info.email}
          phoneNumber={info.phoneNumber}
          address={info.address}
          city={info.city}
          state={info.state}
          postal={info.code}
        />
      )}
    </>
  );
}
export default Display
