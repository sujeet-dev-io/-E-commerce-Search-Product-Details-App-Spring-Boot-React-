🛍️ E-commerce Search & Product Details App (Spring Boot + React)
A full-stack application to search and view product listings and details. The backend is built with Spring Boot (Java), and the frontend is developed using React (Vite).

🚀 Features

- 🔍 Search products by name or brand (partial match).
- 🖼️ View product listings with image, price, brand, and category.
- 📄 View detailed product page on click.
- 🧪 REST APIs with Swagger UI documentation.
- 🗃️ In-memory H2 database with 20+ preloaded products.
- ⚙️ Clean, modular, and production-ready structure.
- 📱 Responsive UI (desktop/tablet/mobile).
- 🔁 Error handling with toast notifications.
    

📂 Project Structure

- backend/: Spring Boot REST API
- frontend/: React app (Vite + Axios)
---

🧪 Backend Setup (Spring Boot)

. Open terminal and navigate to the backend directory:

```
cd E-commerce-backend

```
2. Run the Spring Boot app:

```
./mvnw spring-boot:run

```
Or via IDE like IntelliJ/Eclipse by running the main method in:

```
com.example.ECommerceApplication

```
✅ Swagger UI: http://localhost:8080/swagger-ui/index.html
✅ H2 Console: http://localhost:8080/h2-console/
📝 JDBC URL: jdbc:h2:mem:testdb
📝 Driver Class: org.h2.Driver
📝 Username: sa
📝 Password: (password)
  
  ![localhost_8080_swagger-ui_index html](https://github.com/user-attachments/assets/e90ec070-75bf-45a8-a9a0-71885d6168e9)

  ![H2ConsoleDatabase](https://github.com/user-attachments/assets/de9ee557-9cc6-4091-9a19-aebddcb965a8)

  💻 Frontend Setup (React + Vite)

    Navigate to the frontend directory:

```
cd ems-frontend

```
2. Install dependencies (only once):

```
npm install

```
3. Start the development server:

```
npm run dev

```
🌐 App URL: http://localhost:5173/
📸 UI Preview:

![localhost_5173_](https://github.com/user-attachments/assets/6cd74a60-ef4f-47e2-9017-fb8e4f8f0b8c)

🔗 API Endpoints


✅ Get All Products

- URL: GET /products
- Description: Returns all products or filters using ?search=
- Example: http://localhost:8080/products
Example Response:

```
{
  "status": "SUCCESS",
  "data": [ {
            "id": "25a4f31d-0fc2-47e6-8720-0d4dfdf45f09",
            "name": "IPhone 13",
            "description": "Latest Apple smartphone",
            "price": 800,
            "brand": "Apple",
            "category": "ELECTRONICS",
            "imageUrl": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large_2x.jpg"
        },
        {
            "id": "1ade733e-4d56-4d71-920f-65703a8ed362",
            "name": "Samsung Galaxy",
            "description": "Popular Android phone",
            "price": 699,
            "brand": "Samsung",
            "category": "ELECTRONICS",
            "imageUrl": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg"
        },
        {
            "id": "a90faff3-1539-47da-8a39-45553f5a1cac",
            "name": "Nike Air Max",
            "description": "Running shoes",
            "price": 130,
            "brand": "Nike",
            "category": "FASHION",
            "imageUrl": "https://images.pexels.com/photos/9537432/pexels-photo-9537432.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
   ]
}

```

✅ Search Products

- URL: GET /products?search=Iphone
- Example: http://localhost:8080/products?search=Iphone

```
{
    "status": "SUCCESS",
    "data": [
        {
            "id": "25a4f31d-0fc2-47e6-8720-0d4dfdf45f09",
            "name": "IPhone 13",
            "description": "Latest Apple smartphone",
            "price": 800,
            "brand": "Apple",
            "category": "ELECTRONICS",
            "imageUrl": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large_2x.jpg"
        }
    ]
}
```

✅ Get Product by ID

- URL: GET /products/{id}
- Example: http://localhost:8080/products/25a4f31d-0fc2-47e6-8720-0d4dfdf45f09
Example Response:

```
{
    "status": "SUCCESS",
    "data": {
        "id": "25a4f31d-0fc2-47e6-8720-0d4dfdf45f09",
        "name": "IPhone 13",
        "description": "Latest Apple smartphone",
        "price": 800,
        "brand": "Apple",
        "category": "ELECTRONICS",
        "imageUrl": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large_2x.jpg"
    }
}

```

---

📦 Preloaded Sample Data

- 15+ products loaded via data.sql
- Categories: ELECTRONICS, FASHION, BOOKS
- Brands: Apple, Samsung, Nike, etc.


✅ Acceptance Criteria Checklist
Feature
Status 
Product search (partial match)
Product details page
Minimum 15+ products loaded
API error handling (toasts)
Responsive frontend
Swagger documentation
Clean modular code
Docker support (optional)
❌
Build locally (backend + frontend)

📌 Tech Stack

- Backend: Spring Boot, Java 17+, H2, Swagger, Maven
- Frontend: React, Vite, Axios, Toastify
- DB: H2 (in-memory, auto-loaded data.sql)
---

📄 License

This project is for educational/demo purposes.



