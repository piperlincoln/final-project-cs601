// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCy0uAMZAP7wbr2HApGmemlVbRyqqo3wr4",
  authDomain: "cs-601-final-project.firebaseapp.com",
  projectId: "cs-601-final-project",
  storageBucket: "cs-601-final-project.appspot.com",
  messagingSenderId: "404615815002",
  appId: "1:404615815002:web:b1becf5e205a302e321d63",
  measurementId: "G-XFFNG8BL5M",
  databaseURL: "https://cs-601-final-project-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Put Data into Table
firebase.database().ref("Testimonials").once('value', function(snapshot){
  if(snapshot.exists()){
    var content = '';
    snapshot.forEach(function(data){
      var val = data.val();
      content +='<tr>';
      content += '<td>' + val.Author + '</td>';
      content += '<td>' + val.Date + '</td>';
      content += '<td>' + val.Text + '</td>';
      content += '</tr>';
    });
    $('#testimonial-table').append(content);
  }
});

function submitTestimonial(form) {
  // Create the form error messages for validation.
  const authorNameValidation = "Your name must be only alpha characters.";

  let authorNameValid = validateName(form.authorName, authorNameValidation);

  if (authorNameValid) {
    const testimonials = firebase.database().ref("Testimonials");
    testimonials.push().set({
      Author: form.authorName.value,
      Date: form.date.value,
      Text: form.testimonial.value
    });
  } else {
    return false;
  }
}

/*
 * This function shows an error message under the input box if validation fails.
 *
 * Author: Piper Lincoln
 */
function showMessage(input, message, type) {
  // Get the element for the error message text and populate it.
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;

  // Set the name of the class so the correct style is applied.
	input.className = type ? "success" : "error";
	return type;
}

/*
 * This function validates the author name field.
 *
 * Author: Piper Lincoln
 */
function validateName(input, message) {
  if (!/[^a-zA-Z\s]/.test(input.value.trim())) {
    return showMessage(input, "", true);
  } else {
    return showMessage(input, message, false);
  }
}
