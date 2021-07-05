import api from 'src/middlewares/api';

import {
  ON_SEARCH_COMPANY,
  searchCompany,
} from 'src/actions/company';
import {
  getError
} from 'src/actions/user';

const company = (store) => (next) => async (action) => {
    switch (action.type) {
      
        // Search a company (sub form)
        
    case ON_SEARCH_COMPANY: {
      try {
        const foundCompany = await api.get(`/company/${action.payload}`);
        const actionSearchCompany = searchCompany(foundCompany.data);
        console.log(foundCompany.data);
        store.dispatch(actionSearchCompany);
      }
      catch (error) {
        const actionGetError = getError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }
    default:
      next(action);
  }
};

export default company;
