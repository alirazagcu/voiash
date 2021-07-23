import "./App.css";
import RouteConfig from "./components/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouteConfig />
      </div>
    </Provider>
  );
}
export default App;
