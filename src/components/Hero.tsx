import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const bubbleFontStyle = "font-dynapuff";
  const bodyFontStyle = "font-baloo2";

  const textStrokeStyle = {
    WebkitTextStroke: "4px #000000",
    paintOrder: "stroke fill",
    textShadow: "6px 6px 0px #000000",
    letterSpacing: "0.05em",
    color: "#7d3429",
  };

  return (
    <header className="relative min-h-screen flex items-center pt-36 pb-20 overflow-hidden bg-[#e8f6df]">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#cfecc4]/70 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#b5e09f]/50 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000]">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            <span className="text-xs font-black uppercase tracking-widest">
              KIÊN GIANG'S MODERN ENGLISH CENTER
            </span>
          </div>

          <h1
            className={`text-6xl md:text-[7rem] font-bold text-[#7d3429] leading-[1.2] ${bubbleFontStyle}`}
            style={textStrokeStyle}
          >
            HỌC VUI <br /> <span className="text-[#3f8f2c]">KẾT QUẢ</span>{" "}
            <br /> THẬT
          </h1>

          <p className="text-2xl text-[#7d3429] max-w-lg font-bold leading-relaxed border-l-8 border-[#66b94a] pl-6">
            Anh ngữ Ms. Loan - Lấp đầy khoảng trống kiến thức bằng phương pháp
            giảng dạy hiện đại, môi trường thân thiện và hiệu quả tuyệt đối.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button className="bg-[#3f8f2c] hover:bg-[#66b94a] text-white px-12 py-6 rounded-3xl font-black text-2xl transition-all shadow-[8px_8px_0px_#cfecc4] border-4 border-[#3f8f2c] active:translate-y-2 active:shadow-none flex items-center justify-center gap-4 group">
              HỌC THỬ MIỄN PHÍ{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Main Image Frame */}
          <div className="relative z-10 rounded-[4rem] overflow-hidden border-[10px] border-black shadow-[20px_20px_0px_#000] transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <Image
              src="/images/default-avatar.jpeg"
              alt="Anh ngữ Ms Loan"
              width={800}
              height={1000}
              className="object-cover aspect-[4/5] w-full"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-10">
              <p
                className={`text-white text-3xl font-black ${bubbleFontStyle} italic`}
              >
                "Fill the English Gap"
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute -top-12 -right-8 bg-[#66b94a] p-8 rounded-[2rem] border-4 border-[#3f8f2c] shadow-[8px_8px_0px_#cfecc4] rotate-12 animate-bounce-slow z-20">
            <p className="font-black text-2xl text-white text-center leading-tight">
              ƯU ĐÃI
              <br />
              GIẢM 20%
            </p>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_#000] -rotate-6 z-20">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black bg-rose-200 flex items-center justify-center text-[10px] font-black"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              <p className="font-black text-sm">
                500+ Học viên <br /> đã tin tưởng
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}