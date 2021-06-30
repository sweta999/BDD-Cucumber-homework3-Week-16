$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/BankTest.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "As a user I want to navigate to xyz bank website",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Bank Manager should add customer successfully",
  "description": "",
  "id": "bank-test;bank-manager-should-add-customer-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter FirstName \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter PostCode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 14,
  "name": "Verify message Customer added successfully \"\u003cverifymsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "bank-test;bank-manager-should-add-customer-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "verifymsg"
      ],
      "line": 17,
      "id": "bank-test;bank-manager-should-add-customer-successfully;;1"
    },
    {
      "cells": [
        "Kanan",
        "Joshi",
        "HA29HR",
        "Customer added successfully with customer id :6"
      ],
      "line": 18,
      "id": "bank-test;bank-manager-should-add-customer-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27268293400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Bank Manager should add customer successfully",
  "description": "",
  "id": "bank-test;bank-manager-should-add-customer-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter FirstName \"Kanan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName \"Joshi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter PostCode \"HA29HR\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 14,
  "name": "Verify message Customer added successfully \"Customer added successfully with customer id :6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.match({
  "location": "BankTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 810735400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2291701500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 326746700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanan",
      "offset": 19
    }
  ],
  "location": "BankTestStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1934402600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joshi",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 178109700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA29HR",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 181205800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 1559106500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 44
    }
  ],
  "location": "BankTestStepdefs.verifyMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 125246100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 63781100,
  "status": "passed"
});
formatter.after({
  "duration": 2151833600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Bank Manager should open account successfully",
  "description": "",
  "id": "bank-test;bank-manager-should-open-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter FirstName \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter LastName \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter PostCode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 30,
  "name": "Verify message Customer added successfully \"\u003cverifymsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Bank Manager Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Open Account tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I search for customer that created in first test \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I search for currency Pound \"\u003ccurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#    And     Pop up will be displayed"
    }
  ],
  "line": 40,
  "name": "Verify message Account created successfully \"\u003cverifyAccountCreated\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "bank-test;bank-manager-should-open-account-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "verifymsg",
        "verifyAccountCreated"
      ],
      "line": 43,
      "id": "bank-test;bank-manager-should-open-account-successfully;;1"
    },
    {
      "cells": [
        "Kanan",
        "Joshi",
        "HA29HR",
        "Customer added successfully with customer id :6",
        "Account created successfully"
      ],
      "line": 44,
      "id": "bank-test;bank-manager-should-open-account-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7837811800,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Bank Manager should open account successfully",
  "description": "",
  "id": "bank-test;bank-manager-should-open-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter FirstName \"Kanan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter LastName \"Joshi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter PostCode \"HA29HR\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 30,
  "name": "Verify message Customer added successfully \"Customer added successfully with customer id :6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Bank Manager Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on Open Account tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I search for customer that created in first test \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I search for currency Pound \"\u003ccurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#    And     Pop up will be displayed"
    }
  ],
  "line": 40,
  "name": "Verify message Account created successfully \"Account created successfully\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.match({
  "location": "BankTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 42500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1371132000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 2516140600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanan",
      "offset": 19
    }
  ],
  "location": "BankTestStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 273561000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joshi",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 185631500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA29HR",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 222068400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 1130804900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 44
    }
  ],
  "location": "BankTestStepdefs.verifyMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 18600500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 32936200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 309449500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 30458478300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 250806100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccustomerName\u003e",
      "offset": 50
    }
  ],
  "location": "BankTestStepdefs.iSearchForCustomerThatCreatedInFirstTest(String)"
});
formatter.result({
  "duration": 1542590800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccurrency\u003e",
      "offset": 29
    }
  ],
  "location": "BankTestStepdefs.iSearchForCurrencyPound(String)"
});
formatter.result({
  "duration": 273514300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 1133803800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 45
    }
  ],
  "location": "BankTestStepdefs.verifyMessageAccountCreatedSuccessfully(String)"
});
formatter.result({
  "duration": 15112900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 15240900,
  "status": "passed"
});
formatter.after({
  "duration": 2348874000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-test;customer-should-login-and-logout-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Regression1"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter FirstName \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter LastName \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter PostCode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 55,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 56,
  "name": "Verify message Customer added successfully \"\u003cverifymsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I search for customer created \"\u003cCustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Verify Logout tab is displayed \"\u003cverifyLogoutTab\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify Your Name text is displayed \"\u003cverifyYourNameText\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "bank-test;customer-should-login-and-logout-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "verifymsg",
        "verifyYourNameText"
      ],
      "line": 67,
      "id": "bank-test;customer-should-login-and-logout-successfully;;1"
    },
    {
      "cells": [
        "Kanan",
        "Joshi",
        "HA29HR",
        "Customer added successfully with customer id :6",
        "Your Name :"
      ],
      "line": 68,
      "id": "bank-test;customer-should-login-and-logout-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10848523100,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-test;customer-should-login-and-logout-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Regression1"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter FirstName \"Kanan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter LastName \"Joshi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter PostCode \"HA29HR\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 55,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 56,
  "name": "Verify message Customer added successfully \"Customer added successfully with customer id :6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I search for customer created \"\u003cCustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Verify Logout tab is displayed \"\u003cverifyLogoutTab\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Verify Your Name text is displayed \"Your Name :\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1982520400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 414683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanan",
      "offset": 19
    }
  ],
  "location": "BankTestStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 561294600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joshi",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 170023000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA29HR",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 185056300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 1118856300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 44
    }
  ],
  "location": "BankTestStepdefs.verifyMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 16286700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 65637200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 1098919600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 216253900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cCustomerName\u003e",
      "offset": 31
    }
  ],
  "location": "BankTestStepdefs.iSearchForCustomerCreated(String)"
});
formatter.result({
  "duration": 637413100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 144116400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cverifyLogoutTab\u003e",
      "offset": 32
    }
  ],
  "location": "BankTestStepdefs.verifyLogoutTabIsDisplayed(String)"
});
formatter.result({
  "duration": 181772900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 114264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name :",
      "offset": 36
    }
  ],
  "location": "BankTestStepdefs.verifyYourNameTextIsDisplayed(String)"
});
formatter.result({
  "duration": 80412900,
  "status": "passed"
});
formatter.after({
  "duration": 1424277700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-test;customer-should-deposit-money-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@Regression2"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I enter FirstName \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter LastName \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter PostCode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 81,
  "name": "Verify message Customer added successfully \"\u003cverifymsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on Bank Manager Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click on Open Account tab",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I search for customer that created in first test \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I search for currency Pound \"\u003ccurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 90,
      "value": "#    And     Pop up will be displayed"
    }
  ],
  "line": 91,
  "name": "Verify message Account created successfully \"\u003cverifyAccountCreated\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I search for customer created \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter amount 100 \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Verify deposit message Transaction Successful \"\u003cverifyDepTransSuccessful\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "bank-test;customer-should-deposit-money-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "verifymsg",
        "verifyAccountCreated",
        "verifyDepTransSuccessful"
      ],
      "line": 103,
      "id": "bank-test;customer-should-deposit-money-successfully;;1"
    },
    {
      "cells": [
        "Kanan",
        "Joshi",
        "HA29HR",
        "Customer added successfully with customer id :6",
        "Account created successfully",
        "Deposit Successful"
      ],
      "line": 104,
      "id": "bank-test;customer-should-deposit-money-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5971785700,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-test;customer-should-deposit-money-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@Regression2"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I enter FirstName \"Kanan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter LastName \"Joshi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter PostCode \"HA29HR\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 81,
  "name": "Verify message Customer added successfully \"Customer added successfully with customer id :6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on Bank Manager Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click on Open Account tab",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I search for customer that created in first test \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I search for currency Pound \"\u003ccurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 90,
      "value": "#    And     Pop up will be displayed"
    }
  ],
  "line": 91,
  "name": "Verify message Account created successfully \"Account created successfully\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I search for customer created \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter amount 100 \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Verify deposit message Transaction Successful \"Deposit Successful\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 61800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 1067551300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 1300716600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanan",
      "offset": 19
    }
  ],
  "location": "BankTestStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 198483500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joshi",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 223773000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA29HR",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 212435700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 1140582700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 44
    }
  ],
  "location": "BankTestStepdefs.verifyMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 13986800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 25482200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 287433500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 30220857000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 216029300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccustomerName\u003e",
      "offset": 50
    }
  ],
  "location": "BankTestStepdefs.iSearchForCustomerThatCreatedInFirstTest(String)"
});
formatter.result({
  "duration": 4091948000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccurrency\u003e",
      "offset": 29
    }
  ],
  "location": "BankTestStepdefs.iSearchForCurrencyPound(String)"
});
formatter.result({
  "duration": 357315300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 1137244600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 45
    }
  ],
  "location": "BankTestStepdefs.verifyMessageAccountCreatedSuccessfully(String)"
});
formatter.result({
  "duration": 14506900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 20435300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 258060600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 196485500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccustomerName\u003e",
      "offset": 31
    }
  ],
  "location": "BankTestStepdefs.iSearchForCustomerCreated(String)"
});
formatter.result({
  "duration": 747392800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 180507700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 371168000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    },
    {
      "val": "\u003camount\u003e",
      "offset": 20
    }
  ],
  "location": "BankTestStepdefs.iEnterAmount(int,String)"
});
formatter.result({
  "duration": 454485000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 151522200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 47
    }
  ],
  "location": "BankTestStepdefs.verifyDepositMessageTransactionSuccessful(String)"
});
formatter.result({
  "duration": 232499100,
  "status": "passed"
});
formatter.after({
  "duration": 1539892800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-test;customer-should-withdraw-money-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter FirstName \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter LastName \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I enter PostCode \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 115,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 116,
  "name": "Verify message Customer added successfully \"\u003cverifymsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I click on Bank Manager Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click on Open Account tab",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I search for customer that created in first test \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I search for currency Pound \"\u003ccurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 125,
      "value": "#    And     Pop up will be displayed"
    }
  ],
  "line": 126,
  "name": "Verify message Account created successfully \"\u003cverifyAccountCreated\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I search for customer created \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter amount 100 \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Verify deposit message Transaction Successful \"\u003cverifyDepTransSuccessful\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I click on Customer Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "I search for customer created \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I click on Withdrawl tab",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I enter amount 50 for withdrawl  \"\u003cwithdrawlamount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I click on Withdrawl button",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "Verify message Transaction Successful \"\u003cverifyWithdrawTransSuccessful\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 146,
  "name": "",
  "description": "",
  "id": "bank-test;customer-should-withdraw-money-successfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "postcode",
        "verifymsg",
        "verifyAccountCreated",
        "verifyDepTransSuccessful",
        "verifyWithdrawTransSuccessful"
      ],
      "line": 147,
      "id": "bank-test;customer-should-withdraw-money-successfully;;1"
    },
    {
      "cells": [
        "Kanan",
        "Joshi",
        "HA29HR",
        "Customer added successfully with customer id :6",
        "Account created successfully",
        "Deposit Successful",
        "Transaction successful"
      ],
      "line": 148,
      "id": "bank-test;customer-should-withdraw-money-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11265611200,
  "status": "passed"
});
formatter.scenario({
  "line": 148,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-test;customer-should-withdraw-money-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "I click on Bank Manager Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "I click on Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I enter FirstName \"Kanan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I enter LastName \"Joshi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I enter PostCode \"HA29HR\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 115,
      "value": "#    And     Pop up is displayed"
    }
  ],
  "line": 116,
  "name": "Verify message Customer added successfully \"Customer added successfully with customer id :6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I click on Bank Manager Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click on Open Account tab",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I search for customer that created in first test \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I search for currency Pound \"\u003ccurrency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I click on process button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 125,
      "value": "#    And     Pop up will be displayed"
    }
  ],
  "line": 126,
  "name": "Verify message Account created successfully \"Account created successfully\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I click on Customer Login tab",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I search for customer created \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter amount 100 \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Verify deposit message Transaction Successful \"Deposit Successful\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I click on Customer Login tab",
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "I search for customer created \"\u003ccustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I click on Withdrawl tab",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I enter amount 50 for withdrawl  \"\u003cwithdrawlamount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I click on Withdrawl button",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "Verify message Transaction Successful \"Transaction successful\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 2631834500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 656605400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanan",
      "offset": 19
    }
  ],
  "location": "BankTestStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 2255047300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joshi",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 168316800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA29HR",
      "offset": 18
    }
  ],
  "location": "BankTestStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 186049000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 1127396500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 44
    }
  ],
  "location": "BankTestStepdefs.verifyMessageCustomerAddedSuccessfully(String)"
});
formatter.result({
  "duration": 13869200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 19239000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 284400500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 30240397100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 249235300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccustomerName\u003e",
      "offset": 50
    }
  ],
  "location": "BankTestStepdefs.iSearchForCustomerThatCreatedInFirstTest(String)"
});
formatter.result({
  "duration": 2148790100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccurrency\u003e",
      "offset": 29
    }
  ],
  "location": "BankTestStepdefs.iSearchForCurrencyPound(String)"
});
formatter.result({
  "duration": 711834600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 1157243200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 45
    }
  ],
  "location": "BankTestStepdefs.verifyMessageAccountCreatedSuccessfully(String)"
});
formatter.result({
  "duration": 13270300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnOKButton()"
});
formatter.result({
  "duration": 17641000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 248145400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 195745500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccustomerName\u003e",
      "offset": 31
    }
  ],
  "location": "BankTestStepdefs.iSearchForCustomerCreated(String)"
});
formatter.result({
  "duration": 717363200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 128064500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnDepositTab()"
});
formatter.result({
  "duration": 869252400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    },
    {
      "val": "\u003camount\u003e",
      "offset": 20
    }
  ],
  "location": "BankTestStepdefs.iEnterAmount(int,String)"
});
formatter.result({
  "duration": 853710100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 237124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 47
    }
  ],
  "location": "BankTestStepdefs.verifyDepositMessageTransactionSuccessful(String)"
});
formatter.result({
  "duration": 260418700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnHomeButton()"
});
formatter.result({
  "duration": 227591500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 30647059700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccustomerName\u003e",
      "offset": 31
    }
  ],
  "location": "BankTestStepdefs.iSearchForCustomerCreated(String)"
});
formatter.result({
  "duration": 442847100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 30207765000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnWithdrawlTab()"
});
formatter.result({
  "duration": 156853000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    },
    {
      "val": "\u003cwithdrawlamount\u003e",
      "offset": 34
    }
  ],
  "location": "BankTestStepdefs.iEnterAmountForWithdrawl(int,String)"
});
formatter.result({
  "duration": 460302100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStepdefs.iClickOnWithdrawlButton()"
});
formatter.result({
  "duration": 134505100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 39
    }
  ],
  "location": "BankTestStepdefs.verifyMessageTransactionSuccessful(String)"
});
formatter.result({
  "duration": 86282700,
  "status": "passed"
});
formatter.after({
  "duration": 1183719400,
  "status": "passed"
});
});