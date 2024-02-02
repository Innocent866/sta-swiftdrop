import { useState } from 'react';
import { useEffect } from 'react';

const RightSideBar = () => {
  // state logic
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allDrivers, setAllDrivers] = useState([]);

  // all items
  const getAllItems = async () => {
    try {
      const response = await fetch(
        'https://swifdropp.onrender.com/api/v1/restaurant/sumFoods'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }

      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  // all orders
  const getAllOrders = async () => {
    try {
      const response = await fetch(
        'https://swifdropp.onrender.com/api/v1/orders/sumOrders/sum'
      );
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // all restaurants
  const getAllRestaurant = async () => {
    try {
      const response = await fetch(
        'https://swifdropp.onrender.com/api/v1/restaurant'
      );
      const data = await response.json();
      if (data && data.restaurants && Array.isArray(data.restaurants)) {
        setRestaurant(data.restaurants.length);
      }
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  useEffect(() => {
    getAllRestaurant();
  }, []);

  // all users
  const getAllUsers = async () => {
    try {
      const response = await fetch(
        'https://swifdropp.onrender.com/api/v1/user/sumallusers'
      );
      const data = await response.json();
      console.log(data);
      setAllUsers(data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // all drivers
  const getAllDrivers = async () => {
    try {
      const response = await fetch(
        'https://swifdropp.onrender.com/api/v1/driver/'
      );
      const data = await response.json();
      console.log(data);
      if (data && data.drivers && Array.isArray(data.drivers)) {
        setAllDrivers(data.drivers.length);
      }
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  useEffect(() => {
    getAllDrivers();
  }, []);

  return (
    <section style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div>
        <div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              width: '300px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.33332 17.3333V4.33332H2.16666V2.16666H5.41666C6.01497 2.16666 6.49999 2.65168 6.49999 3.24999V16.25H19.9745L22.1412 7.58332H8.66666V5.41666H23.53C23.8637 5.41667 24.1787 5.57045 24.384 5.83351C24.5893 6.09657 24.6619 6.43956 24.5808 6.76324L21.8725 17.5966C21.7517 18.0786 21.3186 18.4166 20.8217 18.4167H5.41666C4.81835 18.4167 4.33332 17.9316 4.33332 17.3333ZM6.49999 24.9167C5.30337 24.9167 4.33332 23.9466 4.33332 22.75C4.33332 21.5534 5.30337 20.5833 6.49999 20.5833C7.69661 20.5833 8.66666 21.5534 8.66666 22.75C8.66666 23.9466 7.69661 24.9167 6.49999 24.9167ZM17.3333 22.75C17.3333 23.9466 18.3034 24.9167 19.5 24.9167C20.6966 24.9167 21.6667 23.9466 21.6667 22.75C21.6667 21.5534 20.6966 20.5833 19.5 20.5833C18.3034 20.5833 17.3333 21.5534 17.3333 22.75Z"
                    fill="black"
                  />
                </svg>
              </span>
              {items && (
                <div style={{ marginTop: '10px', gap: '0' }}>
                  <p style={{ fontSize: '25px', fontWeight: 'bold' }}>
                    {items.sumAvailableFoods}
                  </p>
                  <p>Total Items</p>
                </div>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span>3</span>
              <span>
                <svg
                  width="90"
                  height="65"
                  viewBox="0 0 140 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_0_318)">
                    <g filter="url(#filter0_f_0_318)">
                      <path
                        d="M0 65C0 65 10.0941 53 21.1837 47C33.3709 41 38.2799 53 49.2464 47C59.5603 41 56.168 36 69 27.1537C80.9229 24.6034 100.192 33.6254 105.303 33.5C110.415 33.3746 113.045 31.6388 118.156 22.8751C123.267 14.1113 130.735 18.5 135 15L140 4.48273"
                        stroke="#3B5998"
                        strokeLinecap="round"
                      />
                    </g>
                    <path
                      d="M0 61C0 61 10.0941 49 21.1837 43C33.3709 37 38.2799 49 49.2464 43C59.5603 37 56.168 32 69 23.1537C80.9229 20.6034 100.192 29.6254 105.303 29.5C110.415 29.3746 113.045 27.6388 118.156 18.8751C123.267 10.1113 130.735 14.5 135 11L140 0.482727"
                      stroke="#3B5998"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_0_318"
                      x="-11.3731"
                      y="-6.89052"
                      width="162.746"
                      height="83.2636"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="5.43656"
                        result="effect1_foregroundBlur_0_318"
                      />
                    </filter>
                    <clipPath id="clip0_0_318">
                      <rect
                        width="140"
                        height="64.5173"
                        fill="white"
                        transform="translate(0 0.482727)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          width: '300px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span>
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.12499 3.625H25.875C26.5423 3.625 27.0833 4.16599 27.0833 4.83333V24.1667C27.0833 24.834 26.5423 25.375 25.875 25.375H4.12499C3.45765 25.375 2.91666 24.834 2.91666 24.1667V4.83333C2.91666 4.16599 3.45765 3.625 4.12499 3.625ZM5.33332 6.04167V22.9583H24.6667V6.04167H5.33332ZM16.2083 9.66667L18.3749 11.8332L15.4144 14.7936L12.8516 12.2295L7.72462 17.3565L9.4332 19.0651L12.8516 15.6479L15.4144 18.2108L20.0834 13.5418L22.25 15.7083V9.66667H16.2083Z"
                fill="black"
              />
            </svg>
          </span>
          {orders && (
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '25px', fontWeight: 'bold' }}>
                {orders.sumDeliveredOrders}
              </p>
              <p>Total Orders</p>
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span>3</span>
          <span>
            <svg
              width="90"
              height="37"
              viewBox="0 0 129 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72607 2C8.15422 6.49258 8.15422 9.00294 19.4484 9.00294C37.0331 5 47.0224 6.32671 52.9278 10.3297C62.9621 16.8267 65.5556 20.0319 70.6667 20.2371C75.7778 20.4422 80.7544 10.3297 91 11.8439C101.693 11.8439 97.4791 21.8742 108.868 23.9697C113.979 23.8444 120.5 24.0955 127.5 35"
                stroke="#FF5252"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          width: '300px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ marginTop: '5px' }}>
          <p style={{ fontSize: '25px', fontWeight: 'bold' }}>{restaurant}</p>
          <p>Total Restaurant</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span>3</span>
          <span>
            <svg
              width="90"
              height="62"
              viewBox="0 0 138 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_0_361)">
                <g filter="url(#filter0_f_0_361)">
                  <path
                    d="M0 62L2.55556 56.4618C5.11111 50.9236 10.2222 39.8471 15.3333 35.0955C20.4444 30.3438 25.5556 31.917 30.6667 34.3952C35.7778 36.8735 42.4755 40.8261 47.5866 37C52.6977 33.1739 56.1926 24.5468 61.3037 24.1537C66.4148 23.7605 71.5556 31.0319 76.6667 31.2371C81.7778 31.4422 86.8889 21.6034 92 24.1537C97.1111 26.7039 102.222 41.6432 107.333 41.5178C112.444 41.3925 117.556 26.2025 122.667 17.4387C127.778 8.67499 132.889 6.33749 135.444 5.16875L138 4"
                    stroke="#4DB6AC"
                    strokeLinecap="round"
                  />
                </g>
                <path
                  d="M0 58L2.55556 52.4618C5.11111 46.9236 10.2222 35.8471 15.3333 31.0955C20.4444 26.3438 25.5556 27.917 30.6667 30.3952C35.7778 32.8735 42.4755 36.8261 47.5866 33C52.6977 29.1739 56.1926 20.5468 61.3037 20.1537C66.4148 19.7605 71.5556 27.0319 76.6667 27.2371C81.7778 27.4422 86.8889 17.6034 92 20.1537C97.1111 22.7039 102.222 37.6432 107.333 37.5178C112.444 37.3925 117.556 22.2025 122.667 13.4387C127.778 4.67499 132.889 2.33749 135.444 1.16875L138 0"
                  stroke="#4DB6AC"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_361"
                  x="-11.3732"
                  y="-7.37325"
                  width="160.746"
                  height="80.7465"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5.43656"
                    result="effect1_foregroundBlur_0_361"
                  />
                </filter>
                <clipPath id="clip0_0_361">
                  <rect width="138" height="62" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          width: '300px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.00001 7.58333C7.00001 11.1746 9.90876 14.0833 13.5 14.0833C17.0913 14.0833 20 11.1746 20 7.58333C20 3.99208 17.0913 1.08333 13.5 1.08333C9.90876 1.08333 7.00001 3.99208 7.00001 7.58333ZM15.6667 17.7038V15.4397V15.4386C13.0709 14.7684 10.3111 15.3371 8.19191 16.9791C6.0727 18.6211 4.83266 21.1514 4.83334 23.8322L7.00001 23.8333C6.99961 21.723 8.02375 19.7438 9.74673 18.5252C11.4697 17.3066 13.677 17.0004 15.6667 17.7038ZM13.5 11.9167C15.8942 11.9167 17.8333 9.9775 17.8333 7.58333C17.8333 5.18916 15.8942 3.24999 13.5 3.24999C11.1058 3.24999 9.16668 5.18916 9.16668 7.58333C9.16668 9.9775 11.1058 11.9167 13.5 11.9167ZM20 15.1667V18.4167H16.75V20.5833H20V23.8333H22.1667V20.5833H25.4167V18.4167H22.1667V15.1667H20Z"
                fill="black"
              />
            </svg>
          </span>

          {allUsers && (
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '25px', fontWeight: 'bold' }}>
                {allUsers.sumVerifiedUsers}
              </p>
              <p>Total Users</p>
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span>3</span>
          <span>
            <svg
              width="90"
              height="71"
              viewBox="0 0 138 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_0_376)">
                <g filter="url(#filter0_f_0_376)">
                  <path
                    d="M0 71L2.55556 65.4618C5.11111 59.9236 10.2222 48.8471 15.3333 44.0955C20.4444 39.3438 25.5556 40.917 30.6667 43.3952C35.7778 45.8735 42.4755 49.8261 47.5866 46C52.6977 42.1739 56.1926 33.5468 61.3037 33.1537C66.4148 32.7605 79 37.5 90.5 37.5C104.789 37.5 105.389 35.7637 110.5 27C115.611 18.2363 124.476 23 128.5 18L138 4.42584"
                    stroke="#40C4FF"
                    strokeLinecap="round"
                  />
                </g>
                <path
                  d="M0 67L2.55556 61.4618C5.11111 55.9236 10.2222 44.8471 15.3333 40.0955C20.4444 35.3438 25.5556 36.917 30.6667 39.3952C35.7778 41.8735 42.4755 45.8261 47.5866 42C52.6977 38.1739 56.1926 29.5468 61.3037 29.1537C66.4148 28.7605 79 33.5 90.5 33.5C104.789 33.5 105.389 31.7637 110.5 23C115.611 14.2363 124.476 19 128.5 14L138 0.425842"
                  stroke="#40C4FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_376"
                  x="-11.3732"
                  y="-6.94733"
                  width="160.746"
                  height="89.3206"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5.43656"
                    result="effect1_foregroundBlur_0_376"
                  />
                </filter>
                <clipPath id="clip0_0_376">
                  <rect
                    width="138"
                    height="70.5742"
                    fill="white"
                    transform="translate(0 0.425842)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          width: '300px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.375 14.625C21.376 11.811 19.8748 9.21052 17.4375 7.80413H17.4386C17.6198 7.47563 17.7626 7.12126 17.8583 6.75001H21.375V4.50001H17.8583C17.3436 2.51414 15.5515 1.12732 13.5 1.12732C11.4485 1.12732 9.65644 2.51414 9.14175 4.50001H5.625V6.75001H9.14063C9.23588 7.11788 9.37765 7.47211 9.5625 7.80413C7.12517 9.21052 5.62397 11.811 5.625 14.625V23.625H10.3163C10.7926 24.975 12.0685 25.8778 13.5 25.8778C14.9315 25.8778 16.2074 24.975 16.6838 23.625H21.375V14.625ZM13.5 10.125C14.3415 10.125 15.129 9.89438 15.8029 9.49163C17.8246 10.3992 19.1253 12.4089 19.125 14.625V21.375H16.875V16.875C16.875 15.011 15.364 13.5 13.5 13.5C11.636 13.5 10.125 15.011 10.125 16.875V21.375H7.875V14.625C7.87475 12.4089 9.1754 10.3992 11.1971 9.49163C11.8933 9.90732 12.6892 10.1262 13.5 10.125ZM13.5 15.75C12.8787 15.75 12.375 16.2537 12.375 16.875V22.5C12.375 23.1213 12.8787 23.625 13.5 23.625C14.1213 23.625 14.625 23.1213 14.625 22.5V16.875C14.625 16.2537 14.1213 15.75 13.5 15.75ZM15.75 5.62501C15.75 6.86765 14.7426 7.87501 13.5 7.87501C12.2574 7.87501 11.25 6.86765 11.25 5.62501C11.25 4.38237 12.2574 3.37501 13.5 3.37501C14.7426 3.37501 15.75 4.38237 15.75 5.62501Z"
                fill="black"
              />
            </svg>
          </span>

          <div style={{ marginTop: '10px' }}>
            <p style={{ fontSize: '25px', fontWeight: 'bold' }}>{allDrivers}</p>
            <p>Total Drivers</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span>3</span>
          <span>
            <svg
              width="90"
              height="37"
              viewBox="0 0 129 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72607 2C8.15422 6.49258 8.15422 9.00294 19.4484 9.00294C37.0331 5 47.0224 6.32671 52.9278 10.3297C62.9621 16.8267 65.5556 20.0319 70.6667 20.2371C75.7778 20.4422 80.7544 10.3297 91 11.8439C101.693 11.8439 97.4791 21.8742 108.868 23.9697C113.979 23.8444 120.5 24.0955 127.5 35"
                stroke="#FF5252"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <button
        style={{
          all: 'unset',
          textAlign: 'center',
          backgroundColor: '#3b5998',
          color: 'white',
          padding: '10px',
        }}
      >
        VIEW ALL
      </button>
    </section>
  );
};

export default RightSideBar;
