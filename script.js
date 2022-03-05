let preview, colorPicker, colorHexCode;

preview = document.getElementById("preview");
colorPicker = document.getElementById("colorPicker")
colorHexCode = document.getElementById("colorHexCode");

colorHexCode.innerHTML = `Hex Code of the Color: ${colorPicker.value}`
preview.style.backgroundColor = colorPicker.value;

colorPicker.addEventListener("input", (e) => {
    colorHexCode.innerHTML = `Hex Code of the Color: ${colorPicker.value}`
    preview.style.backgroundColor = colorPicker.value;
})