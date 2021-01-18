@no
Feature: Screen level validations for "When is the vehicle planning to arrive at port?
As a registered user
I must be able to select the date when is the vehicle planning to arrive at port
So that, I can proceed further and fill the necessary details

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and user enters future date in valid format
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "valid" year of "future" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "What is the registration number on the front plate of the vehicle"


Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and user enters future date greater than 28 days in valid format
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "valid" year of "greater than 28" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then The permit start date must be a date no later than

    
Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and user enters current date in valid format
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "valid" year of "current" date and "future" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "What is the registration number on the front plate of the vehicle"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and user enters past date in valid format
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "valid" year of "past" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then The permit start date must be a date no later than

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and not to enter day field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "empty" day, "valid" month, "valid" year of "current" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "The permit start date must include a day"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and not to enter month field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "empty" month, "valid" year of "current" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "The permit start date must include a month"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and not to enter year field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "empty" year of "current" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "The permit start date must include a year"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and not to enter day and month field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "empty" day, "empty" month, "valid" year of "current" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "The permit start date must include a day and a month"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and not to enter day and year field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "empty" day, "valid" month, "empty" year of "current" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "The permit start date must include a day and a year"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and not to enter month and year field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "empty" month, "empty" year of "current" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "The permit start date must include a month and a year"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and select time is before the beginning of the current hour
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "empty" year of "current" date and "valid" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "The permit start date must include a year"

Scenario: User is in Start Page and navigates to When is the vehicle planning to arrive at port? and not to select time field
	Given I am on home page
	And I select the response as "No" as user is displayed with the question Do you have an MRN from an import declaration or TAD
	And I click Continue button
	And I select the response as "No" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD
	And I click Continue button
	And I select the response as "Yes" as user is displayed with the question Will the vehicle be empty when departing Great Britain
	And I click Continue button
    And I enter "test@example.co.uk" as Email
    And I click Continue button
    And I enter "valid" day, "valid" month, "valid" year of "valid" date and "empty" as time in Date of Arrival at Port
    And I click Continue button
    Then I see "Select a time for the permit to begin"