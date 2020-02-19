import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
        axios.get('https://reqres.in/api/users?page=2').then(res=>{console.log('res',res)})
    }
handleChange(event){
    console.log('event.target.value',event.target.value)
this.setState({name:event.target.value})
}
handleClick(){
    console.log('this')
    this.props.history.push('/show');
}
// componentDidMount() {
//     axios.get('https://reqres.in/api/users?page=2')
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }
render(){
    console.log(this.props)
    return(
            <div>
                <div class="ui input"><input type="text" placeholder="Search..." onChange={(e)=>this.handleChange(e)}/></div>
                <button className="ui button" onClick={()=>this.props.add(this.state.name)}>Click Here</button>
            {this.props.number}
            {/* <Link to="/show"> */}
            <button className="ui button" onClick={()=>this.handleClick()}>Click Here</button>
            {/* </Link> */}

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

  
export default connect(mapStateToProps,mapDispatchToProps)(Counter);