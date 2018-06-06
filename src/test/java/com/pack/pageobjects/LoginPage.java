package com.pack.pageobjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.google.common.base.Throwables;
import com.pack.Utils.CommonUtils;

import stepDefinations.Hooks;

public class LoginPage extends Hooks{

CommonUtils CU = new CommonUtils();
private static WebElement element = null;

	
	
public static WebElement username(WebDriver driver){
	CommonUtils.waitforElement(driver, By.xpath("//input[@id='userNameTxt']"),90);
	element = driver.findElement(By.xpath("//input[@id='userNameTxt']"));
	return element;	
}

public static WebElement password(WebDriver driver){
	
	element = driver.findElement(By.xpath("//input[@name='password']"));
	return element;	
}

public static WebElement SignInButton(WebDriver driver){
	
	element = driver.findElement(By.xpath("//button[contains(.,'Sign in')]"));
	return element;	
}


public  void getCurrentURL(String URL){
	
	try{
	WebDriverWait wait =  new WebDriverWait(driver,30); 
	wait.until(ExpectedConditions.urlContains(URL));
	CommonUtils.waitForLoad(driver);
	}catch(Exception e){
		
		System.out.println("Could not get URL");
		Assert.assertFalse("Could not Get URL "+Throwables.getStackTraceAsString(e),true);
		
	}
	
	
}

public void Enterusername(String usernameKey){
	
	String user = CommonUtils.readPropertyValue(usernameKey);
	username(driver).clear();
	username(driver).sendKeys(user);
	System.out.println("Entered Username  "+user);
}

public void Enterpassword(String passwordKey){
	
	String pass = CommonUtils.readPropertyValue(passwordKey);
	password(driver).clear();
	password(driver).sendKeys(pass);
	System.out.println("Entered Password  ********");
}

public void ClickSignIn(){
	
	SignInButton(driver).click();
}





// Method for Login into Application
public String loginBMS(WebDriver driver,String usernameKey,String passwordKey ){
	
	
	try{
		
	Enterusername(usernameKey);
	Enterpassword(passwordKey);
	ClickSignIn();
	System.out.println("Clicked on Sign In Button");
	System.out.println("Waiting for Home Page to Load....");
	WebDriverWait wait =  new WebDriverWait(driver,30); 
	wait.until(ExpectedConditions.urlContains("provider"));
	CommonUtils.waitForLoad(driver);
	System.out.println(driver.getCurrentUrl());
//	Reporter.getTestReporter().log(LogStatus.INFO,driver.getCurrentUrl());
	}catch(TimeoutException e){
		
		System.out.println("Unable to Login into Application"+Throwables.getStackTraceAsString(e));
		//Reporter.getTestReporter().log(LogStatus.ERROR,"Unable to Login into Application"+Throwables.getStackTraceAsString(e));
	}
	return driver.getCurrentUrl();			
}










}
