# BoltInvite

**BoltInvite** is a simple and intuitive order management dashboard built with **React** and **Tailwind CSS**.  
It allows users to create, edit, delete, and track customer orders efficiently.

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [How It Works](#how-it-works)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [License](#license)  

---

## Features

- **Create Orders** – Add a new customer order with multiple items.  
- **Edit Orders** – Update existing orders without losing data.  
- **Delete Orders** – Remove orders from the list.  
- **Deliver Orders** – Mark orders as delivered.  
- **Filter Orders** – Filter orders by “All”, “Pending”, or “Delivered”.  
- **Dynamic Total Amount** – Total amount updates automatically based on selected items.  
- **Responsive UI** – Works well on desktop and mobile screens.

---

## Technologies Used

- **React** – Functional components with `useState`  
- **Tailwind CSS** – For styling and responsive design  
- **JavaScript** – Logic for adding, editing, deleting orders  
- **HTML & JSX** – Structured and reusable components  
- **Unique IDs** – `crypto.randomUUID()` for generating order IDs  

---

## How It Works

1. **Adding a New Order**  
   - Enter customer name.  
   - Select items by clicking the `+` button.  
   - The total amount updates automatically.  
   - Click **Place Order** to save it.

2. **Editing an Order**  
   - Click **Edit** in the order report.  
   - Update items or customer name.  
   - Click **Edit Order** to save changes or **Cancel Edit** to discard.

3. **Deleting an Order**  
   - Click **Delete** next to the order in the table.

4. **Delivering an Order**  
   - Click **Deliver** to mark an order as completed.  

5. **Filtering Orders**  
   - Use the dropdown to filter by **All**, **Pending**, or **Delivered** orders.

---

## Learning Outcomes

By building **BoltInvite**, I gained hands-on experience in **core React concepts and practical frontend development**, including:

- **Managing State with `useState`** – Learned how to create and update state in functional components.  
- **Updating Nested Objects and Arrays in State** – Handled orders with multiple items and dynamic total amounts using immutable updates.  
- **Passing Props and Event Handlers** – Implemented parent-to-child and child-to-parent communication.  
- **Conditional Rendering** – Showed/hid buttons and status based on state.  
- **Filtering Data** – Filtered orders by status dynamically.  
- **Form Handling** – Managed controlled inputs, form submission, and validations.  
- **Component Composition and Reusability** – Structured the app into modular, reusable components.  
- **Styling with Tailwind CSS** – Built a responsive, modern UI using Tailwind utilities.  
- **Working with Unique Identifiers** – Generated unique IDs dynamically using `crypto.randomUUID()`.

---

1. Clone the repository:

```bash
git clone https://github.com/your-username/BoltInvite.git

cd 2-BoltInvite
npm install
npm run dev


