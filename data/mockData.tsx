// src/data/mockData.js

export const user = {
  name: "Rudra Pratap Singh",
  email: "rudra@example.com",
  role: "Developer",
  avatar: "https://i.pravatar.cc/100",
};

export const apiLogs = [
  { name: "GET /users", time: "10:15 AM", status: "200 OK", responseTime: "120ms" },
  { name: "POST /login", time: "10:18 AM", status: "200 OK", responseTime: "90ms" },
  { name: "GET /products", time: "10:20 AM", status: "500 Error", responseTime: "300ms" },
  { name: "PUT /settings", time: "10:25 AM", status: "200 OK", responseTime: "110ms" },
  { name: "DELETE /user/42", time: "10:30 AM", status: "403 Forbidden", responseTime: "150ms" },
];
