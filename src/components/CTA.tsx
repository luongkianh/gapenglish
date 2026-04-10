import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  const bubbleFontStyle = "font-dynapuff";

  const textStrokeStyle = {
    WebkitTextStroke: "4px #000000",
    paintOrder: "stroke fill",
    textShadow: "6px 6px 0px #000000",
    letterSpacing: "0.05em",
    color: "#7d3429",
  };

  return (
    <section className="py-16 bg-[#f4fbf1] text-[#7d3429] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#cfecc4]/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2
            className={`text-5xl md:text-7xl font-bold text-[#7d3429] mb-6 ${bubbleFontStyle}`}
            style={textStrokeStyle}
          >
            SẴN SÀNG <span className="text-[#3f8f2c]">BẮT ĐẦU</span> CHƯƠNG TRÌNH HỌC?
          </h2>
          <p className="text-2xl font-bold leading-relaxed text-[#5c3d2f]">
            Đăng ký tư vấn miễn phí ngay hôm nay để nhận lộ trình học tập phù
            hợp nhất với bạn!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button className="bg-[#3f8f2c] text-white px-12 py-6 rounded-3xl font-black text-2xl hover:bg-[#66b94a] transition-all shadow-[8px_8px_0px_#cfecc4] border-4 border-[#3f8f2c] active:translate-y-2 active:shadow-none flex items-center justify-center gap-4 group">
              TƯ VẤN NGAY{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0965500672"
                className="bg-[#eef9e8] px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#f4fbf1] transition-all border-2 border-[#cfecc4] text-[#5c3d2f]"
              >
                <Phone className="w-5 h-5 text-[#3f8f2c]" />
                096 550 06 72
              </a>
              <a
                href="mailto:gapenglishwithmsloan@gmail.com"
                className="bg-[#eef9e8] px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#f4fbf1] transition-all border-2 border-[#cfecc4] text-[#5c3d2f]"
              >
                <Mail className="w-5 h-5 text-[#3f8f2c]" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}