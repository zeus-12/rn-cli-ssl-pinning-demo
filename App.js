import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {fetch as ft} from 'react-native-ssl-pinning';

const App = () => {
  useEffect(() => {
    console.log('sending req');
    console.log('hey');
    ft('https://google.com', {
      method: 'GET',
      timeoutInterval: 100000, // milliseconds
      // your certificates array (needed only in android) ios will pick it automatically
      sslPinning: {
        certs: ['hello'],
      },
      headers: {
        Accept: 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        e_platform: 'mobile',
      },
    })
      .then(response => {
        console.log(response);
        // console.log(JSON.stringify(response.bodyString, null, '\t'));
      })
      .catch(err => {
        console.log(`error occured: ${err}`);
      });
  }, []);

  return (
    <View>
      <Text style={{marginTop: 80}} className="pt-12">
        hey
      </Text>
    </View>
  );
};

export default App;
