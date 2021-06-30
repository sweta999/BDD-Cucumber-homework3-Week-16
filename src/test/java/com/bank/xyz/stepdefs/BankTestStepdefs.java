package com.bank.xyz.stepdefs;

import com.bank.xyz.pages.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BankTestStepdefs {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }
    @When("^I click on Bank Manager Login tab$")
    public void iClickOnBankManagerLoginTab() {
        new HomePage().clickOnBankManagerLoginButton();
    }
    @And("^I click on Add Customer tab$")
    public void iClickOnAddCustomerTab() {
        new BankManagerLoginPage().clickOnAddCustomer();
    }
    @And("^I enter FirstName \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) {
        new AddCustomerPage().setEnterFirstName(firstname);
    }
    @And("^I enter LastName \"([^\"]*)\"$")
    public void iEnterLastName(String lastname) {
        new AddCustomerPage().setEnterLastName(lastname);
    }
    @And("^I enter PostCode \"([^\"]*)\"$")
    public void iEnterPostCode(String postcode) {
        new AddCustomerPage().setEnterPostCode(postcode);
    }
    @And("^I click on Add Customer button$")
    public void iClickOnAddCustomerButton() throws InterruptedException {
        new AddCustomerPage().setClickAddCustomerButton();
        Thread.sleep(1000);
    }
    @Then("^Verify message Customer added successfully \"([^\"]*)\"$")
    public void verifyMessageCustomerAddedSuccessfully(String verifymsg)  {
        Assert.assertEquals("Customer added successfully with customer id :6", new AddCustomerPage().setVerifyMsgCustomerAddedSuccessfully());
        //Assert.assertTrue("Customer added successfully", new AddCustomerPage().setVerifyMsgCustomerAddedSuccessfully().contains("Customer added successfully"));
        System.out.println(new AddCustomerPage().setVerifyMsgCustomerAddedSuccessfully());
    }
    @And("^I click on OK button$")
    public void iClickOnOKButton()  {
        new AddCustomerPage().setClickOKButton();
    }
    @And("^I click on Home button$")
    public void iClickOnHomeButton() {
        new HomePage().clickHomeButton();
    }
    @And("^I click on Open Account tab$")
    public void iClickOnOpenAccountTab() {
        new BankManagerLoginPage().clickOnOpenAccount();
    }
    @And("^I search for customer that created in first test \"([^\"]*)\"$")
    public void iSearchForCustomerThatCreatedInFirstTest(String name)  {
        new OpenAccountPage().setSelectCustomerName("Kanan Joshi");
    }
    @And("^I search for currency Pound \"([^\"]*)\"$")
    public void iSearchForCurrencyPound(String currency)  {
       new OpenAccountPage().setSelectCurrency("Pound");
    }
    @And("^I click on process button$")
    public void iClickOnProcessButton() throws InterruptedException {
        new OpenAccountPage().setClickProcessButton();
        Thread.sleep((1000));
    }
    @Then("^Verify message Account created successfully \"([^\"]*)\"$")
    public void verifyMessageAccountCreatedSuccessfully(String verifyAccountCreated) {
        Assert.assertEquals("Account created successfully with account Number :1016" , new AddCustomerPage().setVerifyMsgCustomerAddedSuccessfully());
        //Assert.assertTrue("Customer added successfully", new AddCustomerPage().setVerifyMsgCustomerAddedSuccessfully().contains("Customer added successfully"));
        System.out.println(new AddCustomerPage().setVerifyMsgCustomerAddedSuccessfully());
    }
    @And("^I click on Customer Login tab$")
    public void iClickOnCustomerLoginTab() {
        new HomePage().clickOnCustomerLoginButton();
    }
    @And("^I search for customer created \"([^\"]*)\"$")
    public void iSearchForCustomerCreated(String CustomerName) {
        new CustomerLoginPage().setSearchYourName("Kanan Joshi");
    }
    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().clickLoginButton();
    }
    @Then("^Verify Logout tab is displayed \"([^\"]*)\"$")
    public void verifyLogoutTabIsDisplayed(String verifylogout)  {
        Assert.assertEquals("Logout", new CustomerLoginPage().verifyLogoutButton());
    }
    @And("^I click on Logout button$")
    public void iClickOnLogoutButton() {
        new CustomerLoginPage().clickLogoutButton();
    }
    @Then("^Verify Your Name text is displayed \"([^\"]*)\"$")
    public void verifyYourNameTextIsDisplayed(String verifyNameText)  {
       Assert.assertEquals("Your Name :",new CustomerLoginPage().verifyYourNameText());
    }
    @And("^I click on Deposit tab$")
    public void iClickOnDepositTab() {
        new AccountPage().setDepositTab();
    }
    @And("^I enter amount (\\d+) \"([^\"]*)\"$")
    public void iEnterAmount(int arg0, String amount)  {
        new AccountPage().setEnterAmount("100");
    }
    @And("^I click on Deposit button$")
    public void iClickOnDepositButton() {
        new AccountPage().setDepositButton();
    }
    @Then("^Verify deposit message Transaction Successful \"([^\"]*)\"$")
    public void verifyDepositMessageTransactionSuccessful(String verifyDepTransSuccessful)  {
       Assert.assertEquals("Deposit Successful", new AccountPage().setDepositSuccessful());
    }
    @And("^I click on Withdrawl tab$")
    public void iClickOnWithdrawlTab() {
        new AccountPage().setWithdrawTab();
    }
    @And("^I enter amount (\\d+) for withdrawl  \"([^\"]*)\"$")
    public void iEnterAmountForWithdrawl(int arg0, String withdrawlamount)  {
        new AccountPage().setEnterAmount("50");
    }
    @And("^I click on Withdrawl button$")
    public void iClickOnWithdrawlButton() {
        new AccountPage().setWithdrawButton();
    }
    @Then("^Verify message Transaction Successful \"([^\"]*)\"$")
    public void verifyMessageTransactionSuccessful(String verifyWithdrawTransSuccessful)  {
        Assert.assertEquals("Transaction successful", new AccountPage().setWithdrawlSuccessful());
    }


}
