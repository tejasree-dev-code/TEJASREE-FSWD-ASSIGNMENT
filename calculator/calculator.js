
    function calc() {
      let a = Number(prompt("Enter first number"));
      let b = Number(prompt("Enter second number"));

      let add = a + b;
      let sub = a - b;
      let mul = a * b;
      let div = b != 0 ? a / b : "Cannot divide by zero";
      let mod = a % b;

      console.log("Addition:", add);
      console.log("Subtraction:", sub);
      console.log("Multiplication:", mul);
      console.log("Division:", div);
      console.log("Modulus:", mod);

    }

    calc();
