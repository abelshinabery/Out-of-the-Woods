
import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
  animatedLogo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    alignItems: 'flex-start',
    marginBottom: 20,
    padding: 20,
    marginTop:20
  },
  container: {
    backgroundColor: '#4c69a5',
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
    // paddingHorizontal: 15,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 20,
    marginTop:20
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
    backgroundColor: "#D8EFE7",
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
  sosContainer: {
      flex: 1, // makes the component flexible and it will be sized proportional to its flex value.
      justifyContent: 'center', //centers circle vertically
      alignItems: 'center', //centers circle horizontally
    },
    sosText:{
        //alignSelf: 'center',
        alignItems: 'center',
        fontFamily: 'San Francisco',
        fontSize: 30,
    },
    circle: {
        //Abel's styling 
        /*flex:-1,
        flexDirection:'row',
        height:200,
        width:200,
        borderRadius:100,
        backgroundColor:'lightblue', 
        justifyContent:'center',
        alignSelf:'center' }}>*/
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
    backgroundColor: '#39605e'
    },
    formButtonText: {
    padding: 20,
    color: 'white'
    }
});
