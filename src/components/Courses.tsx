import { BookOpen, Award, MessageCircle, Sparkles, ChevronRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "Tiếng Anh Mầm Non",
      desc: "Khơi gợi niềm đam mê ngôn ngữ cho bé từ 4 tuổi qua các hoạt động vui nhộn.",
      icon: <Sparkles className="w-8 h-8 text-[#3f8f2c]" />,
      color: "bg-[#eef9e8]",
      badge: "Dành cho bé 4-6 tuổi",
    },
    {
      title: "Tiếng Anh Phố Thông",
      desc: "Bám sát chương trình học tại trường, củng cố kiến thức và phát triển kỹ năng toàn diện.",
      icon: <BookOpen className="w-8 h-8 text-[#66b94a]" />,
      color: "bg-[#f4fbf1]",
      badge: "Học sinh lớp 1-12",
    },
    {
      title: "Tiếng Anh Giao Tiếp",
      desc: "Rèn luyện phản xạ, tự tin nói tiếng Anh như người bản xứ trong mọi tình huống.",
      icon: <MessageCircle className="w-8 h-8 text-[#8fd26f]" />,
      color: "bg-[#f8fdf7]",
      badge: "Mọi lứa tuổi",
    },
    {
      title: "Luyện Thi Chứng Chỉ",
      desc: "Lộ trình cá nhân hóa cho IELTS, TOEIC với cam kết đầu ra bằng văn bản.",
      icon: <Award className="w-8 h-8 text-[#3f8f2c]" />,
      color: "bg-[#fcfefe]",
      badge: "Cam kết đầu ra",
    },
  ];

  const bubbleFontStyle = "font-baloo2";

  const textStrokeStyle = {
    WebkitTextStroke: "4px #000000",
    paintOrder: "stroke fill",
    textShadow: "6px 6px 0px #000000",
    letterSpacing: "0.05em",
    color: "#7d3429",
  };

  return (
    <section className="py-16 bg-[#fcfefe] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2
              className={`text-5xl md:text-7xl font-bold text-[#7d3429] mb-6 ${bubbleFontStyle}`}
              style={textStrokeStyle}
            >
              KHÓA HỌC <span className="text-[#3f8f2c]">NỔI BẬT</span>
            </h2>
            <p className="text-xl font-bold text-[#5c3d2f]">
              Lộ trình học tập được thiết kế khoa học, phù hợp với từng độ
              tuổi và trình độ khác nhau.
            </p>
          </div>
          <button className="px-8 py-4 bg-[#3f8f2c] text-white rounded-2xl font-black hover:bg-[#66b94a] transition-colors shadow-[6px_6px_0px_#cfecc4] border-2 border-[#3f8f2c]">
            XEM TẤT CẢ KHÓA HỌC
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`${course.color} rounded-[2.5rem] p-8 border-2 border-[#cfecc4] shadow-[10px_10px_0px_#cfecc4] hover:scale-[1.02] transition-all duration-300 flex flex-col`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="bg-[#fcfefe] w-16 h-16 rounded-2xl border-2 border-[#cfecc4] flex items-center justify-center shadow-[4px_4px_0px_#cfecc4]">
                  {course.icon}
                </div>
                <span className="bg-[#3f8f2c] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  {course.badge}
                </span>
              </div>
              <h3
                className={`text-2xl font-black mb-4 uppercase ${bubbleFontStyle}`}
                style={{ color: '#7d3429', textShadow: '2px 2px 0px rgba(0,0,0,0.12)' }}
              >
                {course.title}
              </h3>
              <p className="text-[#5c3d2f] font-bold mb-8 flex-grow">
                {course.desc}
              </p>
              <button className="w-full py-3 bg-[#fcfefe] border-2 border-[#b5e09f] rounded-xl font-black text-[#5c3d2f] flex items-center justify-center gap-2 hover:bg-[#eef9e8] hover:text-[#3f8f2c] transition-all">
                TÌM HIỂU THÊM <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}