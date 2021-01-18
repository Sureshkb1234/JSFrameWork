@norun
Feature: Screen level validations for Are you moving the goods with an ATA or TIR carnet

As a registered user
I must be able to select whether the vehicle be empty or not when departing Great Britain
So that, I can proceed further and fill the necessary details

Scenario Outline:  User is in home page and navigates to Are you moving the goods with an ATA or TIR carnet and user selects
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I select the response as "No" as user is displayed with the question Is the vehicle only carrying postal mail
    And I click Continue button
    And I select the response as "<Response>" as user is displayed with the question Are you moving the goods with an ATA or TIR carnet
    And I click Continue button
    Then I see "<Expected Result>"

Examples:
	| Response | Expected Result |
	| Yes, I have a stamped one |Is the vehicle carrying any of the following goods? |
	| Yes, but I need to get it stamped | Is the vehicle carrying any of the following goods? |
    | No | Is the vehicle carrying any of the following goods? |
	| No option to be selected | Select whether you are moving the goods with an ATA or TIR carnet |

    