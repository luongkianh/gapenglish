import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const bubbleFontStyle = "font-dynapuff";

  const textStrokeStyle = {
    WebkitTextStroke: "4px #000000",
    paintOrder: "stroke fill",
    textShadow: "6px 6px 0px #000000",
    letterSpacing: "0.05em",
    color: "#7d3429",
  };

  return (
    <footer className="bg-[#f4fbf1] text-[#5c3d2f] py-16 overflow-hidden relative border-t-[10px] border-[#cfecc4]">
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-16 relative z-10">
        <div className="md:col-span-12 lg:col-span-5 space-y-8">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-4 border-[#cfecc4] shadow-[6px_6px_0px_#cfecc4] bg-[#fcfefe] flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="GAP English Logo"
                fill
                className="object-cover"
              />
            </div>
            <h2
              className={`text-5xl md:text-7xl font-bold ${bubbleFontStyle}`}
              style={{
                ...textStrokeStyle,
                textShadow: "6px 6px 0px #cfecc4",
                color: "#7d3429",
              }}
            >
              GAP ENGLISH
            </h2>
          </div>
          <p className="text-xl text-[#5c3d2f] font-bold leading-relaxed max-w-md">
            Lấp đầy "khoảng cách" kiến thức, mở ra tương lai tươi sáng cùng
            Anh ngữ Ms. Loan. Cơ sở đào tạo uy tín, hiện đại tại Rạch Giá.
          </p>
        </div>

        <div className="md:col-span-6 lg:col-span-4 space-y-8">
          <p className="text-[#3f8f2c] font-black uppercase tracking-[0.2em]">
            Thông tin liên hệ
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#eef9e8] rounded-xl border-2 border-[#cfecc4]">
                <MapPin className="text-[#3f8f2c] w-5 h-5" />
              </div>
              <div className="font-bold">
                <p className="text-[#5c3d2f] text-xs uppercase mb-1">
                  Địa chỉ cơ sở
                </p>
                <p>120 Ngô Gia Tự, An Hòa, Rạch Giá, Kiên Giang</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#eef9e8] rounded-xl border-2 border-[#cfecc4]">
                <Phone className="text-[#3f8f2c] w-5 h-5" />
              </div>
              <div className="font-bold">
                <p className="text-[#5c3d2f] text-xs uppercase mb-1">
                  Hotline tư vấn
                </p>
                <p>096 550 06 72</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#eef9e8] rounded-xl border-2 border-[#cfecc4]">
                <Mail className="text-[#3f8f2c] w-5 h-5" />
              </div>
              <div className="font-bold">
                <p className="text-[#5c3d2f] text-xs uppercase mb-1">Email</p>
                <p>gapenglishwithmsloan@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-3 space-y-8">
          <p className="text-[#3f8f2c] font-black uppercase tracking-[0.2em]">
            Theo dõi Ms Loan
          </p>
          <div className="grid grid-cols-1 gap-4">
            <a
              href="https://www.facebook.com/gapenglishwithmsloan"
              className="flex items-center gap-4 bg-[#eef9e8] p-4 rounded-2xl border-2 border-[#cfecc4] hover:bg-[#f4fbf1] transition-all group"
            >
              <div className="w-10 h-10 bg-[#3f8f2c] rounded-lg flex items-center justify-center font-black text-white">
                f
              </div>
              <span className="font-black text-[#5c3d2f]">Facebook Page</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 bg-[#eef9e8] p-4 rounded-2xl border-2 border-[#cfecc4] hover:bg-[#f4fbf1] transition-all"
            >
              <div className="w-10 h-10 bg-[#3f8f2c] border-2 border-[#cfecc4] rounded-lg flex items-center justify-center font-black text-[10px] text-white">
                Tik
              </div>
              <span className="font-black text-[#5c3d2f]">TikTok: @msloangapenglish</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-[#cfecc4] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#5c3d2f] font-bold text-sm">
          © 2024 GAP English. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-[#5c3d2f] font-bold text-sm">
          <a href="#" className="hover:text-[#3f8f2c]">
            Chính sách bảo mật
          </a>
          <a href="#" className="hover:text-[#3f8f2c]">
            Điều khoản sử dụng
          </a>
        </div>
      </div>
    </footer>
  );
}