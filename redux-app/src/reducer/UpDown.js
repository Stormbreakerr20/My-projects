let Initial =0;

export const ChangetheNumber = (state = Initial , action)=>{
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
        default:
            return state
    }
}