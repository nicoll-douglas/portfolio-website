const components = {
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
      link: {
        color: "primary.5",
        _active: {
          color: "primary.6",
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
};

export default components;
