<img width="1177" height="716" alt="Screenshot 2026-02-06 at 7 01 49 PM" src="https://github.com/user-attachments/assets/143f7828-d1db-4dc4-8cb1-d79c6539904c" />
# 🏠 Bangalore House Price Prediction

An end-to-end **Data Science and Full-Stack Web Application** that predicts house prices in Bangalore based on location, total square feet, number of bedrooms (BHK), and bathrooms.  
This project demonstrates the complete machine learning workflow along with backend API development and frontend integration.

---

## 🔍 Project Overview

- Predicts Bangalore house prices using a trained machine learning model
- Built with **Python, Flask, HTML, CSS, and JavaScript**
- Uses a real-world Kaggle dataset
- Clean separation of frontend and backend
- Designed for local execution (deployment planned)

---

## 🧠 Machine Learning Highlights

- Performed data cleaning and preprocessing on real housing data
- Engineered features using **one-hot encoding for locations**
- Trained a **Linear Regression** model
- Serialized the trained model using `pickle`
- Implemented fallback logic to handle **unseen locations** during prediction

---

## 📊 Dataset

- **Bengaluru House Price Data (Kaggle)**
- https://www.kaggle.com/amitabhajoy/bengaluru-house-price-data

**Features Used**
- `total_sqft`
- `location`
- `bhk`
- `bath`

**Target**
- `price` (in Lakhs)
---

## 🏗️ System Architecture

    Frontend (HTML / CSS / JavaScript)
                ↓
            Flask REST API
                ↓
         Trained ML Model (Pickle)



---

## 🔗 API Endpoints

| Endpoint | Method | Description |
|--------|--------|------------|
| `/get_location_names` | GET | Fetch all available locations |
| `/predict_home_price` | POST | Predict house price |

---

## ⚙️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask
- NumPy
- Scikit-learn

### Tools & Platforms
- Anaconda
- Git & GitHub
- Kaggle

---

## 🚀 How to Run Locally

```bash
# Create environment
conda create -n bhp_env python=3.10
conda activate bhp_env

# Install dependencies
pip install flask numpy scikit-learn

# Start backend server
python server/server.py
