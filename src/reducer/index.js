import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } from '../constants';

const initialState = {
  data: [],
  dataStatus: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST: {
      console.log('REQUEST');

      return {
        ...state,
        dataStatus: DATA_REQUEST,
      };
    }
    case DATA_SUCCESS: {
      console.log('SUCCESS');

      return {
        ...state,
        data: action.payload.data,
        dataStatus: DATA_SUCCESS,
      };
    }
    case DATA_FAIL: {
      return {
        ...state,
        dataStatus: DATA_FAIL,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
