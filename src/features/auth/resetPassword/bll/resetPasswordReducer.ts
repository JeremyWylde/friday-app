export const resetPasswordReducer  = (state ={}, action: any) =>{
    switch (action.type) {
        case " ":
            return{
                ...state
            };
        default:{
            return state
        }
    }
};