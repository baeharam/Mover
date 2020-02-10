// @flow

import { createAction } from 'redux-actions';

type ActionCreatorType = (payload: any) => { type: string, payload: any };

export type RequestActionType = {
  TYPE: string,
  request: ActionCreatorType,
  success: ActionCreatorType,
  failure: ActionCreatorType,
  [key: string]: string,
};

export default function createRequestAction(type: string): RequestActionType {
  const REQUEST = `${type}/REQUEST`;
  const SUCCESS = `${type}/SUCCESS`;
  const FAILURE = `${type}/FAILURE`;

  return {
    TYPE: type,
    REQUEST,
    SUCCESS,
    FAILURE,
    request: createAction<string, any>(REQUEST),
    success: createAction<string, any>(SUCCESS),
    failure: createAction<string, {| error: string |}>(FAILURE),
  };
}
