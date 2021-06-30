package com.bank.xyz.pages;

import com.bank.xyz.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddCustomerPage extends Utility {

    //Logger is class of Log4j. log is object created
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//div[@class='form-group']/input[@placeholder='First Name']")
    WebElement enterFirstName;
    @FindBy(xpath = "//div[@class='form-group']/input[@placeholder='Last Name']")
    WebElement enterLastName;
    @FindBy(xpath = "//div[@class='form-group']/input[@placeholder='Post Code']")
    WebElement enterPostCode;
    @FindBy(xpath = "//div[@class='ng-scope']/div/form/button")
    WebElement clickAddCustomerButton;
    //button[@type='submit']

    public void setEnterFirstName(String firstName) {
        sendTextToElement(enterFirstName, firstName);
        log.info(("Enter First Name : " + enterFirstName.toString()));
    }

    public void setEnterLastName(String lastName) {
        sendTextToElement(enterLastName, lastName);
        log.info(("Enter Last Name : " + enterLastName.toString()));
    }

    public void setEnterPostCode(String postCode) {
        sendTextToElement(enterPostCode, postCode);
        log.info(("Enter Postcode : " + enterPostCode.toString()));
    }

    public void setClickAddCustomerButton()  {
        clickOnElement(clickAddCustomerButton);
        //log.info("Clicking on Add Customer button : " + clickAddCustomerButton.toString());
    }

    public String setVerifyMsgCustomerAddedSuccessfully()  {
        Alert alert = driver.switchTo().alert();
        String alertMessage = alert.getText();
        return alertMessage;
        //log.info(("Verifying Customer added successfully message : " + .toString()));
    }

    public void setClickOKButton() {
        //log.info(("Clicking on OK button : " + .toString()));
        Alert alert = driver.switchTo().alert();
        alert.accept();

        //OR - below method is also working.
        //String alertMessage = driver.switchTo().alert().getText();
        /* if (alertMessage.equals("Customer added successfully with customer id :6")) {
            alert.accept();
        } else {
            System.out.println("Try again");
        }*/
    }


}
