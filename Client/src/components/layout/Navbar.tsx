import {
    About,
    Blockchain,
    Ellipse10,
    Frame1,
    Frame16,
    Frame5,
    Frame6,
    Group14,
    Group21,
    ArrowDownBox,
    NavbarBefore,
    Nico,
    SignIn,
    SupernicoNear,
    Vector_0012,
    YellowBlock,
    _1,
} from "src/components/layout/Navbar.styled";

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
                    {true ? (
                        <Frame1>
                            <SignIn>Sign in</SignIn>
                        </Frame1>
                    ) : (
                        <Frame16>
                            <Group14>
                                <ArrowDownBox>
                                    <Vector_0012 src="src/assets/layout/arrow_down.svg" />
                                </ArrowDownBox>
                                <Group21>
                                    <YellowBlock src="src/assets/profile/yellow_block_s.svg" />
                                </Group21>
                                <SupernicoNear>supernico.near</SupernicoNear>
                            </Group14>
                        </Frame16>
                    )}
                </Frame6>
            </NavbarBefore>
        </>
    );
};

export default Naver;
