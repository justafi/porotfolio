/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Ini warna gelap untuk background (kalau tidak pakai video)
        dark: '#050511',    
        
        // --- INI YANG KITA UBAH ---
        // Ganti kode hex-nya jadi ffffff (Putih Murni)
        light: '#ffffff',   
        ink: '#ffffff',     // Warna judul: Putih
        muted: '#f8fafc',   // Warna paragraf: Putih keabu-abuan (sangat terang)
        
        accent: '#00f0ff',  
        paper: '#0f172a',   
        line: '#334155',    
      },
      // Biarkan dropShadow yang sudah kita buat sebelumnya
      dropShadow: {
        'glow': [
          '0 0px 5px rgba(0, 0, 0, 1)',
          '0 0px 20px rgba(0, 0, 0, 0.8)'
        ],
        'neon': [
          '0 0px 10px rgba(253, 224, 71, 0.6)',
          '0 0px 30px rgba(0, 0, 0, 0.8)'
        ]
      }
    },
  },
  plugins: [],
}