import { Monitor, Video, Users, Star } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-[#f8fdf7] py-20">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Học viên đạt chứng chỉ", val: "Nhiều chứng chỉ", icon: <Monitor /> },
          { label: "Hình thức học", val: "Online/Offline", icon: <Video /> },
          { label: "Đội ngũ", val: "Tâm huyết", icon: <Users /> },
          { label: "Cam kết", val: "Hiệu quả", icon: <Star /> },
        ].map((item, i) => (
          <div key={i} className="text-center text-[#5c3d2f] space-y-2">
            <div className="mx-auto w-12 h-12 bg-[#b5e09f] rounded-xl flex items-center justify-center border-2 border-[#cfecc4] shadow-[4px_4px_0px_#cfecc4] text-[#3f8f2c]">
              {item.icon}
            </div>
            <p className="text-[#5c3d2f] text-xs font-black uppercase tracking-widest">
              {item.label}
            </p>
            <p className="text-xl font-black text-[#3f8f2c]">{item.val}</p>
          </div>
        ))}
      </div>
    </section>
  );
}