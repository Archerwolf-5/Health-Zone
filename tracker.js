function calculateCalories() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var activityLevel = parseFloat(document.getElementById("activityLevel").value);
  
    var bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    var calories = bmr * activityLevel;
  
    document.getElementById("result").innerHTML = "Calories: " + calories.toFixed(2);
  }