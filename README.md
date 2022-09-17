# Implementing SSL-Pinning using react-native-ssl on react-native-cli

```jsx
yarn add react-native-ssl-pinning@latest
```

```jsx
cd ios
pod install
```

```jsx
//new file react-native.config.js on root
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/'],
};
```

Store the certificates inside src/assets

```jsx
yarn add react-native-asset
yarn react-native-asset
```

Restart the server

## For using the fetch

```jsx
import {fetch as ft} from 'react-native-ssl-pinning';

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
```

## For getting the certificates

```jsx
openssl s_client -showcerts -servername google.com -connect google.com:443 </dev/null
```

Copy the certificate one by one, including the “——BEGINNING OF CERTIFICATE—-” and “—-end of certificate—-” message.

and save it as cert1.pem , cert2.pem ,etc

store it in the root folder of the system and run

```jsx
openssl x509 -in cert1.pem -outform der -out cert1.cer
```

and do the same for cert2, cert3, etc

Now cert1.cer, cert2.cer,etc will get loaded into the root folder of the system. Drag and drop those into src/assets
