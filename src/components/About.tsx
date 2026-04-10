import { Heart, Target, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  const bubbleFontStyle = "font-dynapuff";

  const textStrokeStyle = {
    WebkitTextStroke: "4px #000000",
    paintOrder: "stroke fill",
    textShadow: "6px 6px 0px #000000",
    letterSpacing: "0.05em",
    color: "#7d3429",
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#eef9e8] to-[#f8fdf7] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2
              className={`text-5xl md:text-7xl font-bold text-[#7d3429] mb-6 ${bubbleFontStyle}`}
              style={textStrokeStyle}
            >
              VỀ <span className="text-[#3f8f2c]">MS. LOAN</span>
            </h2>
            <p className="text-xl text-[#7d3429] font-bold leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực giảng dạy tiếng Anh, Ms.
              Loan đã giúp hàng trăm học viên chinh phục ngôn ngữ này một cách
              tự tin và hiệu quả.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#3f8f2c] rounded-xl border-2 border-[#66b94a] shadow-[4px_4px_0px_#cfecc4]">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black mb-2 text-[#7d3429]">
                    Tâm huyết với nghề
                  </h3>
                  <p className="text-[#5c3d2f] font-bold">
                    Đam mê truyền đạt kiến thức, luôn đặt lợi ích học viên lên
                    hàng đầu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#66b94a] rounded-xl border-2 border-[#3f8f2c] shadow-[4px_4px_0px_#cfecc4]">
                  <Target className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black mb-2 text-[#7d3429]">
                    Mục tiêu rõ ràng
                  </h3>
                  <p className="text-[#5c3d2f] font-bold">
                    Cam kết giúp học viên đạt được mục tiêu học tập trong thời
                    gian ngắn nhất.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#b5e09f] rounded-xl border-2 border-[#3f8f2c] shadow-[4px_4px_0px_#cfecc4]">
                  <Users className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black mb-2 text-[#7d3429]">
                    Đội ngũ chuyên nghiệp
                  </h3>
                  <p className="text-[#5c3d2f] font-bold">
                    Giáo viên giàu kinh nghiệm, phương pháp giảng dạy hiện đại.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden border-[8px] border-black shadow-[15px_15px_0px_#000] transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                src="/images/default-avatar.jpeg"
                alt="Ms. Loan"
                width={600}
                height={800}
                className="object-cover w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl border-4 border-black shadow-[8px_8px_0px_#000] rotate-6">
              <p className="font-black text-lg text-center">
                10+ năm <br /> kinh nghiệm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
