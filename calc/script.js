const numberBtns = document.querySelectorAll('[data-number]'),
  operationBtns = document.querySelectorAll('[data-operation]'),
  equalsBtn = document.querySelector('[data-equals]'),
  deleteBtn = document.querySelector('[data-delete]'),
  clearBtn = document.querySelector('[data-all-clear]');
let prevNumbeTextArea = document.querySelector('[data-prevNumber]'),
  currentTextArea = document.querySelector('[data-currentNumber ]');


class Calculator {
  constructor(prevNumbeTextArea, currentTextArea) {
    this.prevNumbeTextArea = prevNumbeTextArea;
    this.currentTextArea = currentTextArea;
    this.clear();
  }
  clear() {
    this.prevNumberOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return//чтоб не ставилась 2 или больше раз точка
    // this.currentOperand = this.currentOperand.toString() + number.toString() или
    this.currentOperand += number.toString() //переобразовать в строку чтоб сработала конкантенация
  }
  chooseOperatioon(operation) {
    if (this.currentOperand === '') return
    if (this.prevNumberOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.prevNumberOperand = this.currentOperand
    this.currentOperand = '';
  }
  compute() {
    let computation;
    const prev = parseFloat(this.prevNumberOperand),
      current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return //если поля пустые и мы нажимаем на = , то ночего не происходит
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined
    this.prevNumberOperand = '';
  }
  display() { 
    this.currentTextArea.innerText = this.currentOperand;
    if (this.operation != null){
      this.prevNumbeTextArea.innerText =` ${this.prevNumberOperand} ${this.operation} `
    }else{
      this.prevNumbeTextArea.innerText = '';
    }
  }
}

const calculator = new Calculator(prevNumbeTextArea, currentTextArea);

numberBtns.forEach(btns => {
  btns.addEventListener('click', () => {
    calculator.appendNumber(btns.innerText);
    calculator.display()
  })
})

operationBtns.forEach(btns => {
  btns.addEventListener('click', () => {
    calculator.chooseOperatioon(btns.innerText);
    calculator.display()
  })
})
equalsBtn.addEventListener('click', button => {
  calculator.compute();
  calculator.display();
})
clearBtn.addEventListener('click', button => {
  calculator.clear()
  calculator.display()
})
deleteBtn.addEventListener('click',()=>{
  calculator.delete()
  calculator.display()
})