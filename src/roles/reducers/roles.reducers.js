
import { v4 as uuidv4 } from 'uuid';

const ADD_ROLE = 'ADD_ROLE';
const GET_ROLES_LIST = 'GET_ROLES_LIST';

const initialState = {
    roles: {
        rolesList: [],
        rolesColumns: [],
    }
};


const reducersRoles =   (state = initialState, action) => {

    switch (action.type) {
        case ADD_ROLE: {
            const newRolesList = [...state.roles.rolesList, {key: uuidv4(), Name: action.text}];
            const newState = {roles: {rolesList: newRolesList, rolesColumns: [...state.roles.rolesColumns],}}
            return newState;
        }

        case GET_ROLES_LIST: {
            return action.roles
        }

        default:
            return state;
    }
};


export const addRole = (text) => {
    return {
        type: ADD_ROLE,
        text: text
    }
};

export const getRolesList = (roles) => {
    return {
        type: GET_ROLES_LIST,
        roles: roles,
    }
};


export default reducersRoles;


