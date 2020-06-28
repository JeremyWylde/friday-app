import {combineReducers, createStore} from "redux";
import {loginReducer} from "../../features/auth/login/bll/loginReducer";
import {registerReducer} from "../../features/auth/register/bll/registerReducer";
import {resetPasswordReducer} from "../../features/auth/resetPassword/bll/resetPasswordReducer";
import {newPasswordReducer} from "../../features/auth/newPassword/bll/newPasswordReducer";
import {profileReducer} from "../../features/auth/profile/bll/profileReducer";

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    resetPassword: resetPasswordReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer,

});

const store = createStore(reducers);

export default store;