import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Cart/Store';
import { ToastContainer } from 'react-toastify';
import App from './App';
// import App2 from './App2';
// import App3 from './App3';

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
      {/* <App2/> */}
      {/* <App3/> */}
      <ToastContainer/>
  </BrowserRouter>
  </Provider>
)
