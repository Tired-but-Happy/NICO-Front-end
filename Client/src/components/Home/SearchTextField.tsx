import {
    AllFilter,
    Frame18,
    Group6,
    Group7,
    Rectangle17,
    Rectangle3,
    SearchBtn,
    SearchByAccountId,
    SearchText,
    SearchTextField1232,
} from "./SearchTextField.styled";

const SearchTextField = () => {
    return (
        <SearchTextField1232>
            <SearchText>What are you looking for?</SearchText>
            <Frame18>
                <SearchBtn>Search</SearchBtn>
            </Frame18>
            <Group6>
                <SearchByAccountId>Search by acoount ID / TXn Hash/ Block</SearchByAccountId>
                <Group7>
                    <AllFilter>All filter</AllFilter>
                    <Rectangle17 />
                </Group7>
            </Group6>
            <Rectangle3 />
        </SearchTextField1232>
    );
};

export default SearchTextField;
