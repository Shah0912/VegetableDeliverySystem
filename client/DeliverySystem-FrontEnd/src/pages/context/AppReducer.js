export default(state,action)=>{
    switch(action.type){
        case 'ADD_DETAILS':
            return{
                ...state,
                details:[action.payload,...state.details]
            }
            case 'REGISTER_DETAILS':
                return{
                    ...state,
                   rdetails:[action.payload,...state.rdetails]
                }
    
           
        default:
            return state;

    }
}

