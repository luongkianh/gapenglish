import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nguyễn Thị A",
      role: "Học viên lớp IELTS",
      content: "Nhờ Ms. Loan mà em đã đạt 7.0 IELTS chỉ sau 3 tháng học. Phương pháp giảng dạy rất dễ hiểu và hiệu quả!",
      rating: 5,
      avatar: "A",
    },
    {
      name: "Trần Văn B",
      role: "Phụ huynh bé 5 tuổi",
      content: "Con em rất thích học với Ms. Loan. Các bài học vui nhộn, con không còn sợ tiếng Anh nữa.",
      rating: 5,
      avatar: "B",
    },
    {
      name: "Lê Thị C",
      role: "Sinh viên",
      content: "GAP English giúp em tự tin giao tiếp tiếng Anh. Ms. Loan rất tận tâm và nhiệt tình.",
      rating: 5,
      avatar: "C",
    },
  ];

  const bubbleFontStyle = "font-dynapuff";

  const textStrokeStyle = {
    WebkitTextStroke: "4px #000000",
    paintOrder: "stroke fill",
    textShadow: "6px 6px 0px #000000",
    letterSpacing: "0.05em",
    color: "#7d3429",
  };

  return (
    <section className="py-16 bg-[#f8fdf7] text-[#7d3429] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-bold text-[#7d3429] mb-6 ${bubbleFontStyle}`}
            style={textStrokeStyle}
          >
            PHẢN HỒI <span className="text-[#3f8f2c]">TỪ HỌC VIÊN</span>
          </h2>
          <p className="text-xl text-[#5c3d2f] font-bold max-w-2xl mx-auto">
            Những chia sẻ chân thành từ học viên đã trải nghiệm khóa học tại
            GAP English.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#eef9e8] p-8 rounded-[2rem] border-2 border-[#cfecc4] hover:bg-[#f4fbf1] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#66b94a] fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#3f8f2c] mb-4" />
              <p className="text-lg font-bold mb-6 leading-relaxed text-[#5c3d2f]">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3f8f2c] rounded-full flex items-center justify-center font-black text-white border-2 border-[#cfecc4]">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-black text-[#7d3429]">{testimonial.name}</p>
                  <p className="text-[#5c3d2f] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}