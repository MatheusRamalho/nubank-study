import { Route, Routes } from "react-router-dom";

// PAGES...
import { HomePage } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}