const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

const loginBtn = document.getElementById("btn-login");
const signupBtn = document.getElementById("btn-signup");

const closeLogin =
	document.getElementsByClassName("close")[0];
const closeSignup =
	document.getElementsByClassName("close")[1];

loginBtn.addEventListener("click", function () {
	loginModal.style.display = "block";
	signupModal.style.display = "none";
});

signupBtn.addEventListener("click", function () {
	signupModal.style.display = "block";
	loginModal.style.display = "none";
});

closeLogin.addEventListener("click", function () {
	loginModal.style.display = "none";
});

closeSignup.addEventListener("click", function () {
	signupModal.style.display = "none";
});

window.addEventListener("click", function (event) {
	if (
		event.target == loginModal ||
		event.target == signupModal
	) {
		loginModal.style.display = "none";
		signupModal.style.display = "none";
	}
});
