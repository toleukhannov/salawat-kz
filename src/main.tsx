// libraries
import { createRoot } from 'react-dom/client';
// components
import App from 'components/App';
// styles
import 'styles/index.scss';
import 'react-datepicker/dist/react-datepicker.css';
// redux
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
