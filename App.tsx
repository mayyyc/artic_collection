import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStack from "./RootStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
