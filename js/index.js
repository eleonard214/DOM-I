const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// grabbing nav a's individually
const firstNav = document.querySelector('nav a')
const secNav = firstNav.nextElementSibling
const triNav = secNav.nextElementSibling
const fourNav = triNav.nextElementSibling
const fifNav = fourNav.nextElementSibling
const sixNav = fifNav.nextElementSibling
// changing nav a's text individually
document.querySelector('nav a').textContent = 'Services'
secNav.textContent = 'Product'
triNav.textContent = 'Vision'
fourNav.textContent = 'Features'
fifNav.textContent = 'About'
sixNav.textContent = 'Contact'



// add src to img
document.querySelector('img.logo').src = 'img/logo.png'

// adding text to h1 element. append 2nd and 3rd to 1st
const firstH1 = document.querySelector('h1')
const secH1 = document.createElement('h1')
const triH1 = document.createElement('h1')
firstH1.textContent = 'DOM'
secH1.textContent = 'Is'
triH1.textContent = 'Awesome'
firstH1.appendChild(secH1)
firstH1.appendChild(triH1)

// adding text to button
const butt1 = document.querySelector('button')
butt1.textContent = 'Get Started'

// adding src to img. 
document.querySelector('.cta img').src ="img/header-img.png"
document.querySelector('.middle-img').src = 'img/mid-page-accent.jpg'

// add text to h4 and p's
const topH4 = document.querySelectorAll('.main-content .top-content .text-content h4')
topH4[0].textContent = 'Features'
topH4[1].textContent = 'About'
const topP = document.querySelectorAll('.main-content .top-content .text-content p')
topP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
const botH4 = document.querySelectorAll('.main-content .bottom-content  .text-content h4')
botH4[0].textContent = 'Services'
botH4[1].textContent = 'Product'
botH4[2].textContent = 'Vision'
const botP = document.querySelectorAll('.main-content .bottom-content .text-content P')
botP[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
botP[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
botP[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
const contH4 = document.querySelector('.contact h4')
contH4.textContent = 'Contact'
const contP = document.querySelectorAll('.contact P')
contP[0].textContent = '123 Way 456 Street '
const anoP = document.createElement('p')
anoP.textContent = 'Somewhere, USA'
contP[0].appendChild(anoP)
contP[1].textContent = '1 (888) 888-8888'
contP[2].textContent = 'sales@greatidea.io'

//add text to footer paragraph
const footP = document.querySelector('footer p')
footP.textContent = 'Copyright Great Idea! 2018'

//change nav text to green
const navG = document.querySelectorAll('nav a')
navG[0].style.color="green"
navG[1].style.color="green"
navG[2].style.color="green"
navG[3].style.color="green"
navG[4].style.color="green"
navG[5].style.color="green"

//append and prepend
const newNav1 = document.createElement('a')
newNav1.textContent = 'Always'
const newNav2 = document.createElement('a')
newNav2.textContent = 'Forever'
const navs = document.querySelector('nav')
navs.appendChild(newNav1)
navs.prepend(newNav2)

// testing 
console.log(firstNav)
console.log(secNav)
console.log(triNav)
console.log(fourNav)
console.log(fifNav)
console.log(sixNav)
console.log (firstH1)
console.log(secH1)
console.log(triH1)
console.log(butt1)
console.log(topH4[0])
console.log(topH4[1])
console.log(topP[0])
console.log(topP[1])
console.log(botH4[0])
console.log(botH4[1])
console.log(botH4[2])
console.log(botP[0])
console.log(botP[1])
console.log(botP[2])
console.log(contH4)
console.log(contP[0])
console.log(contP[1])
console.log(contP[2])
console.log(navG)