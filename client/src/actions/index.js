import {
  signInType,
  signOutType,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import streams from "../api/streams";

export const signIn = (userId) => {
  return {
    type: signInType,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: signOutType,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);

  dispatch({
    type: CREATE_STREAM,
    payload: response,
  });
};
