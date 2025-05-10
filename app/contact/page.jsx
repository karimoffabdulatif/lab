'use client';
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState, useEffect } from "react";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Kartalar uchun obyektlar ro'yxati
  const cardData = [
    {
      icon: <WhereToVoteOutlinedIcon style={{ fontSize: "64px", color: "#4B9CD3" }} />,
      title: "LABORATORY LOCATION",
      description: "Fizika laboratoriyasi, Tashkent, Uzbekistan",
    },
    {
      icon: <LocalPhoneOutlinedIcon style={{ fontSize: "64px", color: "#4B9CD3" }} />,
      title: "CONTACT NUMBER",
      description: "+998-94-001-76-53",
    },
    {
      icon: <LocalPrintshopOutlinedIcon style={{ fontSize: "64px", color: "#4B9CD3" }} />,
      title: "FAX",
      description: "1-234-567-8900",
    },
    {
      icon: <EmailOutlinedIcon style={{ fontSize: "64px", color: "#4B9CD3" }} />,
      title: "EMAIL",
      description: "lab@physics.uz",
    },
  ];

  // Social Iconlar uchun obyektlar ro'yxati
  const socialIcons = [
    {
      icon: <FacebookIcon style={{ fontSize: "48px", color: "#4B9CD3" }} />,
      link: "#",
    },
    {
      icon: <TwitterIcon style={{ fontSize: "48px", color: "#4B9CD3" }} />,
      link: "#",
    },
    {
      icon: <InstagramIcon style={{ fontSize: "48px", color: "#4B9CD3" }} />,
      link: "#",
    },
    {
      icon: <TelegramIcon style={{ fontSize: "48px", color: "#4B9CD3" }} />,
      link: "#",
    },
  ];

  return (
    <section className="container px-4">
      <div className="pt-10 pb-7 to-white">
        <div className=" text-gray-900 px-1">
          <div className="max-w-6xl mx-auto">
            {/* Kartalar bo'limi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`flex flex-col cursor-pointer shadow-lg w-full sm:w-[180px] md:w-[200px] border-2 border-blue-600 items-center text-center py-7 rounded-lg transition-transform duration-500 hover:scale-105 ${
                    animate ? "animate-fadeInUp" : ""
                  }`}
                >
                  {card.icon}
                  <h3 className="text-black font-semibold text-base">{card.title}</h3>
                  <p className="text-black text-sm w-40">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {/* Kontakt formasi */}
              <div className="border-2 shadow-xl border-blue-600 p-5 rounded-lg">
                <form className="space-y-4">
                  <div>
                    <label className="block text-black font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Email manzilini kiriting"
                      className="w-full border-b-2 border-blue-600 p-2 text-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium">Ismingiz</label>
                    <input
                      type="text"
                      placeholder="Ismingizni kiriting"
                      className="w-full border-b-2 border-blue-600 p-2 text-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-medium">Xabar</label>
                    <textarea
                      placeholder="Xabarni kiriting"
                      className="w-full p-4 border-b-2 border-blue-600 text-black outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600"
                  >
                    JO'NATISH
                  </button>
                </form>
              </div>

              {/* Matn bo'limi */}
              <div>
                <h2 className="text-2xl text-center sm:text-start sm:text-3xl md:text-4xl text-black font-semibold font-medium mb-4">
                  Biz bilan bog'lanish
                </h2>
                <p className="text-black mb-4 sm:w-[320px] md:w-[400px] italic font-medium">
                  Hurmatli hamkorlar, bizning sahifaga obuna bo'lgansiz. Biz bilan aloqaga o'tish uchun ko'plab imkoniyatlarga egasiz, shuningdek, biz sizni har doim qo'llab-quvvatlashga tayyormiz. <br />
                  <span>Sifat biz uchun foydadan ustundir.</span>
                </p>
                <p className="text-black sm:w-[340px] md:w-[420px] mb-6">
                  Foydalanuvchilarimiz uchun yanada qulaylik yaratish maqsadida, bizni onlayn kuzatib borishingiz mumkin. Buning uchun sizga mos keladigan ijtimoiy tarmoq platformasini tanlashingiz kerak.
                </p>
                <div className="flex space-x-4 pl-12 lg:pl-20 pb-7 sm:pl-0">
                  {socialIcons.map((social, index) => (
                    <a key={index} href={social.link} className="transition-transform duration-500 hover:scale-125">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
