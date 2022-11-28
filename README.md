# Aktiv Learning Image Search

## Requirements

- [x] The app must be implemented in React Native.
- [x] The app must run on either an Android or an iOS device (just having it run on a simulator/emulator is fine too).
- [x] The app must support portrait and landscape orientation. 
- [x] Rotating the device should result in roughly the same images in the list being displayed as before the rotation.
- [x] The user should be able to scroll the image list infinitely until the end of all results for the search query.
- [x] In addition to the image, the detail page should also display the name of the user who uploaded it, image tags and resolution.
- [x] The user should be able to go back from the detail page to the list page. When they go back, the list should be at the same position.
- [x] The app must use Redux to manage state.
- [x] The use of third-party libraries is allowed.
- [x] The git repository must include a README.md file with instructions on how to run the project.

## Running the project

Make sure you have the React Native environment configured. You can follow the instructions on 
  <a href="https://reactnative.dev/docs/environment-setup">
    the documentation
  </a>.

#### On Android

```
  npm run android
``` 

#### On iOS

```
  cd ios && pod install && cd ..
  npm run ios
``` 

## Usage
### Search Page
Write something in the input search and use the return key of the keyboard to search.

### Details Page
To go back to search page use the back button on Android or swipe back on iOS.
