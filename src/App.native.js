import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, SafeAreaView, Image, View, TouchableNativeFeedback, TouchableOpacity, Alert, Button, Platform} from 'react-native';
import {useDimenions, useDeviceOrientation} from '@react-native-community/hooks';
//we useDimenions if we support multiple orientation that give the exact dimension(width, height) in case portrait snd landscape to solve limitations of api
//"orientation": "default",  we can use default, portrait or landscape orientation / default means support landscape and portrait
export default function App() {
  console.log(Dimensions.get('window'));//using window return the dimension of entire screen 
  console.log(Dimensions.get('screen'));// using screen return the dimension of the screen excluding the status bar(visible app window)
  console.log(useDeviceOrientation()); //this returns the current device orientation (portrait or landscape) through obj of 2 props landscape and portrait as boolean which true and which false
  console.log(useDimensions());
  const {landscape} = useDeviceOrientation(); //we make it as var to use in styling
  return (
    //styles.container we get from it down the styles, it is flex container js object
    //their is more than 1 method:
    //method 1: use styles.container directly
    //we can combine more than 1 styles obj they work together and if second has same property of first it overloads it
    //SafeAreaView better than view in ios but not in android, it put content away from notch of device
    <SafeAreaView style={styles.container}>
    {/* 2nd method: define var ContainerStyle=styles.container and then <SafeAreaView style={ContainerStyle}>  */}
      <Text>Welcome to the App (Native)!</Text>
      <TouchableNativeFeedback onPress={() => Alert.alert('Image pressed!')}>
        {/* here the width and height are written only without px using density-independnet pixel way so in each platform phSical pixel= DIP*SCALE-FACTOR */}
        <View style={{ width: 300, height: 120, backgroundColor: 'dodgerblue', marginVertical: 12, width: '50%', height: landscape ? "100%" : "30%" }} />
      </TouchableNativeFeedback>
      <Image
        blurRadius={2}
        fadeDuration={300}
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={{ width: 200, height: 300 }}
      />
      <TouchableOpacity onPress={() => Alert.alert('Photo pressed!')} style={{ marginTop: 12 }}>
  <Image source={require('../assets/SeatRoom.jpg')} style={{ width: 200, height: 120 }} />
      </TouchableOpacity>
      <Button title="Click me" onPress={() => Alert.alert('Info', 'Button pressed')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//StyleSheet api is used to define styles in react native 
//styles obj has property container that it is obj
//using, styles.container we get from it down the styles, it is flex container js object
//using StyleSheet.create inorder to validate the propertires if you write properties directly in style up will not work well
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //to avoid notch in android devices
    //  WE CAN USE normal number but we prefer to use the StatusBar.currentHeight so will be suitable to all devices bcz it depends on height of their StatusBar
},
});


/*idea of flexbox:
flex in mobile by default eles in column not in row like web
flex: 1 take all the entire available space
here 3 views all take equal space so they distributed as 1/3 of screen each one
justifyContent align the items in the main axis(primary axis) depending on the flexDirection
justifyContent can be 'center', 'flex-start', 'flex-end', 'space-between' space only between items and equal , 'space-around' same as space-between but different space at edges, 'space-evenly'
alignItems align the items for each line  in the secondary axis it  can be "stretch", "center", "baseline", "flex-start", "flex-end"

baseline means that all have the bottom the same (base) where each one must have different heights
stretch beneficial if you want all items to have

alignSelf can take same value as alignItems but it is applied to the individual item
alignContent: 'center', flexWrap: 'wrap' alignContent align all the content on secondary axis while align item align each line
flexWrap used bcz for many view color box we add the other views will shrunk so we use flexWrap to avoid shrunk but the new views will be in new lines
no meaning of aligncontent if no wrapping exists

flexBasis is the size of item in the primary axis so if horizontal line is primary axis so flexbasis is width and if vertical line is primary axis so flexbasis is height
flexGrow:1 is the ability for a flex item to grow if necessary so if their available space next to it he will it same as flex:1
flexShrink: 1 is the ability for a flex item to shrink inorder to other to fit  if necessary same as flex:-1

Positioning: absolute & relative 
where all components by defult are relative positioned
relative position so component can be positioned relative to its current position without affecting the layout around it
while absolute position  change in position with respect to parent with affecting the layout and other comp
<View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap', width: 100, height:100}} />
    <View style={{ backgroundColor: 'lightgray',  width: 100, height:100}} />
    <View style={{ backgroundColor: 'lightyellow',  width: 100, height:100}} />
    <iew style={{ backgroundColor: 'lightblue',  width: 100, height:100}} />
</View>
*/

/*here first view takes 2/4 of the space and the other two take 1/4 each first view is double the others
<View style={{ backgroundColor: 'lightgray', flex: 2, width: 100, height:100}} />
<View style={{ backgroundColor: 'lightyellow', flex: 1, width: 100, height:100}} />
<View style={{ backgroundColor: 'lightblue', flex: 1, width: 100, height:100}} />
*/
