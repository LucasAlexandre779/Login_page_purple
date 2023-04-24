
const box = document.getElementById("icon_box")

box.addEventListener("click", () => {

    if (box.classList.contains("fa-square")) {
        box.classList.remove("fa-square")
        box.classList.add("fa-square-check")

        return
    }
    
    box.classList.remove("fa-square-check")
    box.classList.add("fa-square")
})