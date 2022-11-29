let form = document.querySelector('.section7')
let nameInput = document.querySelector('#username')
let emailInput = document.querySelector('#email')
let tlfInput = document.querySelector('#tel')

const formValidation = (e) => {
    e.preventDefault()
    if (!nameInput.value) {
        alert('Introduce tu nombre.')
        nameInput.focus()
        return
    }

    function validateEmail(email) {
        let validate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return validate.test(email)
    }

    if (!validateEmail(emailInput.value)) {
        alert('Introduce un email valido')
        emailInput.focus()
        return
    }


    if (!(tlfInput.value * 1)) {
        alert('Introduce tu numero de teléfono')
        tlfInput.focus()
        return
    }


    const checked = document.getElementById('checkBox');
   
    const checkedValue = checked.checked
        if (!(checkedValue)) {
            alert('Acepta los términos y condiciones');
            return
        }
    };


form.addEventListener('submit', formValidation)


