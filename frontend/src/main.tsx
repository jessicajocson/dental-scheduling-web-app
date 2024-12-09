import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import App from './App.tsx'
import RouteComponent from './routes/route.tsx';
import store from "./states/store";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
      {/* <RouteComponent/> */}
    </StrictMode>
  </Provider>
)
