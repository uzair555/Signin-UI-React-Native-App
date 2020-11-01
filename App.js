import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import StackNavigator from './src/navigations/StackNavigator';

export class App extends Component {
  state = {
    message: '',
  };

  testNotification = () => {
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      message: this.state.message, // (required)
      date: new Date(Date.now() + 1 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      repeatType: 'minute',
    });
    PushNotification.popInitialNotification((notification) => {
      console.log('Initial Notification', notification);
    });
  };

  palceInputHandeler = (val) => {
    this.setState({
      message: val,
    });
  };

  onSubmitHandeler = () => {
    if (this.state.message.trim() === '') {
      return;
    }
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(prevState.message),
      };
    });
  };

  render() {
    return (
      <StackNavigator />
      // <View style={styles.container}>
      //   <Root>

      //   </Root>
      //   <Text> Push Notification </Text>

      //   <TextInput
      //     style={styles.placeInput}
      //     value={this.state.message}
      //     onChangeText={this.palceInputHandeler}></TextInput>
      //   <TouchableOpacity
      //     onPress={() => {
      //       this.testNotification();
      //       // this.onSubmitHandeler();
      //     }}>
      //     <View style={styles.button}>
      //       <Text style={styles.buttonTitle}>Click Me to get Notification</Text>
      //     </View>
      //   </TouchableOpacity>
      // </View>
    );
  }
}

export default App;
