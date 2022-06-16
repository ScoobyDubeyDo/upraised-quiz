import { MantineProvider } from "@mantine/core";

const defaultProps = {
    Button: {
        color: "red",
        radius: "xl",
        fullWidth: true,
    },
    Group: {
        noWrap: true,
        position: "apart",
    },
};

export const ThemeProvider = ({ children }) => {
    return (
        <MantineProvider
            defaultProps={{ ...defaultProps }}
            withGlobalStyles
            withNormalizeCSS>
            {children}
        </MantineProvider>
    );
};
