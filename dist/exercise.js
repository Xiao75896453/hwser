$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
    // Step 9 and step 10 code goes here

  $.get('./step5',{
    fname: $(`#ajax-form input[name="fName"]`).val(),
    lname: $(`#ajax-form input[name="lName"]`).val(),
    // Step 11 code goes here
    }, (data) => {
       $(`#ajax-output h1`)
    })
  })
});
