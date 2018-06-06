@login2
Feature: Multiple Login BMS App
#Parameterizing with Example Keyword
Scenario Outline: To Verify Multiple Login In BMS 
	Given User is on Login Page 
	When User Enters Username "<username>"
	When User Enters Password "<password>"
	And User Clicks on Sign In Button
	#Then User Lands On Provider Home Screen
	Examples:
    | username   | password |
    | username | password |
    | invalidusername | password |