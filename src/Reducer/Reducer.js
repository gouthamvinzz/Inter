import { ADD_ONE,MINUS_ONE } from "./../Action/Action";
import axios from 'axios';
const initialState ={
    number:[]
}
const Reducer = (state = initialState ,action)=>{
    console.log('aaa',state,action)
switch(action.type)
{
    case 'ADD_ONE':
        { axios.get(`https://api.openweathermap.org/data/2.5/weather?q=`+action.payload+`&appid=af8604b40a59019d724776f00f179133`)
        .then(res=>{
            console.log('res',res)
            return{
                number: state.number[0]=res.data.main
            };
        })
            
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
