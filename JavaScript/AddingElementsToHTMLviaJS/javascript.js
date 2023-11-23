// let lastLetter = (string) => string.charAt((string.length - 1));

// alert(lastLetter("qwer"));

const container = document.querySelector('#container');

const contentP = document.createElement('p');
contentP.textContent = "Hey I'm red";
contentP.style.color = "red";
container.appendChild(contentP);

const contentH3 = document.createElement("h3");
contentH3.textContent = "I'm a blue H3"
contentH3.style.color = "blue";
container.appendChild(contentH3);

const contentDiv = document.createElement("div");
contentDiv.style.cssText = "background: pink; border: solid black 2px";

const contentH1 = document.createElement("h1");
contentH1.textContent = "I'm in a div";
contentDiv.appendChild(contentH1);

const contentP2 = document.createElement('p');
contentP2.textContent = "ME TOO";
contentDiv.appendChild(contentP2);

container.appendChild(contentDiv);

alertFunction = () => alert("Hello World");

const btn = document.querySelector('#btn');
btn.addEventListener("mouseup", function(e) {
    alert(e.button); // Returns which mouse button clicked, 0 to 4. https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button.
    e.target.style.color = "blue";
});