const isian = document.getElementById("isian")
const ora = document.getElementById("ora")
const pilihan = document.getElementById("pilihan")
const tombolMusik = document.getElementById("tombolMusik")
const iconmusik = document.querySelector(".tombol-musik i")
const namaorang = document.querySelector(".contener2 .p4")

const song = document.getElementById ("song")
// const iya = document.getElementById("iya")
let lagu = false

// awalan
function buka() {
  isian.style.display = "flex"
  playmusik()
  tombolMusik.style.display = "flex"
}

// tombol musik
function playmusik() {
 
  song.play()
  lagu = true
}

tombolMusik.onclick = function () {
  if (lagu) {
    song.pause()
    iconmusik.classList.remove("ph-pause")
    iconmusik.classList.add("ph-play")
  }
  else{
    song.play()
    iconmusik.classList.add("ph-pause")
    iconmusik.classList.remove("ph-play")
  }

  lagu = !lagu
}

// tombol pilihan

init = 0;

function tidak() {
  init++
  
  
  if (init == 0) {
    ora.style.marginLeft = "10px"
  }
  else if(init == 1) {
      ora.style.marginLeft = "50px"
      
  } 
  else if(init == 2) {
      ora.style.marginTop = "50px"
      
  } 
  else if(init == 3) {
      ora.style.marginLeft = "10px"
     
  } 
  else {
    ora.style.marginTop= "20px"
   init =0
  }
  console.log("ini" ,init)

}

function iya () {
  alert('Terimakasih atas jawaban jujur anda. kami tunggu kedatangannya.....')
  pilihan.style.display = "none"
}

// tanggal waktu

simplyCountdown ('.simply-countdown' , {
  year: 2024, // required
  month: 10, // required
  day: 5, // required
  hours: 21, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: { singular: 'Hari', plural: 'Hari' },
      hours: { singular: 'Jam', plural: 'Jam' },
      minutes: { singular: 'Menit', plural: 'Menit' },
      seconds: { singular: 'Detik', plural: 'Detik' }
  },
})

// nama 
const urlparam = new URLSearchParams(window.location.search)
const nama = urlparam.get("to")
namaorang.innerText = nama

console.log(nama)

// animasi
// document.addEventListener("DOMContentLoaded", function(){
//   const elements = document.querySelectorAll(".atas, .bawah, .kiri, .kanan")
//   const observasi = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if(entry.isIntersecting) {
//         entry.target.classList.add("visible")

//         observasi.unobserve(entry.target)
//       }
//     });
//   }, {
//     threshold: 0.1
//   });
//   elements.forEach(element =>{
//     observasi.observe(element)
//   })
// })
