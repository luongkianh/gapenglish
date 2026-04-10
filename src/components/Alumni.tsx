import Image from "next/image";

export default function Alumni() {
  const alumni = [
    {
      name: "Nguyễn Thị A",
      certificate: "TOEIC 850",
      image: "/images/default-avatar.jpeg",
    },
    {
      name: "Trần Văn B",
      certificate: "IELTS 7.0",
      image: "/images/default-avatar.jpeg",
    },
    {
      name: "Lê Thị C",
      certificate: "TOEFL iBT 100",
      image: "/images/default-avatar.jpeg",
    },
    {
      name: "Phạm Văn D",
      certificate: "TOEIC 900",
      image: "/images/default-avatar.jpeg",
    },
    {
      name: "Hoàng Thị E",
      certificate: "IELTS 8.0",
      image: "/images/default-avatar.jpeg",
    },
    {
      name: "Đỗ Văn F",
      certificate: "TOEFL iBT 110",
      image: "/images/default-avatar.jpeg",
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
    <section className="py-16 bg-[#f4fbf1] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-bold text-[#7d3429] mb-6 ${bubbleFontStyle}`}
            style={textStrokeStyle}
          >
            HỌC VIÊN <span className="text-[#3f8f2c]">ĐẠT CHỨNG CHỈ</span>
          </h2>
          <p className="text-xl font-bold text-[#5c3d2f] max-w-2xl mx-auto">
            Những thành công của học viên sau khi hoàn thành khóa học tại GAP English.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {alumni.map((person, idx) => (
            <div
              key={idx}
              className="bg-[#eef9e8] rounded-[2rem] p-6 border-2 border-[#cfecc4] shadow-[10px_10px_0px_#cfecc4] hover:scale-[1.02] transition-all duration-300 text-center"
            >
              <div className="rounded-full overflow-hidden border-4 border-[#cfecc4] w-24 h-24 mx-auto mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-[#5c3d2f] mb-2">{person.name}</h3>
              <p className="text-lg font-semibold text-[#3f8f2c]">{person.certificate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}