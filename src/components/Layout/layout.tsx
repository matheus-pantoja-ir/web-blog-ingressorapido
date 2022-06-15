import React from "react";
import {TLayout} from "./types";
import {Header} from "../Header/header";
import {ThemeProvider} from "styled-components";
import {theme} from "../../theme/theme";
import {GlobalStyle} from "../../theme/globalStyle";

export function Layout({children}: TLayout): JSX.Element {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Header/>
                {children}
            </ThemeProvider>
        </>
    )
}