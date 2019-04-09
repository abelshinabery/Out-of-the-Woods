# Evaluation and suggestions for improving BigButton accessibility: Sprint 2 version

Not changing code directly at this point because Rachel is unable to test changes on my local machine: just notes for now, with some direct code replacement suggestions (to test!)

## References
In addition to earlier notes, look at the React Native accessibility guides (bare, but useful):
<a href="https://facebook.github.io/react-native/docs/accessibility" target="_blank">React Native Accessibility Guide</a>:
<a href="https://code.fb.com/ios/making-react-native-apps-accessible/" target="_blank">Additional Blog Post with Examples</a>:
<a href="https://facebook.github.io/react-native/blog/2018/08/13/react-native-accessibility-updates" target="_blank">Notes on recent updates and iOS vs Android options</a>:
We want to try to only use accessibility options that work on **both iOS and Android**, as this is the goal for our app.


## Notes on BigButton
The component is not marked “button” anywhere - this can cause a significant accessibility issue and should be the first thing corrected. We have it as a generalized container, which can be an issue.     


Note: When possible, use **accessibilityRole** and **accessibilityStates** instead of accessibilityTraits and accessibilityComponentType (latter two are deprecated)

Let’s try adding accessibility to the BigButton class. The most important is accessibilityRole=“button”. Will also try adding accessibilityLabel (for extra clarity) and accessibilityHint (more on this later).

from current line 33:

 <TouchableOpacity onPress={this.onPress} style={styles.circle} >

try instead:
 <TouchableOpacity accessibilityRole=“button” accessibilityLabel=“SOS button” accessibilityHint=“Tap twice to send SOS message” onPress={this.onPress} style={styles.circle} >

However, once we add design to this, it may be better to use accessibilityRole=“imagebutton”, a built-in combo type (need to check that it works on mobile, as web have slightly more Roles enabled)

Note: Avoid changing accessibilityRole values over time or after user actions. Generally, accessibility APIs do not provide a means of notifying assistive technologies of a role value change.

Let’s also try adding accessible={true} to View in the BigButton. This is a general option we'll want for the accessibility features to check automativally:

from current line 32:

<View style={styles.sosContainer}>

try instead:

<View accessible={true} style={styles.sosContainer}>

I think using accessibilityStates might also help up with our non-standard text comparisons, but need to test exactly where to put these.

MAY try, for example, current line 9:
        this.state = {
            text: 'SOS'
        }

try instead:
    
        this.state = {
            text: 'SOS'
        }
   	accessibilityStates = disabled

and accessibilityStates = selected on the presses.

### Text
Alt texts look good in the code! Still need to test with a screen reader to make sure it is reading when we want.
accessibilityHints (and Label) can help us further clarify the action the user should take

I think we are going to want to announce each tap to a screen-reader-using user, in addition to the alt text. Not sure which is the best way to do this yet that will work on both platforms - possibly States, or possibly Hints. Possibly even an event handler. Need to investigate this more with active testing.

