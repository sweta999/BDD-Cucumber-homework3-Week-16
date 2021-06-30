package com.bank.xyz.pages;

import com.bank.xyz.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountPage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[3]/button[2]")//div[@class='center']/button[2]
    WebElement depositTab;
    @FindBy(xpath = "//div[@class='form-group']/input")
    WebElement enterAmount;
    @FindBy(xpath = "//div[@class='container-fluid mainBox ng-scope']/div/form/button")
    WebElement depositButton;
    @FindBy(xpath = "//span[contains(text(),'Deposit Successful')]")
    WebElement depositSuccessful;
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[3]/button[3]")
    WebElement withdrawlTab;
    @FindBy(xpath = "//div[@class='container-fluid mainBox ng-scope']/div/form/button")
    WebElement withdrawButton;
    @FindBy(xpath = "//span[contains(text(),'Transaction successful')]")
    WebElement transactionSuccessful;

    public void setDepositTab() {
        clickOnElement(depositTab);
        log.info(("Clicking on Deposit tab : " + depositTab.toString()));
    }
    public void setEnterAmount(String amount) {
        sendTextToElement(enterAmount,amount);
        log.info(("Enter Amount for Deposit : " + enterAmount.toString()));
    }
    public void setDepositButton() {
        clickOnElement(depositButton);
        log.info(("Clicking on Deposit button : " + depositButton.toString()));
    }
    public String setDepositSuccessful() {
        log.info(("Verify Deposit is Successful : " + depositSuccessful.toString()));
        return getTextFromElement(depositSuccessful);
    }
    public void setWithdrawTab() {
        clickOnElement(withdrawlTab);
        log.info(("Clicking on Withdrawl tab : " + withdrawlTab.toString()));
    }
    public void setWithdrawButton() {
        clickOnElement(withdrawButton);
        log.info(("Clicking on Withdraw button : " + withdrawButton.toString()));
    }
    public String setWithdrawlSuccessful() {
        log.info(("Verify Withdrawl is Successful : " + transactionSuccessful.toString()));
        return getTextFromElement(transactionSuccessful);
    }

}
