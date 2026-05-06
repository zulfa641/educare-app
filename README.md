EduCare - Management System (UTS DevOps)
- EduCare adalah aplikasi manajemen pendidikan berbasis web yang dirancang untuk mengotomatisasi pengelolaan tugas dan materi pembelajaran bagi sekolah maupun universitas melalui arsitektur Node.js dan Express. Aplikasi ini mengimplementasikan siklus hidup DevOps secara penuh, mulai dari otomatisasi pengujian dan pembangunan kode melalui GitHub Actions, hingga pengiriman otomatis ke lingkungan produksi menggunakan Vercel, serta dilengkapi dengan fitur real-time health monitoring untuk memastikan stabilitas dan performa sistem yang optimal.

Setup CI/CD dan Monitoring EduCare
- Saya telah mengimplementasikan alur kerja DevOps otomatis menggunakan GitHub Actions sebagai instrumen Continuous Integration (CI) yang bertugas melakukan pemeriksaan kualitas kode (linting), pengujian unit (testing), dan pembuatan artefak (build) secara otomatis setiap kali ada perubahan kode. Untuk Continuous Delivery (CD), saya menggunakan platform Vercel yang terhubung langsung dengan repositori GitHub guna melakukan deployment otomatis ke lingkungan produksi secara real-time. Di sisi operasional, saya menerapkan sistem Monitoring & Logging melalui pembuatan Health Check Endpoint (/health) untuk memantau vitalitas aplikasi, serta memanfaatkan dashboard log produksi untuk mengamati trafik dan mendeteksi masalah performa secara dini.

Nama    : Bifaqih Zulfa
NIM     : 12231945
Tugas   : Studi Kasus Implementasi CI/CD & Monitoring (UTS)

Link :
- Repository GitHub: [https://github.com](https://github.com)
- Aplikasi Live (CD): [https://vercel.app](https://vercel.app)
- Health Check Status: [https://vercel.app/health](https://vercel.app/health)

