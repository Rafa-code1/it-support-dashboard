const tickets = [
    {
        id: 1024,
        issue: "Printer not working",
        description: "The printer is showing offline.",
        user: "Sarah Johnson",
        technician: "Rafa",
        category: "Hardware",
        priority: "High",
        status: "Open",
        resolution: "",
        date: "Sep 21, 2026"
    },

    {
        id: 1023,
        issue: "Windows update issue",
        description: "Windows update keeps failing.",
        user: "Michael Brown",
        technician: "Ahmed",
        category: "Software",
        priority: "Medium",
        status: "In Progress",
        resolution: "",
        date: "Sep 20, 2026"
    },

    {
        id: 1022,
        issue: "Wi-Fi connection problem",
        description: "The user cannot connect to the office Wi-Fi.",
        user: "Emily Davis",
        technician: "Lina",
        category: "Network",
        priority: "Low",
        status: "Resolved",
        resolution: "Restarted the network adapter and reconnected the device.",
        date: "Sep 20, 2026"
    },

    {
        id: 1021,
        issue: "Computer running slowly",
        description: "The computer is performing very slowly.",
        user: "Sarah Johnson",
        technician: "Rafa",
        category: "Hardware",
        priority: "High",
        status: "Open",
        resolution: "",
        date: "Sep 19, 2026"
    }
];


const ticketsBody = document.getElementById("tickets-body");


/* =========================
   CREATE TICKET ROW
========================= */

function createTicketRow(ticket) {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>#${ticket.id}</td>

        <td>${ticket.issue}</td>

        <td>${ticket.category}</td>

        <td>
            <span class="priority ${ticket.priority.toLowerCase()}">
                ${ticket.priority}
            </span>
        </td>

        <td>
            <select
                class="status-select ${ticket.status
                    .toLowerCase()
                    .replace(" ", "-")}"
                onchange="changeStatus(${ticket.id}, this.value)"
            >

                <option
                    value="Open"
                    ${ticket.status === "Open" ? "selected" : ""}
                >
                    Open
                </option>

                <option
                    value="In Progress"
                    ${ticket.status === "In Progress" ? "selected" : ""}
                >
                    In Progress
                </option>

                <option
                    value="Resolved"
                    ${ticket.status === "Resolved" ? "selected" : ""}
                >
                    Resolved
                </option>

            </select>
        </td>

        <td>${ticket.date}</td>

        <td>

            <button
                class="view-btn"
                onclick="viewTicket(${ticket.id})"
            >
                View
            </button>

            <button
                class="delete-btn"
                onclick="deleteTicket(${ticket.id})"
            >
                Delete
            </button>

        </td>
    `;

    return row;
}


/* =========================
   DISPLAY TICKETS
========================= */

function displayTickets() {

    ticketsBody.innerHTML = "";

    tickets.forEach(function(ticket) {

        const row = createTicketRow(ticket);

        ticketsBody.appendChild(row);

    });
}


/* =========================
   UPDATE STATISTICS
========================= */

function updateStats() {

    const totalTickets = tickets.length;

    const openTickets = tickets.filter(function(ticket) {
        return ticket.status === "Open";
    }).length;

    const progressTickets = tickets.filter(function(ticket) {
        return ticket.status === "In Progress";
    }).length;

    const resolvedTickets = tickets.filter(function(ticket) {
        return ticket.status === "Resolved";
    }).length;


    document.getElementById("total-tickets").textContent =
        totalTickets;

    document.getElementById("open-tickets").textContent =
        openTickets;

    document.getElementById("progress-tickets").textContent =
        progressTickets;

    document.getElementById("resolved-tickets").textContent =
        resolvedTickets;
}


/* =========================
   VIEW TICKET
========================= */

function viewTicket(ticketId) {

    const ticket = tickets.find(function(ticket) {
        return ticket.id === ticketId;
    });


    if (!ticket) {
        return;
    }


    const modal = document.getElementById("ticket-modal");

    const ticketDetails =
        document.getElementById("ticket-details");


    ticketDetails.innerHTML = `

        <p>
            <strong>Ticket ID:</strong>
            #${ticket.id}
        </p>

        <p>
            <strong>Issue:</strong>
            ${ticket.issue}
        </p>

        <p>
            <strong>Description:</strong>
            ${ticket.description || "No description provided."}
        </p>

        <p>
            <strong>Submitted by:</strong>
            ${ticket.user || "Unknown user"}
        </p>

        <p>
            <strong>Assigned Technician:</strong>
            ${ticket.technician || "Not assigned"}
        </p>

        <p>
            <strong>Category:</strong>
            ${ticket.category}
        </p>

        <p>
            <strong>Priority:</strong>
            ${ticket.priority}
        </p>

        <p>
            <strong>Status:</strong>
            ${ticket.status}
        </p>

        <p>
            <strong>Resolution Notes:</strong>
            ${ticket.resolution || "No resolution notes yet."}
        </p>

        <p>
            <strong>Date:</strong>
            ${ticket.date}
        </p>

    `;


    modal.style.display = "flex";
}


/* =========================
   MODAL CONTROLS
========================= */

const closeModal =
    document.getElementById("close-modal");

const ticketModal =
    document.getElementById("ticket-modal");


closeModal.addEventListener("click", function() {

    ticketModal.style.display = "none";

});


const newTicketButton =
    document.querySelector(".new-ticket-btn");

const newTicketModal =
    document.getElementById("new-ticket-modal");

const closeNewTicket =
    document.getElementById("close-new-ticket");


newTicketButton.addEventListener("click", function() {

    newTicketModal.style.display = "flex";

});


closeNewTicket.addEventListener("click", function() {

    newTicketModal.style.display = "none";

});


/* =========================
   CREATE NEW TICKET
========================= */

const ticketForm =
    document.getElementById("ticket-form");


ticketForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const issue =
        document.getElementById("issue").value.trim();

    const description =
        document.getElementById("description").value.trim();

    const user =
        document.getElementById("user").value;

    const technician =
        document.getElementById("technician").value;

    const category =
        document.getElementById("category").value;

    const priority =
        document.getElementById("priority").value;

    const resolution =
        document.getElementById("resolution").value.trim();


    if (
        !issue ||
        !description ||
        !user ||
        !technician ||
        !category ||
        !priority
    ) {

        alert("Please complete all required ticket fields.");

        return;
    }


    const newTicket = {

        id:
            Math.max(
                ...tickets.map(function(ticket) {
                    return ticket.id;
                })
            ) + 1,

        issue: issue,

        description: description,

        user: user,

        technician: technician,

        category: category,

        priority: priority,

        status: "Open",

        resolution: resolution,

        date:
            new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            })
    };


    tickets.push(newTicket);


    displayTickets();

    updateStats();

    updateReports();

    updateUserTicketCounts();


    newTicketModal.style.display = "none";

    ticketForm.reset();

});


/* =========================
   CHANGE STATUS
========================= */

function changeStatus(ticketId, newStatus) {

    const ticket = tickets.find(function(ticket) {
        return ticket.id === ticketId;
    });


    if (!ticket) {
        return;
    }


    ticket.status = newStatus;


    /*
        If the ticket is resolved and
        there are no resolution notes,
        we keep the ticket without notes.
    */


    filterTickets();

    updateStats();

    updateReports();

    updateUserTicketCounts();
}


/* =========================
   SEARCH & FILTER
========================= */

const searchInput =
    document.getElementById("search-input");

const statusFilter =
    document.getElementById("status-filter");

const priorityFilter =
    document.getElementById("priority-filter");


function filterTickets() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedStatus =
        statusFilter.value;

    const selectedPriority =
        priorityFilter.value;


    const filteredTickets =
        tickets.filter(function(ticket) {

            const matchesSearch =
                ticket.issue
                    .toLowerCase()
                    .includes(searchText)

                ||

                ticket.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                (ticket.user &&
                    ticket.user
                        .toLowerCase()
                        .includes(searchText))

                ||

                (ticket.technician &&
                    ticket.technician
                        .toLowerCase()
                        .includes(searchText))

                ||

                ticket.id
                    .toString()
                    .includes(searchText);


            const matchesStatus =
                selectedStatus === "All" ||
                ticket.status === selectedStatus;


            const matchesPriority =
                selectedPriority === "All" ||
                ticket.priority === selectedPriority;


            return (
                matchesSearch &&
                matchesStatus &&
                matchesPriority
            );

        });


    displayFilteredTickets(filteredTickets);
}


searchInput.addEventListener(
    "input",
    filterTickets
);

statusFilter.addEventListener(
    "change",
    filterTickets
);

priorityFilter.addEventListener(
    "change",
    filterTickets
);


/* =========================
   CLEAR FILTERS
========================= */

const clearFiltersButton =
    document.getElementById("clear-filters");


clearFiltersButton.addEventListener(
    "click",
    function() {

        searchInput.value = "";

        statusFilter.value = "All";

        priorityFilter.value = "All";

        filterTickets();

    }
);


/* =========================
   DISPLAY FILTERED TICKETS
========================= */

function displayFilteredTickets(filteredTickets) {

    ticketsBody.innerHTML = "";


    if (filteredTickets.length === 0) {

        ticketsBody.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    class="empty-state"
                >
                    No tickets found.
                </td>

            </tr>

        `;

        return;
    }


    filteredTickets.forEach(function(ticket) {

        const row =
            createTicketRow(ticket);

        ticketsBody.appendChild(row);

    });
}


/* =========================
   DELETE TICKET
========================= */

function deleteTicket(ticketId) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this ticket?"
        );


    if (!confirmed) {
        return;
    }


    const ticketIndex =
        tickets.findIndex(function(ticket) {
            return ticket.id === ticketId;
        });


    if (ticketIndex === -1) {
        return;
    }


    tickets.splice(ticketIndex, 1);


    displayTickets();

    updateStats();

    updateReports();

    updateUserTicketCounts();

    filterTickets();
}


/* =========================
   CLOSE MODALS
========================= */

ticketModal.addEventListener(
    "click",
    function(event) {

        if (event.target === ticketModal) {

            ticketModal.style.display = "none";

        }

    }
);


newTicketModal.addEventListener(
    "click",
    function(event) {

        if (event.target === newTicketModal) {

            newTicketModal.style.display = "none";

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            ticketModal.style.display = "none";

            newTicketModal.style.display = "none";

        }

    }
);


/* =========================
   CURRENT DATE
========================= */

const currentDate =
    document.getElementById("current-date");


currentDate.textContent =
    new Date().toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );


/* =========================
   REPORTS
========================= */

function updateReports() {

    const openTickets =
        tickets.filter(function(ticket) {
            return ticket.status === "Open";
        }).length;


    const progressTickets =
        tickets.filter(function(ticket) {
            return ticket.status === "In Progress";
        }).length;


    const resolvedTickets =
        tickets.filter(function(ticket) {
            return ticket.status === "Resolved";
        }).length;


    const highPriorityTickets =
        tickets.filter(function(ticket) {
            return ticket.priority === "High";
        }).length;


    const resolutionRate =
        tickets.length === 0

            ? 0

            : Math.round(
                (resolvedTickets / tickets.length) * 100
            );


    document.getElementById("report-open")
        .textContent = openTickets;


    document.getElementById("report-progress")
        .textContent = progressTickets;


    document.getElementById("report-resolved")
        .textContent = resolvedTickets;


    document.getElementById("report-high")
        .textContent = highPriorityTickets;


    document.getElementById("report-rate")
        .textContent = resolutionRate + "%";
}


/* =========================
   USER TICKET COUNTS
========================= */

function updateUserTicketCounts() {

    const userCards =
        document.querySelectorAll(".user-card");


    userCards.forEach(function(card) {

        const userName =
            card.querySelector("h3").textContent;


        const userTickets =
            tickets.filter(function(ticket) {

                return ticket.user === userName;

            }).length;


        card.querySelector(
            ".user-tickets span"
        ).textContent = userTickets;

    });
}


/* =========================
   DASHBOARD NAVIGATION
========================= */

const dashboardLink =
    document.querySelector(
        '.sidebar nav a.active'
    );


dashboardLink.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================
   INITIAL LOAD
========================= */

displayTickets();

updateStats();

updateReports();

updateUserTicketCounts();