const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    
    if (i % 15 == 0) {
        console.log("FizzBuzz");

        const fizzBuzz = document.createElement("div");
        fizzBuzz.innerHTML = `fizzBuzz`;
        container.append(fizzBuzz);
        fizzBuzz.classList.add("square", "bg-red");
    
    } else if (i % 3 == 0) {
        console.log("Fizz");

        const fizz = document.createElement("div");
        fizz.innerHTML = `fizz`;
        container.append(fizz);
        fizz.classList.add("square", "bg-green");
    
    } else if (i % 5 == 0) {
        console.log("Buzz");

        const buzz = document.createElement("div");
        buzz.innerHTML = `buzz`;
        container.append(buzz);
        buzz.classList.add("square", "bg-yellow");
        

    } else {
        console.log(i);

        const number = document.createElement("div");
        number.innerHTML = `${i}`;
        container.append(number);
        number.classList.add("square", "bg-blue");
    }
 }