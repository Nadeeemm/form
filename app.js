function store() {
    const name = document.getElementById("name");
    localStorage.setItem("name", name.value);
    const email = document.getElementById("email");
    localStorage.setItem("email", email.value);

    const phone = document.getElementById("phone");
    localStorage.setItem("phone", phone.value);

    const image = document.getElementById("image");
    localStorage.setItem("image", image.value);

    const btn = document.getElementById("btn");

    var table = document.getElementById("tabledata");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = name.value;
    row.insertCell(0).innerHTML = email.value;

    row.insertCell(0).innerHTML = phone.value;

    row.insertCell(0).innerHTML = image.value;



}

btn.addEventListener("click", () => {});