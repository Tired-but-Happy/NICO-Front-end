import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "src/pages/LandingPage";
import MainLayout from "src/components/layout";
import BlockPage from "src/pages/BlockPage";
import BlockOverview from "src/pages/BlockOverview";
import TransactionPage from "src/pages/TransactionPage";
import TransactionOverview from "src/pages/TransactionOverview";
import AccountPage from "src/pages/AccountPage";
import ContractPage from "./pages/ContractPage";
import AboutPage from "./pages/AboutPage";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/blocks" element={<BlockPage />} />
                        {/* blocks/${hash} */}
                        <Route path="/over" element={<BlockOverview />} />

                        <Route path="/transactions" element={<TransactionPage />} />
                        {/* transactions/${hash} */}
                        <Route path="/txover" element={<TransactionOverview />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/contract" element={<ContractPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
