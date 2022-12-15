import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
  Alert,
} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePicker,
} from 'react-native-image-picker';
import RNShake from 'react-native-shake';
const ImageSelect = ({navigation, route, parentCallback, style}) => {
  const [finalimage, setFinalimage] = useState(null);

  // React.useEffect(() => {
  //   const subscription = RNShake.addListener(() => {)}})

  useEffect(() => {
    RNShake.addListener(() => {
      Alert.alert('Select Image', 'Choose file from Custom Option', [
        {
          text: 'Camera',
          onPress: () => {
            launchCamera(options1, response => {
              console.log('Response = ', response);

              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log(
                  'User tapped custom button: ',
                  response.customButton,
                );
                alert(response.customButton);
              } else {
                console.log('response', JSON.stringify(response));
                const source = {uri: response.assets[0].uri};
                console.log(source);
                setFinalimage(response.assets[0].uri);
                parentCallback(response.assets[0]);
              }
            });
          },
          style: 'cancel',
        },
        {
          text: 'Image Library',
          onPress: () => {
            launchImageLibrary(options, response => {
              console.log('Response = ', response);

              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log(
                  'User tapped custom button: ',
                  response.customButton,
                );
              } else {
                const source = {uri: response.assets[0].uri};
                console.log(source);
                setFinalimage(response.assets[0].uri);
                parentCallback(response.assets[0]);
              }
            });
          },
        },
      ]);
    });
  });

  let options = {
    title: 'Select Image',
    customButtons: [
      {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  let options1 = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Select Image', 'Choose file from Custom Option', [
            {
              text: 'Camera',
              onPress: () => {
                launchCamera(options1, response => {
                  console.log('Response = ', response);

                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else if (response.customButton) {
                    console.log(
                      'User tapped custom button: ',
                      response.customButton,
                    );
                    alert(response.customButton);
                  } else {
                    console.log('response', JSON.stringify(response));
                    try {
                      const source = {uri: response.assets[0].uri};
                      console.log(source);
                      setFinalimage(response.assets[0].uri);
                      parentCallback(response.assets[0]);
                    } catch (error) {
                      console.log(error);
                      toast.show(response.errorMessage, {
                        type: 'danger',
                        placement: 'top',
                        duration: 3000,
                        offset: 30,
                        animationType: 'zoom-in',
                      });
                    }
                  }
                });
              },
              style: 'cancel',
            },
            {
              text: 'Image Library',
              onPress: () => {
                launchImageLibrary(options, response => {
                  console.log('Response = ', response);

                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else if (response.customButton) {
                    console.log(
                      'User tapped custom button: ',
                      response.customButton,
                    );
                  } else {
                    const source = {uri: response.assets[0].uri};
                    console.log(source);
                    setFinalimage(response.assets[0].uri);
                    parentCallback(response.assets[0]);
                  }
                });
              },
            },
          ]);
        }}>
        {!!finalimage ? (
          <Image
            source={{uri: finalimage}}
            style={[styles.images, {...style}]}></Image>
        ) : (
          <Image
            source={require('../Image/Main_Logo.jpg')}
            style={[styles.images, {...style}]}></Image>
        )}
        <Text style={{alignSelf: 'center'}}>
          Shek Mobile for Select The Image
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
  },
  images: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 60,
  },
});
export default ImageSelect;
