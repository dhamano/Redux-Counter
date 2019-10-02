export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = count => {
  return {
    type: "INCREMENT",
    payload: count + 1
  }
};

export const decrement = count => {
  return {
    type: "DECREMENT",
    payload: count - 1
  }
};

export const incrementIfOdd = count => {
  let countIfOdd = ((count % 2) !== 0) ? count + 1 : count;
  return {
    type: "INCREMENT_IF_ODD",
    payload: countIfOdd
  }
};

export const incrementAsync = count => {
  return {
    type: "INCREMENT_ASYNC",
    payload: count + 1
  }
};
