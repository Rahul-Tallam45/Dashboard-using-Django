# Dashboard-using-Django
Overview
This is a Dashboard application built with Next.js for the frontend and Django for the backend. The application fetches chart data from a Django API and visualizes it using various charts in the frontend.

Setup and Installation
Prerequisites
Node.js (>= v18.17.0)
Python (>= 3.8)
Django (>= 4.0)
Anaconda (optional, for managing Python environments)
Backend Setup (Django)
Clone the Repository:
git clone <your-repo-url>
cd <your-repo-directory>

Create and Activate a Python Environment (optional but recommended):
conda create -n dashboard-backend python=3.8
conda activate dashboard-backend

Install Django and Required Packages:
pip install django djangorestframework

Run Migrations:
python manage.py migrate

Start the Django Server:
python manage.py runserver
The backend API will be available at http://127.0.0.1:8000/api/chart-data/.

Frontend Setup (Next.js)
Navigate to the Frontend Directory:
cd <frontend-directory>

Install Dependencies:
npm install

Run the Next.js Server:
npm run dev
The frontend application will be available at http://localhost:3000.

Libraries and Tools Used
Next.js: Framework for server-rendered React applications.
React: JavaScript library for building user interfaces.
Chart.js: Library for rendering charts.
React-Chartjs-2: React wrapper for Chart.js.
Django: Python web framework for building the backend API.
Django REST Framework: Toolkit for building Web APIs in Django.
CSS Modules: Scoped CSS for styling React components.
Approach and Thought Process
Backend Development:
Set up a Django project and create an API endpoint to provide chart data. Use Django REST Framework to structure the API response.

Frontend Development:
Initialize a Next.js project to build the frontend. Create chart components using react-chartjs-2 and chart.js to render data fetched from the API. Implement a responsive design to ensure the dashboard looks good on different screen sizes.

Integration:
Fetch data from the Django API in the Next.js application using fetch. Display the data using various chart types (Line, Bar, Pie) with Chart.js.

Styling:
Use CSS modules for scoped and modular styling. Ensure a clean and intuitive user interface that adapts to different screen sizes.
