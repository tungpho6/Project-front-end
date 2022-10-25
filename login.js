let objPeople = [
{ username: "211210244",
  password: '**********'
},
{ username: "Phan Dong Hai",
  password: 'phandonghai'
},


];
function Login (){
let username = document.getElementById('User-name').value;
let password = document.getElementById('Password').value;
objPeople.forEach( function(objPeople){
if(username == objPeople.username && password == objPeople.password){
window.location.href = "https://tungpho6.github.io/Student-management/Studentmanage.html";
}else{
alert('User or password may be not valid! ');  
}

})
};
