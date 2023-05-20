import { GlobalStyles } from "src/styles/GlobalStyles.styled";
import Router from "src/Router";
<<<<<<< HEAD
=======
import getAccountDetail from "src/near/utils";
import { NearProvider } from "./NearContext";
>>>>>>> origin

const App = () => {
    return (
        <NearProvider>
            <GlobalStyles />
            <Router />
        </NearProvider>
    );
};

export default App;
