'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const labData = [
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/zener.JPG", slug: "/zener" },
    { title: "Galvanometrni ampermetrga aylantirish", image: "/galvan.jpg", slug: "/galvan" },
    { title: "Metr ko'prigi - simning qarshiligi", image: "/metr.jpg", slug: "/metr" },
    { title: "Potensiometr - hujayraning ichki qarshiligi", image: "/potensiometr.jpg", slug: "potensiometr-ichki-qarshilik" },
    { title: "AC sonometri", image: "/ac.png", slug: "/ac" },
    { title: "Diyotning xususiyatlari", image: "/diyod.jpg", slug: "/diyot" },
    { title: "Transistorlar xususiyatlari", image: "/tran.jpg", slug: "/tran" },
    { title: "Konkav oyna - UV usuli", image: "/koknav.jpg", slug: "/koknav" },
    { title: "Potansiyometr - EMFni taqqoslash", image: "/potans.jpg", slug: "emf-taqqoslash" },
    { title: "Diyot xususiyatlari", image: "/dyd.png", slug: "/diyxus" },
    { title: "Tranzistor xususiyatlari", image: "/transistor.jpg", slug: "/trxus" },
    { title: "Qavariq oyna - Fokus uzunligi", image: "/qavariq.jpg", slug: "/trxus" },
    { title: "Konkav linzalari - Fokus uzunligi", image: "/fokus.jpg", slug: "/trxus" },
    { title: "Suyuqlikning sinishi indeksi", image: "/water.jpg", slug: "/trxus" },
    { title: "Galvanometrni voltmetrga aylantirish", image: "/gl.jpg", slug: "/trxus" },
    { title: "Sayohat mikroskopidan foydalangan holda shisha plitaning sinishi indeksi", image: "/shisha.jpg", slug: "/trxus" },
    { title: "Voltaj o'lchash moslamasi cheksiz qarshilikka ega", image: "/volt.jpg", slug: "/trxus" },
    { title: "Induktiv sxemada induktsiyalangan emf", image: "/n.jpg", slug: "/trxus" },
    { title: "Zaryadlar qaytaradi va zaryadlardan farqli ravishda tortadi", image: "/z.png", slug: "/trxus" },
    { title: "Qarama-qarshi/bir xil yo'nalishda tok o'tkazuvchi ikki o'tkazgich o'rtasidagi itarish / tortishish", image: "/qarama.jpg", slug: "/trxus" },
    { title: "Natriy xlorid qo'shilishining distillangan suvning elektr o'tkazuvchanligiga ta'siri", image: "/natriy.jpg", slug: "/trxus" },
    { title: "Bobinda induktsiyalangan emf ishlab chiqarish", image: "/bunda.jpg", slug: "/trxus" },
    { title: "Elektrostatik himoyani ko'rsatish", image: "/elektro.jpg", slug: "/trxus" },
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/zener.JPG", slug: "/zener" },
    { title: "Galvanometrni ampermetrga aylantirish", image: "/galvan.jpg", slug: "/galvan" },
    { title: "Metr ko'prigi - simning qarshiligi", image: "/metr.jpg", slug: "/metr" },
    { title: "Potensiometr - hujayraning ichki qarshiligi", image: "/potensiometr.jpg", slug: "potensiometr-ichki-qarshilik" },
    { title: "AC sonometri", image: "/ac.png", slug: "/ac" },
    { title: "Diyotning xususiyatlari", image: "/diyod.jpg", slug: "/diyot" },
    { title: "Transistorlar xususiyatlari", image: "/tran.jpg", slug: "/tran" },
    { title: "Konkav oyna - UV usuli", image: "/koknav.jpg", slug: "/koknav" },
    { title: "Potansiyometr - EMFni taqqoslash", image: "/potans.jpg", slug: "emf-taqqoslash" },
    { title: "Diyot xususiyatlari", image: "/dyd.png", slug: "/diyxus" },
    { title: "Tranzistor xususiyatlari", image: "/transistor.jpg", slug: "/trxus" },
    { title: "Qavariq oyna - Fokus uzunligi", image: "/qavariq.jpg", slug: "/trxus" },
    { title: "Konkav linzalari - Fokus uzunligi", image: "/fokus.jpg", slug: "/trxus" },
    { title: "Suyuqlikning sinishi indeksi", image: "/water.jpg", slug: "/trxus" },
    { title: "Galvanometrni voltmetrga aylantirish", image: "/gl.jpg", slug: "/trxus" },
    { title: "Sayohat mikroskopidan foydalangan holda shisha plitaning sinishi indeksi", image: "/shisha.jpg", slug: "/trxus" },
    { title: "Voltaj o'lchash moslamasi cheksiz qarshilikka ega", image: "/volt.jpg", slug: "/trxus" },
    { title: "Induktiv sxemada induktsiyalangan emf", image: "/n.jpg", slug: "/trxus" },
    { title: "Zaryadlar qaytaradi va zaryadlardan farqli ravishda tortadi", image: "/z.png", slug: "/trxus" },
    { title: "Qarama-qarshi/bir xil yo'nalishda tok o'tkazuvchi ikki o'tkazgich o'rtasidagi itarish / tortishish", image: "/qarama.jpg", slug: "/trxus" },
    { title: "Natriy xlorid qo'shilishining distillangan suvning elektr o'tkazuvchanligiga ta'siri", image: "/natriy.jpg", slug: "/trxus" },
    { title: "Bobinda induktsiyalangan emf ishlab chiqarish", image: "/bunda.jpg", slug: "/trxus" },
    { title: "Elektrostatik himoyani ko'rsatish", image: "/elektro.jpg", slug: "/trxus" },
];

const Labaratory = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = useMemo(() => {
        return labData.filter((lab) =>
            lab.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div className="pb-14 container bg-gray-200 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 pt-8">Fizika Laboratoriyasi</h1>

            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Qidirish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 w-full max-w-md border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                {filteredData.map((lab, index) => (
                    <Link key={index} href={`/labaratory/${lab.slug}`}>
                        <div className="bg-gradient-to-t from-blue-200 to-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                            <img src={lab.image} alt={lab.title} className="w-full h-32 object-cover rounded-t-lg" />
                            <h2 className="text-sm font-semibold mt-3 text-center truncate">{lab.title}</h2>
                        </div>
                    </Link>
                ))}
                {filteredData.length === 0 && (
                    <p className="text-center pt-[120px] text-2xl col-span-full text-gray-500">Hech narsa topilmadi.</p>
                )}
            </div>
        </div>
    );
};

export default Labaratory;
