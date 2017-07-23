import * as getActions from '../actions/getResults';

const initialState = {
    memberListReceived: [],
    keywordListReceived: ['gun control', 'birth control', 'a.c.c']
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {

      case getActions.MEMBER_LIST_RECEIVED:
          return Object.assign({}, state, {memberListReceived: action.list});

      case getActions.KEYWORD_LIST_RECEIVED:
          return Object.assign({}, state, {keywordListReceived: action.list});

    default:
    return state;
  }
};

export default homeReducer;
