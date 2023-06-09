# **`JavaScript Lecture 3`**

![](/img/js%20logo.jpg)

# **`Table of contents`**

- [What is a Method in JavaScript](#what-is-a-method-in-javascript)
- [String](#string)
- [Number](#number)

## **`What is a Method in JavaScript`**

In JavaScript, a method is a function that belongs to an object. It is a block of code that performs a specific task and is executed when it is called upon by the object that owns it.

Methods allow objects to have behavior and perform actions based on their data or state. For example, a string object has methods like `charAt()`, `toLowerCase()`, and `replace()`, which allow you to manipulate the string in different ways. Similarly, a number object has methods like `toFixed()`, `toString()`, and `valueOf()`, which allow you to format and manipulate numbers.

To call a method in JavaScript, you use dot notation, where the object is followed by a period, then the name of the method, and parentheses containing any parameters the method requires. For example, to call the `charAt()` method on a string, you would write `myString.charAt(3)`.

It's important to note that not all functions in JavaScript are methods. Functions that don't belong to an object are known as standalone functions or global functions, and they can be called from anywhere in your code.

<br>
<br>
<br>

## **`String`**

In JavaScript, a string is a sequence of characters enclosed in single or double quotes. String methods in JavaScript are built-in functions that can be used to manipulate strings.

<br>
<br>

## **`Create string Method in javaScript `**

To create a string in JavaScript, you can use either single quotes or double quotes. Here are a few examples:

Using single quotes:

![](/img/1.png)

Using double quotes:

![](/img/2.png)

You can also use backticks for creating template literals, which allow you to include variables and expressions inside the string using ${} syntax. Here's an example:

Using template literals:

![](/img/3.png)

In this example, the value of myString will be "My name is John and I'm 30 years old".

<br>

---

<br>

## **`JavaScript String Methods`**

Here is a chart of some commonly used String methods in JavaScript:

![](/img/jssssmm.png)

<br>

---

<br>

- ### **`JavaScript String method charAt()`**

In JavaScript, the `charAt()` method is a String method that returns the character at the specified index in a string.

Here's the syntax for using the `charAt()` method:

![](/img/char1.png)

where `str` is the string you want to extract the character from, and index is the zero-based `index` of the character you want to retrieve.

For example, consider the following code:

![](/img/char2.png)

In this code, the `charAt()` method is used to retrieve the character at index 1 (which is the second character) from the string `"Hello, World!"`. The resulting character is `"e"`, which is then assigned to the variable `char`.

Note that if the index specified is out of range (i.e., greater than or equal to the length of the string), the method will return an empty string.

<br>

---

<br>

- ### **`JavaScript String method concat()`**

The `concat()` method is used to concatenate two or more strings and return a new string that contains the combined text. Here's an example:

![](/img/con1.png)

In this example, `concat()` is called on the `str1` string, passing in `", "` and `str2` as arguments. The result is a new string that contains the combined text of `"Hello"` and `"World"`, separated by a comma and a space.

Note that you can also use the `+` operator to concatenate strings in JavaScript, like this:

![](/img/con2.png)

Both methods achieve the same result, but concat() can be useful when you need to concatenate more than two strings or when you want to chain multiple concatenation operations together.

<br>

---

<br>

- ### **`JavaScript String method replace()`**

The `replace()` method is a built-in JavaScript string method that is used to replace occurrences of a specified substring or a regular expression pattern with a replacement string. The syntax for using the `replace()` method is as follows:

![](/img/re1.png)

Here, `string` represents the original string on which the `replace()` method is called. `searchValue` can be either a string or a regular expression object that represents the substring or the pattern that needs to be replaced. `replaceValue` represents the replacement string that will replace the matched substring or pattern.

For example, let's say we have the following string:

![](/img/re2.png)

To replace the word "World" with "Universe", we can use the `replace()` method as follows:

![](/img/re3.png)

By default, the `replace()` method only replaces the first occurrence of the substring or pattern. To replace all occurrences, we need to use a regular expression with the global flag `/g`, like this:

![](/img/re4.png)

In this example, we are replacing all occurrences of the letter "o" with the number "0".

<br>

---

<br>

- ### **`JavaScript String method replaceAll()`**

The `replaceAll()` method in JavaScript is used to replace all occurrences of a substring within a string with another substring. It was added to the language in ECMAScript 2021.

The syntax for using the `replaceAll()` method is as follows:

![](/img/reall1.png)

Here, `str` is the string on which the method is called. `searchValue` is the substring that needs to be replaced, and `replaceValue` is the new substring that will replace all occurrences of `searchValue`.

For example:

![](/img/reall2.png)

In this example, the`replaceAll()` method replaces all occurrences of the substring "JavaScript" in the original string with "TypeScript". The resulting string is then logged to the console.

<br>

---

<br>

- ### **`JavaScript String method split()`**

The `split()` method is a built-in JavaScript string method that allows you to split a string into an array of substrings based on a specified separator. The syntax for using the `split()` method is as follows:

![](/img/spl1.png)

Here, `string` is the original string that you want to split, `separator` is the character or sequence of characters that defines where to split the string (it can be a string or a regular expression), and `limit` is an optional integer that specifies the maximum number of splits to be made.

When you call the `split()` method on a string, it returns an array of substrings where each substring represents a portion of the original string that was separated by the specified separator.

For example, the following code splits a comma-separated string into an array of substrings:

![](/img/spl2.png)

In this case, the `,` character is used as a separator, and the resulting array contains three elements: `"apple"`, `"banana"`, and `"orange"`.

<br>

---

<br>

- ### **`JavaScript String method substring(start,end)`**

The `substring` method is a built-in function in JavaScript which is used to extract a part of a given string. It takes two parameters: `start` and `end`.

The `start` parameter specifies the starting index of the substring, while the `end` parameter specifies the ending index of the substring.

Here is an example:

![](/img/subs1.png)

In the example above, the `substring` method is called on the string `'Hello, World!'` with `start` parameter as `0` and `end` parameter as `5`. This will extract the characters from index `0` to `4` and return the substring `"Hello"`.

<br>

---

<br>

- ### **`JavaScript String method slice(start, end)`**

The `slice()` method in JavaScript is used to extract a portion of a string and returns a new string without modifying the original one.

The `slice()` method takes two arguments: `start` and `end`. `start` specifies the index at which to begin extraction, and `end` specifies the index at which to end extraction (but the character at the `end` index will not be included in the extracted string).

Here's an example usage:

![](/img/slise1.png)

In this example, `str` is a string variable containing the value `"Hello, World!"`. We then call the `slice()` method on `str`, passing in `0` as the `start` argument and `5` as the `end` argument. This extracts the first five characters of the string, which are "Hello", and stores it in the `result` variable. Finally, the `result` variable is printed to the console using `console.log()`. The output of the program will be `"Hello"`.

<br>

---

<br>

- ### **`JavaScript String method toLowerCase()`**

The `toLowerCase()` method in JavaScript is used to convert a string to lowercase letters. It returns a new string with all the alphabetic characters in lowercase.

Here's an example:

![](/img/tol1.png)

In this example, `toLowerCase()` is called on the `myString` variable which contains the string "HELLO WORLD". The resulting value is stored in the `lowerCaseString` variable, which will contain the string "hello world".

It's important to note that the `toLowerCase()` method does not modify the original string, but instead returns a new string with all the alphabetic characters in lowercase.

<br>

---

<br>

- ### **`JavaScript String method toUpperCase()`**

The toUpperCase() method in JavaScript is used to convert a string to uppercase letters. It returns a new string with all the alphabetic characters in uppercase.

Here's an example:

![](/img/toup1.png)

In this example, `toUpperCase()` is called on the `myString` variable which contains the string "Hello World". The resulting value is stored in the `upperCaseString` variable, which will contain the string "HELLO WORLD".

It's important to note that the `toUpperCase()` method does not modify the original string, but instead returns a new string with all the alphabetic characters in uppercase.

<br>

---

<br>

- ### **`JavaScript String method trim()`**

The `trim()` method in JavaScript is used to remove whitespace characters from both ends of a string. It returns a new string with the leading and trailing whitespace characters removed.

Here's an example:

![](/img/trim1.png)

In this example, `trim()` is called on the myString variable which contains the string " Hello World ". The resulting value is stored in the `trimmedString` variable, which will contain the string "Hello World" with no leading or trailing whitespace.

It's important to note that the `trim()` method does not modify the original string, but instead returns a new string with the whitespace characters removed.

<br>

---

<br>

- ### **`JavaScript String method includes()`**

The `includes()` method in JavaScript is used to determine whether a string contains a specified substring or not. It returns `true` if the string contains the substring, and `false` otherwise.

The syntax for using the `includes()` method is as follows:

![](/img/inc1.png)

Here, `string` is the original string that you want to search. `searchString` is the substring that you are looking for, and `position` is an optional parameter that specifies the index at which to begin the search.

If `position` is not provided, the search starts at index 0. If `position` is a negative number, it is treated as `string.length + position`.

For example:

![](/img/inc2.png)

In the first example, the `includes()` method returns `true` because the string "world" is present in the original string.

In the second example, the `includes()` method returns `false` because the string "foo" is not present in the original string.

In the third example, the `includes()` method starts the search from index 5 (which corresponds to the letter "w"), and returns `true` because the string "o" is present after that index.

In the fourth example, the `includes()` method starts the search from the third character from the end of the string (which corresponds to the letter "r"), and returns `true` because the string "o" is present after that index.

<br>

---

<br>

- ### **`JavaScript String method toString()`**

The `toString()` method is a built-in method in JavaScript's String prototype that returns a string representation of the given object.

For example, if you have a variable `x` that contains a number, you can call `toString()` on it to convert it into a string:

![](/img/tostr1.png)

Similarly, if you have an array or an object, calling `toString()` on it will return a string representation of the array or object.

Keep in mind that the `toString()` method does not modify the original object, but instead returns a new string. Also note that some objects may have their own implementation of toString() that produces a different output than the default implementation in the String prototype.

<br>

---

<br>

- ### **`JavaScript String method charAt()`**

The JavaScript `charAt()` method is used to get the character at a specific index in a string. The method takes a single parameter, which is the index of the character you want to retrieve. The index starts from 0 for the first character in the string.

Here's an example:

![](/img/charet1.png)

If you pass an index that is out of range (i.e., greater than or equal to the length of the string), the method will return an empty string.

![](/img/charet2.png)

Note that `charAt()` returns an empty string if the provided index is out of range instead of throwing an error. So, you can use this method to safely check for the presence of characters in a string.

<br>

---

<br>

- ### **`JavaScript String method repeat()`**

The `repeat()` method in JavaScript returns a new string with a specified number of copies of the original string concatenated together.

The syntax for the `repeat()` method is as follows:

![](/img/rep1.png)

Here, `string` is the original string to be repeated and `count` is the number of times the string should be repeated. The `count` parameter must be a non-negative integer.

For example, let's say you have a string `"Hello, world!"`. If you want to repeat it 3 times, you can use the `repeat()` method like this:

![](/img/rep2.png)

In this example, the `repeat()` method takes the original string `"Hello, world!"` and repeats it three times, resulting in the string `"Hello, world!Hello, world!Hello, world!"`.

<br>

---

<br>

- ### **`JavaScript String method at()`**

The `at()` method is a relatively new addition to the String prototype object in JavaScript that was introduced in ECMAScript 2019. It allows you to get the character at a specific index position within a string.

Here is an example usage:

![](/img/at1.png)

In this example, we are using the `at()` method to get the character at the index position of 1 within the string 'Hello World'. The output will be 'e', as 'e' is the character located at index position 1 (remember that indexes start at 0).

If the index passed to `at()` is out of range (either less than 0 or greater than or equal to the length of the string), it returns an empty string ('').

<br>
<br>
<br>

## **`Number`**

In JavaScript, the Number object provides a number of built-in methods that you can use to manipulate numbers in various ways. Here's a chart of some of the most commonly used Number methods in JavaScript:

![](/img/numm.png)

---

<br>

- ### **`JavaScript Number methods Math.round(),ceil(),floor()`**

The Math object in JavaScript provides several number methods, including `Math.round()`, `Math.ceil()`, and `Math.floor()`.

`Math.round()` method rounds a number to the nearest integer. If the fractional part of the number is less than 0.5, the number is rounded down; otherwise, it is rounded up. For example:

![](/img/m1.png)

`Math.ceil()` method rounds a number up to the nearest integer. It always rounds up regardless of the value of the fractional part. For example:

![](/img/m2.png)

`Math.floor()` method rounds a number down to the nearest integer. It always rounds down regardless of the value of the fractional part. For example:

![](/img/m3.png)

These methods can be useful in various scenarios, such as rounding off decimal values to display them as integers or for performing mathematical operations where only whole numbers are required.

<br>

---

<br>

- ### **`JavaScript Number methods Math.max() and Math.min()`**

The `Math.max()` and `Math.min()` methods are used to find the maximum and minimum values from a set of numbers respectively.

The `Math.max()` method takes any number of arguments and returns the largest of those numbers. For example:

![](/img/m4.png)

The `Math.min()` method works in the same way as `Math.max()`, but returns the smallest value instead. For example:

![](/img/m5.png)

Both methods can also be used with arrays of numbers, using the spread operator `(...)` to pass the array elements as separate function arguments. For example:

![](/img/m6.png)

Note that both methods return NaN (Not a Number) if any of the arguments or array elements are not valid numbers.

<br>

---

<br>

- ### **`JavaScript Number methods Math.max() and Math.min()`**

The `Math.max()` and `Math.min()` methods are used to find the maximum and minimum values from a set of numbers respectively.

The `Math.max()` method takes any number of arguments and returns the largest of those numbers. For example:

![](/img/m7.png)

The `Math.min()` method works in the same way as `Math.max()`, but returns the smallest value instead. For example:

![](/img/m8.png)

Both methods can also be used with arrays of numbers, using the spread operator `(...)` to pass the array elements as separate function arguments. For example:

![](/img/m9.png)

Note that both methods return NaN (Not a Number) if any of the arguments or array elements are not valid numbers.

<br>

---

<br>

- ### **`JavaScript Number methods Math.pow() and Math.sqrt()`**

The `Math.pow()` method in JavaScript is used to raise a number to a specified power. It takes two arguments: the base number and the exponent. The syntax for using the `Math.pow()` method is as follows:

![](/img/m10.png)

For example, if you want to find the value of 2 raised to the power of 3 (i.e., 2³), you could use the following code:

![](/img/m11.png)

The `Math.sqrt()` method in JavaScript is used to find the square root of a number. It takes one argument: the number whose square root needs to be calculated. The syntax for using the `Math.sqrt()` method is as follows:

![](/img/m12.png)

For example, if you want to find the square root of 16, you could use the following code:

![](/img/m13.png)

Both `Math.pow()` and `Math.sqrt()` are useful methods for performing mathematical calculations in JavaScript.

<br>

---

 <br>

- ### **`JavaScript String method Math.abs() and Math.random()`**

`Math.abs()` is a JavaScript method that returns the absolute value of a number. The absolute value of a number is its value without regard to its sign. For example, the absolute value of -5 is 5, and the absolute value of 5 is still 5.

Here's an example of using `Math.abs()` in JavaScript:

![](/img/m14.png)

`Math.random()` is another JavaScript method that returns a random number between 0 (inclusive) and 1 (exclusive). This means that the returned number can be any value between 0 and 0.99999..., but it will never actually be 1.

Here's an example of using `Math.random()` in JavaScript to generate a random number between 1 and 10:

![](/img/m15.png)

In this example, `Math.floor()` rounds down the random decimal generated by `Math.random()` to a whole number, while `(max - min + 1)` ensures that the range is inclusive of both the minimum and maximum values.

<br>

---

 <br>

- ### **`JavaScript Number method isNaN()`**

`isNaN()` is a JavaScript method that checks whether a value is "Not a Number" (NaN). It returns `true` if the value is NaN, and `false` if it is not.

Here's an example of using isNaN() in JavaScript:

![](/img/m16.png)

In this example, `num1` is a number, so `isNaN(num1)` returns `false`. However, `num2` is a string that cannot be converted to a number, so `isNaN(num2)` returns `true`. Finally, `num3` is explicitly set to NaN, so `isNaN(num3)` returns `true`.

Note that `isNaN()` can sometimes give unexpected results. For example, if you pass a non-number string that can be coerced into a number, `isNaN()` will return `false`. To avoid this, you can use the `Number.isNaN()` method instead, which only returns `true` if the passed value is exactly equal to NaN.
