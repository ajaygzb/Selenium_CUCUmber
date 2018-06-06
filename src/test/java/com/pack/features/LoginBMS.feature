@login
Feature: Login BMS App

Scenario: To Verify Valid Login In BMS 
	Given User is on Login Page 
	When User Enters Username
	When User Enters Password
	And User Clicks on Sign In Button
	Then User Lands On Provider Home Screen
	 