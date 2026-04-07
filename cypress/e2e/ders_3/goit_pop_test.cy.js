import { Login } from "../../pages/Login";
import { HomePage } from "../../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("GoIT Global - POP Testleri", () => {

  it("Test №1: Standart Kullanıcı", () => {
    loginPage.navigate();
    loginPage.login("user888@gmail.com", "1234567890");
    
    homePage.openMenu();
    homePage.logout();
    loginPage.validateLoginUrl();
  });

  it("Test №2: QA Test Kullanıcısı", () => {
    loginPage.navigate();
    loginPage.login("testowyqa@qa.team", "QA!automation-1");
    
    homePage.openMenu();
    homePage.logout();
    loginPage.validateLoginUrl();
  });

});