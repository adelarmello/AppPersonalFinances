import Reactotron from 'reactotron-react-native';

Reactotron
  .configure() // controla as configurações de conexão e comunicação
  .useReactNative() // adiciona todos os plugins do react native 
  .connect() // let's connect!