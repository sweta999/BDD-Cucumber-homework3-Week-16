package com.bank.xyz.pages;

import com.bank.xyz.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Home')]")
    WebElement homebutton;
    @FindBy(xpath = "//button[contains(text(),'Bank Manager Login')]")
    WebElement bankManagerLoginButton;
    @FindBy(xpath = "//button[contains(text(),'Customer Login')]")
    WebElement customerLoginButton;

    public void clickHomeButton() {
        mouseHoverToElementAndClick(homebutton);
        log.info(("Clicking on Home button : " + homebutton.toString()));
    }
    public void clickOnBankManagerLoginButton() {
        mouseHoverToElementAndClick(bankManagerLoginButton);
        log.info(("Clicking on Bank Manager login button : " + bankManagerLoginButton.toString()));
    }
    public void clickOnCustomerLoginButton() {
        mouseHoverToElementAndClick(customerLoginButton);
        log.info(("Clicking on Customer login button : " + customerLoginButton.toString()));
    }

}
