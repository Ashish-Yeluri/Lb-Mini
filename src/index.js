import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './Cart/Store';
import { ToastContainer } from 'react-toastify';
// import App2 from './App2';

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
      {/* <App2/> */}
      <ToastContainer/>
  </BrowserRouter>
  </Provider>
)
