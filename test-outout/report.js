$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginBMS.feature");
formatter.feature({
  "line": 2,
  "name": "Login BMS App",
  "description": "",
  "id": "login-bms-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 12044226727,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "To Verify Valid Login In BMS",
  "description": "",
  "id": "login-bms-app;to-verify-valid-login-in-bms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters Password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Lands On Provider Home Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 86186651,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Enters_Username()"
});
formatter.result({
  "duration": 6006778164,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Enters_Password()"
});
formatter.result({
  "duration": 104977120,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_Sign_In_Button()"
});
formatter.result({
  "duration": 66744512,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Lands_On_Provider_Home_Screen()"
});
formatter.result({
  "duration": 18271820896,
  "status": "passed"
});
formatter.after({
  "duration": 705415529,
  "status": "passed"
});
formatter.uri("Login_Parameter1.feature");
formatter.feature({
  "line": 2,
  "name": "Invalid Login BMS App",
  "description": "",
  "id": "invalid-login-bms-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login1"
    }
  ]
});
formatter.before({
  "duration": 10752813447,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Parameterizing without Example Keyword"
    }
  ],
  "line": 4,
  "name": "To Verify InValid Login In BMS",
  "description": "",
  "id": "invalid-login-bms-app;to-verify-invalid-login-in-bms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username \"invalidusername\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters Password \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 27242115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalidusername",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_Enters_Username(String)"
});
formatter.result({
  "duration": 4919744744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_Enters_Password(String)"
});
formatter.result({
  "duration": 4114101950,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_Sign_In_Button()"
});
formatter.result({
  "duration": 69747953,
  "status": "passed"
});
formatter.after({
  "duration": 660893418,
  "status": "passed"
});
formatter.uri("Login_Parameter2.feature");
formatter.feature({
  "line": 2,
  "name": "Multiple Login BMS App",
  "description": "",
  "id": "multiple-login-bms-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login2"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Parameterizing with Example Keyword"
    }
  ],
  "line": 4,
  "name": "To Verify Multiple Login In BMS",
  "description": "",
  "id": "multiple-login-bms-app;to-verify-multiple-login-in-bms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Sign In Button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 9,
      "value": "#Then User Lands On Provider Home Screen"
    }
  ],
  "line": 10,
  "name": "",
  "description": "",
  "id": "multiple-login-bms-app;to-verify-multiple-login-in-bms;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "multiple-login-bms-app;to-verify-multiple-login-in-bms;;1"
    },
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "multiple-login-bms-app;to-verify-multiple-login-in-bms;;2"
    },
    {
      "cells": [
        "invalidusername",
        "password"
      ],
      "line": 13,
      "id": "multiple-login-bms-app;to-verify-multiple-login-in-bms;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10330960897,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Verify Multiple Login In BMS",
  "description": "",
  "id": "multiple-login-bms-app;to-verify-multiple-login-in-bms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username \"username\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters Password \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 26840976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_Enters_Username(String)"
});
formatter.result({
  "duration": 4810643180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_Enters_Password(String)"
});
formatter.result({
  "duration": 4111877085,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_Sign_In_Button()"
});
formatter.result({
  "duration": 64509801,
  "status": "passed"
});
formatter.after({
  "duration": 639073980,
  "status": "passed"
});
formatter.before({
  "duration": 11398444599,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To Verify Multiple Login In BMS",
  "description": "",
  "id": "multiple-login-bms-app;to-verify-multiple-login-in-bms;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enters Username \"invalidusername\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters Password \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 25037306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalidusername",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_Enters_Username(String)"
});
formatter.result({
  "duration": 4830111575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_Enters_Password(String)"
});
formatter.result({
  "duration": 4105946420,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_Sign_In_Button()"
});
formatter.result({
  "duration": 59079100,
  "status": "passed"
});
formatter.after({
  "duration": 664318055,
  "status": "passed"
});
formatter.uri("Login_Parameter3.feature");
formatter.feature({
  "line": 2,
  "name": "No Ip Active Login BMS App",
  "description": "",
  "id": "no-ip-active-login-bms-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login3"
    }
  ]
});
formatter.before({
  "duration": 11048888698,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Parameterizing with Data Tables in Cucumber"
    }
  ],
  "line": 4,
  "name": "To Verify No Ip Active Cannot Login In BMS",
  "description": "",
  "id": "no-ip-active-login-bms-app;to-verify-no-ip-active-cannot-login-in-bms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "usernameNoIpActive",
        "password"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Sign In Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 25256109,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 8447226449,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_Sign_In_Button()"
});
formatter.result({
  "duration": 60305129,
  "status": "passed"
});
formatter.after({
  "duration": 687385037,
  "status": "passed"
});
formatter.uri("Login_Parameter4.feature");
formatter.feature({
  "line": 2,
  "name": "Customer Login BMS App",
  "description": "",
  "id": "customer-login-bms-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login4"
    }
  ]
});
formatter.before({
  "duration": 11745452536,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Parameterizing with Data Tables with Maps (Header) in Cucumber"
    }
  ],
  "line": 4,
  "name": "To Verify Customer Login In BMS",
  "description": "",
  "id": "customer-login-bms-app;to-verify-customer-login-in-bms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Login Credentials",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "userCustomer",
        "password"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Clicks on Sign In Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Lands On Provider Home Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 25194115,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_Login_Credentials(DataTable)"
});
formatter.result({
  "duration": 4467617829,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_Sign_In_Button()"
});
formatter.result({
  "duration": 74744693,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Lands_On_Provider_Home_Screen()"
});
formatter.result({
  "duration": 17609085519,
  "status": "passed"
});
formatter.after({
  "duration": 651658092,
  "status": "passed"
});
});