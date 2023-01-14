document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});
document.getElementById('button1').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});
document.getElementById('button2').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});
document.getElementById('button3').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});


let donerList = [];

let donationAmount;


function storeVal(el) {
  // let amount = el.value; 
  donationAmount = el.value;
  console.log(donationAmount);
} 

const storingDonation = (ev)=>{
  ev.preventDefault();
  let donation = {
    firstName: document.getElementById('firstname').value, 
    lastName: document.getElementById('lastname').value, 
    phone: document.getElementById('phone').value, 
    email: document.getElementById('email').value,
    amount: donationAmount
  }

  donerList.push(donation);
  console.log(donerList);
  document.forms[0].reset();

  localStorage.setItem("donation", JSON.stringify(donerList));
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('enter').addEventListener('click', storingDonation);
})
