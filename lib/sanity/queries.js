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
    },
    aboutSection {
      content1,
      content2,
      button {
        label,
        link
      },
      mainImage,
      mainImageAlt,
      sideImage,
      sideImageAlt
    },
     servicesSection {
      heading,
      description,
      image,
      imageAlt,
      services[] {
        title,
        description,
        button {
          label,
          link
        }
      }
    },
    projectsSection {
      heading,
      description,
      button {
        label,
        link
      },
      projects[] {
        image,
        imageAlt,
        title,
        link
      }
    },
    bigTitlesSection {
      lineOne,
      lineTwo
    },
  }
`;
