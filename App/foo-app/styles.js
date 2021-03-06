
import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 4;

export default StyleSheet.create({
  animatedLogo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    backgroundColor: '#F7F6EB',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    paddingHorizontal: 15,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 20,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoHomeScreen: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  register:{
    marginBottom:20,
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae',
  },
  //  Settings Page
  settingsContainer:{
    flex: 1,
    backgroundColor: "#F7F6EB",
  },
  settingsList:{
    flex: 1
  },
  settingsListItem:{
    backgroundColor: "white",
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,  
    elevation: 5,
  },
  settingsListItemTitle:{
    marginLeft: 10,
    fontSize: 20
  },
  settingsListItemAttribute:{
    marginTop: 20,
    marginLeft: 50,
    fontSize: 16
  },
  settingsListSeparator:{
      
  },
  // Home Page Settings
  homeScreenContainer: {
      flex: 1,
  },
  sosContainer: {
      flex: 2, // makes the component flexible and it will be sized proportional to its flex value.
      justifyContent: 'center', //centers circle vertically
      alignItems: 'center', //centers circle horizontally
    },
    buttonContainer: {
      flex: 2, // makes the component flexible and it will be sized proportional to its flex value.
      justifyContent: 'center', //centers circle vertically
      alignItems: 'center', //centers circle horizontally
    },
    sosText:{
        //alignSelf: 'center',
        alignItems: 'center',
        fontFamily: 'San Francisco',
        fontSize: 30,
    },
    sosTextClick:{
        //alignSelf: 'center',
        color: 'white',
        alignItems: 'center',
        fontFamily: 'San Francisco',
        fontSize: 30,
    },
    circle: {
      borderWidth: 1,
      border: '#39605e',
      alignItems: 'center', //align SOS text horizontallt
      justifyContent: 'center', //align SOS text vertically
      width: 200, // if adj this, need to adj height & radius with same values
      height: 200,
      borderRadius: 200 / 2,
      backgroundColor: 'white',
      padding: 10,
    },
    //Styles for form buttons:
    formContainer: {
      paddingTop: 60,
      alignItems: 'center'
    },
    formButton: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#527657',
      borderRadius: 30,
    },
    formButtonText: {
      padding: 20,
      color: 'white'
    },
    timerButtons: {
      borderWidth: 1,
      border: '#39605e',
      borderRadius: 25,
      backgroundColor: 'white',
      height: 40,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timerButtonsOnPress: {
      borderWidth: 1,
      border: '#39605e',
      borderRadius: 25,
      backgroundColor: 'grey',
      height: 40,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timerButtonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingHorizontal: '20%',
    },
    timerHeading: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 50,
      width: '100%',
    },
    timerContainer: {
      paddingTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: '100%',
    },
    firstClick:{
      alignItems: 'center', //align SOS text horizontallt
      justifyContent: 'center', //align SOS text vertically
      width: 200, // if adj this, need to adj height & radius with same values
      height: 200,
      borderRadius: 200 / 2,
      backgroundColor: '#39605e',
      padding: 10,
    }
});
