//Exercise one
// Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
//When notifyObservers is called on a Subject instance, each observer's update method should be invoked.

class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((observer) => observer !== observer);
  }
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    };
  }
}

class Observer {
  update() {
    console.log('Observer updated!');
  }
}

//Instantiate the Subject and add multiple observers.
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

// Call notifyObservers and ensure each observer gets updated.
subject.notifyObservers();// Observer updated!


//Exercise two 
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

//Destructure the person object to extract the name and age properties into variables.
const { name, age } = person;

//Use array destructuring to get the second and fourth items from the fruits array.
const [ ,banana, , date] = fruits;
//Extract the city and country properties from the address object nested within the person object using nested destructuring.
const {address: {city , country}} = person;

console.log(name);//John
console.log(age);//30
console.log(banana);//banana
console.log(date);//date
console.log(city);//New York
console.log(country);//USA


//Exercise three
//Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
async function fetchPosts() {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

//Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(error) {
    console.error('An error occurred', error);
  }
}

// Call the function to fetch posts
//Invoke the fetchPosts function and log the results.
fetchPosts()
  .then((data) => {
    console.log('Fetched posts:', data);
  });//Fetched posts: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


//Exercise four
//Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
//The data passed to each observer's update method should be the list of posts fetched.
//Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
//Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
//Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.