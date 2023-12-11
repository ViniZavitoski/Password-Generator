let passwordLength = 16
const inputE1 = document.querySelector("#password")

function generatePassword() {
    const chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890."

    let password = ""

    for ( let i = 0 ; i < passwordLength ; i++ ) {
        const randomNumber = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomNumber,randomNumber + 1)
    }

    inputE1.value = password

}

function copy() {
    navigator.clipboard.writeText(inputE1.value)
}

const passwordLengthE1 = document.querySelector("#password-length")
passwordLengthE1.addEventListener("input",function(){
    passwordLength = passwordLengthE1.value
    generatePassword()
})

const copyButtonE1 = document.querySelector("#copy")
copyButtonE1.addEventListener("click",copy)

ganeratePassword()