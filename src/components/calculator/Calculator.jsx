
    // let a = prompt("Enter first number: ");
    // let b = prompt("Enter second number: ");

    const add = (a, b) => {
        return a+b;
    }
    const sub = (a, b) => {
        return a-b;
    }
    const mul = (a, b) => {
        return a*b;
    }
    const div = (a, b) => {
        if(b === 0) {
            return ("Denominator can't be zero");
        } else {
            const res = a/b;
            return (res.toFixed(2));
        }
    }


export {add, sub, mul, div};