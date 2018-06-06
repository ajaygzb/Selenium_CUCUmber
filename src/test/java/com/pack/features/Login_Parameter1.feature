@login1
Feature: Invalid Login BMS App
#Parameterizing without Example Keyword
Scenario: To Verify InValid Login In BMS 
	Given User is on Login Page 
	When User Enters Username "invalidusername"
	When User Enters Password "password"
	And User Clicks on Sign In Button
	#Then User Lands On Provider Home Screen