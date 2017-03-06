"use strict";
//app is live!
console.image("http://i.giphy.com/AgeJHdCBbYfzq.gif"); //kitten mittons

// define plant function with increase and decrease functions
function Plant() {
	this.height = 0;
	this.increaseHeight = function(N) {
		this.height += N;
	};
	this.decreaseHeight = function(N) {
		this.height -= N;
	};
}

// define tree function with grow and trim functions
function Tree() {
	this.branches = 0;
	this.grow = function(N) {
		// grow will increase the tree height by value passed in and branches by 1
		this.increaseHeight(N);
		this.branches += 1;
	};
	this.trim = function(N) {
		// trim will decrease the tree height by value passed in and branches by 1
		this.decreaseHeight(N);
		this.branches -= 1;
	};
}

// let tree inherit plant's properties including functions
Tree.prototype = new Plant();

//creating other types of trees
var PearTree = new Tree();
var OakTree = new Tree();
var DogwoodTree = new Tree();

//counter to keep track of events to stop at 30
var counter = 0;

//set interval to a variable to allow for clearing at 30
var growInTrees = setInterval( function() {
	//stop at 30
	if (counter === 31 && PearTree.height !== 0) {
		clearInterval(growInTrees);
		console.log("counter is at " + counter + " ... Fin.");
		document.getElementById("endOfCounter").innerHTML += "counter is at " + counter + `<br>` + `<h1><strong>Fin.</strong></h1>`;
		return;
	}
	//Pear Tree height increases by 10,  branches by 1
	if (PearTree.height % 10 && PearTree.height !== 0) {
		PearTree.branches += 1;
	}
	//Oak Tree height increases by 10, branches by 1
	if (OakTree.height % 10 && PearTree.height !== 0) {
		PearTree.branches += 1;
	}
	if (DogwoodTree.height % 10 && DogwoodTree.height !== 0) {
		DogwoodTree.branches += 1;
	}
	//each tenth growth of a tree trims it
	if (counter % 10 === 0 && counter !== 0) {
		PearTree.trim(4);
		DogwoodTree.trim(6);
		OakTree.trim(9);
		console.log("trees were trimmed at number: ", counter);
	} else {
		PearTree.grow(4);
		DogwoodTree.grow(6);
		OakTree.grow(9);
		console.log("trees grew at counter number: ", counter);
	}
	//print all trees to the DOM
	document.getElementById("output").innerHTML += " Pear Tree is " + PearTree.height + "cm tall, and has " + PearTree.branches + ` branches<br>`;
	document.getElementById("output").innerHTML += " Dogwood Tree is " + DogwoodTree.height + "cm tall, and has " + DogwoodTree.branches + ` branches<br>`;
	document.getElementById("output").innerHTML += " Oak Tree is " + OakTree.height + "cm tall, and has " + OakTree.branches + ` branches<br>` + "after counter of: " + counter + `<br>`;
	//scrolls down the page as it popuates
	window.scrollTo(0, 1500);
	//increase the counter by 1 for each interval
	counter ++;
}, 1000);




















