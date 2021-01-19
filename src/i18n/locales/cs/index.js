import csMainTranslation from "./csMainTranslation";
import csHomePage from "./csHomePage.json";
import csAboutPage from "./csAboutPage.json";
import csContactPage from "./csContactPage.json";

const csGlobals = {
  ...csMainTranslation,
  ...csHomePage,
  ...csAboutPage,
  ...csContactPage
};

export default csGlobals;
