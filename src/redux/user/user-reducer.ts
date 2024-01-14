import {UserActionsEnum} from './user-actions.enum';
import {User} from './user-model';

const initialState = new User();

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UserActionsEnum.setCurrentUser:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
