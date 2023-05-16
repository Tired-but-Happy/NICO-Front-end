import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    // main-color
    --mainColor-Yellow-400: #FAF349;
    --mainColor-Yellow-300: #FCF897;
    --mainColor-Yellow-200: #FEFCC9;
    --mainColor-Yellow-100: #FEFDF0;
    --secondaryColor-Purple-400: #9C32F0;
    --secondaryColor-Purple-300: #C174FF;
    --secondaryColor-Purple-200: #CF9FF4;
    --secondaryColor-Purple-100: #F9F2FF;
    --neutre-Black: #000000;
    --neutre-Grey-300: #3C3C40;
    --neutre-Grey-250: #9D99A0;
    --neutre-Grey-200: #B6B5B7;
    --neutre-Grey-100: #D8D5DA;
    --neutre-Grey-50: #F7F7F7;
    --neutre-White: #FFFFFFF;
    --simantic-Success: #3CC00E;
    --simantic-Error: #F23529;
    --simantic-Link: #3D50F9;

    // main-text
    --main-width: 1920px;
    --main-left: calc((calc((50% + 0px)) - 960px));
  }
`;
