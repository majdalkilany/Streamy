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
import history from "../history";
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

export const createStream = (formValues) => async (dispatch, getSTate) => {
  const { userId } = getSTate().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  history.push("/");

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  history.push("/");

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  history.push("/");

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
