import { Route, Routes } from "react-router-dom";
import Homehero from "./pages/Homehero";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Homehero />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<Success />} />
        </Routes>
    )
}