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
document.querySelector('.cta img').src = 'img/header-img.png'

// add text to h4 and p's
const firstH4 = document.querySelector('.top-content h4')
const secH4 = document.querySelector('.text-content h4')
const firstP = document.querySelector('.top-content p')
const secP = document.querySelector('.text-content p')

firstH4.textContent = 'Features'
secH4.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.'



// console log to check work
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
console.log(firstH4)
console.log(secH4)
console.log(firstP)
console.log(secP)