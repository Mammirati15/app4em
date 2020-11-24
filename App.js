import React from 'react'
import { Provider } from 'react-redux'
import MainNav from './navigation/MainNavigation'
import { configureStore } from './src/redux/configureStore' 

const store = configureStore()
global.store = store

const App = () => {
  return(
    <Provider store={store}>
      <MainNav />
    </Provider>
  )
}

export default App;