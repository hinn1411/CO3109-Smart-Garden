import SensorHistory from "../pages/CustomerPages/Lich_Su_Hoat_Dong/SensorHistory.jsx";
import SensorInfoPage from "../pages/CustomerPages/Thong_Tin_Cam_Bien/SensorInfoPage.jsx";
import NotificationPage from "../pages/CustomerPages/Thong_Bao/NotificationPage.jsx";
import GardenList from "../pages/CustomerPages/GardenList/GardenList"
import LoginAs from "../pages/AuthorizationPages/LoginAs/LoginAs";
import Login from "../pages/AuthorizationPages/Login/Login"
import PassRetrival from "../pages/AuthorizationPages/PassRetrival/PassRetrival";
import Register from "../pages/AuthorizationPages/Register/Register";
import GardenDetail from "../pages/CustomerPages/GardenDetail/GardenDetail";
import GardenRegis from "../pages/CustomerPages/GardenRegis/GardenRegis";
import GardenModify from "../pages/CustomerPages/GardenModify/GardenModify";

import StatisticPage from "../pages/CustomerPages/Thong_Ke_Lich_SU/StatisticPage.jsx";


import GardenDashboard from "../pages/CustomerPages/GardenDashboard/GardenDashboard";
import ManageSensor from "../pages/CustomerPages/ManageSensor/ManageSensor";
import InputValue from "../pages/CustomerPages/InputValue/InputValue";
import ManageUser from "../pages/AdminPages/ManageUser/ManageUser.jsx";
import ManageRequest from "../pages/AdminPages/ManageRequest/ManageRequest.jsx";
import ControlPump from "../pages/CustomerPages/ControlPump/ControlPump";
import Schedule from "../pages/CustomerPages/Schedule/Schedule.jsx";

const routes = [
    //Authorize
    { path: '/login-as', component: LoginAs },
    { path: '/login/:role', component: Login },
    { path: '/pass-retri', component: PassRetrival },
    { path: '/register', component: Register },
    //Customer
    { path: '/:account', component: GardenList },
    { path: '/:account/garden-detail/:id', component: GardenDetail },

    { path: '/garden-regis', component: GardenRegis },
    { path: '/garden-mod', component: GardenModify },

    { path: '/:account/SensorHistory', component: SensorHistory },
    { path: '/SensorInfoPage', component: SensorInfoPage },
    { path: '/NotificationPage', component: NotificationPage },
    { path: '/StatisticPage', component: StatisticPage },


    { path: '/GardenDashboard', component: GardenDashboard },
    { path: '/InputValue', component: InputValue },
    { path: '/ManageSensor', component: ManageSensor },
    { path: '/controlPump', component: ControlPump },
    { path: '/schedule', component: Schedule },
    { path: '/admin', component: ManageUser },
    { path: '/admin/request', component: ManageRequest }

]

export default routes;
