@no
Feature: Screen level validations for Will the vehicle be empty when departing Great Britain?

As a registered user
I must be able to select whether the vehicle be empty or not when departing Great Britain
So that, I can proceed further and fill the necessary details

Scenario Outline:  User is in home page and navigates to Will the vehicle be empty when departing Great Britain? and user selects Yes
	Given I am on home page
    And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "<Response>" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
	Then I see "<Expected Result>"

Examples:
	| Response | Expected Result |
	| Yes | To which email address should we send the permit? |
	| No | Is the vehicle only carrying postal mail |
	| No option to be selected | Select yes if the vehicle will be empty when departing Great Britain |