@login4
Feature: Customer Login BMS App
#Parameterizing with Data Tables with Maps (Header) in Cucumber
Scenario: To Verify Customer Login In BMS 
	Given User is on Login Page 
	When User enters Login Credentials
	| Username   | Password |
    | userCustomer | password |
	And User Clicks on Sign In Button
	Then User Lands On Provider Home Screen