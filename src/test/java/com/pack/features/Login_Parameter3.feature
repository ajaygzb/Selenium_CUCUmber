@login3
Feature: No Ip Active Login BMS App
#Parameterizing with Data Tables in Cucumber
Scenario: To Verify No Ip Active Cannot Login In BMS 
	Given User is on Login Page 
	When User enters Credentials to LogIn
    | usernameNoIpActive | password |
	And User Clicks on Sign In Button
	#Then User Lands On Provider Home Screen