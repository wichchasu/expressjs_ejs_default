// middlewares/authMiddleware.js

const checkAuth = (req, res, next) => {
          // เขียนโค้ดตรวจสอบการรับรองตัวตน
          // โดยตรวจสอบการส่งข้อมูลการรับรองตัวตนจาก request headers หรือตรวจสอบในฐานข้อมูล
          const isAuthenticated = true; // ตัวอย่างเท่านั้น
          if (isAuthenticated) {
            next(); // ผ่านการตรวจสอบการรับรองตัวตน
          } else {
            // edit code to login page
            res.status(401).json({ message: 'ไม่ได้รับอนุญาตให้เข้าถึง' });
          }
        }
        
        module.exports = checkAuth;
