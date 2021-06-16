import {
  FETCH_SUDOKU_NUMBERS,
  FILLED_NUMBERS,
  GET_LEVEL,
  GET_PROFILE,
  GET_STATUS,
} from "./actionType";

export function initialNumber(input) {
  return {
    type: FETCH_SUDOKU_NUMBERS,
    payload: input,
  };
}

export function filledNumberAction(input) {
  return {
    type: FILLED_NUMBERS,
    payload: input,
  };
}

export function setStatus(input) {
  return {
    type: GET_STATUS,
    payload: input,
  };
}

export function setProfile(input) {
  return {
    type: GET_PROFILE,
    payload: input,
  };
}

export function setLevel(input) {
  return {
    type: GET_LEVEL,
    payload: input,
  };
}

export const fetchSudokuNumbers = (level) => {
  return (dispatch, getState) => {
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${level}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        dispatch(initialNumber(data.board));
        // dispatch(filledNumberAction(data.board));
        // console.log(data.board, "fetchsudoku Numbers");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

// export const encodeParams = (params) => async (dispatch) =>
//   Object.keys(params)
//     .map(key => key + '=' + `%5B${dispatch(encodeBoard(params[key]))}%5D`)
//     .join('&');

export const submitSudoku = (url, payload) => {
  //   console.log(payload, "payload");
  return (dispatch, getState) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: JSON.stringify(payload),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // console.log(data, "raw status data");
        // console.log(data.status, "trial status data");
        dispatch(setStatus(data.status));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
