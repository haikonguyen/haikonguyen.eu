import csMainTranslation from "./csMainTranslation";
import csHomePage from "./csHomePage.json";
import csAboutPage from "./csAboutPage.json";

const csGlobals = {
  ...csMainTranslation,
  ...csHomePage,
  ...csAboutPage
};

export default csGlobals;
