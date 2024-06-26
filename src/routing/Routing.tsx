import { Route, Routes } from "react-router-dom";

//Import Pages
import Home from "../pages/homepage/Home";



export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
