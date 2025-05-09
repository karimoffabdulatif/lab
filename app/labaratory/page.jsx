import React from 'react';
import Link from 'next/link';

const labData = [
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/zener.jpg", slug: "/zener" },
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
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/zener.jpg", slug: "/zener" },
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
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/zener.jpg", slug: "/zener" },
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
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/zener.jpg", slug: "/zener" },
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
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/zener.jpg", slug: "/zener" },
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
    { title: "Diyotning xususiyatlari", image: "/diyod.jpg", slug: "/diyot" },
    { title: "Transistorlar xususiyatlari", image: "/tran.jpg", slug: "/tran" },
    { title: "Konkav oyna - UV usuli", image: "/koknav.jpg", slug: "/koknav" },
    { title: "Potansiyometr - EMFni taqqoslash", image: "/potans.jpg", slug: "emf-taqqoslash" },
    { title: "Diyot xususiyatlari", image: "/dyd.png", slug: "/diyxus" },
    { title: "Tranzistor xususiyatlari", image: "/transistor.jpg", slug: "/trxus" },
   
];

const Labaratory = () => {
    return (
        <div className="pb-14 container  bg-gray-200">
            <h1 className="text-3xl font-bold text-center mb-6 pt-8">Fizika Laboratoriyasi</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                {labData.map((lab, index) => (
                    <Link key={index} href={`/labaratory/${lab.slug}`}>
                        <div className="bg-gradient-to-t from-blue-200 to-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                            <img src={lab.image} alt={lab.title} className="w-full h-32 object-cover rounded-t-lg" />
                            <h2 className="text-sm font-semibold mt-3 text-center truncate">{lab.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Labaratory;
