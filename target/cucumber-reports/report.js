$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gitHub_SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Test Sign in functionality of githu.com website",
  "description": "",
  "id": "test-sign-in-functionality-of-githu.com-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "User should be able to sign in with correct credentials",
  "description": "",
  "id": "test-sign-in-functionality-of-githu.com-website;user-should-be-able-to-sign-in-with-correct-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ddInvalidLogin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user clicks on \"signin\" link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enters SigIn credentials as \"\u003cUser\u003e\" and \"\u003cPwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on \"signin\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should be able to see \"Incorrect username or password.\" error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "test-sign-in-functionality-of-githu.com-website;user-should-be-able-to-sign-in-with-correct-credentials;",
  "rows": [
    {
      "cells": [
        "User",
        "Pwd"
      ],
      "line": 28,
      "id": "test-sign-in-functionality-of-githu.com-website;user-should-be-able-to-sign-in-with-correct-credentials;;1"
    },
    {
      "cells": [
        "nyasmin",
        "INCORRECTPWD"
      ],
      "line": 29,
      "id": "test-sign-in-functionality-of-githu.com-website;user-should-be-able-to-sign-in-with-correct-credentials;;2"
    },
    {
      "cells": [
        "nyasmin123",
        "Password@1"
      ],
      "line": 30,
      "id": "test-sign-in-functionality-of-githu.com-website;user-should-be-able-to-sign-in-with-correct-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "User should be able to sign in with correct credentials",
  "description": "",
  "id": "test-sign-in-functionality-of-githu.com-website;user-should-be-able-to-sign-in-with-correct-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ddInvalidLogin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user clicks on \"signin\" link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enters SigIn credentials as \"nyasmin\" and \"INCORRECTPWD\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on \"signin\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should be able to see \"Incorrect username or password.\" error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gitHub_SignIn_stepDefination.user_is_on_the_github_homepage()"
});
formatter.result({
  "duration": 10178002353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 16
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 701040975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nyasmin",
      "offset": 34
    },
    {
      "val": "INCORRECTPWD",
      "offset": 48
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_enters_SigIn_credentials_as_and(String,String)"
});
formatter.result({
  "duration": 160287750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 16
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 1204531864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username or password.",
      "offset": 28
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_should_be_able_to_see_error_message(String)"
});
formatter.result({
  "duration": 193986906,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should be able to sign in with correct credentials",
  "description": "",
  "id": "test-sign-in-functionality-of-githu.com-website;user-should-be-able-to-sign-in-with-correct-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@ddInvalidLogin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user clicks on \"signin\" link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user enters SigIn credentials as \"nyasmin123\" and \"Password@1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks on \"signin\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user should be able to see \"Incorrect username or password.\" error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gitHub_SignIn_stepDefination.user_is_on_the_github_homepage()"
});
formatter.result({
  "duration": 905037359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 16
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_clicks_on_link(String)"
});
formatter.result({
  "duration": 703786207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nyasmin123",
      "offset": 34
    },
    {
      "val": "Password@1",
      "offset": 51
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_enters_SigIn_credentials_as_and(String,String)"
});
formatter.result({
  "duration": 173363748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signin",
      "offset": 16
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 651424647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect username or password.",
      "offset": 28
    }
  ],
  "location": "gitHub_SignIn_stepDefination.user_should_be_able_to_see_error_message(String)"
});
formatter.result({
  "duration": 102415198,
  "status": "passed"
});
});