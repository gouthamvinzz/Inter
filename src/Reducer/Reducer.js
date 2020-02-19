import { ADD_ONE,MINUS_ONE } from "./../Action/Action";
const initialState ={
    number:[0]
}
const Reducer = (state = initialState ,action)=>{
    console.log('aaa',state,action)
switch(action.type)
{
    case 'ADD_ONE':
        {
            return{
                number: [...state.number,action.payload]
            };
        }
    case 'MINUS_ONE':
        {
            return{
                number: state.number
            }
        } 
    default:
    return state;       
}
}

export default Reducer;