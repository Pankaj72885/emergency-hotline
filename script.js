// Call History Array
const callHistory = [];

// Event Delegation for Service Cards and History Section
// select main section
const mainSection = document.getElementById("main-section");
// add click event listener to main section
mainSection.addEventListener("click", function (event) {
  // card section clicked
  const serviceCard = event.target.closest("#service-card");
  // history section clicked
  const historySection = event.target.closest("#history-section");

  // if service card is clicked
  if (serviceCard) {
    const serviceName = serviceCard.querySelector("h2").innerText;
    const servicePhone = serviceCard.querySelector("h3").innerText;

    // Handle Heart Button Clicks
    if (event.target.closest(".fa-heart")) {
      const heartElement = document.getElementById("heart-count");
      const currentCount = parseInt(heartElement.innerText);
      heartElement.textContent = currentCount + 1;
      return;
      // Handle Copy Button Clicks
    } else if (event.target.closest("#copy-btn")) {
      navigator.clipboard.writeText(servicePhone).then(() => {
        const copyCountElement = document.getElementById("copy-count");
        let currentCopyCount = parseInt(copyCountElement.innerText);
        currentCopyCount++;
        copyCountElement.innerText = currentCopyCount;
        alert(`${serviceName} copied to clipboard!`);
      });
      return;
      // Handle Call Button Clicks
    } else if (event.target.closest("#call-btn")) {
      const coin = document.getElementById("coin");
      let currentCoin = parseInt(coin.innerText);
      if (currentCoin >= 20) {
        currentCoin -= 20;
        coin.textContent = currentCoin;
        alert(`Calling ${serviceName} at ${servicePhone}`);
        //   Add to Call History
        callHistory.push({
          name: serviceName,
          phone: servicePhone,
          time: new Date().toLocaleTimeString("en-US", { hour12: true }),
        });

        //   Update Call History UI
        let historyList = document.getElementById("history-list");
        historyList.innerHTML = callHistory
          .map((call) => {
            return `<div class="flex justify-between items-center p-2 md:p-4 bg-[#FAFAFA]">
          <div>
              <h3 class="text-dark text-lg font-inter font-semibold">
                  ${call.name}
              </h3>
              <p class="text-gray text-lg font-madurai">${call.phone}</p>
              </div>
              <div>
                <p class="text-dark font-madurai text-lg">${call.time}</p>
           </div>
      </div>`;
          })
          .join("");
      } else {
        alert("Insufficient coins to make a call.");
      }
      return;
    }
    // if history section is clicked
  } else if (historySection) {
    // Handle Clear Button Click
    if (event.target.closest("#clear-btn")) {
      const historyList = document.getElementById("history-list");
      historyList.innerHTML = "";
      callHistory.length = 0;
    }
  }
  return;
});
