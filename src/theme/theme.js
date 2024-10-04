import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      1: "#FFEEDE",
      2: "#f2b780",
      3: "#FFC998",
      4: "#e2a163",
      5: "#4c1f0a",
    },
  },
  fonts: {
    heading: "var(--font-itim)",
    body: "var(--font-itim)",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "primary.3",
        minHeight: "100dvh",
        color: "#000",
      },
      html: {
        backgroundColor: "primary.3",
      },
      header: {
        backgroundColor: "primary.3",
      },
    },
  },
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            color: "primary.5",
            borderColor: "primary.5",
          },
          _active: {
            backgroundColor: "primary.2",
          },
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Button: {
      variants: {
        outline: {
          borderColor: "primary.5",
          color: "primary.5",
          _hover: {
            bg: "primary.2",
          },
          _active: {
            bg: "primary.4",
          },
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: { base: "lg", md: "xl" },
      },
    },
    Heading: {
      defaultProps: {
        size: "8xl",
      },
      sizes: {
        "8xl": {
          fontSize: { base: "5xl", sm: "6xl", lg: "8xl" },
          lineHeight: { base: "3rem", lg: "5rem" },
        },
      },
    },
  },
});

export default theme;
