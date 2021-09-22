let pets = [
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
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"] 
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
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
];
//добавление в массив pages 48 питомцев
for (let i = (pets.length -1); i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [pets[i], pets[j]] = [pets[j], pets[i]];
}

let pages = [];
while (pages.length<48) {
pages.push(...pets); 
}
for (let i=0; i<pets.length; i++) {
  document.querySelector('.pets__items').children[0].remove();
}
let generate = '';
for (let i=0; i<pets.length;i++) {
  document.querySelector('.pets__items')
  generate += '<div class="pets__item" id="pop'+ i +'"><img class="pet" src="'+ pages[i].img 
  +'" alt="'+ pages[i].name +'"><p class="pet__name">'+ pages[i].name 
  +'</p><button class="pet__learn">Learn more</button></div>';
}
//вставка
document.querySelector('.pets__items').insertAdjacentHTML('beforeend', generate);


//перемешивание массива pages
squareShuffle([8,9,10,11]);
squareShuffle([12,13,14,15]);
twoShuffle([16,17]);
dominoShuffle([18,19,20,21,22,23]);
dominoShuffle([24,25,26,27,28,29]);
twoShuffle([30,31]);
squareShuffle([32,33,34,35]);
squareShuffle([36,37,38,39]);
twoShuffle([40,41]);
dominoShuffle([42,43,44,45,46,47]);

function twoShuffle(two) {
for (let i = 0; i<two.length; i++) {
  let j = Math.floor(Math.random() * (i + 1)); 
  let change = two[i], to = two[j];
  [pages[change],pages[to]] = [pages[to],pages[change]];
}
}
function squareShuffle(square) {
for (let i = 0; i<square.length; i++) {
  let j = Math.floor(Math.random() * (i + 1)); 
  let change = square[i], to = square[j];
  [pages[change],pages[to]] = [pages[to],pages[change]];
}
}
function dominoShuffle(domino) {
for (let i = 0; i<domino.length; i++) {
  let j = Math.floor(Math.random() * (i + 1));
  let change = domino[i], to = domino[j];
  [pages[change],pages[to]] = [pages[to],pages[change]];
}
}
//DOM элементы
const first = document.querySelector('.first'),
      last = document.querySelector('.last'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');
let pets__items = document.querySelector('.pets__items'),
    insert, page=0, pageSize, petsOnPage, doIt=true;
let width = window.getComputedStyle(pets__items).width;
//проверка на лишних питомцев на странице
if (Math.round(Number(width.replace('px',''))) === 580 && pets__items.children[7]) {
pets__items.children[7].remove();
pets__items.children[6].remove();
}
if (Math.round(Number(width.replace('px',''))) === 270 && pets__items.children[3]) {
pets__items.children[7].remove();
pets__items.children[6].remove();
pets__items.children[5].remove();
pets__items.children[4].remove();
pets__items.children[3].remove();
}



//функция определения текущих свойств сетки
let detectPageSize = () => {
width = window.getComputedStyle(pets__items).width;
switch(Math.round(Number(width.replace('px','')))) {
  //pageSize это количество страниц при текущем разрешении
  //petsOnPage это количество питомцев на одной странице
  case 1200: pageSize=5; petsOnPage=8; break;
  case 580: pageSize=7; petsOnPage=6; break;
  case 270: pageSize=15; petsOnPage=3; break;
}
}
//обращаемся к ней сразу при загрузке
detectPageSize();



//функция которая вешает слушатели события 'click' 
//на всех питомцев, вызывается при переходе на другую страницу
let listen = () => {
for (let k = 0; k<petsOnPage; k++) {
  document.getElementById('pop'+k).addEventListener('click', () => {
    let pop = document.getElementById('pop'+k);
    //вставляем popup только если doIt === true
    if (doIt) {
      paste(pop);
      scrollMove();
    }
  }, false);
}
}
//и при загрузке
listen();



//функция которая вставляет popup
let paste = (pop) => {
let id = pop.innerText; //узнаем по какому питомцу кликнули
for (let i=0; i<pets.length; i++) { 
  //тут цикл по объекту питомцев, который ищет того, по которому кликнули
  let name = new RegExp(pets[i].name);
  if (name.test(id)) { //если совпадение найдено
    //сам popup
    insert = '<div id="shadow__popup"><button id="button__popup"><img src="../../assets/icons/X.svg"></button></div>';
    insert += '<div class="popup"><img class="image__popup" src="'+ pets[i].img +
    '"><div class="popup__text"><h3 class="popup__title">'+ pets[i].name +
    '</h3><h4 class="popup__subtitle">' +
    pets[i].type +' - '+ pets[i].breed +'</h4><p class="popup__paragraph">' +pets[i].description+
    '</p><ul><li class="popup__list_item"><b>Age</b>: '+pets[i].age +'</li><li class="popup__list_item"><b>Inoculations:</b> '+ 
    pets[i].inoculations.join(', ')+'</li><li  class="popup__list_item"><b>Diseases:</b> '+ pets[i].diseases.join(', ')+
    '</li><li class="popup__list_item"><b>Parasites:</b> '+ pets[i].parasites.join(', ') +'</li></ul></div></div>';
    //и его вставка
    pets__items.insertAdjacentHTML('afterbegin', insert);
    //анимация появления popup
    document.querySelector(".popup").animate([{ 
      opacity: 0},{
      opacity: 1}], 250);
    document.getElementById("shadow__popup").animate([{ 
      opacity: 0},{
      opacity: 1}], 250);
    //обращение в функцию close, там вешается слушатель на закрытие popup
    setTimeout(close,250);
  }
}
}

let close = () => {
document.getElementById("shadow__popup").addEventListener('click', () => {
  //анимация закрытия
  document.querySelector(".popup").animate([{ 
    opacity: 1},{
    opacity: 0}], 250);
  document.getElementById("shadow__popup").animate([{ 
    opacity: 1},{
    opacity: 0}], 250);
  setTimeout(function removal () {
    //и само удаление popup из html
    pets__items.children[1].remove();
    pets__items.children[0].remove();
    //возвращение полосы прокрутки
    document.body.style.paddingRight = '0px';
    document.querySelector('.header').style.top = '0px';
    let y=document.body.style.top;
    document.body.style.position = 'static';
    document.body.style.overflow = 'visible';
    window.scrollTo(0,-(y).replace('px',''));
  }, 200);
})
}
let scrollMove = () => {
//удаление полосы прокрутки
document.body.style.paddingRight = (window.innerWidth - document.body.clientWidth)+'px';
document.body.style.width = '100%';
let y=window.scrollY;
document.body.style.position = 'fixed';
document.body.style.top = -y+'px';
// if (Math.round(Number(width.replace('px','')))===270) document.querySelector('.header').style.top = y+'px';
document.body.style.overflow = 'hidden';
}



//в конец
last.addEventListener('click', () => {
doIt = false; //не дает сработать открытию popup во время анимации смены страниц
pets__items.style.overflow = 'hidden';
  //все кнопки блокируются, запрет на другие перелистывания кроме текущего
  //стили кнопок last и next меняются на неактивные
  first.disabled = true;
  prev.disabled = true;
  last.disabled = true;
  last.setAttribute('class','sliderBtn inactive last');
  next.disabled = true;
  next.setAttribute('class','sliderBtn inactive next');
  pets__items.animate([{
      opacity: 1 },{
      opacity: 0 }], 500);
  //текущая страница = максимальная страница
  page = pageSize;
  //отображение номера текущей страницы
  document.querySelector('.pageSelect').textContent = page+1;
  insert = '';
  for (let i = page*petsOnPage; i<48; i++) {
      //цикл который вставляет последних питомцев из перемешанного массива
      //для petsOnPage === 8 будут последние 8, т.е 40-47
      //для petsOnPage === 6 будут последние 6, т.е 42-47
      //для petsOnPage === 3 будут последние 3, т.е 45-47
      insert += '<div class="pets__item" id="pop'+ (i-petsOnPage*page) +'"><img class="pet" src="'+ pages[i].img 
      +'" alt="'+ pages[i].name +'"><p class="pet__name">'+ pages[i].name 
      +'</p><button class="pet__learn">Learn more</button></div>';
  }
  //вставка
  pets__items.insertAdjacentHTML('beforeend', insert);
  //стили кнопок first и prev меняются на активные
  first.setAttribute('class','sliderBtn active first');
  prev.setAttribute('class','sliderBtn active prev');
  setTimeout( () => {
    pets__items.style.overflow = 'visible';
      //снова можно менять страницу, кнопки разблокированы
      first.disabled = false;
      prev.disabled = false;
      doIt=true; //снова можно кликать для появления popup
        listen(); //навешивание на вставленных питомцев новых слушателей событий
  }, 1000);
  setTimeout( () => {
    let y=window.scrollY; //запоминаем координату y перед удалением питомцев
      for (let j = petsOnPage; j>0; j--) { //удаление старых питомцев со страницы
        pets__items.children[0].remove();
      }
      //при удалении питомцев страница становится меньше по высоте
      //буквально на миллисекунду ее высота становится равна высоте header + footer
      //а в следующую миллисекунду браузер успевает отрендерить вставленный набор питомцев
      //и высота страницы снова нормальная, но скролл сам по себе обратно не вернется
      //чтобы избежать дергания страницы скроллим обратно на координату Y :С
      window.scrollTo(0,y);
      pets__items.animate([{
          opacity: 0 },{
          opacity: 1 }], 500);
  }, 500); 
});


//в начало
first.addEventListener('click', () => {
doIt=false;
pets__items.style.overflow = 'hidden';
  last.disabled = true;
  next.disabled = true;
  first.disabled = true;
  first.setAttribute('class','sliderBtn inactive first');
  prev.disabled = true;
  prev.setAttribute('class','sliderBtn inactive prev');
  pets__items.animate([{
      opacity: 1 },{
      opacity: 0 }], 500);

  page = 0;
  document.querySelector('.pageSelect').textContent = page+1;
  insert = '';
  //вставляем питомцев с позиции 0 до позиции petsOnPage
  for (let i = 0; i<petsOnPage; i++) {
      insert += '<div class="pets__item" id="pop'+ i +'"><img class="pet" src="'+ pages[i].img 
      +'" alt="'+ pages[i].name +'"><p class="pet__name">'+ pages[i].name 
      +'</p><button class="pet__learn">Learn more</button></div>';
  }
  pets__items.insertAdjacentHTML('beforeend', insert);

  last.setAttribute('class','sliderBtn active last');
  next.setAttribute('class','sliderBtn active next');
  setTimeout( () => {
    pets__items.style.overflow = 'visible';
      last.disabled = false;
      next.disabled = false;
      doIt=true; //снова можно кликать для появления popup
        listen();
  }, 1000);
  setTimeout( () => {
    let y=window.scrollY;
      for (let j = petsOnPage; j>0; j--) {
        pets__items.children[0].remove();
      }
      window.scrollTo(0,y);
      pets__items.animate([{
          opacity: 0 },{
          opacity: 1 }], 500);
  }, 500); 
});



//следующая страница
next.addEventListener('click', () => {
doIt=false;
pets__items.style.overflow = 'hidden';
next.disabled = true;
prev.disabled = true;
last.disabled = true;
first.disabled = true;
first.setAttribute('class','sliderBtn active first');
prev.setAttribute('class','sliderBtn active prev');
pets__items.animate([{
    opacity: 1 },{
    opacity: 0 }], 500);

page++;
document.querySelector('.pageSelect').textContent = page+1;
insert = '';
//вставляем следующий набор питомцев
//начиная от позиции страница*питомцы на странице + питомцы на странице
//в итоге всегда вставляется набор нужной длины
for (let i = page*petsOnPage; i<(page*petsOnPage+petsOnPage); i++) {
    insert += '<div class="pets__item" id="pop'+ (i-page*petsOnPage) +'"><img class="pet" src="'+ pages[i].img 
    +'" alt="'+ pages[i].name +'"><p class="pet__name">'+ pages[i].name 
    +'</p><button class="pet__learn">Learn more</button></div>';
}
pets__items.insertAdjacentHTML('beforeend', insert);

if (page === pageSize) {
  last.setAttribute('class','sliderBtn inactive last');
  next.setAttribute('class','sliderBtn inactive next');
} else {
  setTimeout( () => {
      next.disabled = false;
      last.disabled = false; 
  }, 1000);
}
setTimeout( () => {
  pets__items.style.overflow = 'visible';
    first.disabled = false;
    prev.disabled = false;
    doIt=true;
      listen();
}, 1000);
setTimeout( () => {
  let y=window.scrollY;
    for (let j = petsOnPage; j>0; j--) {
      pets__items.children[0].remove();
    }
    window.scrollTo(0,y);
    pets__items.animate([{
      opacity: 0 },{
      opacity: 1 }], 500);
}, 500); 
});


//предыдущая страница
prev.addEventListener('click', () => {
doIt=false;
pets__items.style.overflow = 'hidden';
next.disabled = true;
prev.disabled = true;
last.disabled = true;
first.disabled = true;
next.setAttribute('class','sliderBtn active next');
last.setAttribute('class','sliderBtn active last');
pets__items.animate([{
    opacity: 1 },{
    opacity: 0 }], 500);

page--;
document.querySelector('.pageSelect').textContent = page+1;
insert = '';
for (let i = page*petsOnPage; i<(page*petsOnPage+petsOnPage); i++) {
    insert += '<div class="pets__item" id="pop'+ (i-page*petsOnPage) +'"><img class="pet" src="'+ pages[i].img 
    +'" alt="'+ pages[i].name +'"><p class="pet__name">'+ pages[i].name 
    +'</p><button class="pet__learn">Learn more</button></div>';
}
pets__items.insertAdjacentHTML('beforeend', insert);

if (page === 0) {
  first.setAttribute('class','sliderBtn inactive first');
  prev.setAttribute('class','sliderBtn inactive prev');
} else {
  setTimeout( () => {
      first.disabled = false;
      prev.disabled = false; 
  }, 1000);
}
setTimeout( () => {
  pets__items.style.overflow = 'visible';
    last.disabled = false;
    next.disabled = false;
    doIt=true;
      listen();
}, 1000);

setTimeout( () => {
  let y=window.scrollY;
    for (let j = petsOnPage; j>0; j--) {
      pets__items.children[0].remove();
    }
    window.scrollTo(0,y);
    pets__items.animate([{
      opacity: 0 },{
      opacity: 1 }], 500);
}, 500); 
});


window.onresize = () => {
//если размер сетки с питомцами меняется, просто обновляем страницу
//Math.round если ширина неправильно округлилась браузером
let old = width;
detectPageSize();
switch(Math.round(Number(old.replace('px','')))-Math.round(Number(width.replace('px','')))) {
  case 930: 
      document.location.reload();
      break;
  case 620: 
      document.location.reload();
      break;
  case 310: 
      document.location.reload();
      break;
  case -310: 
      document.location.reload();
      break;
  case -540: 
  //idk почему сетка ломается на -540, но этот кейс лечит
      document.location.reload();
      break;
  case -620: 
      document.location.reload();
      break;
  case -930: 
      document.location.reload();
      break;
  }
}