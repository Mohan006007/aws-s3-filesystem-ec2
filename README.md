# 🚀 Cloud-Native File System using AWS S3 Files

## 📌 Overview

This project demonstrates a **production-grade implementation of AWS S3 Files** mounted as a file system on an EC2 instance using a **VPC Interface Endpoint**, enabling applications to interact with S3 using standard file operations.

---

## 🧠 Architecture

```
Browser → Node.js App (EC2) → Mounted S3 Files (/mnt/s3files) → Amazon S3 Bucket
```

---

## ⚙️ Tech Stack

* ☁️ AWS EC2 (Ubuntu 24.04)
* 🪣 Amazon S3 (S3 Files - New Feature)
* 🌐 VPC Interface Endpoint (Private Connectivity)
* 🔐 Security Groups
* 🟢 Node.js (Express)
* 📂 File System Mount (s3files)

---

## 🔥 Features

* Mount S3 as a local file system
* Read & write files using Node.js
* Private connectivity via VPC Endpoint (no public internet)
* Real-time sync between EC2 and S3
* REST API to interact with files

---

## 🛠️ Setup Steps

### 1. Launch EC2 Instance

* Ubuntu 24.04
* Open ports: `22`, `3000`

---

### 2. Create S3 Bucket

* Create a standard S3 bucket

---

### 3. Create S3 Files File System

* Attach to S3 bucket

---

### 4. Create VPC Endpoint

* Type: **Interface**
* Service: `aws.api.<region>.s3files`
* Enable Private DNS
* Attach correct Security Group (IMPORTANT)

---

### 5. Mount S3 Files on EC2

```bash
sudo mkdir /mnt/s3files
sudo mount -t s3files <file-system-id>:/ /mnt/s3files
```

---

### 6. Fix Permissions

```bash
sudo chown -R ubuntu:ubuntu /mnt/s3files
```

---

### 7. Node.js App

```bash
npm init -y
npm install express
```

---

## 🧾 Sample App (app.js)

```js
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 S3 Files System Working!");
});

app.get("/write", (req, res) => {
    fs.writeFileSync("/mnt/s3files/hello.txt", "Hello from Node App");
    res.send("File written to S3 Files!");
});

app.get("/read", (req, res) => {
    const data = fs.readFileSync("/mnt/s3files/hello.txt", "utf-8");
    res.send(data);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## 🌐 API Endpoints

| Endpoint | Description       |
| -------- | ----------------- |
| `/`      | Health check      |
| `/write` | Write file to S3  |
| `/read`  | Read file from S3 |

---

## 📸 Screenshots

### 🌐 Home Page
![Details](Screenshots/Screenshot%202026-04-10%20185642.png)

---

### 🔐 Security Group Configuration
![Home](Screenshots/Screenshot%202026-04-10%20193815.png)

---

### 🧱 Endpoint Details
![Write](Screenshots/Screenshot%202026-04-10%20193750.png)

---

### 📂 Mounted S3 File System (EC2)
![Read](Screenshots/Screenshot%202026-04-10%20193710.png)

---

### 📂 S3 File System (Overview)
![EC2](Screenshots/Screenshot%202026-04-10%20193641.png)

---

### 💻 EC2 Instance (App Server Running)
![S3](Screenshots/Screenshot%202026-04-10%20193620.png)

---

### 🪣 S3 Bucket (Files Stored)
![Mount](Screenshots/Screenshot%202026-04-10%20193553.png)

---

### 💽 Disk Mount Verification
![Disk](Screenshots/Screenshot%202026-04-10%20193506.png)

---

### ✍️ Write API (/write)
![SG](Screenshots/Screenshot%202026-04-10%20185719.png)

---

### 📖 Read API (/read)
![Endpoint](Screenshots/Screenshot%202026-04-10%20185711.png)

---

## 🧠 Key Learnings

* VPC Interface Endpoints and PrivateLink
* DNS resolution inside VPC
* Security Group troubleshooting
* Mounting object storage as file system
* Integrating cloud storage with applications

---

## 🚨 Challenges Faced

* ❌ DNS resolution failure
* ❌ Mount timeout issues
* ❌ Permission denied on mount
* ❌ Security group misconfiguration

### ✅ Solutions

* Enabled VPC DNS settings
* Configured correct VPC Endpoint
* Updated Security Groups
* Fixed mount permissions

---

## 🏆 Highlight

**“Implemented AWS S3 Files mounted on EC2 using VPC Interface Endpoint, enabling secure and scalable file operations through a Node.js application.”**

---

## 📂 Project Structure

```
project/
│── app.js
│── package.json
│── package-lock.json
│── README.md
│── screenshots/
```

---

## 🚀 Future Improvements

* Dockerize application
* Automate infra using Terraform
* Add Nginx reverse proxy
* Implement IAM role-based access

---
