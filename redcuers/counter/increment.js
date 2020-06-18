import {INCREMENT} from '../../actionconstants/counter'

export const IncrementReducer=(state=20,action)=>{
    switch (action.type) {
        case INCREMENT:
             return state +1;           
         default:
             return state;        
    }
};

