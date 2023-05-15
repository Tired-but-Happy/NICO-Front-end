import { BrowserRouter, Route, Routes } from "react-router-dom";
import initContract from "src/near/utils";
import Home from "src/pages/Home";

function App() {
    initContract();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
