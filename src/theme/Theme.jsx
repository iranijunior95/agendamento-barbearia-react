import { ThemeProvider } from "styled-components";

const theme = {
    fonts: {
        fontInterTight: '"Inter Tight", serif',
        fontInter: '"Inter", serif'
    },
    colorContent: {
        colorContentPrimary: "#FFFFFF",
        colorContentSecondary: "#98959D",
        colorContentTertiary: "#666666",
        colorContentBrand: "#9282FA"
    },
    colorBackground: {
        colorBackgroundPrimary: "#151515",
        colorBackgroundSecondary: "#1e1e1e",
        colorBackgroundTertiary: "#23242C",
        colorBackgroundBrand: "#9282FA",
        colorBackgroundHighlights: "#BDB4FA"
    },
    colorBorder: {
        colorBorderPrimary: "#3E3C41",
        colorBorderSecondary: "#86818C",
        colorBorderBrand: "#9282FA",
        colorBorderDivisor: "#353339"
    },
    colorAccent: {
        colorAccentBlue: "#027DF0",
        colorAccentBlueLight: "#16487A",
        colorAccentYellow: "#F0DC02",
        colorAccentYellowLight: "#756E1B",
        colorAccentOrange: "#F09102",
        colorAccentOrangeLight: "#75501B"
    }
};

function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
}

export default Theme;