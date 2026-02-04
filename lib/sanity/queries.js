export const NavigationDesktop = `
  *[_type == "navigationDesktop"][0]{
    logo {
      image,
      alt
    },
    menu[] {
      label,
      link
    },
    ctaButton {
      label,
      link
    }
  }
`;

export const HomePage = `
  *[_type == "homePage"][0]{
    heroSection {
      title,
      description,
      scrollDown,
      image,
      imageAlt
    }
  }
`;
