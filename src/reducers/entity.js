import axios from "axios";
import { createAction, createReducer } from "redux-act";

const initialState = {
  data: [],
  isFetching: false,
  isError: false,
  searchList: false,
  infiniteLoaderItem: false
};

const ROOT_URL = "https://pokeapi.co/api/v2/pokemon";
const myApi = axios.create({
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const getPokemon = createAction("get pokemon");
export const failurePokemon = createAction("failure Pokemon");
export const filterPokemon = createAction("filter pokemon");
export const infiniteLoader = createAction("Infinite loader");

export function fetchPokemon(startpoint, endpoint) {
  return dispatch => {
    let urls = [];

    for (; startpoint <= endpoint; ++startpoint) {
      urls.push(
        axios.get(`${ROOT_URL}/${startpoint}/`, myApi).then(json => json.data)
      );
    }

    return Promise.all(urls)
      .then(resolve => dispatch(getPokemon(resolve)))
      .catch(error => dispatch(failurePokemon()));
  };
}

export default createReducer(
  {
    [getPokemon]: (state, json) =>
      Object.assign({}, state, {
        data: state.data.concat(json),
        isFetching: true,
        searchList: false,
        infiniteLoaderItem: false
      }),
    [failurePokemon]: state =>
      Object.assign({}, state, {
        isFetching: true,
        isError: true
      }),
    [filterPokemon]: (state, list) =>
      Object.assign({}, state, {
        searchList: list
      }),
    [infiniteLoader]: state =>
      Object.assign({}, state, {
        infiniteLoaderItem: true
      })
  },
  initialState
);
