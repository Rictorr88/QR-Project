// const $ = document

// const wrapper = $.querySelector('.wrapper')
// const input = $.querySelector('input')
// const button = $.querySelector('button')
// const img = $.querySelector('img')

// button.addEventListener('click', () => {
//     let inputValue = input.value.trim()

//     if (inputValue) {
//         button.innerHTML ="Generando codigo QR..."
//         img.setAttribute(
//           "src",
//           `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`)

//           img.addEventListener('load', () => {
//             wrapper.classList.add('active')
//             button.innerHTML="!Codigo Generado!"
//           })
//     }
// })

// .input.addEventListener('keyup', () => {
//     if (!input.value.trim()) {
//         wrapper.classList.remove('active')
//     }
// })

//  con boton de descarga

const $ = document;

const wrapper = $.querySelector(".wrapper")
const input = $.querySelector("input")
const button = $.querySelector("button")
const img = $.querySelector("img")
const downloadButton = $.createElement("button")
downloadButton.textContent = "Descarga tu codigo QR"
downloadButton.style.display = "none" 

button.addEventListener("click", () => {
  let inputValue = input.value.trim()

  if (inputValue) {
    button.innerHTML = "Generando código QR..."
    img.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
    );

    img.addEventListener("load", () => {
      wrapper.classList.add("active")
      button.innerHTML = "!Código Generado!"

      
      downloadButton.style.display = "block"
    })
  }
})

input.addEventListener("keyup", () => {
  if (!input.value.trim()) {
    wrapper.classList.remove("active")
    downloadButton.style.display = "none"
  }
})

downloadButton.addEventListener("click", () => {
  const downloadLink = document.createElement("a")
  downloadLink.href = img.src
  downloadLink.download = "codigoQR.png"
  downloadLink.click()
})


wrapper.appendChild(downloadButton)
downloadButton.className = "download-button"




