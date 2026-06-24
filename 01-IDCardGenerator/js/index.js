function generateCard() {
  const name = document.getElementById("name").value || "N/A";
  const collegeName = document.getElementById("collegeName").value || "N/A";
  const location = document.getElementById("location").value || "N/A";

  document.getElementById("cardName").textContent = name;
  document.getElementById("cardCollegeName").textContent = collegeName;
  document.getElementById("cardLocation").textContent = location;

  document.getElementById("collegeCard").style.display = "block";
}