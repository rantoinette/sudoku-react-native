import {
  FETCH_SUDOKU_NUMBERS,
  FILLED_NUMBERS,
  GET_STATUS,
  GET_PROFILE,
  GET_LEVEL,
} from "./actionType";

const iniitialState = {
  initialNumbers: [],
  filledNumbers: [],
  status: "",
  userProfile: "",
  difficultyLevel: "",
};

function sudokuReducer(state = iniitialState, action) {
  //   console.log(action.type, "sudoku reducer");
  if (action.type === FETCH_SUDOKU_NUMBERS) {
    let filledNumbers = JSON.parse(JSON.stringify(action.payload));
    return {
      ...state,
      initialNumbers: action.payload,
      filledNumbers,
    };
  } else if (action.type === FILLED_NUMBERS) {
    return { ...state, filledNumbers: action.payload };
  } else if (action.type === GET_STATUS) {
    return { ...state, status: action.payload };
  } else if (action.type === GET_PROFILE) {
    return { ...state, userProfile: action.payload };
  } else if (action.type === GET_LEVEL) {
    return { ...state, difficultyLevel: action.payload };
  }
  return state;
}

export default sudokuReducer;
