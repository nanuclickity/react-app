const createAction = str => `LIBRARY_${str}`

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  hasError: false,
  meta: {
    // use this for pagination etc.
  }
}

const FETCH = createAction('FETCH')
const FETCH_SUCCESS = createAction('FETCH_SUCCESS')
const FETCH_FAILURE = createAction('FETCH_FAILURE')

export const actions = {}

export default function LibraryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
