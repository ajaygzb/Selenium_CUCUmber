package stepDefinations;
import java.io.File;
import java.net.MalformedURLException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;

import com.pack.Utils.CommonUtils;
public class Hooks{
	
	
	
	
	public static  WebDriver driver;
	private static File projectPath = new File("");
	private String driverPath = projectPath.getAbsolutePath() + "\\src\\test\\java\\com\\dataRepository\\browserDrivers\\";
	public static String ExcelPath=projectPath.getAbsolutePath() + "\\src\\test\\java\\com\\dataRepository\\Inputdata";
	public static DesiredCapabilities caps;
	@Before
	/**
	 * Delete all cookies at the start of each scenario to avoid
	 * shared state between tests
	 */
	public void openBrowser() throws MalformedURLException {
		String browser = System.getProperty("BROWSER");
		if(browser==null)
		{
			browser = CommonUtils.readPropertyValue("Browser").toLowerCase();
			if(browser==null)
			{
				browser= "chrome";
			}
		}
		switch (browser)
		{
		case "chrome":
			System.out.println("launching Chrome browser");
			System.setProperty("webdriver.chrome.driver", driverPath + "chromedriver.exe");
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--disable-extensions");
			options.addArguments("disable-infobars");
			// options.addArguments("-incognito"); //to run incognito mode
			options.merge(caps);  
			driver = new ChromeDriver(options); 
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();
			break;
		case "firefox":
			System.out.println("launching Firefox browser");
			System.setProperty("webdriver.gecko.driver", driverPath + "geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();

			break;
		case "ie":
			System.out.println("launching IE browser");
			System.setProperty("webdriver.ie.driver",driverPath+"IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();
			break;
		case "safari":
			driver = new SafariDriver();
			break;
		default:
			System.out.println("launching Default Chrome browser");
			System.setProperty("webdriver.chrome.driver", driverPath + "chromedriver.exe");
			ChromeOptions option = new ChromeOptions();
			option.addArguments("--disable-extensions");
			option.addArguments("disable-infobars");
			// options.addArguments("-incognito"); //to run incognito mode
			option.merge(caps);  
			driver = new ChromeDriver(option); 
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();
			break;
		}
		System.out.println("Opening Browser...."+browser);
		driver.get(CommonUtils.readPropertyValue("URL"));
		CommonUtils.waitForLoad(driver);
		

	}
	@After
	/**
	 * Embed a screenshot in test report if test is marked as failed
	 */
	public void embedScreenshot(Scenario scenario) {
		if(scenario.isFailed()) {
			try {
				scenario.write("Current Page URL is " + driver.getCurrentUrl());
				//            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
				byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			}
		}
		driver.quit();
	}
}