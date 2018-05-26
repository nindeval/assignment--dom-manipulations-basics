
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1

  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
   var answerPTagWithValue = document.querySelector('#compoundInvestment')
   var answerPTagWithValueEL1 = answerPTagWithValue.textContent
   var answerPTagWithValueEL2 = parseInt(answerPTagWithValueEL1)
   console.log(answerPTagWithValueEL2)
   // you do the rest
  answerPTagWithValue.textContent = answerPTagWithValueEL2 *2

  })


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var changeColorCicleDomEl = document.querySelector('#color-circle .exercise-item')

  var elementStyle = window.getComputedStyle(changeColorCicleDomEl)
  // console.log(elementStyle.backgroundColor)
  // 'rgb(0, 0, 0)'

  if(elementStyle.backgroundColor === 'rgb(255, 255, 255)' ){
      changeColorCicleDomEl.style.backgroundColor = 'rgb(0, 0, 0)'
  } else{
      changeColorCicleDomEl.style.backgroundColor = 'rgb(255, 255, 255)'
  }

})
  var contador = 0
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  contador++

  var circleDomEl = document.querySelector('.circle-red')
  // console.log(circleDomEl.offsetWidth)
  // console.log(circleDomEl.offsetHeight)
  if(contador === 1){
    circleDomEl.style.width = "80px"
    circleDomEl.style.height = "80px"
  } else if(contador === 2){
    circleDomEl.style.width = "120px"
    circleDomEl.style.height = "120px"
  } else if(contador === 3){
    circleDomEl.style.width = "320px"
    circleDomEl.style.height = "320px"
  } else if(contador === 4){
    circleDomEl.style.width = "40px"
    circleDomEl.style.height = "40px"
  } else {
    contador = 1
    circleDomEl.style.width = "80px"
    circleDomEl.style.height = "80px"
  }

  //
  // var circleValObj = window.getComputedStyle(circleDomEl)
  // // console.log(styleValObj)
  // var widthCircleStr = circleValObj.width
  // var heightCircleStr = circleValObj.height
  // // console.log(widthCircleDom)
  // // console.log(heightCircleDom)
  //
  // var widthValStrNoPx = widthCircleStr.slice(0, widthCircleStr.length - 2)
  // var heightValStrNoPx = heightCircleStr.slice(0, heightCircleStr.length - 2)
  //
  // // console.log(parseInt(widthValStrNoPx))
  // // console.log(parseInt(heightValStrNoPx))
  //
  // var widthValSlicedPx =  parseInt(widthValStrNoPx)
  // var heightValSlicedPx = parseInt(heightValStrNoPx)
  //
  // if(contador === 1){
  //   widthValSlicedPx = widthValSlicedPx*2
  //   heightValSlicedPx = heightValSlicedPx*2
  // } else if(contador === 2){
  //   widthValSlicedPx = widthValSlicedPx*4
  //   heightValSlicedPx = heightValSlicedPx*4
  // } else if(contador === 3){
  //   widthValSlicedPx = widthValSlicedPx*8
  //   heightValSlicedPx = heightValSlicedPx*8
  // } else if(contador === 4){
  //   widthValSlicedPx = widthValSlicedPx
  //   heightValSlicedPx = heightValSlicedPx
  // }
  //
  // // console.log(widthValSlicedPx)
  // // console.log(heightValSlicedPx)

  // TRAV ___T

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var inactiveList = document.querySelectorAll('#user-list .inactive')
  // convert inactiveList to array
  var inactiveListArray = [...inactiveList]
  // console.log(inactiveListArray)

  // iterate over inactiveListArray dom elements (ideally w forEach)

    function printInConsole(item){
      // console.log(element)
      item.style.display = 'none'
    }

    inactiveListArray.forEach(printInConsole)
  // set display none on each dom element inside the iteration
  // pofabor
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var squareNodeList = document.querySelectorAll(' #reverse-squares .answer-box ')
  // console.log(...squareNodeList)
  var squareArr = [...squareNodeList]
  // console.log(squareArr)
  // var squareList = ''


  for(var i = 0; i < squareArr.length; i++){
  console.log(squareArr[i].className)
  var template = squareArr[i]
  // template.className += ' reverse-flex'
    template.style.display = 'flex'
    template.style.flexDirection = 'row-reverse'
    template.style.justifyContent = 'center'
  }

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var taskList = document.querySelectorAll('#tasks li')
  // console.log(...taskObj)
  var taskEl = [...taskList]
  // console.log(taskEl)
  var taskArr = []

  taskEl.forEach(function(elem, i){
    // console.log(elem.textContent)
    var elemEl = elem.textContent
    var elemTxtEl = ''

    for(var i = 0; i < elemEl.length; i++){
      // console.log(elemEl)
      var alreves = elemEl.length - 1 - i;
      // console.log(alreves)
      elemTxtEl = elemTxtEl + elemEl[alreves]
      elem.innerHTML = `<li>${elemTxtEl}</li>`
    }

  })

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
