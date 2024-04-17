import * as types from './../constants/index';

var data =  JSON.parse(localStorage.getItem("data"));
const initialState = data ? data : [];

var myReducer = (state = initialState , action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
            break;

        case types.ADD_TASK:
            console.log('thực hiện ở đây');
            return state;
            break;
    
        default:
            return state;
            break;
    }
}

export default myReducer;