@screen
Feature: Screen level validations for Do you have all necessary Phytosanitary documents for regulated plants or plant products

As a registered user
I must be able to select whether I  have Photosanitary Documents for all plant based products
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with Do you have all necessary Phytosanitary documents for regulated plants or plant products
	Given I am on home page
	And I select the response as "Yes" as user is displayed with the question Do you have an MRN from an import declaration or TAD
    And I click Continue button
	And I select the response as "Plant and plant based products" as user is displayed with the question Is the vehicle carrying any of the following goods
	And I click Continue button
    And I select the response as "<Response>" as user is displayed with the question Do you have all necessary Phytosanitary documents for regulated plants or plant products
	And I click Continue button
    Then I see "<Expected Result>"


Examples:
	| Response | Expected Result |
	| Yes | To which email address should we send the permit? |
	| No | Not border compliant |
    | NA | To which email address should we send the permit? |
	| No option to be selected | Select yes if you have all necessary Phytosanitary documents |