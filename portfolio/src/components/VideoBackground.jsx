export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden bg-dark">
      
      {/* OVERLAY GELAP: 
          Ini sangat penting agar videonya tidak terlalu terang 
          dan teks portofolio kamu tetap bisa terbaca jelas. 
          Angka 70 berarti 70% gelap. Bisa kamu ubah dari 10 sampai 90. */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>
      
      {/* TAG VIDEO UTAMA */}
      <video
        autoPlay      // Berputar otomatis
        loop          // Berputar terus menerus (diulang)
        muted         // Wajib di-mute (tanpa suara) agar diizinkan autoplay oleh browser
        playsInline   // Agar berjalan lancar di HP (iOS/Android)
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* Mengambil video dari folder public/ */}
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      
    </div>
  );
}