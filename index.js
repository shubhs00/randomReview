const prevBtn  = document.querySelector('.prev-btn')
const nextBtn  = document.querySelector('.next-btn')
const randomReview = document.querySelector('.random')
const image = document.getElementById('profileimg')
const profName = document.getElementById('profName')
const uxName = document.querySelector('.ux')
const userInfo = document.querySelector('p')


let currentIndex = 0

const reviewData = [
    {
        id : 1 ,
        img: 'card4.jpg',
        uxname: 'shubham meshram',
        proffession: 'ux developer',
        userinfo : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ab non voluptates soluta
        explicabo iure numquam nesciunt porro fugit necessitatibus accusamus vero, aliquam quo excepturi quod
        officiis earum quis quibusdam? 
       `
    },
{ 
    id: 2 ,
    img: 'img_girl.jpg',
    uxname: 'sidhu dosewala',
    proffession: 'frontend developer',
    userinfo : 'he have knowledge of the frontend tech as far i know him he is the guy among other developers '
   
},
     {
        id: 3 ,
        img: '121.jpg',
        uxname: 'new girl in the town',
        proffession: 'junior developer',
        userinfo : 'I am the junior web developer in the house frontend tech as far i know him he is the guy among other developers '
     }
]



prevBtn.addEventListener('click',function(){
   
  prevReview()
   
})

nextBtn.addEventListener('click',function(){
 
 nextReview()

})


randomReview.addEventListener('click',function(){
  currentIndex =   Math.floor(Math.random() * reviewData.length)
  showPerson()
  console.log(currentIndex)
   
})


// for (let i = 0; i < reviewData.length; i++) {
//     const item = reviewData[i];
//     // do something with the current item, such as display it in the UI
//   }


  function prevReview(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = reviewData.length - 1
    }
     
    showPerson()
    
    
  }
  

function nextReview() {
    currentIndex++
    if(currentIndex > reviewData.length -1 ){
        currentIndex = 0
        console.log(currentIndex)
    }
    // currentIndex = (currentIndex + 1) % reviewData.length;
    showPerson()
  }


 function showPerson(){
    
image.src = reviewData[currentIndex].img
profName.innerHTML = reviewData[currentIndex].uxname
uxName.textContent = reviewData[currentIndex].proffession
userInfo.innerHTML = reviewData[currentIndex].userinfo
 } 
