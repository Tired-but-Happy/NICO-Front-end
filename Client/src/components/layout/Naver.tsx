import {
    About,
    Blockchain,
    Frame1,
    Frame5,
    Frame6,
    NavbarBefore,
    Nico,
    SignIn,
} from "src/components/layout/Naver.styled";

const Naver = () => {
    return (
        <>
            <NavbarBefore>
                <Nico src="src/assets/layout/nico_icon.svg" />
                <Frame6>
                    <Frame5>
                        <About>About</About>
                    </Frame5>
                    <Frame5>
                        <Blockchain>Blockchain</Blockchain>
                    </Frame5>
                    <Frame1>
                        <SignIn>Sign in</SignIn>
                    </Frame1>
                </Frame6>
            </NavbarBefore>
        </>
    );
};

export default Naver;
