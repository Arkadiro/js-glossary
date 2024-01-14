import {UserActionsEnum} from './user-actions.enum';
import {User} from './user-model';

export const setCurrentUser = (user: User) => ({
    type: UserActionsEnum.setCurrentUser,
    payload: user
});
