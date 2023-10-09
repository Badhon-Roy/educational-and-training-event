<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The code declares a variable greeting but does not assign any value to it. Then, it mistakenly assigns an empty object to a different variable called greetign. When console.log(greetign) is executed, it will print an empty object {} because greetign holds that value, while greeting remains uninitialized and undefined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In the give code , there's a function 'sum' that takes two parameters 'a' and 'b' and return there sum . But a is the number 1 and b is the string '2' . Add JavaScript numbers and strings side by side as output strings . So this correct answer is "12" </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In the code, we start with an array food containing four elements. Then, we create an object info with a property favoriteFood set to the first element of the food array, which is "🍕".

Next, we change the value of info.favoriteFood to "🍝", but this change does not affect the original food array. The food array remains unchanged, and when we console.log(food), it still contains the original elements "🍕", "🍫", "🥑", and "🍔".</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> because the function sayHi() does not take any arguments, but is called with no arguments. When a function is called without arguments, the value of undefined is passed for each missing argument.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The forEach() method iterates over the nums array and calls the callback function for each element in the array. The callback function checks if the element is greater than 0 and, if it is, increments the count variable. The nums array contains four elements, but only three of the elements are greater than 0: 1, 2, and 3. Therefore, the count variable is incremented three times and has a final value of 3.</i>

</p>
</details>




- 