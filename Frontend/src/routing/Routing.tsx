import { Route, Routes } from "react-router-dom";

//Import Pages
import Home from "../pages/homepage/Home";
import Create from "../pages/create/Create";
import View from "../pages/view/View";

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
            </Routes>
        </>
    );
}
