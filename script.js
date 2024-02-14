function calculateTriangleArea() {
    // get the triangle base value
    const triangleBaseInputField = document.getElementById("input-base");
    const triangleBaseInputFieldValue = triangleBaseInputField.value;
    const base = parseFloat(triangleBaseInputFieldValue);
    // console.log(base);

    // get the triangle height value
    const triangleHeightInputField = document.getElementById("input-height");
    const triangleHeightInputFieldValue = triangleHeightInputField.value;
    const height = parseFloat(triangleHeightInputFieldValue);
    // console.log(height);

    // get the result area
    const area = 0.5 * base * height;
    // console.log(area);

    // get the display triangle area
    const triangleDisplay = document.getElementById("triangle-result");
    triangleDisplay.innerText = area;

    // set area calculator
    const areaCalculator = document.getElementById("triangle-area")
    areaCalculator.innerText = area;
}