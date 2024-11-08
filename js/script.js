let miles
let gallons
let mpg
let again = 'y'

do {
    miles = parseFloat(prompt('Enter miles driven'))
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold?'))
    if(!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0){
       mpg = miles/gallons
       console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon. `) 
    }else{
        alert('Either or both of your inputs are invalid.')
    }
    again = prompt('Run application again?(Y/N)','Y')   
} while (again == 'y')
    console.log('Application has exited.')