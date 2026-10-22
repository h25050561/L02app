import React from 'react';
import {View, Text} from 'react-native';

const Welcome = ({code, name})=> {
  return (
      <View>
        <Text></Text>
        <Text>Welcome to {code} - {name}</Text>
      </View>
  )
}

class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text></Text>
          <Text>These are my modules this semester: </Text>
          <Welcome code="C346" name="Mobile App Development" />
          <Welcome code="C337" name="Immersive Technologies"/>
          <Welcome code="C304" name="Cloud Application Development"/>
        </View>
    )
  }
}

export default ModuleInfo;
