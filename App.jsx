import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("screen");

import Drawer from './src/navigation/drawerNavigation/drawerNavigation';

const App = () => {

//Stack Navigation

  return (

    <SafeAreaView style={styles.screen}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </SafeAreaView>
    
  )

}

const styles = StyleSheet.create({
  screen : {
    height,
    width
  }
})

export default App;
