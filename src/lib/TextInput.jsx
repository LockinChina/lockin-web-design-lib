import React, {Component} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types'


const StyleInput = styled.input`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: ${props => (props.big ? '16px' : '12px')};
  font-weight: 400;
  padding: 10px;
  margin-top: 4px;
  font-family: 'Montserrat', sans-serif;
  spacing: 2
  color: rgb(33, 37, 41);
`

const Label = styled.label`
  font-size: 8px;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
`

const Error = styled.label`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 8px;
  font-weight: 800;
  color: red;
`



export default class TextInput extends Component{
  static  propTypes = {
      name: PropTypes.string.isRequired,
      defaultValue: PropTypes.string,
      placeholder:PropTypes.string,
      label: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      errorMsg: PropTypes.oneOfType([PropTypes.string,PropTypes.object]),
      required:PropTypes.bool
  }

  state = {
    value : '',errorMsg:{}
  }

  getError = (field) => this.state.errors[field]

  componentDidMount(){
    
    if(this.props.defaultValue){
      this.setState({value:this.props.defaultValue})
    }
  }

  componentDidUpdate(prev){
    console.log('error',this.props.errorMsg);
    if(prev.errorMsg!== this.props.errorMsg){
        this.setState({errorMsg:this.props.errorMsg})
    }
  }

  onChange = e => {
    this.setState({value:e.target.value})
  }

  render(){
    const {name,label,placeholder,size,defaultValue} = this.props;
    return(
      <div >
        {label && <Label >{label}:</Label>}
        {label && <br/>}
        <StyleInput
          value={defaultValue}
          placeholder = {placeholder}
          big = {true}
          size ={size}
          name={name}
          pattern='[a-zA-Z]*'
          required 
          autoComplete='off'
          onChange={e => this.props.onInput }
        /><br/>
        {
          this.state.errorMsg[name] && <Error>{this.state.errorMsg[name]}</Error>
        }
       
      </div>
    )
  }
}

