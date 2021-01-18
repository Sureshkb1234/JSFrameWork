@no
Feature: Screen level validations for where are you departing from in Great Britain?
As a registered user
I must be able to select the port where the user will be departing from in Great Britain
So that, I can proceed further and fill the necessary details

Scenario:
	Given I am on home page
	When I check "Port of Dover or Eurotunnel" option in Departing Port In GB
	And I click Continue button
    Then I see "Do you have Movement Reference Numbers (MRN) from an EU import declaration or Transit Accompanying Documents (TAD) for all goods carried"

Scenario:
	Given I am on home page
	When I check "Other ports in Great Britain" option in Departing Port In GB
	And I click Continue button
    Then I see "Where in the EU will you arrive?"

Scenario:
	Given I am on home page
	When I check "None" option in Departing Port In GB
	And I click Continue button
    Then I see "Select a port of departure"