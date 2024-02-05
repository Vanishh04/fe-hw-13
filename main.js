document.addEventListener('DOMContentLoaded', onReady);

function onReady(){
  function createButton(btnAmounts){
    let i = 1;
    const functionalButtons = document.getElementsByClassName('functional-buttons');
    while(i <= btnAmounts){
      const btnCreate = document.createElement('button');
      btnCreate.className = 'functional-button';
      btnCreate.id = `functional-element-${i}`;
      btnCreate.innerHTML = `Task-${i}`;
      functionalButtons[0].appendChild(btnCreate);
      i++;
    }
  }
  createButton(5);

  const btn1 = document.getElementById('functional-element-1');
  btn1.addEventListener('click', () => {
    for(let i = 20; i <= 30; i += 0.5){
      console.log(i);
    }
    alert('Таск-1 було виконано, результат в консолі');
  });

  const btn2 = document.getElementById('functional-element-2');
  btn2.addEventListener('click', () => {
    const dollarExchange = 38;
    for(let dollars = 10; dollars <= 100; dollars += 10){
      let uah = dollars * dollarExchange;
      console.log(dollars + ' доларів = ' + uah + ' гривень');
    }
    alert('Таск-2 було виконано, результат в консолі');
  });

  const btn3 = document.getElementById('functional-element-3');
  btn3.addEventListener('click', () =>{
    const N = 100;
    for(let i = 0; i <= N; i++){
      let sqr = Math.pow(i,2);
      if(sqr <= N){
        console.log(sqr);
      }
    }
    alert('Таск-3 було виконано, результат в консолі');
  })

  const btn4 = document.getElementById('functional-element-4');
  btn4.addEventListener('click', () =>{
    function isPrimeNumber(number){
      if(number <= 1){
        return false
      }
      for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
          return false
        }
        else{
          return true
        }
      }
    }

    const myNumber = 13;
    if(isPrimeNumber(myNumber)){
      alert(myNumber + ' - просте число');
    }
    else{
      alert(myNumber + ' - не є простим числом');
    }
  });

  const btn5 = document.getElementById('functional-element-5');
  btn5.addEventListener('click', () => {
    function isPowerOfThree(number){
      while(number > 1){
        if(number % 3 !== 0){
          return false;
        }
        number /= 3;
      }
      return number === 1;
    }

    const myNum = 27;
    if (isPowerOfThree(myNum)) {
        alert(myNum + ' можна отримати з числа 3 у деякий ступінь');
    } else {
        alert(myNum + ' не можна отримати з числа 3 у деякий ступінь');
    }
  });

}