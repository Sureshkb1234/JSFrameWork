@no
Feature: Screen level validations for Do you have a Catch Certificate for all marine caught fish
As a registered user
I must be able to select whether I  have a catch certificate for all fishery products
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with an empty vehicle when departing from Great Britain, navigates to Do you have a Catch Certificate for all marine caught fish? screen and user enters Registration number in the field
	Given I am on home page
	And I select the response as "Yes" as user is displayed with the question Do you have an MRN from an import declaration or TAD
    And I click Continue button
	And I select the response as "Fishery products" as user is displayed with the question Is the vehicle carrying any of the following goods
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Do you have the necessary Export Health Certificates
    And I click Continue button
	And I select the response as "<Response>" as user is displayed with the question Do you have catch certificate
	And I click Continue button
	Then I see "<Expected Result>"


Examples:
	| Response | Expected Result |
	| Yes | To which email address should we send the permit? |
	| No | Not border compliant |
	| No I dont require |To which email address should we send the permit? |
	| No option to be selected | Select whether you have the validated catch certificates |