import { ActionTypes } from "./../actions";

const initState = {
  results: null,
  isLoadingResults: false,
}

// reducer
export default function searchReducer(state = initState, action) {
  switch (action.type) {
    case `${ActionTypes.GET_SEARCH}_PENDING`:
      return {
        ...state,
        isLoadingResults: true,
      }

    case `${ActionTypes.GET_SEARCH}_FULFILLED`:
      return {
        ...state,
        results: action.payload.data,
        isLoadingResults: false,
      }

    case `${ActionTypes.CLEAR_SEARCH}`:
      return {
        ...state,
        results: null,
      }

    default:
      return state;
  }
}
