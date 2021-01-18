@norun
Feature: Screen level validations for green declaration
As a registered user
I must be able to enter my vehicle registration number
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with an empty vehicle when departing from Great Britain, receives a green  declaration
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
    And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
    And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter the cab registration number as "CV2 2356" user is displayed with the question What is the cab's registration number
    And I click Continue button
	And I click "Accepts and Send" button in check your answers page
	Then the user to be displayed with screen saying ""