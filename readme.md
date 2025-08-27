## Ans to the Question no 1:

getElementById: This is like calling someone by their unique name. On a webpage, an id should be completely unique, with only one element having it.

getElementsByClassName: This is like asking everyone wearing the same color shirt to raise their hand. A class can be shared by many elements. It's finds all elements that share same class name. It returns a collection of elements.

querySelector: This is a flexible way to find the very first person who matches a description. The description can be their name (#JohnSmith) or what they're wearing (.red-shirt).

querySelectorAll: This is like querySelector, but instead of stopping at the first person, you find everyone who matches the description. It returns a list of all matching elements.

## Ans to the Question no 2:

Create the New Element: Use the document.createElement() command to create a new Element. For example, to create a new paragraph element:
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

Insert the Element into the DOM: Use methods like appendChild(), insertBefore(), or append() to add the new element to the desired location in the DOM. For example, to add the new paragraph to a div with the id "content":
const contentDiv = document.getElementById("content");
contentDiv.appendChild(newParagraph);

## Ans to the Question no 3:

Event bubbling: It is a process where an event on a webpage doesn't just affect the element interacted with, but also "bubbles up" to its parent, its grandparent, and all the way up to the top of the page. 

The browser first checks if the element is clicked (the button) has an event listener for that event (e.g. a 'click' event). If it does, it runs the code. the event then moves up to the button's parent element (like a div containing the button) and checks if that parent has a listener for the same event. If it does, it runs that code too. This continues up through all ancestor elements until it reaches the top of the document. If any element in this chain has a listener for the event, its code will run. This allows multiple elements to respond to the same event, creating a layered effect of responses.

## Ans to the Question no 4:

Event delegation: It is a clever technique where added just one event listener to a parent element to manage events for all of its child elements. This is super useful when it has a lot of similar elements (like buttons or list items) and it's handle events for them without adding a separate listener to each one.

Here's how it works:
1. Add a Single Event Listener: Instead of adding an event listener to each child element, add one listener to the parent element that contains all the children.
2. Use Event Object to Identify Target: When an event occurs (like a click), the event listener on the parent element is triggered. The event object that is passed to the listener contains information about the event, including which specific child element was interacted with (the event.target property).
3. Handle the Event Based on the Target: Inside the event listener, check the event.target to see which child element was clicked. Based on that, it can run different code for different child elements.

## Ans to the Question no 5:

preventDefault() stops the browser's default action for an event. while stopPropagation() stops the event from "bubbling up" to parent elements. They solve two completely different problems.

preventDefault(): Stops the browser's default reaction (like reload) when from submitted.
stopPropagation(): Stops other listeners from hearing the event (like a parent element).

