import { useRef } from "react";
import {
    AllFilter,
    Frame18,
    Group6,
    Group7,
    Rectangle17,
    Rectangle3,
    SearchButton,
    SearchBy,
    SearchTextField1232,
    SearchTitle,
} from "src/components/landingPage/searchTextField/SearchTextField.styled";
import useHandleOnEnter from "src/hooks/useHandleOnEnter";
import useInputFocusOnKeyDown from "src/hooks/useInputFocusOnKeyDown";

const SearchTextField = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    function validateAccountFormat(searchAccount: string) {
        const subAccounts = searchAccount.split(".");
        const subAccountCheck = subAccounts
            .map((data) => data.length > 0)
            .reduce((prev, curr) => prev && curr, true);
        return subAccounts.length > 1 && subAccountCheck;
    }

    function actionOnClickAndPressEnter() {
        if (!inputRef.current) return;
        if (!validateAccountFormat(inputRef.current.value)) {
            window.alert("Invalid format of account ID");
            return;
        }
        window.location.href = `/account?username=${inputRef.current.value}`;
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    const handleOnClick = () => {
        actionOnClickAndPressEnter();
    };

    useInputFocusOnKeyDown(inputRef, "/");
    useHandleOnEnter(actionOnClickAndPressEnter);

    return (
        <SearchTextField1232 style={{ transform: "scale(0.9)" }}>
            <SearchTitle>What are you looking for?</SearchTitle>

            <Group6>
                <Rectangle3 />
                <Group7>
                    <Rectangle17 />
                    <AllFilter>All filter</AllFilter>
                </Group7>
                <SearchBy placeholder="Search by account ID" ref={inputRef} />
            </Group6>
            <Frame18>
                <SearchButton onClick={handleOnClick}>Search</SearchButton>
            </Frame18>
        </SearchTextField1232>
    );
};

export default SearchTextField;
