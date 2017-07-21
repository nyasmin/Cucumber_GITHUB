Feature: Test Sign in functionality of githu.com website

@validLogin
Scenario: User should be able to sign in with correct credentials
Given User is on the github homepage
When user clicks on "signin" link
And user enters SigIn credentials as "nyasmin" and "Password@1"
And user clicks on "signin" button
Then user should be able to see "Start a project" button

@InvalidLogin
Scenario: User should be not be able to sign in with incorrect credentials
Given User is on the github homepage
When user clicks on "signin" link
And user enters SigIn credentials as "nyasmin123" and "INCORRECTPWD"
And user clicks on "signin" button
Then user should be able to see "Incorrect username or password." error message


@ddInvalidLogin
Scenario Outline: User should be able to sign in with correct credentials
Given User is on the github homepage
When user clicks on "signin" link
And user enters SigIn credentials as "<User>" and "<Pwd>"
And user clicks on "signin" button
Then user should be able to see "Incorrect username or password." error message
Examples:
    | User	 	   |Pwd					 	  |
    | nyasmin 	 |  INCORRECTPWD  |
    | nyasmin123 |  Password@1    |
  