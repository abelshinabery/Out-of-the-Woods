# Docs
This is a description of all files uploaded into Docs directory for each sprint.

[Sprint1](#sprint1) | [Sprint2](#sprint2) | [Sprint3](#sprint3) 

## Sprint3
Individual Contributions: 

**Serena:**<br>
* [HomeScreen.js](../App/foo-app/screens/HomeScreen.js)
    * Updated SOS button to have style changes on click (button color & text color)
* [LoginScreen.js](../App/foo-app/screens/LoginScreen.js)
    * Created LoginScreen.js
    * Coded redirect to HomeScreen.js when "logged in"
* [LogoutScreen.js](../App/foo-app/screens/LogoutScreen.js)
    * Created LogoutScreen.js
    * Coded redirect to LoginScreen.js when "logged out"
* [RegistrationScreen.js](../App/foo-app/screens/RegistrationScreen.js)
    * Updated form to from plain-text to protected password input
    * Coded redirect to HomeScreen.js when "registered"
* [AppNavigation.js](../App/foo-app/navigation/AppNavigator.js)
    * Updated navigation to allow for dynamic navigation - only certain pages displayed depnding on if user is logged in vs logged out
    
**Abel**<br>
* [BigButton.js](../App/foo-app/components/BigButton.js)
   * Added the geolocation function findCoordinates() to pull the user's current location
   * Added the Communication object inside of the sendNotification() function to text contacts
  
    
**Rachel**<br>
* [FinalAccessibilityEval.md](./Sprint3/FinalAccessibilityEval.md) <br>
This document contains information about the current and future state of the app's accessibility. It includes a detailed evaluation and description of the functionality and user experience, based on the criteria made and the research collected during all previous sprints. Immediate next steps and future priorities are also described. This document is written for the entire Out of the Woods team to understand, not just the accessibility specialists. 
_Please note: this evaluation references the code found in the **shared** branch, not the master branch._ Accessibility-enabled code is in the shared branch, based on code from the day before the demo. Newer code used for the demo is in master. We tried many many ways to merge, pull, and force merge conflicts to appear between the files on various branches, but we unable to merge them. At this point we will have to go line-by-line and, since so many of the accessibility features are small changes in-line, and since they affected nearly a dozen files, re-merging will have to be done at the start of sprint 4. As-is, we have great proof-of-concept for both the app with accessibility and the app with additional location/timer functions, as demoed. <br>
* [Contrast Test Results](./Sprint3/Contrast) <br>
This folder contains screenshots of results from running the WebAIM Color Contrast Checker on the newest version of the app, with different background and foreground colors as used in our design. You can see that most of the tests pass, which is a grewat improvement over past versions. There are a couple failures, which can be fixed in the next sprint by modifying the color options in the styles.css file. <br>
* [Location Permissions Images](./Sprint3/Location%20Permissions%20images) 
Based on feedback from the demo, took screenshots of the process of enabling or disabling location permissions on an iOS device (emulated in Expo Snack). These four screenshots demonstrate the permissions pop-up that activates when a user tries to use a location-dependent function (such as SOS), and what happens if the user chooses Don't Allow. If the user does not allow location permissions to the Out of the Woods app and attempts to use a location function anyway, a pop-up explains the condition. <br>
* [accessibility-enabled code in SHARED branch](https://github.com/cs3398-s19-klingon-warriors/Out-of-the-Woods/tree/shared/App/foo-app) <br>
See notes above about merging master and shared versions. This is an accessibility-enabledd version of the code (of the version the day before the demo). Added and implemented accessibility features in most major files, including but not limited to: 
   * LoginScreen.js
   * RegistrationScreen.js
   * SettingsScreen.js
   * LogoutScreen.js
   * Timer.js
   * TabBarIcon.js
   * BigButton.js
   * AppNavigator.js <br>
* [.gitignore](../.gitignore) <br>
Activated node_modules ignore to fix an issue in pushing and pulling local-specific npm modules. <br>
* [master code: package.json and imports](../App/foo-app/) <br>
On the master branch, added and fixed node modules and imports in package.json, AppNavigator.js,and App.js files. This was done to enable the newest timer and location functions we implemented at the end of the sprint (and demoed).<br>


## Sprint2
Individual Contributions: 

**Rachel:**<br>
[Big Button Accessibility Evaluation](Sprint2/ButtonAccess.md): Notes on current accessibility and suggestions for code changes to BigButton class to improve accessibility. This document is ready with specific suggestions that we can implement in code and test in the next sprint. Had planned to implement the code suggestions earlier but on hold until able to get app fully working in Expo locally <br>
[.gitignore](../.gitignore): Created .gitignore for the whole project, implementing recommendations for React Native, Javascript, Expo, Mac OS, Windows, Linux, npm, and others. This will help us stay consistent with this more complex code base.<br>

**Talon:**<br>
[Registration Screen](Sprint2/Registration_Screen.PNG): Updated Registration Screen to replicate the color scheme and user flow represented in our mockups. Slight adjustments still need to be made taking into consideration the Color Contrast Checks performed by Rachel.

**Abel:**<br>
[Settings Screen (React Native)](Sprint2/Settings_Screen.PNG): This is the settings page for our app, originally planned inside of AdobeXD, but realized inside of React Native, the technology our team is using to develop Out of the Woods. This screen is for changing defaults in the user account as well as logging out.

**Serena:**<br>
[Unblocking node](Sprint2/sprint2_unblockingnodes.docx): Made document recommending best course of action when demoing our project in class due to school's WIFI blocking nodes needed to run application.<br>
[Initial Button](Sprint2/sprint2_initialbutton.PNG): Created the initial button with a basic count for number of times clicked. Then helped states code with this code and styles to match previous web demo.<br> 
Also: See code for Home Page: Helped adapt layout/style to match previous web demo.<br>

**Sarah:**<br>
 Adding simple react-native-timer-countdown component and implementing the functionallity to set, disable and store timer features, currently on experimental-sarah branch. Added logo, registration blank template. 

## Sprint1
Individual Contributions:

**Sarah:** <br>
<a href="Sprint1/React_JS_GraphQL_Research.pdf" target="_blank">React and GraphQL Research</a>: React Research<br>
<a href="Sprint1/React_JS_GraphQL_Research.pdf" target="_blank">React and GraphQL Research</a>: GraphQL Research<br>
[React Native Docs + Research + Skeleton](https://github.com/cs3398-s19-klingon-warriors/Out-of-the-Woods/tree/shared/App)

**Serena:** <br>
[Saftey Application Research](Sprint1/sprint1_safetyappresearch.pdf): This research is to be used as a kickoff point in coding in React Native. There are bare-bones applications and example code of components we've discussed using for our applications. <br> 
[Web vs Mobile Capabilities](Sprint1/WebVsMobile.txt): This is a brief summary of how our throught process evolved from Web application to Mobile application.

**Abel:** <br>
<a href="Sprint1/TestGif1.gif" target="_blank">App Rough Draft Design with UX Software</a>: First test of possible layout for app. Built inside of Adobe XD using the cool tones color scheme to show how the UI might look like. <br>
<a href="Sprint1/TestGif2.gif" target="_blank">App Rough Draft Design with UX Software</a>: Second text with another possible color scheme and UI that incorporated some suggestions from the team. <br>
<a href="https://cs3398-s19-klingon-warriors.github.io/Out-of-the-Woods/">Implement color scheme and logo into HTML/CSS</a>: A small web demo that allows you to press the SOS button that would send your location to contacts. An adaptation of the second design draft, but with a new logo decided by the team. **Make sure when opening that you go into developer tools and select the mobile development option. The site is still funtional at desktop size, but it will not look correct. This is because it is a demo of a React Native application, which is purely on mobile phones.**<br>
<a href="Sprint2/Settings_Screen.PNG">Settings Screen (React Native)</a> This is the settings page for our app, originally planned inside of AdobeXD, but realized inside of React Native, the technology our team is using to develop Out of the Woods. This screen is for changing defaults in the user account as well as logging out.<br>

**Talon:** <br>
<a href="Sprint1/OOTW_Cool_Tones.jpg" target="_blank">Cool Tones</a>: Color Scheme Mock-Up created for the Out of the Woods App to be less active to the eyes. Benefit: Blues tend to ease the mind. Drawback: Blue light is harmful to the eye.<br>
<a href="Sprint1/OOTW_Forest_Tones.jpg" target="_blank">Forest Tones</a>: Color Scheme Mock-Up created to be more vibrant and active to the eyes. Benefit: This color palette is representative of strength. Drawback: Not enough contrast between colors for accessibility.
**Mock-Ups are a Culmination of Research**: Color & Design Theory Research<br>

**Rachel:** <br>
<a href="Sprint1/WAI mobile accessibility.pdf" target="_blank">WAI Mobile Accessibility Notes</a>: General Notes and research on WAI accessibility standards and mobile mapping. WAI standards are language and platform independent. These notes contain the accessibility features most pertinent to our app that we should code in and keep tracking as we go.<br>
<a href="Sprint1/Color Contrast Check test notes 3.3 pdf.pdf" target="_blank">Contrast Test Notes, Cool Tones</a>: Notes from color contrast tests with cool tones palette. Checked variety of background and foreground colors from our Cool Tones palette (and a few other standard colors) with WAI online contrast checking tool. This document has the results from those tests. We will need to avoid color pairings with an insufficient contrast ratio in our future designs.<br>
<a href="Sprint1/Contrast Tests Screenshots.zip" target="_blank">Contrast Test Screenshots, Cool Tones</a>: Screenshots from WebAIM test page of each cool tones contrast test. This contains labeled screenshots from each color test. The screenshots make it much easier to see which colors were being tested against each other, how they looked, and how good/bad the test results were.<br>
<a href="Sprint1/UserStories.md" target="_blank">User Stories</a>: Four short user stories with examples of how they would use the app, its basic functions and pages. This document uses examples from our user stories spreadsheet and demo to show four use cases of the Out of the Woods app. It briefly describes different situations for which a user may want to use the app, and different cases for how they interact with the various alert, contacts, and location functions. It will be used as we build the app to ensure we're implementing the core functions our future users need, and clarify how the different pages interact with each other.<br>
<a href="Sprint1/JavaScript Accessibility.pdf" target="_blank">JavaScript Accessibility</a>: Research document from Mozilla and other resources on mobile accessibility, JavaScript, and CSS (but primarily JavaScript). An important supplement to read after the WAI research document. This research will be very important as we code our app in React Native during the next sprint. There are notes on important features we need to be careful to implement for our app specifically, and details on how screen readers work with different web elements.<br> 
<a href="Sprint1/ARIA Accessibility.pdf" target="_blank">ARIA Accessibility</a>: Research document from Mozilla and WAI resources on ARIA. ARIA provides ways to write accessible web applications, especially with JavaScript. However,this research shows that ARIA attributes may not be the best tools for our app. There are two reasons: (1) many features that ARIA enabled have since been implemented in HTML5, and (2) ARIA is still not fully optimized for mobile applications. We may still pull some individual tools from this research as we code the app in JS.<br> 
