import viMainTranslation from "./viMainTranslation";
import viHomePage from "./viHomePage.json";
import viAboutPage from "./viAboutPage";
import viContactPage from "./viContactPage";

const viGlobals = {
  ...viMainTranslation,
  ...viHomePage,
  ...viAboutPage,
  ...viContactPage
};

export default viGlobals;
