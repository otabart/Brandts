import { Route, Routes } from "react-router-dom";

//Import Pages
import Home from "../pages/homepage/Home";
import Create from "../pages/create/Create";
import View from "../pages/view/View";
import Details from "../pages/campaignDetails/CampaignDetails";

//Import Components
import NavBar from "../components/NavBar";


export default function Routing() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/view" element={<View />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </>
    );
}
