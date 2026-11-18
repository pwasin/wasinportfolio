# 🎨 Wasin Pongprasertsin — Graphic Designer Portfolio

เว็บไซต์ Portfolio สำหรับ **คุณวศิน พงศ์ประเสริฐสิน** (Graphic Designer ประสบการณ์กว่า 8 ปี) ออกแบบด้วยคอนเซปต์ **Smooth Scroll & Parallax Storytelling ผสม Bento Grid Layout** พร้อมระบบ **Interactive Lightbox Gallery** สำหรับแสดงภาพผลงานความละเอียดสูง และพร้อม Deploy อัตโนมัติบน **GitHub Pages** ผ่าน **GitHub Actions**

---

## ✨ ลูกเล่นและฟีเจอร์เด่น (Interactive Features)

- **Silky Smooth Scrolling (Lenis):** เลื่อนหน้าจอนุ่มนวลระดับ Agency
- **Interactive Cursor Spotlight:** แสงไฟ Ambient ติดตามเคอร์เซอร์เมาส์
- **Bento Grid Layout:** กล่องเรื่องราวตัวตน, เวลา Live Bangkok Time, สโลแกน และการ์ดทักษะ
- **One-Click Email Copy + Confetti:** คัดลอกอีเมลพร้อมเอฟเฟกต์พลุฉลอง
- **Interactive Project Showcase & Lightbox:**
  - **Nissui Hapisapo Gummy:** แกลเลอรีภาพแคมเปญ 12 ชิ้นงาน พร้อมระบบคลิกดูรูปขยายเต็มจอ
  - **Calendar 2027:** เมนูเลือกดูปฏิทินรายเดือน (12 เดือน + Cover) สลับภาพแบบ Interactive
- **Mobile Responsive:** รองรับการแสดงผลสวยงามทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Dark Mode & Creative Glows)
- **Animation:** Framer Motion + Lenis Smooth Scroll
- **Icons:** Lucide React
- **Micro-interactions:** Canvas Confetti
- **CI/CD & Hosting:** GitHub Actions & GitHub Pages

---

## 🚀 วิธีเปิดทดสอบในเครื่อง (Local Development)

เปิด Terminal ในโฟลเดอร์นี้ แล้วพิมพ์:

```bash
# รันเซิร์ฟเวอร์ทดสอบ
npm run dev
```

เปิดบราวเซอร์ไปที่ URL ที่แสดงบนหน้าจอ (เช่น `http://localhost:5173/`)

---

## 🌐 ขั้นตอนการเชื่อมต่อและ Deploy ขึ้น GitHub Pages

### ขั้นตอนที่ 1: สร้าง Repository บน GitHub
1. เข้าไปที่ [github.com/new](https://github.com/new)
2. ตั้งชื่อ Repository เช่น `wasin-portfolio` หรือ `<username>.github.io`
3. ตั้งเป็น **Public** แล้วกด **Create repository**

### ขั้นตอนที่ 2: Push โค้ดขึ้น GitHub
ใน Terminal ของเครื่อง ให้รันคำสั่ง:

```bash
# ผูกกับ Remote repository (แทนที่ URL ด้วย repository ของคุณ)
git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git

# Push โค้ดขึ้นไปที่ GitHub
git push -u origin main
```

### ขั้นตอนที่ 3: เปิดใช้งาน GitHub Pages
1. ไปที่หน้า GitHub Repository ของคุณ
2. คลิกแถบ **Settings** (รูปฟันเฟืองด้านบน)
3. เมนูด้านซ้ายเลือกหัวข้อ **Pages**
4. ในส่วน **Build and deployment > Source** ให้เลือกเปลี่ยนเป็น:
   👉 **`GitHub Actions`**
5. ระบบจะดึงไฟล์ `.github/workflows/deploy.yml` ไป Build และ Deploy เว็บให้อัตโนมัติทันที!
6. รอประมาณ 1–2 นาที เว็บไซต์จะเปิดใช้งานได้ที่ URL:
   `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`

---

## 📝 วิธีเพิ่มหรือแก้ไขข้อมูลในอนาคต

คุณสามารถแก้ไขข้อมูล ประสบการณ์ และเพิ่มโปรเจกต์ใหม่ได้ง่ายๆ ในไฟล์เดียว:
👉 **`src/data/portfolioData.js`**

- **ข้อมูลส่วนตัว & สโลแกน:** แก้ไขที่ตัวแปร `personalInfo`
- **ประวัติการทำงาน:** แก้ไขที่ตัวแปร `experiences`
- **ทักษะ:** แก้ไขที่ตัวแปร `skills`
- **โปรเจกต์และรูปภาพ:** เพิ่ม/ลดรายการใน `projects` (เพียงนำรูปมาวางในโฟลเดอร์ `public/projects/`)
