@no
Feature: Screen level validations for Is the vehicle carrying exclusively poultry under 72 hours old

As a registered user
I must be able to select whether I  have a Animal Transport certificate for all live animals
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with live animals when departing from Great Britain, navigates to Is the vehicle carrying exclusively poultry under 72 hours old
	Given I am on home page
	And I select the response as "Yes" as user is displayed with the question Do you have an MRN from an import declaration or TAD
    And I click Continue button
	And I select the response as "Live animals" as user is displayed with the question Is the vehicle carrying any of the following goods
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Do you have the necessary Export Health Certificates
    And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Do you have Animal Transport certificate
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "valid" year of "future" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    And I enter the cab registration number as "CV2 2356" user is displayed with the question What is the cab's registration number
    And I click Continue button
    And I select the response as "<Response>" as user is displayed with the question Is the vehicle carrying exclusively poultry under 72 hours old
	And I click Continue button
    Then I see "<Expected Result>"


Examples:
	| Response | Expected Result |
	| Yes | Check your answers before sending your application |
	| No | Check your answers before sending your application |
	| No option to be selected | Select yes if the vehicle carrying exclusively poultry under 72 hours old |