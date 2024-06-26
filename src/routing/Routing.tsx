import { Route, Routes } from "react-router-dom";

//Import Pages
import Home from "../pages/homepage/Home";

//Import Components
import NavBar from "../components/NavBar";


export default function Routing() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}
