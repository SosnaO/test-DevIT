const checkLength = function (evt) {
  if (field.value.length > 8) {
  	button.removeAttribute('disabled')
  }
}
const field = document.querySelector('input[name="Password"]')
const button = document.querySelector('button')
field.addEventListener('keyup', checkLength)

