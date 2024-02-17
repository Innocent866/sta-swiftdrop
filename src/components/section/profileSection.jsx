import { Link, Routes, Route } from 'react-router-dom';
import ProfileComponent from '../profileComponent/hello/index';
import Password from '../../components/profileComponent/hello/Password';
import Account from '../../components/profileComponent/hello/Account';
import User from '../../components/profileComponent/hello/User';
import Payment from '../../components/profileComponent/hello/Payment';

export default function ProfileSection() {
  return (
    <>
      <div className="height">
        <div className="breadcrumb-flex">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb  pt-2 rounded-3">
              <li className="breadcrumb-item">
                <a href="#" className="text-dark text-decoration-none">
                  Application
                </a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/profile/Account" className="text-decoration-none" style={{ color: "#F8B602" }}>
                  Profile
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex">
          <div className="main">
            <ProfileComponent />
            <Routes>
              <Route path="Account" element={<Account />} />
              <Route path="Password" element={<Password />} />
              <Route path="User" element={<User />} />
              <Route path="Payment" element={<Payment />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
