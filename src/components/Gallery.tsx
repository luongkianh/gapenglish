import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/default-avatar.jpeg",
    "/images/logo.jpg",
    "/images/default-avatar.jpeg",
    "/images/logo.jpg",
    "/images/default-avatar.jpeg",
    "/images/logo.jpg",
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
    <section className="py-16 bg-[#fcfefe] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-bold text-[#5c3d2f] mb-6 ${bubbleFontStyle}`}
            style={textStrokeStyle}
          >
            HỌC VIÊN <span className="text-[#3f8f2c]">ĐẠT CHỨNG CHỈ</span>
          </h2>
          <p className="text-xl font-bold text-[#5c3d2f] max-w-2xl mx-auto">
            Hình ảnh học viên nhận chứng chỉ sau khi hoàn thành khóa học tại GAP
            English.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="rounded-[2rem] overflow-hidden border-2 border-[#cfecc4] shadow-[10px_10px_0px_#cfecc4] hover:scale-[1.02] transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}