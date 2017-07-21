package com.github.steps;

import com.github.pages.GitHubHomePage;
import com.github.pages.GitHubLoginPage;
import com.github.pages.UserDashBoardPage;
import com.github.utils.Constants;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class gitHub_SignIn_stepDefination {
	
	private String browser = Constants.FF_BROWSER;
	
	@Given("^User is on the github homepage$")
	public void goToHomePage() throws Throwable {
		GitHubHomePage gitHubHomePage = new GitHubHomePage();
		gitHubHomePage.openHomPage(browser);
		gitHubHomePage.verifyCurrentUrl(browser);
		gitHubHomePage.verifyHomPage(browser);
	}

	@When("^user clicks on \"([^\"]*)\" link$")
	public void clickOnLink(String actionLink) throws Throwable {
		GitHubHomePage gitHubHomePage = new GitHubHomePage();
		if(null != actionLink && actionLink.equals(Constants.SIGNIN)){
		gitHubHomePage.clickOnSignIn(browser);
		}
	}
	
	@When("^user enters SigIn credentials as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void setUserLogin(String username, String password) throws Throwable {
		GitHubLoginPage gitHubLoginPage = new GitHubLoginPage();
		gitHubLoginPage.setUserLogin(browser, username, password);
	}

	@When("^user clicks on \"([^\"]*)\" button$")
	public void clickOnButton(String actionButton) throws Throwable {
		GitHubLoginPage gitHubLoginPage = new GitHubLoginPage();
		if(null != actionButton && actionButton.equals(Constants.SIGNIN)){
		gitHubLoginPage.clickSignInButton(browser);
		}
	   
	}

	@Then("^user should be able to see \"([^\"]*)\" button$")
	public void verifyLoginSuccessPage(String expectedVal) throws Throwable {
		com.github.pages.UserDashBoardPage userDashBoardPage = new UserDashBoardPage();
		userDashBoardPage.verifyDashBoardPageisDiscplayed(browser,expectedVal);
	   
	}
	
	@Then("^user should be able to see \"([^\"]*)\" error message$")
	public void verifyInvalidLoginMsg(String errorMsg) throws Throwable {
		GitHubLoginPage gitHubLoginPage = new GitHubLoginPage();
		gitHubLoginPage.verifyInvalidLoginMsg(browser, errorMsg);
	}
}
