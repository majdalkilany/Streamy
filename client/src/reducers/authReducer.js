/* eslint-disable import/no-anonymous-default-export */

import { signInType, signOutType } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case signInType:
      return { ...state, isSignedIn: true, userId: action.payload };
    case signOutType:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
