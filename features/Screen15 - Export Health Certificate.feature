@no
Feature: Screen level validations for Do you have the necessary Export Health Certificates
As a registered user
I must be able to select the goods that require special documentation
So that, I can proceed further and fill the necessary details
	
Scenario Outline:  User is in home page screen with an empty vehicle when departing from Great Britain, navigates to Do you have the necessary Export Health Certificates screen and user enters Registration number in the field
	Given I am on home page
	And I select the response as "Yes" as user is displayed with the question Do you have an MRN from an import declaration or TAD
    And I click Continue button
	And I select the response as "<Commodity Type>" as user is displayed with the question Is the vehicle carrying any of the following goods
	And I click Continue button
    And I select the response as "<Response>" as user is displayed with the question Do you have the necessary Export Health Certificates
    And I click Continue button
    Then I see "<Expected Question>"

    Examples:
	| Commodity Type | Response | Expected Question |
	| Live animals | Yes | Do you have an animal transport certificate or journey log (from both Great Britain and the European Union)? |
	| Animal products | Yes | To which email address should we send the permit? |
	| Fishery products | Yes | Has a catch certificate been validated for all fisheries products that require one? |
    | Live animals | No | Do you have an animal transport certificate or journey log (from both Great Britain and the European Union)? |
	| Animal products | No | Not border compliant |
	| Fishery products | No | Has a catch certificate been validated for all fisheries products that require one? |
    | Animal products | No, I am carrying another (commercial) document for non-harmonised products | To which email address should we send the permit? |