let pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

let left = document.querySelector(".back");
let right = document.querySelector(".next");
let slider = document.querySelector(".slider");
let insert;
let width = window.getComputedStyle(slider).width;
let petsOnSlide;


let listen990 = () => {
  document.getElementById("pop1").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop1");
      paste(pop);
  })
  document.getElementById("pop2").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop2");
      paste(pop);
  })
  document.getElementById("pop3").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop3");
      paste(pop);
  })
}


let listen580 = () => {
  document.getElementById("pop1").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop1");
      paste(pop);
  })
  document.getElementById("pop2").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop2");
      paste(pop);
  })
}


let listen270 = () => {
  document.getElementById("pop1").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop1");
      paste(pop);
  })
}
let listenpop2 = () => {
  document.getElementById("pop2").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop2");
      paste(pop);
  })
}
let listenpop3 = () => {
  document.getElementById("pop3").addEventListener('click', () => {
      scrollMove();
      let pop = document.getElementById("pop3");
      paste(pop);
  })
}

let scrollMove = () => {
    document.body.style.paddingRight = (window.innerWidth - document.body.clientWidth)+'px';
    document.body.style.width = '100%';
    let y=window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = -y+'px';
    document.body.style.overflow = 'hidden';
}

switch(width) {
    case '990px': 
        listen990();
        break;
    case '580px': 
        slider.children[2].remove(); 
        listen580();
        break;
    case '270px': 
        slider.children[2].remove();
        slider.children[1].remove();
        listen270();
        break;
}

right.addEventListener('click', moveRight => {
  right.disabled = true;
  left.disabled = true;
  document.querySelector(".slider-wrapper").style.overflow = "hidden";
  switch(width) {
    case '990px': 
    petsOnSlide = 3;
        sliderRight990();
        break;
    case '580px': 
    petsOnSlide = 2;
        sliderRight580();
        break;
    case '270px': 
    petsOnSlide = 1;
        sliderRight270();
        break;
  }
})

let sliderRight990 = () => {
    shuffle(pets);
    insert = '<div class="slider-pets ' + pets[0].name
    +'" id="pop1"><img class="slider-pets_image" src="'+ pets[0].img 
    +'" alt="'+ pets[0].name +'">'+ pets[0].name 
    +'<button class="LearnMore">Learn more</button></div>';
    insert += '<div class="slider-pets ' + pets[1].name
    +'" id="pop2"><img class="slider-pets_image" src="'+ pets[1].img 
    +'" alt="'+ pets[1].name +'">'+ pets[1].name 
    +'<button class="LearnMore">Learn more</button></div>';
    insert += '<div class="slider-pets ' + pets[2].name
    +'" id="pop3"><img class="slider-pets_image" src="'+ pets[2].img 
    +'" alt="'+ pets[2].name +'">'+ pets[2].name 
    +'<button class="LearnMore">Learn more</button></div>';
    slider.insertAdjacentHTML('beforeend', insert);

    removeLeftAnimation990();

    setTimeout(() => {
      slider.children[0].remove();
      slider.children[0].remove();
      slider.children[0].remove();
      document.querySelector(".slider-wrapper").style.overflow = "visible";
      right.disabled = false;
      left.disabled = false;
      listen990(); 
    }, 750);
}

let sliderRight580 = () => {
    shuffle(pets);
    insert = '<div class="slider-pets '+ pets[0].name
    +'" id="pop1"><img class="slider-pets_image" src="'+ pets[0].img 
    +'" alt="'+ pets[0].name +'">'+ pets[0].name 
    +'<button class="LearnMore">Learn more</button></div>';
    insert += '<div class="slider-pets '+ pets[1].name
    +'" id="pop2"><img class="slider-pets_image" src="'+ pets[1].img 
    +'" alt="'+ pets[1].name +'">'+ pets[1].name 
    +'<button class="LearnMore">Learn more</button></div>';
    slider.insertAdjacentHTML('beforeend', insert);
    removeLeftAnimation580();
    setTimeout(function removal () {
      slider.children[0].remove();
      slider.children[0].remove();
      document.querySelector(".slider-wrapper").style.overflow = "visible";
      right.disabled = false;
      left.disabled = false;
      listen580();
    }, 500);
}

let sliderRight270 = () => {
    shuffle(pets);
    insert = '<div class="slider-pets '+ pets[0].name
    +'" id="pop1"><img class="slider-pets_image" src="'+ pets[0].img 
    +'" alt="'+ pets[0].name +'">'+ pets[0].name 
    +'<button class="LearnMore">Learn more</button></div>';
    slider.insertAdjacentHTML('beforeend', insert);
    removeLeftAnimation270();
    setTimeout(function removal () {
      slider.children[0].remove();
      document.querySelector(".slider-wrapper").style.overflow = "visible";
      right.disabled = false;
      left.disabled = false;
      listen270();
    }, 250);
}

left.addEventListener('click', moveLeft => {
    left.disabled = true;
    right.disabled = true;
    document.querySelector(".slider-wrapper").style.overflow = "hidden";
    switch(width) {
      case '990px': 
      petsOnSlide = 3;
        sliderLeft990();
        break;
      case '580px': 
      petsOnSlide = 2;
        sliderLeft580();
        break;
      case '270px': 
      petsOnSlide = 1;
        sliderLeft270();
        break;
    }
})

let sliderLeft990 = () => {
  shuffle(pets);
  insert = '<div class="slider-pets ' + pets[0].name
  +'" id="pop1"><img class="slider-pets_image" src="'+ pets[0].img 
  +'" alt="'+ pets[0].name +'">'+ pets[0].name 
  +'<button class="LearnMore">Learn more</button></div>';
  insert += '<div class="slider-pets ' + pets[1].name
  +'" id="pop2"><img class="slider-pets_image" src="'+ pets[1].img 
  +'" alt="'+ pets[1].name +'">'+ pets[1].name 
  +'<button class="LearnMore">Learn more</button></div>';
  insert += '<div class="slider-pets ' + pets[2].name
  +'" id="pop3"><img class="slider-pets_image" src="'+ pets[2].img 
  +'" alt="'+ pets[2].name +'">'+ pets[2].name 
  +'<button class="LearnMore">Learn more</button></div>';
  slider.insertAdjacentHTML('afterbegin', insert);
  removeRightAnimation990();
  setTimeout(function removal () {
    slider.children[slider.children.length-1].remove();
    slider.children[slider.children.length-1].remove();
    slider.children[slider.children.length-1].remove();
    document.querySelector(".slider-wrapper").style.overflow = "visible";
    right.disabled = false;
    left.disabled = false;
    listen990();
  }, 750);
}

let sliderLeft580 = () => {
  shuffle(pets);
  insert = '<div class="slider-pets ' + pets[0].name
  +'" id="pop1"><img class="slider-pets_image" src="'+ pets[0].img 
  +'" alt="'+ pets[0].name +'">'+ pets[0].name 
  +'<button class="LearnMore">Learn more</button></div>';
  insert += '<div class="slider-pets ' + pets[1].name
  +'" id="pop2"><img class="slider-pets_image" src="'+ pets[1].img 
  +'" alt="'+ pets[1].name +'">'+ pets[1].name 
  +'<button class="LearnMore">Learn more</button></div>';
  slider.insertAdjacentHTML('afterbegin', insert);
  removeRightAnimation580();
  setTimeout(function removal () {
    slider.children[slider.children.length-1].remove();
    slider.children[slider.children.length-1].remove();
    document.querySelector(".slider-wrapper").style.overflow = "visible";
    right.disabled = false;
    left.disabled = false;
    listen580();
  }, 500);
}

let sliderLeft270 = () => {
  shuffle(pets);
  insert = '<div class="slider-pets ' + pets[0].name
  +'" id="pop1"><img class="slider-pets_image" src="'+ pets[0].img 
  +'" alt="'+ pets[0].name +'">'+ pets[0].name 
  +'<button class="LearnMore">Learn more</button></div>';
  slider.insertAdjacentHTML('afterbegin', insert);
  removeRightAnimation270();
  setTimeout(function removal () {
    slider.children[slider.children.length-1].remove();
    document.querySelector(".slider-wrapper").style.overflow = "visible";
    right.disabled = false;
    left.disabled = false;
    listen270();
  }, 250);
}
    

let paste = (pop) => {
    let id = pop.innerText;
    for (let i=0; i<pets.length; i++) {0
      let name = new RegExp(pets[i].name);
      if (name.test(id)) {
        insert = '<div id="shadow__popup"><button id="button__popup"><img src="../../assets/icons/X.svg"></button></div>';
        insert += '<div class="popup"><img class="image__popup" src="'+ pets[i].img +
        '"><div class="popup__text"><h3 class="popup__title">'+ pets[i].name +
        '</h3><h4 class="popup__subtitle">' +
        pets[i].type +' - '+ pets[i].breed +'</h4><p class="popup__paragraph">' +pets[i].description+
        '</p><ul><li class="popup__list_item"><b>Age</b>: '+pets[i].age +'</li><li class="popup__list_item"><b>Inoculations:</b> '+ 
        pets[i].inoculations.join(', ')+'</li><li  class="popup__list_item"><b>Diseases:</b> '+ pets[i].diseases.join(', ')+
        '</li><li class="popup__list_item"><b>Parasites:</b> '+ pets[i].parasites.join(', ') +'</li></ul></div></div>';
        slider.insertAdjacentHTML('beforebegin', insert);
        document.querySelector(".popup").animate([{ 
          opacity: 0},{
          opacity: 1}], 250);
        document.getElementById("shadow__popup").animate([{ 
          opacity: 0},{
          opacity: 1}], 250);
        setTimeout(close,250);
      }
    }
}

let close = () => {
document.getElementById("shadow__popup").addEventListener('click', () => {
  let sliderWrapper = document.querySelector(".slider-wrapper");
//   let oversloder = document.querySelector(".overslider");
  document.querySelector(".popup").animate([{ 
    opacity: 1},{
    opacity: 0}], 250);
  document.getElementById("shadow__popup").animate([{ 
    opacity: 1},{
    opacity: 0}], 250);
  setTimeout(function removal () {
    sliderWrapper.children[1].remove();
    sliderWrapper.children[0].remove();
    document.body.style.paddingRight = '0px';
    let y=document.body.style.top;
    document.body.style.position = 'static';
    document.body.style.overflow = 'visible';
    window.scrollTo(0,-(y).replace('px',''));
  }, 200);
})
}

window.onresize = () => {
  let old = width;
  width = window.getComputedStyle(slider).width;
  if (old!==width) {
    switch(Number(old.replace('px',''))-Number(width.replace('px',''))) {
      case 720:
        slider.children[2].remove();
        slider.children[1].remove();
        break;
      case 410: 
        slider.children[2].remove(); 
        break; 
      case 310: 
        slider.children[1].remove(); 
        break; 
      case -310: 
        insert = '<div class="slider-pets '+ pets[1].name
        +'" id="pop2"><img class="slider-pets_image" src="'+ pets[1].img 
        +'" alt="'+ pets[1].name +'">'+ pets[1].name 
        +'<button class="LearnMore">Learn more</button></div>';
        slider.insertAdjacentHTML('beforeend', insert);
        listenpop2();
        break;
      case -410:
        insert = '<div class="slider-pets '+ pets[2].name
        +'" id="pop3"><img class="slider-pets_image" src="'+ pets[2].img 
        +'" alt="'+ pets[2].name +'">'+ pets[2].name 
        +'<button class="LearnMore">Learn more</button></div>';
        slider.insertAdjacentHTML('beforeend', insert); 
        listenpop3();
        break;
      case -720:
        insert = '<div class="slider-pets '+ pets[1].name
        +'" id="pop2"><img class="slider-pets_image" src="'+ pets[1].img 
        +'" alt="'+ pets[1].name +'">'+ pets[1].name 
        +'<button class="LearnMore">Learn more</button></div>';
        insert += '<div class="slider-pets '+ pets[2].name
        +'" id="pop3"><img class="slider-pets_image" src="'+ pets[2].img 
        +'" alt="'+ pets[2].name +'">'+ pets[2].name 
        +'<button class="LearnMore">Learn more</button></div>';
        slider.insertAdjacentHTML('beforeend', insert); 
        listenpop2();
        listenpop3();
        break;
    }
  }
}

//left
removeLeftAnimation990 = () => {
  slider.animate([{ 
    transform: "translateX(0px)"},{
    transform: "translateX(-1080px)"}], {
        duration: 750,
        easing: 'ease-in' });
}

removeLeftAnimation580 = () => {
  slider.animate([{ 
    transform: "translateX(0px)"},{
    transform: "translateX(-620px)"}], 500);
}

removeLeftAnimation270 = () => {
  slider.animate([{ 
    transform: "translateX(0px)"},{
    transform: "translateX(-270px)"}], 250);
}

//right
removeRightAnimation990 = () => {
  slider.animate([{ 
    transform: "translateX(-1080px)"},{
    transform: "translateX(0px)"}], 750);
}

removeRightAnimation580 = () => {
  slider.animate([{ 
    transform: "translateX(-620px)"},{
    transform: "translateX(0px)"}], 500);
}

removeRightAnimation270 = () => {
  slider.animate([{
    transform: "translateX(-270px)"},{
    transform: "translateX(0px)"}], 250);
}


function shuffle(pets) {
  pets.reverse();
  for (let i = pets.length - petsOnSlide - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [pets[i], pets[j]] = [pets[j], pets[i]];
  }
}