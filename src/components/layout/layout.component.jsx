import React, { useContext } from "react";
import Helmet from "react-helmet";
import Footer from "../footer/footer.component";
import { ThemeContext } from "../../context/theme.context";
import { UiContext } from "../../context/ui.context";
import Nav from "../navigation/navigation.component";
import GoUp from "../navigation/goup.component";
import config from "../../../data/SiteConfig";
import { GlobalStyle } from "./layout.style";

const Layout = (props) => {
  const { children } = props;
  const themeContext = useContext(ThemeContext);
  const { lightTheme, themeToggler } = themeContext;
  const uiContext = useContext(UiContext);
  const { showOnScroll } = uiContext;

  return (
    <>
      <GlobalStyle />
      <Helmet title={config.siteTitle}>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4/css/tachyons.min.css"
        />
      </Helmet>
      {/* <SEO /> */}
      <Nav
        showOnScroll={showOnScroll}
        lightTheme={lightTheme}
        themeToggler={themeToggler}
      />
      {/* Templates & Pages */}
      {children}
      <GoUp lightTheme={lightTheme} showOnScroll={showOnScroll} />
      <Footer />
    </>
  );
};

export default Layout;
