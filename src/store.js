import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers'

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]), // 需要使用的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
) // 创建一个storage

export default store;
