import * as getActions from '../actions/getResults';

const initialState = {
    memberListReceived: [],
    keywordListReceived: [{
        keyword: 'Gun control',
        icon: 'gun-control-icon.png'
    },{
        keyword: 'Birth control',
        icon: 'birth-control-icon.png'
    },{
        keyword: 'A.C.A',
        icon: 'aca-icon.png'
    },{
        keyword: 'Gun rights',
        icon: 'gun-rights-icon.png'
    }]
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
