
function getInputTextId(InputTextId) {
    const inputField = document.getElementById(InputTextId);
    const inputFieldValue = inputField.value;
    const value = parseFloat(inputFieldValue);
    return value;
}


function calculateRectangleArea() {
    // get the rectangle length  value
    const rectangleLength = getInputTextId("rectangle-length");
    // console.log(rectangleLength);
    // get the rectangle width  value
    const rectangleWidth = getInputTextId("rectangle-Width");
    console.log(rectangleWidth);

    // get rectangle area
    const area = rectangleLength * rectangleWidth;
    // console.log(area);
    const rectangleDisplayArea = document.getElementById("rectangle-area");
    rectangleDisplayArea.innerText = area;
}

function calculateParallelogramArea() { 
    // get Parallelogram input base value 
    const ParallelogramBase = getInputTextId("Parallelogram-base");
    // console.log(ParallelogramBase);
    // get Parallelogram input height value
    const ParallelogramHeight = getInputTextId("Parallelogram-height")
    // console.log(ParallelogramHeight);

    // get Parallelogram area 
    const area = ParallelogramBase * ParallelogramHeight;
    // console.log(area);

    // Display Parallelogram area value 
    const displayParallelogramArea = document.getElementById("display-Parallelogram-area");
    displayParallelogramArea.innerText = area;
}
