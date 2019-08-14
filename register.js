var firebaseConfig = {
    apiKey: "AIzaSyCE9dkPSWV1NL9xnJiDsbneg7t6mnHui1o",
    authDomain: "loginpage-fe9ca.firebaseapp.com",
    databaseURL: "https://loginpage-fe9ca.firebaseio.com",
    projectId: "loginpage-fe9ca",
    storageBucket: "loginpage-fe9ca.appspot.com",
    messagingSenderId: "475414581393",
    appId: "1:475414581393:web:94103714f19984bf"
  };

  firebase.initializeApp(firebaseConfig);
  var data = firebase.database();
  
        $(document).ready(function(){
           var username ;
           var password;
           var repass;
           var user = [];
           $("#btn1").click(function(){
               username = document.getElementById("username").value;
               password = document.getElementById("password").value;
               repass = document.getElementById("repassword").value;
               if(password == repass)
               {
                   alert("password matched");
                   

               }
               else{
                   alert("password not matched");
               }
           })
        })
