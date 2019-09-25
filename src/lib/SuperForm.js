import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types'


const Button = styled.button`
    font-size: 15px;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius:8px;
    margin-top: 5px;
`

const validationTypes = [
  'badInput',
  'customError',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong',
  'tooShort',
  'typeMismatch',
  'valid',
  'valueMissing'
]

/**
 * 输入框名称和语言类型 lang，用于创建多语错误信息
 */
const defaultMessageProcessor = {
  badInput: (input,lang) => {
    const errorName = input.dataset.name || input.name
    if(lang === 'cn'){
      return `${errorName} 的值是无效值`
    }
    return `Incorrect value for ${errorName}`
  },
  customError: (input,lang) => {
    const errorName = input.dataset.name || input.name
    if(lang === 'cn'){
      return `${errorName} 的值是无效值`
    }
    return `Invalid value for ${errorName}`
  },
  patternMismatch: (input,lang) => {
    const errorName = input.dataset.name || input.name
    if(lang === 'cn'){
      return `${errorName} 不符合指定的正则表达式`
    }
    return `${errorName} don't match with the pattern`
  },
  rangeOverflow: (input,lang) => {
    const errorName = input.dataset.name || input.name
    if(lang === 'cn'){
      return `${errorName} 允许的最大值是 ${input.max}`
    }
    return `${errorName} maximun is ${input.max}`
  },
  rangeUnderflow: (input,lang) => {
    const errorName = input.dataset.name || input.name
    if(lang === 'cn'){
      return `${errorName} 允许的最小值 ${input.max}`
    }
    return `${errorName} minimum is ${input.max}`
  },
  tooLong: (input,lang) => {
    const errorName = input.dataset.name || input.name
    if(lang === 'cn'){
      return `${errorName} 最多不能超过 ${input.maxLength} 个字符`
    }
    return `${errorName} should have ${input.maxLength} or less characteres`
  },
  tooShort: (input,lang) => {
    const errorName = input.dataset.name || input.name
    if(lang === 'cn'){
      return `${errorName} 至少需要 ${input.maxLength} 个字符`
    }
    return `${errorName} should have ${input.minLength} or more characteres`
  },
  typeMismatch: (input,lang) => {
    if(lang === 'cn'){
      return `请输入 ${input.type} 类型的数值`
    }
    return `Please write a valid ${input.type}`
  },
  valueMissing: (input,lang) => {
    console.log('-----------');
    const errorName = input.dataset.name || input.name
    if (lang === 'cn'){
      return `请输入`
    }
    return `Please enter your ${errorName}`
  }
}



export default class SuperForm extends Component {
    static propTypes = {
        children: PropTypes.array,
        lang:PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state={
            error:null,validation:{},valid:true
        }
    }
    
    //df
    // onInput = (event) => {
    //     const input = event.target
    //     const isValid = input.checkValidity
    //     if(!isValid){
    //         this.setState({ ...this.state.error, [input.name]: input.validationMessage })
    //     }
       
    //   }
     hasError = (field) => !!this.state.errors[field]
     getError = (field) => this.state.errors[field]

     getValidationFromInput (messageProcesor, input) {
      const validity = input.validity
      const validation = { validity, valid: validity.valid, errors: [] }
      if (!validity.valid) {
        validationTypes.map((key,index) => {
          if (validity[key] && typeof messageProcesor[key] === 'function') {
            validation.errors.push(messageProcesor[key](input))
          }
          if (validity[key] && messageProcesor[input.name] && typeof messageProcesor[key] !== 'function' && messageProcesor[input.name][key]) {
            validation.errors.push(messageProcesor[input.name][key])
          }
          return key;
        })
      }
      return validation
    }

    

     getValidations (messageProcesor, form, formData) {
      return Array.from(formData.keys()).reduce((acc, elementKey) => {
        const input = form.elements[elementKey]
        acc[elementKey] = this.getValidationFromInput(messageProcesor, input)
        return acc
      }, {})
    }

    //old one
     submit = (event) => {
        event.preventDefault()
        const form = event.target
        const isValid = form.checkValidity() // returns true or false
        const formData = new FormData(form)
        const validationMessages = Array.from(formData.keys()).reduce((acc, key) => {
          acc[key] = form.elements[key].validationMessage
          return acc
        }, {})
        this.setState({error:validationMessages})
        
        console.log({
          validationMessages,
          formData,
          isValid
        })

        console.log(this.state.error)
        
        if (isValid) {
          // here you do what you need to do if is valid
          const data = Array.from(formData.keys()).reduce((acc, key) => {
            acc[key] = formData.get(key)
            return acc
          }, {})
          console.log('data',data);
          
        }
      }

      formAndData (event) {
        event.preventDefault()
        const form = event.target
        const valid = form.checkValidity()
        const formData = new FormData(form)
        return {
          form, valid, formData
        }
      }

       getDataObj (formData) {
        return Array.from(formData.keys()).reduce((acc, key) => {
          acc[key] = formData.get(key)
          return acc
        }, {})
      }
      
      
       onSubmitHandler = (event) => {
        const {form, valid, formData} = this.formAndData(event)
        const validation = this.getValidations(defaultMessageProcessor, form, formData)
        const data = this.getDataObj(formData)
        console.log({data,validation});
        console.log('Object.keys()',Object.keys(data));
        
        const validationMessages = Array.from(Object.keys(data)).reduce((acc, key) => {
          acc[key] = event.target.elements[key].validationMessage;
          console.log('mykey',key);
          console.log(event.target.elements[key].validity);
          /**
           * badInput: false
            customError: false
            patternMismatch: false
            rangeOverflow: false
            rangeUnderflow: false
            stepMismatch: false
            tooLong: false
            tooShort: false
            typeMismatch: false
            valid: false
            valueMissing: true
           */

          
         // let notValidInputs = event.target.elements[key].validity.filter(item=>item === true )
         Object.keys()
         // console.log('notValidInputs',notValidInputs);
          //acc[key] = defaultMessageProcessor[event.target.elements[key].validality][key];
          return acc
        }, {})
        this.setState({error:validationMessages})
        console.log('error',this.state.error)
        return {
          valid,
          validation,
          data
        }
      }
       onInputHandler = (event) => {
        return {
          validity: this.getValidationFromInput(defaultMessageProcessor, event.target),
          valid: event.target.checkValidity(),
          data: event.target.value
        }
      }

       onSubmit = (event) => {
        const { validation, data, valid } = this.onSubmitHandler(event)
        this.setState({validation,valid});
       
        return { validation, data }
      }
       onInput = (event) => {
        const { validity, valid } = this.onInputHandler(event)
        this.setState({valid});
        if(!valid){
            //this.setState({ ...this.state.error, [input.name]: input.validationMessage })
        }
      }

    render() {
      const children = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          errorMsg: this.state.error,
          onInput: this.props.onInput
        });
      });
        return (
            <div>
                <form onSubmit={this.onSubmitHandler} noValidate>
                    {children}
                    <Button type="submit">Submit this form</Button>
                </form>
                
            </div>
        )
    }
}