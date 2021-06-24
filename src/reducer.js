const Term=(state=null,action)=>{
    switch(action.type){
        case 'SET_SEARCH':
            return state=action.payload;
        default:
            return state;
    }

}

export default Term;