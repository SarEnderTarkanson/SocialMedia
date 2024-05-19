import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';

const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size="20" color="#898DEA" />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
