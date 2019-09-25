import { useState } from 'react'

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

const defaultMessageProcessor = {
  badInput: (input) => {
    const errorName = input.dataset.name || input.name
    return `Incorrect value for ${errorName}`
  },
  customError: (input) => {
    const errorName = input.dataset.name || input.name
    return `Invalid value for ${errorName}`
  },
  patternMismatch: (input) => {
    const errorName = input.dataset.name || input.name
    return `${errorName} don't match with the pattern`
  },
  rangeOverflow: (input) => {
    const errorName = input.dataset.name || input.name
    return `${errorName} maximun is ${input.max}`
  },
  rangeUnderflow: (input) => {
    const errorName = input.dataset.name || input.name
    return `${errorName} minimum is ${input.max}`
  },
  stepMismatch: (input) => {
    const errorName = input.dataset.name || input.name
    return `${errorName} should grow by ${input.step} at the time`
  },
  tooLong: (input) => {
    const errorName = input.dataset.name || input.name
    return `${errorName} should have ${input.maxLength} or less characteres`
  },
  tooShort: (input) => {
    const errorName = input.dataset.name || input.name
    return `${errorName} should have ${input.minLength} or more characteres`
  },
  typeMismatch: (input) => {
    return `Please write a valid ${input.type}`
  },
  valueMissing: (input) => {
    const errorName = input.dataset.name || input.name
    return `Please enter your ${errorName}`
  }
}

function formAndData (event) {
  event.preventDefault()
  const form = event.target
  const valid = form.checkValidity()
  const formData = new FormData(form)
  return {
    form, valid, formData
  }
}

function getDataObj (formData) {
  return Array.from(formData.keys()).reduce((acc, key) => {
    acc[key] = formData.get(key)
    return acc
  }, {})
}

function getValidationFromInput (messageProcesor, input) {
  const validity = input.validity
  const validation = { validity, valid: validity.valid, errors: [] }
  if (!validity.valid) {
    validationTypes.reduce((acc, key) => {
      if (validity[key] && typeof messageProcesor[key] === 'function') {
        acc.errors.push(messageProcesor[key](input))
      }
      if (validity[key] && messageProcesor[input.name] && typeof messageProcesor[key] !== 'function' && messageProcesor[input.name][key]) {
        acc.errors.push(messageProcesor[input.name][key])
      }
      return acc
    }, validation)
  }
  return validation
}

function getValidations (messageProcesor, form, formData) {
  return Array.from(formData.keys()).reduce((acc, elementKey) => {
    const input = form.elements[elementKey]
    acc[elementKey] = getValidationFromInput(messageProcesor, input)
    return acc
  }, {})
}

export function formHandlers (messageProcesor = defaultMessageProcessor) {
  const onSubmitHandler = (event) => {
    const {form, valid, formData} = formAndData(event)
    const validation = getValidations(messageProcesor, form, formData)
    const data = getDataObj(formData)
    return {
      valid,
      validation,
      data
    }
  }
  const onInputHandler = (event) => {
    return {
      validity: getValidationFromInput(messageProcesor, event.target),
      valid: event.target.checkValidity(),
      data: event.target.value
    }
  }
  return [
    onSubmitHandler,
    onInputHandler
  ]
}

export default function useForm (messageProcesor = defaultMessageProcessor) {
  const [validation, setValidation] = useState({})
  const [valid, setValid] = useState(true)
  const [onSubmitHandler, onInputHandler] = formHandlers(messageProcesor)
  const onSubmit = (event) => {
    const { validation, data, valid } = onSubmitHandler(event)
    setValidation(validation)
    setValid(valid)
    return { validation, data }
  }
  const onInput = (event) => {
    const { validity, valid } = onInputHandler(event)
    setValid(valid)
    setValidation({ ...validation, [event.target.name]: validity })
  }
  const hasError = (field) => validation[field] && !validation[field].valid
  const getErrors = (field) => {
    return validation[field] && !validation[field].valid && validation[field].errors && validation[field].errors.length > 0
      ? validation[field].errors
      : []
  }
  return {
    validation,
    valid,
    onSubmit,
    onInput,
    hasError,
    getErrors
  }
}