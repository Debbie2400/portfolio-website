//HTML ELEMENTS
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registrations-pane"
const crapsMainSection = "craps-main-section"

function registerCrapsPlayer() {
    let crapsUsername = document.getElementById(crapsUsernameInput).value
    alert("Got: " + crapsUsername)
    removeRegistrationPane()
    showMainGameSection()
}

function removeRegistrationPane() {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}

function showMainGameSection() {
    document.getElementById(crapsMainSection).style.display = "block"
}