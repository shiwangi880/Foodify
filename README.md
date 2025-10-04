# Online Food Ordering Website
 A simple and responsive web application for browsing and ordering food online. Built with React, React Router DOM, and CSS.


# Features
1. View a list of food items
2. Add/remove items to/from the cart
3. Navigate between Home, Menu, Cart, and Checkout pages
4. Responsive UI using plain CSS
5. Dynamic routing with React Router DOM


# Tech Stack
1. React
2. React Router DOM
3. CSS (Vanilla)


# Project Structure
food-ordering-app/
├── public/
│   └── index.html                  # Static HTML template for Vite
├── src/
│   ├── assets/                     # Images, icons, fonts, etc.
│   │
│   ├── components/
│   │   ├── AppDownload/
│   │   │   ├── AppDownload.jsx
│   │   │   └── AppDownload.css
│   │   │
│   │   ├── ExploreMenu/
│   │   │   ├── ExploreMenu.jsx
│   │   │   └── ExploreMenu.css
│   │   │
│   │   ├── FoodDisplay/
│   │   │   ├── FoodDisplay.jsx
│   │   │   └── FoodDisplay.css
│   │   │
│   │   ├── FoodItem/
│   │   │   ├── FoodItem.jsx
│   │   │   └── FoodItem.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   │
│   │   ├── LoginPopup/
│   │   │   ├── LoginPopup.jsx
│   │   │   └── LoginPopup.css
│   │   │
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   │
│   ├── context/
│   │   └── StoreContext.jsx
│   │
│   ├── pages/
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── Cart.css
│   │   │
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   │
│   │   ├── PlaceOrder/
│   │   │   ├── PlaceOrder.jsx
│   │   │   └── PlaceOrder.css
│   │   │
│   │   └── (other pages if any)
│   │
│   ├── main.jsx                   # React app entrypoint instead of index.js
│   ├── index.css                  # Global CSS file (typically imported in main.jsx)
│
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── index.html                    # Root HTML (in project root, not public)



# 1.Installation
# Clone the repository
git clone https://github.com/yourusername/food-ordering-app.git
cd food-ordering-app

# 2.Install dependencies
npm install

# 3.Run the app
npm start

# 4. Routing
# Handled via react-router-dom:
1.Home
2.Cart
3.PlaceOrder

# npm install react-router-dom

# License
This project is open source under the MIT License.




