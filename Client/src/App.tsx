import { GlobalStyles } from "src/styles/GlobalStyles.styled";
import initContract from "src/near/utils";
import Router from "src/Router";

const App = () => {
    initContract();
    return (
        <>
            <GlobalStyles />
            <Router />
        </>
    );
};

export default App;
