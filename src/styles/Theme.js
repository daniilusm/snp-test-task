import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        blueDark: '#345D7B',
        blueLight: '#82ACC4',
        silver: '#BEC1C6',
        marbleDark: '#D8D5D0',
        marbleLight: '#FAF4E8'
    },
    fonts: ["sans-serif", "Roboto"]
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;