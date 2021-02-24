const initialPostState=[]
const postReducer=(state=initialPostState,action)=>{
    switch(action.type){
        case 'ADD_DATA':{
            return state.concat(action.payload)
        }
        default:{
            return [...state]
        }
    }
}
export default postReducer