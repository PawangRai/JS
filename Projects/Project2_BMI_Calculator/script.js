const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    console.log(height);
    console.log(weight);

    const results = document.querySelector("#results")

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please input valid height ${height}`
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please input valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }
})

/* We get the form object and when its submitted, we first prevent its default action. Then we get the values for weight and height in numbers. Then we apply some validation to check for empty values, negative values and NaN values. After it has passed those checks, we calcualte the BMI and display it on the screen */