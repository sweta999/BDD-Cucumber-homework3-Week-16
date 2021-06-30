package com.bank.xyz.pages;

import com.bank.xyz.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CustomerLoginPage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement searchName;
    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement loginButton;
    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement logoutTab;
    @FindBy(xpath = "//label[contains(text(),'Your Name :')]")
    WebElement verifyText;


    public void setSearchYourName(String value) {
        mouseHoverToElementAndClick(searchName);
        selectByVisibleTextFromDropDown(searchName, value);  //give customer name for value
        log.info(("Clicking on Your Name heading : " + searchName.toString()));
    }
    public void clickLoginButton() {
        clickOnElement(loginButton);
        log.info(("Clicking on Login button : " + loginButton.toString()));
    }
    public String verifyLogoutButton() {
        log.info(("Clicking on Logout button : " + loginButton.toString()));
        return getTextFromElement(logoutTab);
    }
    public void clickLogoutButton() {
        clickOnElement(logoutTab);
        log.info(("Clicking on Logout tab : " + logoutTab.toString()));
    }
    public String verifyYourNameText() {
        log.info(("Verifying Your Name (text) : " + verifyText.toString()));
        return getTextFromElement(verifyText);
    }




}
