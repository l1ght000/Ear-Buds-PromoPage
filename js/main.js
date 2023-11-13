document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

//scroll animation

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const links = document.querySelectorAll('.links-container a');


const section = document.querySelector('section');
const end = section.querySelector('h1');


const controller = new ScrollMagic.Controller();

const linksAnim = TweenMax.fromTo(links, 3, { opacity: 1 }, { opacity: 0 });

let scene3 = new ScrollMagic.Scene({
    duration: 300, 
    triggerElement: intro,
    triggerHook: 0
})
.setTween(linksAnim)
.addTo(controller);

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 })

let scene2 = new ScrollMagic.Scene({
    duration: 1500,
    triggerElement: intro,
    triggerHook: 0
})


.setTween(textAnim)
.addTo(controller)

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = scrollpos;
}, 33.3);



//x-ray js

(() => {
    (function(){
        "use strict";
    
    
    var imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;
     
    
    function onDown() {
      dragging = true;
    }
    
    function onUp() {
      dragging = false;
    }
    
    function onMove(event) {
      if(dragging===true) {
        var x = event.clientX - imageCon.getBoundingClientRect().left;
        
        console.log(event.clientX);
        console.log(imageCon.getBoundingClientRect().left);
  
        if(x < min) { 
          x = min;   
        }
       else if(x > max) { 
          x = max-4; 
        }
        drag.style.left = x + 'px';
        left.style.width = x + 'px';
      }
    }
    
    drag.addEventListener('mousedown', onDown, false); 

    document.body.addEventListener('mouseup', onUp, false);
 
    document.body.addEventListener('mousemove', onMove, false);
  
    
    })();

  
})();


// ar model
// IIFE
(function() {
  // Hotspot data
  const hotspotsArray = {
    'hotspot 1': {
      title: 'New Innovation Fastest Charger',
      description: 'Say goodbye to waiting. Our New Innovation Fastest Charger lets you enjoy hours of music with just a few minutes of charge. Get back to your life, powered by the quickest charging technology available.'
    },
    'hotspot 2': {
      title: '8D Dynamic Revolution Sound System',
      description: 'Immerse yourself in the 8D Dynamic Revolution Sound System. Each earbud is engineered to provide a multi-dimensional audio experience, taking your music and podcasts to a whole new level.'
    },
    'hotspot 3': {
      title: 'Fastest Bluetooth Chip',
      description: 'Never miss a beat with our Fastest Bluetooth Chip. Experience real-time audio with zero lag, making sure your devices are always in sync and ready to deliver top-notch sound.',
      img: 'images/chip-img.jpg' 
    },
    'hotspot 4': {
      title: 'Gold Metal Logotype',
      description: 'Elegance meets functionality. Our Gold Metal logotype is not just a brand—it is a statement. Show off your impeccable taste while enjoying the best audio experience.'
    }
  };

  // Function to update hotspot details
  function updateHotspotDetails(hotspotKey) {
    const hotspotData = hotspotsArray[hotspotKey];
    if (hotspotData) {
      const annotation = document.querySelector(`[data-hotspot-key="${hotspotKey}"] .HotspotAnnotation`);
      if (annotation) {
        annotation.querySelector('.HotspotTitle').innerText = hotspotData.title;
        annotation.querySelector('.HotspotDescription').innerText = hotspotData.description;
        if (hotspotData.img) {
          annotation.querySelector('.HotspotImage').src = hotspotData.img;
        }
      }
    }
  }

  // Function to animate hotspots
  function animateHotspot(annotation, show) {
    gsap.to(annotation, { duration: 0.5, autoAlpha: show ? 1 : 0 });
  }

  document.querySelectorAll('.Hotspot').forEach(hotspot => {
    hotspot.addEventListener('mouseover', function() {
      const annotation = this.querySelector('.HotspotAnnotation');
      animateHotspot(annotation, true);
      updateHotspotDetails(this.dataset.hotspotKey);
    });
  
    hotspot.addEventListener('mouseout', function() {
      const annotation = this.querySelector('.HotspotAnnotation');
      animateHotspot(annotation, false);
    });
  });

  document.querySelectorAll('.Hotspot').forEach(hotspot => {
    gsap.set(hotspot.querySelector('.HotspotAnnotation'), { autoAlpha: 0 });
    updateHotspotDetails(hotspot.dataset.hotspotKey);
  });

})(); 

