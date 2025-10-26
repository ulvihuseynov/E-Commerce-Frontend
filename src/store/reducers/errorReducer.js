const initialState={
    isLoading:false,
    errorMessage:null,
    categoryLoader:false,
    categoryError:null
}

export const errorReducer=(state=initialState,action)=>{

    switch (action.type) {
        case "IS_FETCHING":
           return{
            ...state,
            isLoading:true,
            errorMessage:null
           };
    case "IS_SUCCESS":
            return{
            ...state,
            isLoading:false,
            errorMessage:null
           };
            case "IS_ERROR":
             return{
            ...state,
            isLoading:false,
            errorMessage:action.payload
           };
            case "CATEGORY_SUCCESS":
            return{
            ...state,
            isLoading:false,
            categoryError:null
           };
            case "CATEGORY_LOADER":
             return{
            ...state,
            isLoading:true,
            categoryError:null,
            errorMessage:null
           };
        default:
            console.log(state)
               return state;

    }
}