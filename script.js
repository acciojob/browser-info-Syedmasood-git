//your JS code here. If required.
const browserName = navigator.appName;
	const browserVersion = navigator.appVersion;

	// Create the message using the browser name and version
	const message = "You are using " + browserName + " version " + browserVersion;

	// Display the message in the browser-info div
	const browserInfoDiv = document.getElementById("browser-info");
	browserInfoDiv.textContent = message;