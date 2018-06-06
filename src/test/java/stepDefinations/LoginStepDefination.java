package stepDefinations;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebDriver;

import com.pack.pageobjects.LoginPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {

	LoginPage lp = new LoginPage();
	

@Given("^User is on Login Page$")
public void user_is_on_Login_Page() throws Throwable {
	
		lp.getCurrentURL("login");
   
}

@When("^User Enters Username$")
public void user_Enters_Username() throws Throwable {
	lp.Enterusername("username");
}

@When("^User Enters Password$")
public void user_Enters_Password() throws Throwable {
    lp.Enterpassword("password");
}

@When("^User Clicks on Sign In Button$")
public void user_Clicks_on_Sign_In_Button() throws Throwable {
    
	lp.ClickSignIn();
}

@Then("^User Lands On Provider Home Screen$")
public void user_Lands_On_Provider_Home_Screen() throws Throwable {
	lp.getCurrentURL("provider");
}

@When("^User Enters Username \"([^\"]*)\"$")
public void user_Enters_Username(String usernameKey) throws Throwable {
	
	lp.Enterusername(usernameKey);
   
}

@When("^User Enters Password \"([^\"]*)\"$")
public void user_Enters_Password(String passwordKey) throws Throwable {
	
	lp.Enterpassword(passwordKey);
	Thread.sleep(4000);
   
}

@When("^User enters Credentials to LogIn$")
public void user_enters_Credentials_to_LogIn(DataTable usercredentials) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    // For automatic transformation, change DataTable to one of
    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	
	List<List<String>> data = usercredentials.raw();
    lp.Enterusername(data.get(0).get(0));
    lp.Enterpassword(data.get(0).get(1));
    Thread.sleep(4000);
}

@When("^User enters Login Credentials$")
public void user_enters_Login_Credentials(DataTable usercredentials) throws Throwable {
	
	List<Map<String,String>> data = usercredentials.asMaps(String.class,String.class);
	lp.Enterusername(data.get(0).get("Username"));
	lp.Enterpassword(data.get(0).get("Password"));
	
	
	
}



















}
