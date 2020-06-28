

export const loginReducer = (state ={}, action: any) => {
    switch (action.type) {
        case 'init': {
            return {
                ...state,
            }
        }

        default: {
            return state
        }
    }
};