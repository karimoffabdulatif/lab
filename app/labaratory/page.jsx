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
    { title: "Konkav oyna - UV usuli", image: "/images/concave_mirror.jpg", slug: "konkav-oyna" },
    { title: "Potansiyometr - EMFni taqqoslash", image: "/images/emf_comparison.jpg", slug: "emf-taqqoslash" },
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/images/zener.jpg", slug: "zener-diyot" },
    { title: "Galvanometrni ampermetrga aylantirish", image: "/images/galvanometer.jpg", slug: "galvanometr-ampermetr" },
    { title: "Metr ko'prigi - simning qarshiligi", image: "/images/bridge.jpg", slug: "metr-koprik" },
    { title: "Potensiometr - hujayraning ichki qarshiligi", image: "/images/potentiometer.jpg", slug: "potensiometr-ichki-qarshilik" },
    { title: "AC sonometri", image: "/images/ac_meter.jpg", slug: "ac-sonometri" },
    { title: "Diyotning xususiyatlari", image: "/images/diode.jpg", slug: "diyot-xususiyatlari" },
    { title: "Transistorlar xususiyatlari", image: "/images/transistor.jpg", slug: "transistor-xususiyatlari" },
    { title: "Konkav oyna - UV usuli", image: "/images/concave_mirror.jpg", slug: "konkav-oyna" },
    { title: "Potansiyometr - EMFni taqqoslash", image: "/images/emf_comparison.jpg", slug: "emf-taqqoslash" },
    { title: "Ohm qonuni va qarshilik", image: "/om.jpg", slug: "/ohm" },
    { title: "Zener diyot", image: "/images/zener.jpg", slug: "zener-diyot" },
    { title: "Galvanometrni ampermetrga aylantirish", image: "/images/galvanometer.jpg", slug: "galvanometr-ampermetr" },
    { title: "Metr ko'prigi - simning qarshiligi", image: "/images/bridge.jpg", slug: "metr-koprik" },
    { title: "Potensiometr - hujayraning ichki qarshiligi", image: "/images/potentiometer.jpg", slug: "potensiometr-ichki-qarshilik" },
    { title: "AC sonometri", image: "/images/ac_meter.jpg", slug: "ac-sonometri" },
    { title: "Diyotning xususiyatlari", image: "/images/diode.jpg", slug: "diyot-xususiyatlari" },
    { title: "Transistorlar xususiyatlari", image: "/images/transistor.jpg", slug: "transistor-xususiyatlari" },
    { title: "Konkav oyna - UV usuli", image: "/images/concave_mirror.jpg", slug: "konkav-oyna" },
    { title: "Potansiyometr - EMFni taqqoslash", image: "/images/emf_comparison.jpg", slug: "emf-taqqoslash" },
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
