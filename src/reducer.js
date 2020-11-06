const initialState = {
    GovEvents: {},
    GovPartTypeEvents: {},
    updateModel:{isUpdate:false,updateData:{}},
    Calculate:{}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "govSelector":
            let temp = { ...state }
            temp.GovEvents[action.vaule.name] = action.vaule.callback
            return {
                ...temp
            }

        default: return state
    }
};

export default reducer;