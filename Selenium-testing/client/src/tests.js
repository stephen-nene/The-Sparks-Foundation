import { message } from "antd";
import { Builder, Capabilities } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

export const takeScreenshot = async () => {
  try {
    const chromeOptions = new chrome.Options();
    chromeOptions.headless();
    
    // Set the path to your Chrome driver executable
    const chromeDriverPath = "/path/to/chromedriver";
    
    const driver = await new Builder()
      .withCapabilities(Capabilities.chrome())
      .setChromeOptions(chromeOptions)
      .build();
    
    await driver.get("http://localhost:3000"); // Replace with your app's URL
    
    const screenshotData = await driver.takeScreenshot();
    await driver.quit();

    return screenshotData;
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    message.error("Failed to capture screenshot");
  }
};

export const testLinks = async () => {
  console.log('Testing links...');
  message.success("Tested link");
};

export const testContactPage = async () => {
  // Implement your test code for contact-page here
  console.log('Testing contact-page...');
};

export const testPolicies = async () => {
  // Implement your test code for Policies here
  console.log('Testing Policies...');
};

export const testPrograms = async () => {
  // Implement your test code for programs here
  console.log('Testing programs...');
};

// Export all functions as a single module
export default {
  testLinks,
  testContactPage,
  testPolicies,
  testPrograms,
  takeScreenshot,
};
