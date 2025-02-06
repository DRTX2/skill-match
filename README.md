# Freelancer Collaboration Networking Platform
## INCOMPLETE
    Después de los módulos de **Usuarios** y **Perfiles**, el siguiente módulo más lógico dependerá de la funcionalidad que quieras priorizar. Aquí te dejo algunas opciones ordenadas según la importancia en un sistema tipo **LinkedIn/Freelancer**:  

---

### **🔹 Opción 1: Módulo de Proyectos (`Project`)**  
**Ideal si quieres enfocarte en proyectos freelance antes que en empleos fijos.**  
- Permite que los **clientes** publiquen proyectos.  
- Permite que los **freelancers** los tomen y trabajen en ellos.  
- Se conecta con **tareas (`Task`)**, permitiendo dividir un proyecto en partes.  
- Necesitarás lógica para asignar proyectos a trabajadores.  

💡 **Siguientes pasos:**  
1. CRUD para proyectos.  
2. Relación con tareas (`Task`).  
3. Función para asignar freelancers a proyectos.  

---

### **🔹 Opción 2: Módulo de Trabajos (`Job`)**  
**Útil si quieres enfocarte en contrataciones fijas o temporales.**  
- Permite que los **clientes** publiquen empleos.  
- Permite que los **trabajadores** apliquen.  
- Similar a los proyectos, pero orientado a empleos fijos en lugar de contratos freelance.  

💡 **Siguientes pasos:**  
1. CRUD para empleos.  
2. Función para que los usuarios apliquen a empleos.  
3. Relación entre cliente y trabajador.  

---

### **🔹 Opción 3: Módulo de Reseñas (`Review`)**  
**Para mejorar la confianza entre usuarios y mostrar reputación.**  
- Permite a los usuarios dejar reseñas a otros.  
- Se relaciona con `User` como **reviewer** y **reviewedUser**.  
- Requiere control para evitar abusos (ej. no permitir que alguien se auto-reseñe).  

💡 **Siguientes pasos:**  
1. CRUD para reseñas.  
2. Lógica para que solo puedan dejar reseñas después de trabajar juntos (ej. tras un proyecto o trabajo).  
3. Promediar calificaciones en `User`.  

---

### **🔹 Opción 4: Módulo de Tareas (`Task`)**  
**Para desglosar proyectos en subtareas y mejorar la organización.**  
- Relacionado con `Project`, permite dividir un proyecto en pasos pequeños.  
- Puede asignarse a un freelancer específico.  

💡 **Siguientes pasos:**  
1. CRUD para tareas.  
2. Función para asignarlas a trabajadores.  
3. Control de estado de cada tarea (pendiente, en progreso, completada).  

---

### **💡 ¿Cuál te sugiero primero?**  
🔹 **Si quieres un sistema estilo Freelancer → `Project`**.  
🔹 **Si quieres un sistema estilo LinkedIn → `Job`**.  
🔹 **Si ya tienes proyectos y empleos, entonces `Review` es clave para credibilidad**.  

🔹 **Mi recomendación:** Empieza con **Proyectos (`Project`)** o **Trabajos (`Job`)**, dependiendo del enfoque. Luego sigue con **Tareas (`Task`)** para organizar mejor los proyectos. 🚀

## Description

This project involves creating a **networking platform for freelancers and clients**. The application enables freelancers to connect with clients, organize collaborative projects, and manage real-time communication. It is an ideal project for your portfolio, highlighting your skills in:

- **Secure authentication** (JWT)
- **Complex data management**
- **Real-time development**

## Key Features

### 1. **Robust Authentication with JWT**
Implement a registration and login system using **JSON Web Tokens (JWT)** to secure API endpoints, with distinct roles for **freelancers** and **clients**.

### 2. **Advanced Profile Search**
Allows users to filter and search for freelancers based on **skills**, **ratings**, and **rates**. The search can be powered by **Elasticsearch** or a custom search system built with **NestJS**.

### 3. **Project Creation System**
Clients can **publish detailed projects**, while freelancers can **apply**. The platform features **dynamic forms** with advanced validations built in **React**.

### 4. **Real-Time Messaging**
Implement a real-time messaging system between users using **WebSockets** or the **Socket.IO** library in the backend, enabling direct communication throughout projects.

### 5. **Project Dashboard**
Each user has access to an admin panel where they can view the **status of their projects**, review the message history, and receive **notifications** about important changes.

### 6. **Reviews and Ratings**
Once a project is completed, both **clients and freelancers** can leave **reviews** and **ratings** for each other, fostering transparency and trust within the platform.

### 7. **Real-Time Notifications**
The platform sends **automated notifications** to keep users updated on project status, such as when a freelancer applies or when a client responds.

### 8. **Testing with Jest**
The project includes **unit** and **integration tests** for both the backend and frontend, using **Jest** to ensure the stability and functionality of workflows.

### 9. **API Documentation**
The API is fully documented using **Swagger** in **NestJS**, making it easier to maintain and expand the project in the future.

## Bonus Features

- **Payment Integration:** Consider integrating **payment solutions** like **Stripe** or **PayPal** to handle service payments or commission transactions directly through the platform.
- **Multilingual Support:** The platform can be configured in multiple languages to increase accessibility and appeal to a global audience.

---

This project is a **technical challenge** that will showcase a wide range of your abilities, from software architecture to implementing advanced features. It is an excellent addition to your portfolio, demonstrating your ability to build complete and scalable solutions.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```