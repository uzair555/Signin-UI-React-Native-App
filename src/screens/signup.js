import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon, Text, Image } from 'react-native-elements';

class Signup extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.img}
            />
          </View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 140 }}>
            Notify
          </Text>
        </View>

        <View style={{ marginTop: 30, marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
            Create Account{' '}
          </Text>
          <Text style={{ opacity: 0.6 }}>Create an account to continue</Text>
        </View>

        <View style={{ marginTop: 20, paddingLeft: 10 }}>
          <Input placeholder="Email" containerStyle={styles.inp} />
          <Input placeholder="Password" containerStyle={styles.inp} />
          <Input placeholder="Verify Password" containerStyle={styles.inp} />
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                paddingTop: 10,
                color: 'white',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Text style={{ opacity: 0.5, marginLeft: 25 }}>
              Already have an account?{' '}
            </Text>
            <Text style={{ color: '#1e90ff', marginLeft: 85 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
  },

  btn: {
    backgroundColor: '#1e90ff',
    width: 300,
    borderRadius: 30,
    fontSize: 20,
    height: 50,
    marginLeft: 10,
    marginTop: 20,
    shadowColor: 'rgb(30, 144, 255)',
    shadowOpacity: 10,
    elevation: 8,
  },
  inp: {
    width: 320,
    height: 60,
    opacity: 0.5,
  },
  imgContainer: {
    width: 100,
    height: 120,
    marginLeft: 125,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default Signup;
