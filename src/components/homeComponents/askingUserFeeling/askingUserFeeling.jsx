import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Colors
import color from '../../../color';

//Icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { Slider } from '@miblanchard/react-native-slider';

import { SvgUri } from 'react-native-svg';

import { icon } from '../../icon';

export default AskingUserFeeling = (props) => {
  const [sliderValue, setSliderValue] = useState(5);

  const emoji = [
    icon("face1"),
    icon("face2"),
    icon("face3"),
    icon("face4"),
    icon("face5"),
    icon("face6")
  ]

  const changeValue = (newValue) => {
    setSliderValue(newValue[0])
  };

  const selectedValue = { 
    transform : [{ scale : 1.5 }],
    
  }

  return (
    <View style={styles.feelingContainer}>
      <EvilIcons name="close" color={color.primary1} size={20} style={styles.closeIcon} onPress={props.closeUserFeeling}/>
      <View style={styles.rowContainer}>
        <Text style={styles.simpleText}>How are you</Text>
        <Text style={styles.boldText}> feeling </Text>
        <Text style={styles.simpleText}>today?</Text>
      </View>
      <View style={styles.emojiContainer}>

        {
          emoji.map((icon, index) => (
            <SvgUri 
              uri={icon}
              height={25}
              width={25}
              color={color.primary1}
              key={index}
              style={sliderValue === index ? selectedValue : null }
            />
          ))
        }

      </View>
      <Slider
        value={sliderValue}
        onValueChange={changeValue}
        minimumValue={0}
        maximumValue={5}
        step={1}
        containerStyle={styles.slider}
        minimumTrackTintColor={color.primary1}
        thumbTintColor={color.primary1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feelingContainer: {
    height: 150,
    width: '100%',
    borderRadius: 8,
    backgroundColor: color.primary2,
    marginBottom: 25,
  },
  closeIcon: {
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingLeft: '5%',
  },
  emojiContainer: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginTop: 25,
    justifyContent: 'space-between',
  },
  simpleText: {
    fontSize: 18,
    color: color.primary1,
  },
  boldText: {
    fontSize: 18,
    color: color.primary1,
    fontWeight: '900',
  },
  slider: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
});
