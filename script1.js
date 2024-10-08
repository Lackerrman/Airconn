
 
  const firebaseConfig = {
    apiKey: "AIzaSyAjqgmn5oieN7SVW-975YfXXhZDn7Ydh9Q",
    authDomain: "contact-us-38a9c.firebaseapp.com",
    databaseURL: "https://contact-us-38a9c-default-rtdb.firebaseio.com",
    projectId: "contact-us-38a9c",
    storageBucket: "contact-us-38a9c.appspot.com",
    messagingSenderId: "493392784396",
    appId: "1:493392784396:web:18d7a55a697aa0ab7a9229",
    measurementId: "G-QPMYP00KMR"
  };


 firebase.initializeApp(firebaseConfig);
 


  var ContactUsDB = firebase.database().ref("Contact Us");

  document.getElementById('Contactform').addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var yourname = getElementVal('yourname');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var msgContent = getElementVal('msgContent');
    
    saveMessages = (yourname, email, subject, msgContent );
  }
  const saveMessages = (yourname, email, subject, msgContent ) =>{
    var newContactForm = ContactUsDB.push();

    newContactForm.set({
      yourname : yourname,
      email: email,
      subject: subject,
      msgContent:msgContent,
    });
};


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }