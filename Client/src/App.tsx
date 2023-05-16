import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "src/pages/LandingPage";
import { GlobalStyles } from "src/styles/GlobalStyles.styled";
import initContract from "src/near/utils";
import Layout from "src/components/layout";

const App = () => {
    initContract();
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<LandingPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
