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
            case 'VEHICLE_DETAILS':
                return{
                    ...state,
                    vdetails:[action.payload,...state.vdetails]
                }    
                case 'STORAGE_DETAILS':
                    return{
                        ...state,
                        sdetails:[action.payload,...state.sdetails]
                    }
                    case 'REVIEW':
                        return{
                            ...state,
                            redetails:[action.payload,...state.redetails]
                        }
    
           
        default:
            return state;

    }
}

