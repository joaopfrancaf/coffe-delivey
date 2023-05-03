import { Route, Routes } from "react-router-dom";
import Homehero from "./pages/Homehero";
import Checkout from "./pages/Checkout";

export default function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Homehero />} />
            <Route path="checkout" element={<Checkout />} />
        </Routes>
    )
}