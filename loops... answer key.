## JavaScript Loop Exercises - Solutions

### Exercise 1
```
javascript
function happyBirthday(n) {
  for (let i = 0; i < n; i++) {
    console.log("Happy Birthday!");
  }
}
```

### Exercise 2

```
javascript
function sum(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
```

### Exercise 3
javascript
```
function removeVowels(string) {
  let result = '';
  for (let char of string) {
    if (!'aeiou'.includes(char.toLowerCase())) {
      result += char;
    }
  }
  return result;
}
```
### Exercise 4
```
javascript
function oddChecker(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 2) {
    count++;
  }
  return count;
}
```

### Exercise 5
```
javascript
function vowelsChecker(string) {
  let count = 0;
  for (let char of string) {
    if ('aeiou'.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}
```
### Exercise 6
javascript
```
function printMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
```

### Exercise 7
```
javascript
function fibonacci(n) {
  let a = 0, b = 1, next;
  for (let i = 1; i < n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
}
```

### Exercise 8

```
javascript
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```


### Exercise 9

```
javascript

function countCharacters(string) {
  let result = {};
  for (let char of string) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
```
### Exercise 10
```
javascript
function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return n > 1;
}
```
### Exercise 11
```
javascript
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
```
### Exercise 12
```
javascript
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
```
