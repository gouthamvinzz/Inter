import React from 'react';
import {connect} from 'react-redux';
import {ADD_ONE,MINUS_ONE} from './../Action/Action';
class ListAll extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
handleChange(event){
    console.log('event.target.value',event.target.value)
this.setState({name:event.target.value})
}
render(){
    console.log(this.props)
    return(
            <div>
              
           <p> {this.props.number}</p>
            
           <div role="list" class="ui list">
           {this.props.number.map((list)=>{
               return <div role="listitem" class="item">{list}</div>
           })}
  
 
</div>
            </div>
    );
}
}
const mapStateToProps= (state)=>{
    console.log(state)
    return {
        number:state.number
    };
}
const mapDispatchToProps = (dispatch,payload) => ({
    
    add: (val) =>{ 
        console.log('aa',val)
        dispatch({type:'ADD_ONE',payload:val})},
    minus: () => dispatch({type:'MINUS_ONE'})
  });
export default connect(mapStateToProps,mapDispatchToProps)(ListAll);