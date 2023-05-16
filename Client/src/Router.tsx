import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "src/pages/LandingPage";
import Layout from "src/components/layout";
import BlockPage from "src/pages/BlockPage";
import BlockOverview from "src/pages/BlockOverview";
import TransactionPage from "src/pages/TransactionPage";
import TransactionOverview from "src/pages/TransactionOverview";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/blocks" element={<BlockPage />} />
                        {/* blocks/${hash} */}
                        <Route path="/over" element={<BlockOverview />} />

                        <Route path="/transactions" element={<TransactionPage />} />
                        {/* transactions/${hash} */}
                        <Route path="/txover" element={<TransactionOverview />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
