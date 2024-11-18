import { Provider } from "react-redux";
import Profile from "./Profile";
import { store } from "../store";
import ThemeExample from "./ThemeExample";

function App() {
  return (
    <Provider store={store}>
      <ThemeExample/>
    </Provider>
  );
}

export default App;
