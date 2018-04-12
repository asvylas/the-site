function checkEntries() {
  var firstAndLastName = document.getElementsByTagName("input")
  var textArea = document.getElementsByTagName("textarea")

  var firstNameFixed = firstAndLastName[0].value.trim(" ")
  var lastNameFixed = firstAndLastName[1].value.trim(" ")
  var textAreaFixed = textArea[0].value.trim(" ")

  if(firstNameFixed.length > 0 && lastNameFixed.length > 0 && textAreaFixed.length > 0) {
    submitData(firstNameFixed, lastNameFixed, textAreaFixed)
  } else {
    alert('Please fill all the fields...')
  }
  console.log()
} 

function submitData(firstName, lastName, text) {
  console.log(firstName, lastName, text)
  //post data to server
}