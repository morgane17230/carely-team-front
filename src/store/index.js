import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import company from 'src/middlewares/company';
import user from 'src/middlewares/user';
import group from 'src/middlewares/group';
import message from 'src/middlewares/message';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(company, user, group, message),
);

const store = createStore(reducer, enhancers);

export default store;
