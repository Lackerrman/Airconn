const firebaseConfig = {
    apiKey: "AIzaSyD4gzPWC0HOf-71GZpOqRA3IDVigWE3eug",
    authDomain: "contactform-2a2f5.firebaseapp.com",
    databaseURL: "https://contactform-2a2f5-default-rtdb.firebaseio.com",
    projectId: "contactform-2a2f5",
    storageBucket: "contactform-2a2f5.appspot.com",
    messagingSenderId: "548974629533",
    appId: "1:548974629533:web:5dbee9ea6f20a58705ba74"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
   document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
   document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };