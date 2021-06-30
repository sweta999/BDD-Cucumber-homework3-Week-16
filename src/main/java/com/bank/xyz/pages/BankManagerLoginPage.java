package com.bank.xyz.pages;

import com.bank.xyz.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BankManagerLoginPage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Add Customer')]")
    WebElement addCustomerButton;
    @FindBy(xpath = "//button[contains(text(),'Open Account')]")
    WebElement openAccount;
    @FindBy(xpath = "//button[contains(text(),'Customers')]")
    WebElement customersButton;




    public void clickOnAddCustomer() {
        mouseHoverToElementAndClick(addCustomerButton);
        log.info(("Clicking on Add Customer button : " + addCustomerButton.toString()));
    }

    public void clickOnOpenAccount() {
        mouseHoverToElementAndClick(openAccount);
        log.info(("Clicking on Open account : " + openAccount.toString()));
    }

    public void clickOnCustomersButton() {
        mouseHoverToElementAndClick(customersButton);
        log.info(("Clicking on Customers button : " + customersButton.toString()));
    }

}