import { Provider } from "react-redux";
import store from './redux/store';
import AppRouter from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App