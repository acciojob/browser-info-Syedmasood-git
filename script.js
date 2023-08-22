//your JS code here. If required.
const browserName=navigator.appName;
const browserVersion=navigator.appVersion;

const message="You are using " + browserName + " version " + browserVersion;
const browserInfo=document.getElementById("browser-info");
browserInfo.textContent(message);