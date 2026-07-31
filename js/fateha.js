const btn = document.getElementById("fatehaBtn");
const msg = document.getElementById("thanksMessage");

btn.addEventListener("click", function () {

    msg.style.display = "block";

    btn.innerHTML = "🌹 خدا خیرتان دهد";

    btn.disabled = true;

});
