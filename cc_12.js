// Task 1 Business Dashboard
const dashboardId = document.getElementById("dashboard"); // id
const dashboardQuery = document.querySelector("#dashboard"); // querySelector

// inputting div element
const revenueCard = document.createElement("div"); // div element

// setting attributes
revenueCard.setAttribute("class", "metric-card"); // class atr
revenueCard.setAttribute("id", "revenue-card"); // id atr

// popluating the card
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
  `;

// append new card
dashboardId.appendChild(revenueCard);

//Task 2 updating dashboard metrics
const metricCards = document.querySelectorAll(".metric-card");

// converting into an array
const metricCardsArray = [...metricCards];

// updating each cards text
metricCardsArray.forEach(card => {
  card.innerText += ' - Updated';
  card.style.backgroundColor = 'orange'; 
}); // Adding a background color