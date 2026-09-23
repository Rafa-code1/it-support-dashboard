# IT Support Ticket Dashboard

A responsive frontend dashboard for managing IT support tickets.

This project simulates a basic IT support environment where users can submit technical issues and support staff can track, update, filter, and manage tickets through a centralized dashboard.

## Project Overview

The IT Support Ticket Dashboard was built to simulate a real-world technical support workflow.

It allows support teams to:

* Create new support tickets
* View detailed ticket information
* Search for tickets
* Filter tickets by status and priority
* Assign tickets to technicians
* Update ticket status
* Add resolution notes
* Delete tickets
* Track ticket statistics
* Monitor user ticket counts
* View support reports

The project was designed as a practical application of frontend development concepts while connecting to real-world IT support workflows.

## Features

### Dashboard Statistics

The dashboard displays dynamic statistics for:

* Total Tickets
* Open Tickets
* In Progress Tickets
* Resolved Tickets

### Ticket Management

Users can:

* Create new tickets
* View ticket details
* Delete tickets
* Change ticket status
* Assign a technician
* Add resolution notes

Each ticket can contain:

* Ticket ID
* Issue
* Description
* Submitted By
* Category
* Priority
* Status
* Assigned Technician
* Resolution Notes
* Date

### Search & Filtering

Tickets can be searched by:

* Issue
* Category
* User
* Technician
* Ticket ID

Tickets can also be filtered by:

* Status
* Priority

A **Clear Filters** option resets all filters.

### Users

The dashboard includes a support users section showing the number of tickets submitted by each user.

Ticket counts are updated automatically when tickets are created or deleted.

### Reports

The reports section provides dynamic information about:

* Open Tickets
* In Progress Tickets
* Resolved Tickets
* Resolution Rate
* High Priority Tickets

### Responsive Design

The interface is designed to work across:

* Desktop
* Tablet
* Mobile

The layout adapts to smaller screen sizes using CSS media queries.

## Ticket Workflow

The dashboard simulates a typical IT support workflow:

**User submits a ticket**

↓

**Ticket is created**

↓

**Technician is assigned**

↓

**Ticket status: Open**

↓

**Ticket status: In Progress**

↓

**Issue is resolved**

↓

**Resolution notes are recorded**

↓

**Dashboard statistics and reports are updated**

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JavaScript)
* DOM Manipulation
* Git
* GitHub

No frameworks or backend technologies are used in this version.

## Project Structure

```text
it-support-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure and content of the dashboard, including:

* Sidebar navigation
* Statistics cards
* Ticket table
* Users section
* Reports section
* Ticket details modal
* New ticket form

### `style.css`

Contains the visual design and responsive layout of the application.

### `script.js`

Handles the application's functionality, including:

* Ticket data
* Ticket creation
* Ticket deletion
* Status updates
* Search
* Filtering
* Dynamic statistics
* Reports
* User ticket counts
* Modal interactions

## How to Run

No installation or dependencies are required.

1. Clone the repository:

```bash
git clone https://github.com/Rafa-code1/it-support-dashboard.git
```

2. Open the project folder.

3. Open `index.html` in a web browser.

That's it.

## Data Storage

This version of the project is **frontend-only**.

Ticket data is currently stored in JavaScript while the application is running in the browser.

There is no:

* Backend
* Database
* Authentication system
* API

Because of this, newly created or modified tickets are not permanently stored after the page is refreshed.

## Future Improvements

Possible future improvements include:

* Backend integration
* Database storage
* User authentication
* Role-based access control
* Persistent ticket history
* Technician management
* Email notifications
* Ticket activity logs
* File attachments
* Advanced reporting and analytics

## What I Learned

Through this project, I practiced:

* Structuring a web application with HTML5
* Building responsive interfaces with CSS3
* Working with JavaScript data structures
* DOM manipulation
* Handling forms and user input
* Creating dynamic UI components
* Implementing search and filtering
* Updating application data dynamically
* Working with modals
* Using Git for version control
* Managing a project with GitHub

## Why I Built This Project

I built this project to create a practical application related to IT support and to strengthen my frontend development skills.

The project is also connected to my previous experience in technical support, where I worked with hardware and software issues, Windows systems, printers and peripherals, troubleshooting, incident documentation, and user support.

My goal was to turn a familiar IT support workflow into a functional web application while continuing to develop my programming and problem-solving skills.

## Author

**Rafa Sanyour**

Computer Science Graduate | IT Support | Frontend Development | Cybersecurity

GitHub: [Rafa-code1](https://github.com/Rafa-code1)

---

### Project Status

**Completed — Frontend Version**

The current version focuses on the frontend interface and client-side functionality. Backend and database integration are planned as potential future improvements.
