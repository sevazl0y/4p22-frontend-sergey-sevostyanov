const formNode = document.querySelector('[data-js-form]')

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
  return re.test(String(email).toLowerCase());
}

const validateInput = (inputNode) => {
  const paramsString = inputNode.getAttribute('data-js-input')
  const paramsObject = JSON.parse(paramsString)
  const { type, passwordRepeatInputID, passwordInputId } = paramsObject
  console.debug('params:', paramsObject)

  const inputErrorNode = inputNode.querySelector('[data-js-input-error]')
  const inputControlNode = inputNode.querySelector('[data-js-input-control]')
  const value = inputControlNode.value.trim()
  const isEmpty = value.length === 0
  
  const isPasswordConfirmed = () => {
    const passwordConfirmNode = document.getElementById(passwordRepeatInputID)
    const passwordConfirmValue = passwordConfirmNode.value
    const isPasswordConfirmEmpty = passwordConfirmValue.length === 0
    const isPasswordConfirmEqual = passwordConfirmValue === value

    return !isPasswordConfirmEmpty && isPasswordConfirmEqual
  }

  if (type === 'email') {
    const isEmailCorrect = validateEmail(value)
    

    if (isEmpty) {
      inputErrorNode.innerHTML = 'Поле обязательно для заполнения'
    } else if (!isEmailCorrect) {
      inputErrorNode.innerHTML = 'Email введен некорректно'
    }

    const hasEmailAnyError = isEmpty || !isEmailCorrect

    if (hasEmailAnyError) {
      inputControlNode.classList.add('is-invalid')
      return false
    } else {
      inputControlNode.classList.remove('is-invalid')
    }

    if (!hasEmailAnyError) {
      inputErrorNode.innerHTML = ''
    }
  }

  if (type === 'password') {
    if (isEmpty) {
      inputErrorNode.innerHTML = 'Поле обязательно для заполнения'
      inputControlNode.classList.add('is-invalid')
      return false
    } else if (value.length < 8) {  
      inputErrorNode.innerHTML = 'Пароль должен содержать не менее 8 символов'
      inputControlNode.classList.add('is-invalid')
      return false
    } else if (!isPasswordConfirmed()) {
      inputErrorNode.innerHTML = 'Пароли не совпадают'
      inputControlNode.classList.add('is-invalid')
      return false
    } else {
      inputErrorNode.innerHTML = ''
      inputControlNode.classList.remove('is-invalid')
    }
  }  
  return true
}

const validateForm = (formNode) => {
  const inputs = formNode.querySelectorAll('[data-js-input]')
  const totalInputs = inputs.length
  let validInputs = 0

  inputs.forEach((inputNode) => {
    const isInputValid = validateInput(inputNode)

    if (isInputValid) {
      validInputs++
    }
  })

  return totalInputs === validInputs
}

formNode.addEventListener('submit', (event) => {
  event.preventDefault()

  const isFormValid = validateForm(formNode)


  if (isFormValid) {
    const formData = new FormData(formNode)
    const formDataObject = Object.fromEntries(formData)

    console.log(formDataObject)
  }
})