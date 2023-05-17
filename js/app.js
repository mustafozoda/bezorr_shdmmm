














// let myString = 'This is a string';

// let myString = "This is also a string";


// let name = 'John';
// let age = 30;
// let myString = `My name is ${name} and I'm ${age} years old`;



// str.charAt(index)

// let str = "Hello, World!";
// let char = str.charAt(1);
// console.log(char); // Output: "e"


// string.replace(searchValue, replaceValue)

// const myString = "Hello, World! How are you doing today?";

// const newString = myString.replace("World", "Universe");
// console.log(newString); // "Hello, Universe! How are you doing today?"




// charAt(index)	//Returns the character at the specified index in a string

// concat(str1, str2, ..., strN)	//Concatenates two or more strings

// includes(searchString, position)	//Determines whether a string contains another string. The second parameter specifies where to start the search

// indexOf(searchValue, fromIndex)	// the index of the first occurrence of a specified value in a string. The second parameter specifies where to start the search

// lastIndexOf(searchValue, fromIndex)	//Returns the index of the last occurrence of a specified value in a string. The second parameter specifies where to start the search

// match(regexp)	//Searches a string for a match against a regular expression, and returns the matches as an array

// replace(searchValue, replaceValue)	//Searches a string for a specified value or a regular expression, and replaces it with a new string

// search(regexp)	//Searches a string for a specified value or a regular expression, and returns the position of the match

// slice(startIndex, endIndex)	//Extracts a section of a string and returns a new string

// split(separator, limit)	//Splits a string into an array of substrings based on a specified separator. The second parameter specifies the maximum number of splits to be made

// substr(startIndex, length)	//Extracts a section of a string beginning at the specified start index, and returns a new string with a specified number of characters

// substring(startIndex, endIndex)	//Extracts a section of a string between two specified indices

// toLowerCase()	//Converts all characters in a string to lowercase

// toUpperCase()	//Converts all characters in a string to uppercase

// trim()	//Removes whitespace from both ends of a string




// let str1 = "Hello";
// let str2 = "World";
// let str3 = str1.concat(", ", str2);
// console.log(str3); // Output: "Hello, World"


// let str1 = "Hello";
// let str2 = "World";
// let str3 = str1 + ", " + str2;
// console.log(str3); // Output: "Hello, World"


// const myString = "Hello, World! How are you doing today?";
// const newString = myString.replace(/o/g, "0");
// console.log(newString); // "Hell0, W0rld! H0w are y0u d0ing t0day?"


// str.replaceAll(searchValue, replaceValue)



// const str = "JavaScript is awesome. JavaScript is powerful.";

// const newStr = str.replaceAll("JavaScript", "TypeScript");

// console.log(newStr);
// // Output: "TypeScript is awesome. TypeScript is powerful."


// string.split(separator, limit);



// const str = "apple,banana,orange";
// const arr = str.split(",");
// console.log(arr); // ["apple", "banana", "orange"]



// const str = 'Hello, World!';
// const result = str.substring(0, 5); // extracts characters from index 0 to index 4
// console.log(result); // "Hello"

// const str = "Hello, World!";
// const result = str.slice(0, 5);
// console.log(result); // Output: "Hello"


// const myString = "HELLO WORLD";
// const lowerCaseString = myString.toLowerCase();
// console.log(lowerCaseString); // Output: "hello world"


// const myString = "Hello World";
// const upperCaseString = myString.toUpperCase();
// console.log(upperCaseString); // Output: "HELLO WORLD"

// const myString = "   Hello World    ";
// const trimmedString = myString.trim();
// console.log(trimmedString); // Output: "Hello World"


// string.includes(searchString[, position])



// let str = "Hello world";
// console.log(str.includes("world")); // true
// console.log(str.includes("foo"));   // false
// console.log(str.includes("o", 5));  // true
// console.log(str.includes("o", -3)); // true



// let x = 42;
// let str = x.toString(); // str will be "42"

// const str = 'Hello, World!';
// const char = str.charAt(1); // gets the character at index 1 (which is 'e')
// console.log(char); // output: "e"

// const str = 'Hello, World!';
// const char = str.charAt(20); // gets the character at index 20 (which is out of range)
// console.log(char); // output: ""

// string.repeat(count)


// const str = "Hello, world!";
// const repeatedStr = str.repeat(3);
// console.log(repeatedStr); // Output: "Hello, world!Hello, world!Hello, world!


// const str = 'Hello World';
// console.log(str.at(1)); // Output: 'e'