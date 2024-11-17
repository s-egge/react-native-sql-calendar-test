# Calendar / SQL Test

This repo is for starting a React Native w/Expo app from scratch in order to test a basic calendar ([React Native Calendars](https://wix.github.io/react-native-calendars/docs/Intro)) and SQLite database ([Expo's SQLite library](https://docs.expo.dev/versions/latest/sdk/sqlite/)). It was cobbled together very quickly for a proof-of-concept and does not look very good, as the focus is only on seeing if it will work and what it might look like (without much styling effort). I used ChatGPT for a small amount of code generation (credited in the code) and for occasional debugging in order to get this up quickly. I also used a lot of the base code from the current Expo starter template (`npx create-expo-app@latest`) for the navigation and text/containers.

There are bugs, especially with the data not syncing up well when saving or changing days without refreshing the calendar manually with the button. I didn't bother implementing loading indicators either.

Below are demos of some implementation with [React Native Paper](https://callstack.github.io/react-native-paper/) for styling.
### Android / Light-mode
https://github.com/user-attachments/assets/33d3bf81-7e3d-4319-a793-2b6b1c460570


### iPhone / Dark-mode
https://github.com/user-attachments/assets/1940f7e9-cb23-49d5-b70f-4e58b3cd0497




## Running The Project

- Download the repo
- `npm install`
- `npx expo start`
- On your mobile phone (iOS or Android), download the Expo Go app and then scan the QR code in the terminal

Right now, the web version is broken, and seems to be a [common issue](https://github.com/expo/expo/issues/32843) with the new Expo SDK 52. Expo's SQLite doesn't work on web, only mobile, so even when this issue gets fixed it won't work in the browser.
