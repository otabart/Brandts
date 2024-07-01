import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Import Pages
import Home from "../pages/homepage/Home";
import Create from "../pages/create/Create";
import View from "../pages/view/View";
import Details from "../pages/campaignDetails/CampaignDetails";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "../pages/homepage/Home";

//Import Components
import NavBar from "../components/NavBar";


export default function Routing() {
    return (
        <>
            <ToastContainer position="bottom-right" autoClose={5000} />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/view" element={<View />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
}
