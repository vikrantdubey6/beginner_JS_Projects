const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if(height === '' || height <= 0 || isNaN(height) ){
        results.innerHTML = `Please give a valid height ${height}`
   }
  if(weight === '' || weight <= 0 || isNaN(weight) ){
        results.innerHTML = `Please give a valid weight ${weight}`
   }
   else{
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result and message
    let message = ''
    if (bmi < 18.6){
        message = 'Under Weight (Less than 18.6)';}

        else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'Normal Range (18.6 - 24.9)';}

       else 
        {message = 'Overweight (Greater than 24.9)';}
       results.innerHTML = `<span> your BMI is ${bmi} </span> <p>${message}</p>`
    }
   }
)