import { GlobalStyles } from "src/styles/GlobalStyles.styled";
import Router from "src/Router";
import getAccountDetail from "src/near/utils";

const App = () => {
    getAccountDetail("park_test_test.testnet");
    return (
        <>
            <GlobalStyles />
            <Router />
        </>
    );
};

export default App;
