const initialState = [];

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case "ADD_LIST_ITEM":
            return (
                [...state, action.text]
            );
        default:
            return state
    }
}