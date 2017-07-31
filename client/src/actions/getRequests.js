import * as getResults from './getResults';
import axios from 'axios';

export const fetchList = () => dispatch  => {
    return axios.get('http://localhost:3004/member-list')
        .then(list => {
            dispatch(getResults.memberListReceived(list.data));
        })
}

export const fetchMember = (memberId) => dispatch => {
      return axios({
          method: 'post',
          url: 'http://localhost:3004/members/fetch-member',
          data: {
              id: memberId
          }
      }).then((response) => {
          dispatch(getResults.memberReceived(response.data));
      })
}