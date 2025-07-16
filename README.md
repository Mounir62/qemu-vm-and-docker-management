# VM & Docker Manager ⚙️

![FastAPI](https://img.shields.io/badge/API-FastAPI-brightgreen) ![React](https://img.shields.io/badge/Frontend-React-blue) ![Tailwind CSS](https://img.shields.io/badge/CSS-Tailwind%20CSS-teal) ![Docker](https://img.shields.io/badge/Container-Docker-blue) ![QEMU](https://img.shields.io/badge/VM-QEMU-orange)

A sleek dashboard to control **QEMU virtual machines**, **disk images**, and **Docker** containers via a FastAPI backend and React + Tailwind CSS frontend.

---

## 🚀 Core Modules

* **🗄️ Disk Manager**

  * Create/List/Delete QEMU disk images (`qcow2`, `vdi`, `vmdk`, `raw`, `img`)
  * View total, free, and used storage metrics

* **📦 VM Manager**

  * Launch QEMU VMs with custom CPU, RAM, boot ISO, networking, and snapshots
  * List running VMs and terminate by process ID

* **🐳 Docker Manager**

  * Build Dockerfiles, list images & containers
  * Search/pull from Docker Hub and stop containers

* **📁 File Browser**

  * Navigate server directories to pick disk folders, ISO files, or Dockerfile paths

---

## ⚙️ Architecture

```text
[React + Tailwind] <-- HTTP/JSON --> [FastAPI]
        │                            │
        │                            ├─ QEMU CLI (qemu-img, qemu-system)
        │                            ├─ Docker CLI (build, pull, ps)
        │                            └─ Filesystem for VMs/, ISOs/, dockerfiles/
```

* **Backend**: Python 3.11, FastAPI, `psutil` for process handling
* **Frontend**: React hooks, Axios, Tailwind CSS
* **API Root**: `/api/*` with CORS enabled for `http://localhost:9002`

---

## 🛠️ Setup & Run

1. **Clone**: `git clone https://github.com/Mounir62/qemu-vm-and-docker-management.git`
2. **Backend**:

   ```bash
   cd backend
   pip install fastapi uvicorn psutil
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
3. **Frontend**:

   ```bash
   cd frontend
   npm install
   npm start  # http://localhost:9002
   ```

---

## 🖥️ Usage

* Navigate to **[http://localhost:9002](http://localhost:9002)** in your browser
* Use tabs to switch:

  * **Disk**: manage QEMU images
  * **VM**: control virtual machines
  * **Docker**: handle containers/images
* All actions update live via REST API

---

## 📂 Project Layout

```
/ (root)
├── backend/        # FastAPI server (main.py)
└── frontend/       # React + Tailwind components
    └── components/ # DiskManager, VMManager, DockerManager, Layout
```
