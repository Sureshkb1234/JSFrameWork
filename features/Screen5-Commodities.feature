@no
Feature: Screen level validations for Is the vehicle carrying any of the following goods that require special documentation
As a registered user
I must be able to select the goods that require special documentation
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with an empty vehicle when departing from Great Britain, navigates to What is the commodities screen and user enters Registration number in the field
	Given I am on home page
	And I select the response as "Yes" as user is displayed with the question Do you have an MRN from an import declaration or TAD
    And I click Continue button
	And I select the response as "<Commodity Type>" as user is displayed with the question Is the vehicle carrying any of the following goods
	And I click Continue button
    Then I see "<Expected Question>"

    Examples:
	| Commodity Type | Expected Question |
	| Live animals | Do you have the necessary Export Health Certificates (EHCs) stamped and ready for inspection? |
	| Animal products | Do you have the necessary Export Health Certificates (EHCs) stamped and ready for inspection? |
	| Fishery products | Do you have the necessary Export Health Certificates (EHCs) stamped and ready for inspection? |
	| Plant and plant based products | Do you have all necessary Phytosanitary documents for regulated plants/plant products? |
    | Other restricted goods | Are you carrying the required documents for any restricted goods? |
    | None of the above | To which email address should we send the permit? |