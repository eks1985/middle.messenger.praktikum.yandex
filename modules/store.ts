

const initialState = {
  user: null,
  error: false,
}


const appReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'SET_ERROR': 
      return { ...state, signupError: action.error };
    case 'SET_USER': 
      return { ...state, user: action.user };
    case 'DELETE_USER': 
      return { ...state, user: null }; 
    default:
      return state;
  }
  
};

const createStore = (reducer): void => {
  
  let state;
  let listeners = [];
  const getState = () => state;
  
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener();
    });
  };
  
  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l !== listener);
    }
  };
  
  dispatch({});
  
  return { getState, dispatch, subscribe };
  
}

export default new createStore(appReducer);
