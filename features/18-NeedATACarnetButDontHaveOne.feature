@norun
Feature: End to end Scenario of a user to get a Border compliant status without ATA Carnet
As a registered user
I must be able to complete the border compliance self assessment
So that, I do not receive any electronic kent access permit for the HGV to carry along.

	
Scenario Outline:  Travelling via Dover without ATA Carnet document
	Given I am on home page
    And I see "Welcome to the Haulier service" in title
    And I click Start button in HomePage
	And I see "Sign in with your username and password"
    And I sign in as "sf-standard-user-company-a"
	When I check "Port of Dover or Eurotunnel" option in Departing Port In GB
	And I click Continue button
    And I enter "valid" day, "valid" month, "valid" year of "future" date and "valid" time in Date of Arrival at Port
    And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "<Need Permit>" as user is displayed with the question Do you need an ATA Carnet because you are bringing some goods back
	And I click Continue button
	And I select the response as "None of the above" as user is displayed with the question Is the vehicle carrying any of the following goods
	And I click Continue button
	And I enter the cab registration number as user is displayed with the question What is the cab's registration number
	And I click Continue button
	And I click "Accepts and Send" button in check your answers page
	Then the user to be displayed with screen saying "<Permit Result>"
	
	Examples:
	| Need Permit | Permit Result |
	| No, I dont need one | Permit issued |
	| Yes, I have a stamped one | Permit issued |
	| Yes, but I need to get it stamped | Conditional permit issued |
	| Yes, but I dont have one | No permit issued |