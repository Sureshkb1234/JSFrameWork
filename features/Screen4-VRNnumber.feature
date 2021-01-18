@no
Feature: Screen level validations for What is the cab's registration number
As a registered user
I must be able to enter my vehicle registration number
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with an empty vehicle when departing from Great Britain, navigates to What is the cab's registration number? screen and user enters Registration number in the field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
    And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
    And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
	And I enter "test@example.co.uk" as Email
    And I click Continue button
	 And I enter "valid" day, "valid" month, "valid" year of "future" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    And I enter the cab registration number as "<VRN Number>" user is displayed with the question What is the cab's registration number
	And I click Continue button
    Then I see "<Expected Validation>"

    Examples:
	| VRN Number | Expected Validation |
	| CBZ 1234 | Check your answers before sending your application |
	| CABG-1234 | Check your answers before sending your application |
	| ADB+8569 | The HGV registration number must only include letters A to Z, numbers 0 to 9, hyphens and spaces |
    | /*!@#$%#@%$89593 | The HGV registration number must only include letters A to Z, numbers 0 to 9, hyphens and spaces |
	|  | Enter the HGV registration number |