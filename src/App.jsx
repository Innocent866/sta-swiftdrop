// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

//Admin

//Main Dashboard component
import MainDashboard from "./pages/dashboard";

// import Profile dashboard component
import ProfilePage from "./pages/profile";

// import Administrator dashboard component
import AdministratorPage from "./pages/administrators";
import AllUserPage from "./pages/all-users";
import OperatorsPage from "./pages/operators";

//import Food Dashboard Component
import SettingPage from "./pages/setting";
import FoodSellerListPage from "./pages/food-seller-list";
import OweAmountPage from "./pages/owe-amount";

//import Driver Dashboard component
import DriverSettingPage from "./pages/driver-setting";
import DriverListPage from "./pages/driver-list";
import DriverOweAmountPage from "./pages/driverOweAmount";

import OtherHistoryPage from "./pages/order-history";
import FaqPage from "./pages/faq";
import GeneralSettingPage from "./pages/general-setting";
import NewDashboardPage from "./pages/dashboard/newdashboard/index";
import InsidefaqPage from "./pages/faq/insideFaq/index"

export default function App() {

  return (

    <>
    <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          
          <Route
            exact
            path="/"
            element={<MainDashboard />}
          />

          <Route 
            exact
            path="/profile/*"
            element={<ProfilePage />}
          />
          <Route 
            exact
            path="/administrators"
            element={<AdministratorPage />}
          />
          <Route 
            exact
            path="/all-user"
            element={<AllUserPage />}
          />
          <Route 
            exact
            path="/new-dashboard"
            element={<NewDashboardPage />}
          />
          <Route 
            exact
            path="/operators"
            element={<OperatorsPage />}
          />

          <Route 
            exact
            path="/food-setting/*"
            element={<SettingPage />}
          />
          <Route 
            exact
            path="/food-seller-list"
            element={<FoodSellerListPage />}
          />
          <Route 
            exact
            path="/owe-amount"
            element={<OweAmountPage />}
          />    

          <Route 
            exact
            path="/driver-setting"
            element={<DriverSettingPage />}
          />
          <Route 
            exact
            path="/driver-list/*"
            element={<DriverListPage />}
          />
          <Route 
            exact
            path="/driver-owe-amount"
            element={<DriverOweAmountPage />}
          />  

          <Route 
            exact
            path="/other-history"
            element={<OtherHistoryPage />}
          />
          <Route 
            exact
            path="/faq"
            element={<FaqPage />}
          />
          <Route 
            exact
            path="/inside-faq"
            element={<InsidefaqPage />}
          />
          <Route 
            exact
            path="/general-setting"
            element={<GeneralSettingPage />}
          />    
        </Routes>
      </Router>
        </>

        )

}