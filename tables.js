const armSelector = document.getElementById("arm-select")
const titleChange = document.getElementById("title-change")
const timeTableA = document.getElementById("timetable-A")
const timeTableB = document.getElementById("timetable-B")


armSelector.addEventListener("change", function() {
    let selectedArm = armSelector.value
    titleChange.textContent = `JSS 1${selectedArm} Weekly Timetable`
    timeTableA.style.display = "none"
    timeTableB.style.display = "none"
    
    if (selectedArm === "A") {
        timeTableA.style.display = "block"
    } else if(selectedArm === "B") {
        timeTableB.style.display = "block"
    }
})