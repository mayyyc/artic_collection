import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStack from "./RootStack";
import { Provider as PaperProvider } from "react-native-paper";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </PaperProvider>
  );
}
