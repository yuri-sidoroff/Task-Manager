import React from 'react';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import reducer from './store/reducers';
import { Provider } from 'react-redux';
import TaskControl from './components/TaskControlContainer';
import TaskList from './components/TaskListContainer';
import './App.scss';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const persistor = persistStore(store)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <TaskControl/>
            <hr />
            <TaskList />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
