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
