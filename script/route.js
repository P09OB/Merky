const params = new URLSearchParams(location.search)
const currentListId = params.get('listId');
const currentList = onGetSingleList(currentListId); 
const productsFromList = getProductsFromIdList(currentList.products)


const sliderContainer = document.querySelector('.slider-container');
// set up our state
let isDragging = false;
let startPos = 0; //es la pos del mouse () en el eje x
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;

const DUMMY_DATA = [...productsFromList];
console.log(DUMMY_DATA);

const createSlide = ({title, img}) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = (`
  <div class="route-element-container">
    <div class="route route-element">
      <div class="route__box">
          <div class="route__img"><img src="${img}"></div>
          <div class="route__info">
              <h2 class="route__name">${title}</h2>
          </div>
      </div>
      <label for="route">
          <button id=" route__button" class="button button__popup--checkbox">
              <p id="message">Recoger</p> <input class="checkbox__route" type="checkbox" id="route__checkbox"
                  name="route">
          </button>
      </label>
    </div>
  </div>
  `);
  return slide;
}


//Using the data array to create the elements and adding each one to the dom
const renderSlides = async () => {

  DUMMY_DATA.forEach((slide, index) => {
    const currentSlide = createSlide(slide);
    sliderContainer.appendChild(currentSlide);


    const slideImage = currentSlide.querySelector('img')
    // disable default image drag
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
    // touch events
    currentSlide.addEventListener('touchstart', touchStart(index))
    currentSlide.addEventListener('touchend', touchEnd)
    currentSlide.addEventListener('touchmove', touchMove)
    // mouse events
    currentSlide.addEventListener('mousedown', touchStart(index))
    currentSlide.addEventListener('mouseup', touchEnd)
    currentSlide.addEventListener('mousemove', touchMove)
    currentSlide.addEventListener('mouseleave', touchEnd)

  });
};


// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex)

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

// use a HOF so we have index in a closure
function touchStart(index) {

  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    // console.log(startPos);
    isDragging = true
    animationID = requestAnimationFrame(animation)
    sliderContainer.classList.add('grabbing')
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    // console.log(currentPosition);
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function touchEnd() {
  cancelAnimationFrame(animationID)
  isDragging = false
  const movedBy = currentTranslate - prevTranslate

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < DUMMY_DATA.length - 1) currentIndex += 1

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  sliderContainer.classList.remove('grabbing')

}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

function setSliderPosition() {
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`
}

renderSlides();