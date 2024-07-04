function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const bookdate = document.forms["message-form"]["book-date"].value;
  const notes = document.forms["message-form"]["notes"].value;


  if (name == "" || gender == "" || bookdate == "" || notes == "") {
      alert("Please Complete The Form");
      return false;

  }

  setSenderUI(name, gender, bookdate, notes);

  return false;


}

function setSenderUI (name, gender, bookdate, notes) {

  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-book-date").innerHTML = bookdate;
  document.getElementById("sender-notes").innerHTML = notes;
  

}