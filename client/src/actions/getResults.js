
export const TEST= 'TEST';
export const test = message => ({
  type: TEST,
  message
});

export const MEMBER_RECEIVED = 'MEMBER_RECEIVED';
export const memberReceived = member => ({
  type: MEMBER_RECEIVED,
  member
});

export const MEMBER_LIST_RECEIVED = 'MEMBER_LIST_RECEIVED';
export const memberListReceived = list => ({
    type: MEMBER_LIST_RECEIVED,
    list
});

export const KEYWORD_LIST_RECEIVED = 'KEYWORD_LIST_RECEIVED';
export const keywordListReceived = list => ({
    type: KEYWORD_LIST_RECEIVED,
    list
});

