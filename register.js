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
         data.ref().on('value',function(snap){
                basename = snap.val().basename;
                basepass = snap.val().basepass;
                     $("#btn1").click(function()
                     {
                         var username ;
                         var password;
                         var repass;
                         var uname , pass;
                         var basename = [];
                         var basepass  = [];
                          username = document.getElementById("username").value;
                          password = document.getElementById("password").value;
                          repass = document.getElementById("repassword").value;
                                  
                            data.ref().on('value',function(snap)
                                 {
                                    basename = snap.val().basename;
                                    basepass = snap.val().basepass;
                                    basename.push(username);
                                    data.ref().update({basename});
                                    
                                                 
                                 });
                                })
                            
                             
                             
                            
                             });
                  

               
              
           

