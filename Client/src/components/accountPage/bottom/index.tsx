import { useState } from "react";
import Contents from "src/components/accountPage/bottom/Contents";
import Title from "src/components/accountPage/bottom/Title";

const BottomSection = () => {
    const [state, setState] = useState(0);

    return (
        <>
            <Title setState={setState} state={state} />
            <Contents state={state} />
        </>
    );
};

export default BottomSection;
