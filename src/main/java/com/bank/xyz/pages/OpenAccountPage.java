package com.bank.xyz.pages;

import com.bank.xyz.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class OpenAccountPage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement selectCustomerName;
    @FindBy(xpath = "//select[@id='currency']")
    WebElement selectCurrency;
    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement ProcessButton;


    public void setSelectCustomerName(String value) {
        mouseHoverToElementAndClick(selectCustomerName);
        selectByVisibleTextFromDropDown(selectCustomerName, value);
        log.info(("Select Customer Name : " + selectCustomerName.toString()));
    }
    public void setSelectCurrency(String value) {
        // mouseHoverToElementAndClick(selectCurrency);
        selectByValueFromDropDown(selectCurrency, value);
        log.info(("Select Currency : " + selectCurrency.toString()));
    }

    public void setClickProcessButton() {
        clickOnElement(ProcessButton);
        //log.info(("Clicking Process button : " + ProcessButton.toString()));
    }

    public String setVerifyMsgAccountCreatedSuccessfully() {
        //log.info(("Verifying : " + .toString()));
        Alert alert = driver.switchTo().alert();
        String alertMessage = driver.switchTo().alert().getText();
        return alertMessage;
    }

    public void setClickOKButton() {
        //log.info(("Verifying : " + .toString()));
        Alert alert = driver.switchTo().alert();
        alert.accept();
    }

}