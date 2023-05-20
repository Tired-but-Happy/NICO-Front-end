import { GlobalStyles } from "src/styles/GlobalStyles.styled";
import Router from "src/Router";
import getAccountDetail from "src/near/utils";
import { NearProvider } from "./NearContext";

const App = () => {
    getAccountDetail("park_test_test.testnet");
    return (
        <NearProvider>
            <GlobalStyles />
            <Router />
        </NearProvider>
    );
};

export default App;
