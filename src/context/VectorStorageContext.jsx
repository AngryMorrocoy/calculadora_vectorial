import { createContext } from "react";
// This context is where the saved vectors are contained
// Should be an Object of the form
// {vectorName: VectorInstance}

const vectorStorageActions = {
  CREATE_VECTOR: "CREATE_VECTOR",
  DELETE_VECTOR: "DELETE_VECTOR",
  UPDATE_VECTOR: "UPDATE_VECTOR",
};

const vectorStorageReducer = (state, action) => {
  switch (action.type) {
    case vectorStorageActions.CREATE_VECTOR:
      state = { ...state, [action.payload.name]: action.payload.vector };
      return state;
    case vectorStorageActions.DELETE_VECTOR:
      delete state[action.payload];
      return { ...state };
    default:
      return state;
  }
};

const VectorStorageContext = createContext({});

export { VectorStorageContext, vectorStorageReducer, vectorStorageActions };
