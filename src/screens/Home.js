import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import { Input, Image } from 'react-native-elements';

export class Home extends Component {
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
      <View style={styles.container}>
        <Text> Push Notification </Text>

        <TextInput
          style={styles.placeInput}
          value={this.state.message}
          onChangeText={this.palceInputHandeler}></TextInput>
        <TouchableOpacity
          onPress={() => {
            this.testNotification();
            // this.onSubmitHandeler();
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Click Me to get Notification</Text>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 20, paddingLeft: 10 }}>
          <Input placeholder="Email" containerStyle={styles.inp} />
          <Input placeholder="Password" containerStyle={styles.inp} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                paddingTop: 10,
                color: 'white',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'red',
    borderRadius: 24,
  },
  buttonTitle: {
    color: 'white',
  },
  placeInput: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#1e90ff',
    width: 300,
    borderRadius: 30,
    fontSize: 20,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    shadowColor: 'rgb(30, 144, 255)',
    shadowOpacity: 10,
    elevation: 8,
  },
  inp: {
    width: '70%',
    opacity: 0.5,
  },
});

export default Home;
