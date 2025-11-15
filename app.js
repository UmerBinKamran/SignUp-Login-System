var userName = localStorage.getItem("name");
if (userName) {
  document.getElementById("userName").innerText = userName;
}
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.clear();
  alert("You have been logged out!");
  window.location.href = "index.html";
});
