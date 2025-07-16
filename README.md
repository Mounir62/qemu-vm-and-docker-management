# ContainerPilot 🚀

![FastAPI](https://img.shields.io/badge/API-FastAPI-brightgreen) ![React](https://img.shields.io/badge/Frontend-React-blue) ![Tailwind CSS](https://img.shields.io/badge/CSS-Tailwind%20CSS-teal) ![Docker](https://img.shields.io/badge/Container-Docker-blue) ![QEMU](https://img.shields.io/badge/VM-QEMU-orange)

A unified control panel for managing **virtual disks**, **QEMU virtual machines**, and **Docker resources** through a FastAPI backend and a React + Tailwind CSS UI.

---

## 🚀 Key Features

* **🗄️ Disk Management**

  * Create, list, and delete QEMU disk images in formats: qcow2, vdi, vmdk, raw, img.
  * Real‑time storage metrics: total, free, and used percentage.

* **📦 VM Orchestration**

  * Launch detached QEMU VMs with custom CPU, RAM, boot ISO, networking, and snapshot options.
  * List and terminate running VMs by PID.

* **🐳 Docker Integration**

  * Create and build Dockerfiles, list local images & containers.
  * Search/pull images from Docker Hub and stop running containers.

* **📂 Server-Side File Browser**

  * Browse server directories to select disk folders, ISO images, or Dockerfile paths.

---

## ⚙️ Architecture Overview

```
Client (React + Tailwind)  <─── HTTP JSON ───>  Server (FastAPI + Uvicorn)
    │                                      │
    │                                      ├─ QEMU CLI (vm launch, qemu-img)
    │                                      ├─ Docker CLI (build, pull, list)
    │                                      └─ Filesystem (VMs/, ISOs/, dockerfiles/)
```

* **Backend**: Python 3.11, FastAPI, `psutil` for process management, subprocess wrappers for CLI.
* **Frontend**: React hooks, Axios for API calls, Tailwind CSS for styling.
* **API**: Exposed under `/api/*` with CORS enabled for `http://localhost:9002`.

---

## 🔧 Getting Started

### Prerequisites

* **Python 3.11+** with `fastapi`, `uvicorn`, `psutil`
* **Node.js & npm**
* **Docker CLI** & **QEMU (`qemu-img`)** installed and on PATH

### Backend Setup

```bash
cd backend
pip install fastapi uvicorn psutil
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup

```bash
cd frontend
npm install
npm start   # Runs app on http://localhost:9002
```

---

## 🚀 Usage

1. Open your browser and go to **[http://localhost:9002](http://localhost:9002)**.
2. Use the **nav-tabs** to switch between:

   * **Disk Manager**: create/delete disks and view storage stats.
   * **VM Manager**: launch/stop QEMU VMs and browse ISOs.
   * **Docker Manager**: manage Dockerfiles, images, and containers.
3. All operations are reflected instantly via the REST API.

---

## 📁 Project Structure

```
/
├── backend/
│   └── main.py           # FastAPI server with /api endpoints
└── frontend/
    ├── components/       # React components (DiskManager, VMManager, DockerManager, Layout)
    └── App.js            # Entry point mounting Layout
```
