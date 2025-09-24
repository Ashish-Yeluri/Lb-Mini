import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './Cart/Store';

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>
)
