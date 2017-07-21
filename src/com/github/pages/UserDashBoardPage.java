package com.github.pages;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.github.utils.WebDriverUtils;
import com.github.utils.WebElementUtils;

public class UserDashBoardPage {
	
	public void verifyDashBoardPageisDiscplayed(String browser, String expectedVal){
		WebElementUtils.waitUntilElementIsVisible(By.xpath("html/body/div[4]/div[1]/div[1]/div/div/a[2]"),browser);
		if(WebDriverUtils.getWebDriver(browser).findElement(By.xpath("html/body/div[4]/div[1]/div[1]/div/div/a[2]")).isDisplayed()){
		String actualText = WebDriverUtils.getWebDriver(browser).findElement(By.xpath("html/body/div[4]/div[1]/div[1]/div/div/a[2]")).getText();
		Assert.assertEquals(expectedVal, actualText);
		}
	}

}
