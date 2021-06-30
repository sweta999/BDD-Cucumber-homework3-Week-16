Feature: Bank Test
  As a user I want to navigate to xyz bank website

  @Smoke
  Scenario Outline: Bank Manager should add customer successfully
    Given   I am on homepage
    When    I click on Bank Manager Login tab
    And     I click on Add Customer tab
    And     I enter FirstName "<firstname>"
    And     I enter LastName "<lastname>"
    And     I enter PostCode "<postcode>"
    And     I click on Add Customer button
#    And     Pop up is displayed
    Then    Verify message Customer added successfully "<verifymsg>"
    And     I click on OK button
    Examples:
      | firstname | lastname | postcode | verifymsg                                       |
      | Kanan     | Joshi    | HA29HR   | Customer added successfully with customer id :6 |

  @Sanity
  Scenario Outline: Bank Manager should open account successfully
    Given   I am on homepage
    When    I click on Bank Manager Login tab
    And     I click on Add Customer tab
    And     I enter FirstName "<firstname>"
    And     I enter LastName "<lastname>"
    And     I enter PostCode "<postcode>"
    And     I click on Add Customer button
#    And     Pop up is displayed
    Then    Verify message Customer added successfully "<verifymsg>"
    And     I click on OK button
    And     I click on Home button

    And     I click on Bank Manager Login tab
    And     I click on Open Account tab
    And     I search for customer that created in first test "<customerName>"
    And     I search for currency Pound "<currency>"
    And     I click on process button
#    And     Pop up will be displayed
    Then    Verify message Account created successfully "<verifyAccountCreated>"
    And     I click on OK button
    Examples:
      | firstname | lastname | postcode | verifymsg                                       | verifyAccountCreated         |
      | Kanan     | Joshi    | HA29HR   | Customer added successfully with customer id :6 | Account created successfully |

  @Regression1
  Scenario Outline: Customer should login and logout successfully
    Given   I am on homepage
    When    I click on Bank Manager Login tab
    And     I click on Add Customer tab
    And     I enter FirstName "<firstname>"
    And     I enter LastName "<lastname>"
    And     I enter PostCode "<postcode>"
    And     I click on Add Customer button
#    And     Pop up is displayed
    Then    Verify message Customer added successfully "<verifymsg>"
    And     I click on OK button
    And     I click on Home button

    And    I click on Customer Login tab
    And     I search for customer created "<CustomerName>"
    And     I click on Login button
    Then    Verify Logout tab is displayed "<verifyLogoutTab>"
    And     I click on Logout button
    Then    Verify Your Name text is displayed "<verifyYourNameText>"
    Examples:
      | firstname | lastname | postcode | verifymsg                                       | verifyYourNameText |
      | Kanan     | Joshi    | HA29HR   | Customer added successfully with customer id :6 | Your Name :        |


  @Regression2
  Scenario Outline: Customer should deposit money successfully
    Given   I am on homepage
    When    I click on Bank Manager Login tab
    And     I click on Add Customer tab
    And     I enter FirstName "<firstname>"
    And     I enter LastName "<lastname>"
    And     I enter PostCode "<postcode>"
    And     I click on Add Customer button
#    And     Pop up is displayed
    Then    Verify message Customer added successfully "<verifymsg>"
    And     I click on OK button
    And     I click on Home button

    And     I click on Bank Manager Login tab
    And     I click on Open Account tab
    And     I search for customer that created in first test "<customerName>"
    And     I search for currency Pound "<currency>"
    And     I click on process button
#    And     Pop up will be displayed
    Then    Verify message Account created successfully "<verifyAccountCreated>"
    And     I click on OK button
    And     I click on Home button

    And     I click on Customer Login tab
    And     I search for customer created "<customerName>"
    And     I click on Login button
    And     I click on Deposit tab
    And     I enter amount 100 "<amount>"
    And     I click on Deposit button
    Then    Verify deposit message Transaction Successful "<verifyDepTransSuccessful>"
    Examples:
      | firstname | lastname | postcode | verifymsg                                       | verifyAccountCreated         | verifyDepTransSuccessful |
      | Kanan     | Joshi    | HA29HR   | Customer added successfully with customer id :6 | Account created successfully | Deposit Successful       |

  @Regression
  Scenario Outline: Customer should withdraw money successfully
    Given   I am on homepage
    When    I click on Bank Manager Login tab
    And     I click on Add Customer tab
    And     I enter FirstName "<firstname>"
    And     I enter LastName "<lastname>"
    And     I enter PostCode "<postcode>"
    And     I click on Add Customer button
#    And     Pop up is displayed
    Then    Verify message Customer added successfully "<verifymsg>"
    And     I click on OK button
    And     I click on Home button

    And     I click on Bank Manager Login tab
    And     I click on Open Account tab
    And     I search for customer that created in first test "<customerName>"
    And     I search for currency Pound "<currency>"
    And     I click on process button
#    And     Pop up will be displayed
    Then    Verify message Account created successfully "<verifyAccountCreated>"
    And     I click on OK button
    And     I click on Home button

    And     I click on Customer Login tab
    And     I search for customer created "<customerName>"
    And     I click on Login button
    And     I click on Deposit tab
    And     I enter amount 100 "<amount>"
    And     I click on Deposit button
    Then    Verify deposit message Transaction Successful "<verifyDepTransSuccessful>"
    And     I click on Home button

    When    I click on Customer Login tab
    And     I search for customer created "<customerName>"
    And     I click on Login button
    And     I click on Withdrawl tab
    And     I enter amount 50 for withdrawl  "<withdrawlamount>"
    And     I click on Withdrawl button
    Then    Verify message Transaction Successful "<verifyWithdrawTransSuccessful>"
    Examples:
      | firstname | lastname | postcode | verifymsg                                       | verifyAccountCreated         | verifyDepTransSuccessful | verifyWithdrawTransSuccessful |
      | Kanan     | Joshi    | HA29HR   | Customer added successfully with customer id :6 | Account created successfully | Deposit Successful       | Transaction successful        |
