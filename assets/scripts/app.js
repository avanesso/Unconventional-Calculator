const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseFloat(userInput.value);
}

function writeToLog(operIdentifier,prevResult,operNumber,operResult){

    const logEntry = {
        operation: operIdentifier,
        prevResult: prevResult,
        number: operNumber,
        result: operResult
      };
      logEntries.push(logEntry);
      console.log(logEntries);

}


function createAndWriteOutup(operator,resultBeforeCalc,CalcNumber){
    const calcDescription =`${resultBeforeCalc} ${operator} ${CalcNumber}`;
    outputResult(currentResult,calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutup('+',initialResult,enteredNumber);
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
   
    }

function subtract(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutup('-',initialResult,enteredNumber);
    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);


}

function multiply(){
    const enteredNumber = getUserNumberInput()
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutup('*',initialResult,enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);

}

function divide(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutup('/',initialResult,enteredNumber);
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);


}
    addBtn.addEventListener('click',add);
    subtractBtn.addEventListener('click',subtract);
    multiplyBtn.addEventListener('click',multiply);
    divideBtn.addEventListener('click',divide);

 



