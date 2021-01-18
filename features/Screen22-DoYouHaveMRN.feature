@no
Feature: Screen level validations for Do you have an MRN from an import declaration or TAD?

As a registered user
I must be able to select whether the vehicle be empty or not when departing Great Britain
So that, I can proceed further and fill the necessary details

Scenario Outline:  User is in home page and navigates to Do you have an MRN from an import declaration or TAD? and user selects
	Given I am on home page
	And I select the response as "<Response>" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	Then I see "<Expected Result>"

Examples:
	| Response | Expected Result |
	| Yes |Is the vehicle carrying any of the following goods? |
	| No | Are you travelling to an Office of Departure or Authorised Consignor to get a TAD? |
	| No option to be selected | Select yes if you have an EU import document with a barcode for all goods carried |