let inone= document.getElementById('inone');
let upone= document.getElementById('upone');
let inn= document.getElementsByClassName('inn')[0];
let up =document.getElementById('up');
inone.onclick= function(){
    inn.classList.remove('hide');
    up.classList.add('hide');
}
upone.onclick= function(){
    up.classList.remove('hide');
    inn.classList.add('hide');
}
document.getElementById('signin').onclick=function(event){
    event.preventDefault();
    let username=document.getElementById('inname').value;
    let pass=document.getElementById('inpass').value;
    let check=document.getElementById('incheck').checked;
    if(username&&pass&&check){
        window.location.href="flower.html";
    }
    else{
        window.alert("You Must Enter All Fields")
    }
}
document.getElementById('signup').onclick=function(event){
    event.preventDefault();
    let username=document.getElementById('upname').value;
    let pass=document.getElementById('uppass').value;
    let email=document.getElementById('email').value;
    let check=document.getElementById('upcheck').checked;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if(username&&pass&&email&&check){
        window.location.href="flower.html";
        alert("Account created successfully!")
    }
    else{
        window.alert("You Must Enter All Fields");
    }
}





