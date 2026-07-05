# Pitchside | Online football store

An elegant, high-performance multi-page e-commerce web application for an football store. Built using react javascript and TailwindCSS ,Pitchside offers the future in online service provision with its clean sleek design and high end user interface allowing for a satisfactory time for users.

## Project Overview
Pitchside provides a fluid, responsive user experience that allows customers to browse high end football apparell, manage a dynamic shopping cart with real-time price calculations, Intergrated payment options and maintain state across page reloads using browser persistence.

## features

* **Premium Sports Editorial UI:** A clean layout built using Tailwind CSS and Radix-based custom UI components, heavily utilizing pitch blacks, crisp stadium whites, and sharp emerald green accents.
* **Dual-Theme Compatibility:** Seamless real-time toggle between Light Mode and Dark Mode utilizing a shared React context layer.
* **Authentication Flow:** Complete matchday sign-in (`Login`) and squad registration (`Register`) views featuring secure client-side handling and instant input validation.
* **Interactive Locker Room (Products):** Live catalog processing driven directly from a standard `products.json` file dataset.
* **Squad Selection Cart Layer:** Dynamic sidebar overlay cart system implemented using React Context to add, track, and update product lists seamlessly.

## Project Structure
```

src/
├── components/
│   ├── ui/             # Radix & Base UI atomic elements (Button, Input, Card)
│   ├── navbar.jsx      # Sticky responsive navigation with theme/cart hooks
│   └── cart.jsx        # Modular squad checkout layout
├── context/
│   ├── AuthContext.jsx # Player authentication global state
│   ├── CartContext.jsx # Team selection item storage
│   └── ThemeContext.jsx# Dark/Light display mode toggles
├── pages/
│   ├── Home.jsx        # Welcome deck, featured products, and player reviews
│   ├── Login.jsx       # Light/Dark matchday login portal
│   └── Register.jsx    # Signup form with visual validation metrics
├── data/
│   └── products.json   # Local catalog static database array
├── App.jsx             # Route definitions and global provider wrapping
└── main.jsx            # React root application layer

```

# Tech Stack

* **Frontend Library:** React (Vite-powered environment for lightning-fast HMR)
* **Styling:** Tailwind CSS & Lucide React (Icons)
* **Navigation & Routing:** React Router DOM v6
* **State Management:** Native React Hooks (`useState`, `useContext`) managing isolated `AuthContext`, `ThemeContext`, and `CartContext`.
* **Component Foundation:** Tailored `@base-ui/react` primitives and UI cards.

## Collaboration & Contribution

We welcome contributions from the community and the team to help ensure that Pitchside is at the forefront of all e commerce site around the tech scene

## How to Contribute

1. **Fork the Repository:** Create your own copy of the project to work on.
2. **Create a Feature Branch:**

```bash
git checkout -b feature/AmazingFeature

```
3. **Commit Your Changes:**

```bash
    git commit -m 'Add some AmazingFeature'
```

4.  **Push to the Branch:**
```bash
    git push origin feature/AmazingFeature
```

5.  **Open a Pull Request:** Describe your changes and submit for review.

**Coding Standards**
*   Ensure all HTML is semantic and well-commented.
*   Maintain the ** White and Green** color palette for all UI additions.
*   Test responsiveness across multiple screen sizes before submitting.


## Getting Started

**Prerequisites**
Any modern web browser (Chrome, Firefox, Safari, or Edge).

Installation
1. **Clone the repository:**
   
```bash
   git clone https://github.com/Conrad008/PitchSide.git
   cd BakeBox
```

2. **Open the project:**
Simply open the index.html file in your preferred browser to view the current build.

## how to Test
This project uses jest test runner

### Prerequisites

Ensure you have installed all project dependencies before running the tests:

1. **install Jest**

```bash
npm install --save-dev jest

```

2. **Running the tests**

```bash
npm test

```

## License

This project is licensed under the MIT License.

## author
**conrad kipngeno**