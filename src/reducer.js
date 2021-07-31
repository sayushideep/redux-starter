import * as actions from './actionTypes';
let lastId = 0;
export default function reducer(state = [], action) {
    debugger;
    if (action.type === actions.BUG_ADDED)
        return [
            ...state, {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    else if (action.type === actions.BUG_REMOVED)
        return state.filter(bug => bug.id != action.payload.id)

    else if (action.type === actions.BUG_RESOLVED)
        return state.map(bug => {
            bug.resolved = bug.id == action.payload.id ? true : bug.resolved;
            return bug;
        });
}