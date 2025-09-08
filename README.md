# ShopFlow - Modern E-commerce Platform

**ShopFlow** is a comprehensive, modern e-commerce platform built with **React 18**, **Redux Toolkit**, **React Query**, and **Tailwind CSS**. It features advanced state management, optimized performance, responsive design, and a complete shopping experience.

## Live Demo

Check out the live version: **[ShopFlow.vercel.app](https://ecommerce-one-inky-65.vercel.app/)**

---

## Features

### E-commerce Core
- **Product Catalog** - Browse products with categories, brands, and filtering
- **Shopping Cart** - Add/remove items with persistent state
- **Payment Integration** - Secure checkout process
- **Product Search** - Find products quickly with search functionality
- **Product Reviews** - Customer testimonials and ratings

### Authentication & User Management
- **User Registration & Login** - Secure authentication system
- **Protected Routes** - Role-based access control
- **Authentication Context** - Global auth state management

### Technical Excellence
- **React 18** with latest features and concurrent rendering
- **Redux Toolkit** for predictable state management
- **React Query** for efficient data fetching and caching
- **Tailwind CSS** + **Shadcn/UI** for modern, responsive design
- **Fully Responsive** - Mobile-first design approach
- **Vite** for lightning-fast development and builds
- **ESLint** for code quality and consistency

### User Experience
- **Product Sliders** - Interactive product carousels
- **Toast Notifications** - Real-time user feedback
- **Loading States** - Smooth loading experiences
- **Error Boundaries** - Graceful error handling
- **Form Validation** - Formik + Yup validation

---

## Tech Stack

### Frontend Core
| Technology | Version | Purpose |
|------------|---------|----------|
| **React** | ^18.3.1 | UI Framework with Hooks & Context |
| **Vite** | ^7.0.0 | Build tool & dev server |
| **React Router DOM** | ^7.6.3 | Client-side routing |

### State Management
| Technology | Version | Purpose |
|------------|---------|----------|
| **Redux Toolkit** | ^2.8.2 | Global state management |
| **React Redux** | ^9.2.0 | React-Redux bindings |
| **React Query** | ^5.84.1 | Server state & caching |

### Styling & UI
| Technology | Version | Purpose |
|------------|---------|----------|
| **Tailwind CSS** | ^3.4.17 | Utility-first CSS framework |
| **Shadcn/UI** | ^0.9.5 | Pre-built UI components |
| **Radix UI** | Latest | Accessible UI primitives |
| **Lucide React** | ^0.536.0 | Icon library |
| **Flowbite** | ^3.1.2 | Additional UI components |

### Forms & Validation
| Technology | Version | Purpose |
|------------|---------|----------|
| **Formik** | ^2.4.6 | Form state management |
| **Yup** | ^1.6.1 | Schema validation |

### Additional Libraries
| Technology | Version | Purpose |
|------------|---------|----------|
| **Axios** | ^1.10.0 | HTTP client |
| **React Slick** | ^0.30.3 | Carousel/slider components |
| **React Hot Toast** | ^2.5.2 | Toast notifications |
| **React Helmet** | ^6.1.0 | Document head management |
| **React Spinners** | ^0.17.0 | Loading indicators |

---

<<<<<<< HEAD
## Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
=======
## ⚙️ Installation
1. Clone the repo:
>>>>>>> 59cefa074743439e645809eaf2d3236e36c445ac
   ```bash
   git clone https://github.com/mahmoud25osama/Ecommerce.git
   cd Ecommerce
   ```
<<<<<<< HEAD

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

### Available Scripts

```bash
npm run dev      # Start development server (port 8080)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```
=======
   2.Install dependencies:
   ```bash
    npm run dev
    # or
    yarn dev
   ```
   3.Run the development server:
      The app will be available at:
          👉 `http://localhost:5173`
    
---
>>>>>>> 59cefa074743439e645809eaf2d3236e36c445ac

---

## Project Structure

```
ShopFlow/
├── public/                    # Static assets & index.html
├── src/
<<<<<<< HEAD
│   ├── Components/            # Feature-based components
│   │   ├── About/            # About page components
│   │   ├── Brands/           # Brand listing & details
│   │   ├── CartDrawer/       # Shopping cart sidebar
│   │   ├── Categories/       # Category management
│   │   ├── CategoriesSlider/ # Category carousel
│   │   ├── ConfirmationPage/ # Order confirmation
│   │   ├── Contact/          # Contact form & info
│   │   ├── Error/            # Error boundary components
│   │   ├── Footer/           # Site footer
│   │   ├── HomeSlick/        # Homepage sliders
│   │   ├── LandingPage/      # Homepage components
│   │   ├── Layout/           # App layout wrapper
│   │   ├── Loader/           # Loading components
│   │   ├── Login/            # Authentication forms
│   │   ├── Navbar/           # Navigation component
│   │   ├── NotFound/         # 404 error page
│   │   ├── PaymentPages/     # Checkout & payment
│   │   ├── ProductDetails/   # Product detail pages
│   │   ├── ProtectedRoute/   # Route guards
│   │   ├── Register/         # User registration
│   │   ├── Shop/             # Product catalog
│   │   ├── Testimonial/      # Customer reviews
│   │   └── ui/               # Shadcn UI components
│   ├── Context/               # React Context providers
│   │   ├── AuthContext/      # Authentication context
│   │   └── CartContext/      # Shopping cart context
│   ├── CustomHooks/           # Custom React hooks
│   ├── Redux/                 # Redux store & slices
│   ├── ReusableComponents/    # Shared UI components
│   ├── lib/                   # Utility functions
│   ├── assets/                # Images & static files
│   ├── main.jsx               # App entry point
│   ├── App.jsx                # Main App component
│   └── index.css              # Global styles
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
├── components.json            # Shadcn/UI config
├── eslint.config.js           # ESLint configuration
└── package.json               # Dependencies & scripts
```
=======
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page-level components (routes)
│   └── index.jsx         # Entry point
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies & scripts
```
---

🤝 Contributing
>>>>>>> 59cefa074743439e645809eaf2d3236e36c445ac

---

## Development Workflow

### Adding New Features
1. Create feature branch: `git checkout -b feature/new-feature`
2. Develop in `src/Components/NewFeature/`
3. Add Redux slice if needed in `src/Redux/`
4. Create custom hooks in `src/CustomHooks/`
5. Test thoroughly and ensure responsive design

<<<<<<< HEAD
### Code Quality
- Follow ESLint rules for consistent code style
- Use TypeScript-style JSDoc comments
- Implement proper error handling
- Ensure accessibility (a11y) standards
=======
---

👨‍💻 Author
>>>>>>> 59cefa074743439e645809eaf2d3236e36c445ac

---

## Deployment

The project is configured for easy deployment on **Vercel**:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository
   - Vercel will automatically detect Vite configuration
   - Set build command: `npm run build`
   - Set output directory: `dist`

---

## Contributing

Contributions are welcome! Here's how you can help:

### Getting Started
1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/Ecommerce.git
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes**
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed
- Ensure responsive design on all devices

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Mahmoud Osama**
- GitHub: [@mahmoud25osama](https://github.com/mahmoud25osama)

---

## Acknowledgments

- **React Team** for the amazing framework
- **Vercel** for seamless deployment
- **Tailwind CSS** for the utility-first approach
- **Shadcn/UI** for beautiful, accessible components
- **Open Source Community** for the incredible tools and libraries

---

<div align="center">
  <p><strong>⭐ Star this repo if you found it helpful!</strong></p>
  <p>Made with ❤️ by Mahmoud Osama</p>
</div>
