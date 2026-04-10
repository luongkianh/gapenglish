import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 transition-all duration-500 bg-[#fcfefe]/95 backdrop-blur-md py-4 border-b border-[#cfecc4]">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#3f8f2c] shadow-[4px_4px_0px_#cfecc4] bg-[#fcfefe]">
            <Image
              src="/images/logo.jpg"
              alt="GAP English Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span
              className="text-xl font-black tracking-tighter leading-none font-dynapuff"
              style={{
                WebkitTextStroke: "2px #000000",
                paintOrder: "stroke fill",
                textShadow: "2px 2px 0px #000000",
                letterSpacing: "0.05em",
                color: "#7d3429",
              }}
            >
              GAP ENGLISH
            </span>
            <span className="text-[11px] font-black text-[#3f8f2c] uppercase tracking-widest mt-1">
              Fill the English Gap
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Khóa học", "Về Ms Loan", "Học viên", "Liên hệ"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-black text-[#7d3429] hover:text-[#3f8f2c] transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            ),
          )}
          <button className="bg-[#3f8f2c] text-white px-8 py-3 rounded-2xl font-black text-sm hover:bg-[#66b94a] transition-all shadow-[4px_4px_0px_#cfecc4] border-2 border-[#3f8f2c] active:translate-y-1 active:shadow-none">
            TƯ VẤN NGAY
          </button>
        </div>

        <button className="md:hidden text-[#5c3d2f] bg-[#fcfefe] p-2 rounded-xl border-2 border-[#3f8f2c]">
          <Sparkles className="w-6 h-6 text-[#3f8f2c]" />
        </button>
      </div>
    </nav>
  );
}