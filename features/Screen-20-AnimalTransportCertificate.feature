@no
Feature: Screen level validations for Do you have a Animal Transport Certificate for all live animals

As a registered user
I must be able to select whether I  have a Animal Transport certificate for all live animals
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with live animals when departing from Great Britain, navigates to What is the cab's registration number?
	Given I am on home page
	And I select the response as "Yes" as user is displayed with the question Do you have an MRN from an import declaration or TAD
    And I click Continue button
	And I select the response as "Live animals" as user is displayed with the question Is the vehicle carrying any of the following goods
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Do you have the necessary Export Health Certificates
    And I click Continue button
	And I select the response as "<Response>" as user is displayed with the question Do you have Animal Transport certificate
	And I click Continue button
	Then I see "<Expected Result>"


Examples:
	| Response | Expected Result |
	| Yes | To which email address should we send the permit? |
	| No | Not border compliant |
	| No option to be selected | Select yes if you have an animal transport certificate or journey log |