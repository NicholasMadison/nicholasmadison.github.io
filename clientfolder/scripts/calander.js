document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    let events = JSON.parse(localStorage.getItem("events")) || {}; // Load events from storage

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let headerRow = document.createElement("div");
    headerRow.classList.add("calendar-header");

    dayNames.forEach((day) => {
        let dayLabel = document.createElement("div");
        dayLabel.classList.add("calendar-day-label");
        dayLabel.textContent = day;
        headerRow.appendChild(dayLabel);
    });

    calendar.appendChild(headerRow);

    let dayGrid = document.createElement("div");
    dayGrid.classList.add("calendar-grid");

    for (let i = 0; i < firstDay; i++) {
        let blank = document.createElement("div");
        blank.classList.add("calendar-day", "empty");
        dayGrid.appendChild(blank);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        let dayCell = document.createElement("div");
        dayCell.classList.add("calendar-day");
        dayCell.textContent = i;
        dayCell.setAttribute("data-day", i);

        // Show saved events
        if (events[i]) {
            let eventText = document.createElement("span");
            eventText.classList.add("event-text");
            eventText.textContent = events[i];
            dayCell.appendChild(eventText);
            dayCell.classList.add("event-day");
        }

        // Add event listener to store new events
        dayCell.addEventListener("click", function () {
            let eventText = prompt(`Add an event for ${year}-${month + 1}-${i}:`);
            if (eventText) {
                events[i] = eventText;
                localStorage.setItem("events", JSON.stringify(events)); // Save events permanently

                // Update calendar visually
                dayCell.innerHTML = `<span class="event-text">${eventText}</span>`;
                dayCell.classList.add("event-day");

                console.log(`Event added: ${eventText}`);
            }
        });

        dayGrid.appendChild(dayCell);
    }

    calendar.appendChild(dayGrid);
});
