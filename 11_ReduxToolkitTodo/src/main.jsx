import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store} from './app/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <div className='w-full h-screen bg-gray-800 p-12'>
      <App />   
    </div>
  </Provider>
)
