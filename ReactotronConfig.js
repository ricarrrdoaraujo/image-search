import Reactotron from 'reactotron-react-native'

const tron = Reactotron
  .configure({host: '192.168.0.105'}) 
  .useReactNative() 
  .connect()

tron.clear();

console.tron = tron;

export default tron;