# BeautyStore - Makeup & Skincare E-Commerce

**BeautyStore** is a modern, responsive e-commerce web application built with **Next.js 16 (App Router)** and **Express.js API**.  
It showcases makeup and skincare products with a professional design, dynamic product listing, product details, and optional protected pages for adding items.

## 🌐 Live Demo

> [Deployed on Vercel]()


## 🚀 Features

### Landing Page
- Hero slider with promotional banners for products.
- Features section highlighting key services.
- Top products & categories showcase.
- Testimonials / reviews section.
- Newsletter signup section.
- Brands / partner logos section.
- Footer with social links, quick links, and newsletter.

### Authentication
- Mock login with hardcoded credentials.
- Protected routes for authenticated users (Add Item page).
- Credentials stored in cookies.
- Optional: NextAuth.js integration for social login.

### Items Pages
- **Item List Page**: Shows all products with name, image, price, rating, and description.
- **Item Details Page**: Full product details, delivery info, tags, and professional layout.

### Protected Page
- **Add Item Page**: Only accessible when logged in.
- Form to add a new product via Express.js API.
- Toast notification on successful product creation.
- Redirects unauthenticated users to login.



## 🛠 Technologies Used

- **Next.js 16 (App Router)** – Frontend  
- **Express.js** – Backend API / JSON server  
- **Tailwind CSS** – Styling  
- **Lucide React** – Icons  
- **Vercel** – Deployment (frontend)  
- **Node.js** – Server runtime  
