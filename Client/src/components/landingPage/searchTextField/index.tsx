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

const SearchTextField = () => {
    return (
        <SearchTextField1232>
            <SearchTitle>What are you looking for?</SearchTitle>

            <Group6>
                <Rectangle3 />
                <Group7>
                    <Rectangle17 />
                    <AllFilter>All filter</AllFilter>
                </Group7>
                <SearchBy>Search by acoount ID / TXn Hash / Block</SearchBy>
            </Group6>
            <Frame18>
                <SearchButton>Search</SearchButton>
            </Frame18>
        </SearchTextField1232>
    );
};

export default SearchTextField;
