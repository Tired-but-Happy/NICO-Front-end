import { GlobalStyles } from "src/styles/GlobalStyles.styled";
import Router from "src/Router";
import { NearProvider } from "./NearContext";

const App = () => {
    return (
        <NearProvider>
            <GlobalStyles />
            <Router />
        </NearProvider>
    );
};

export default App;
