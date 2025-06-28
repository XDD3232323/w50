# KawaiiGames - ร้านค้าเกมออนไลน์

KawaiiGames เป็นเว็บแอปพลิเคชันร้านค้าเกมออนไลน์ที่พัฒนาด้วย React + Vite ให้ผู้ใช้สามารถเลือกซื้อเกมได้อย่างสะดวกสบาย

![KawaiiGames Screenshot](https://via.placeholder.com/800x400/7b5aff/ffffff?text=KawaiiGames+Screenshot)

## คุณสมบัติ

- การแสดงรายการเกมพร้อมราคา และส่วนลด
- ระบบค้นหาเกม
- ระบบตะกร้าสินค้า
- การกรองเกมตามหมวดหมู่
- การแสดงรายละเอียดเกม
- แบนเนอร์สไลด์โชว์เกมแนะนำ
- แสดงผลได้บนทุกขนาดหน้าจอ (Responsive Design)

## การติดตั้ง

1. ต้องติดตั้ง [Node.js](https://nodejs.org/) เวอร์ชัน 14.0.0 หรือใหม่กว่า
2. โคลนโปรเจคนี้:
   ```bash
   git clone https://github.com/yourusername/kawaiigames.git
   cd kawaiigames
   ```
3. ติดตั้งแพ็กเกจที่จำเป็น:
   ```bash
   npm install
   ```

## แพ็กเกจหลักที่ใช้

- React 18.2.0
- React DOM 18.2.0
- Vite 5.0.0

## วิธีการรัน

1. รันในโหมดพัฒนา:
   ```bash
   npm run dev
   ```
   เว็บแอปจะทำงานที่ http://localhost:5173/

2. สร้างเวอร์ชันสำหรับใช้งานจริง:
   ```bash
   npm run build
   ```

3. ดูตัวอย่างเวอร์ชันที่จะใช้งานจริง:
   ```bash
   npm run preview
   ```

## โครงสร้างโปรเจค

```
kawaiigames/
├── public/              # ไฟล์สาธารณะ
├── src/                 # โค้ดต้นฉบับ
│   ├── App.jsx          # คอมโพเนนต์หลัก
│   ├── main.jsx         # จุดเริ่มต้นแอปพลิเคชัน
│   └── index.css        # สไตล์ชีท
├── index.html           # HTML เริ่มต้น
└── package.json         # การกำหนดค่าโปรเจค
```

## การปรับแต่ง

- เพิ่มเกมใหม่ - เพิ่มข้อมูลเกมในอาร์เรย์ `gamesData` ในไฟล์ `src/App.jsx`
- แก้ไขธีมสี - ปรับค่าตัวแปร CSS ในไฟล์ `src/index.css`
- เพิ่มหมวดหมู่ - เพิ่มแท็กใหม่ในข้อมูลเกม

## ผู้พัฒนา

KawaiiGames พัฒนาโดย [ชื่อของคุณ]

## สัญญาอนุญาต

MIT License
