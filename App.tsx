import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStack from "./RootStack";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootStack />
        </QueryClientProvider>
      </Provider>
    </PaperProvider>
  );
}
