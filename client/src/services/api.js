import axios from 'axios';

let dataService = {
    fetchSearch: (search) => {
        if (search === 'members') {
            axios.get('http://localhost:3004/member-list')
                .then(response => {
                    return response.data;
                })
        } else {
            return ['gun control, birth control, A.C.A']
        }
    }
}

export default dataService;



