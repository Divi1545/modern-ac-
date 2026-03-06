export interface VehicleVariant {
  name: string;
  image: string;
}

export interface VehicleModel {
  series: string;
  variants: VehicleVariant[];
}

export interface VehicleBrand {
  name: string;
  slug: string;
  logo: string;
  category: "luxury" | "standard" | "commercial" | "heavy";
  models: VehicleModel[];
}

export const vehicleBrandsDetailed: VehicleBrand[] = [
  {
    name: "Audi",
    slug: "audi",
    logo: "/images/vehicles/brands/audi-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "A3",
        variants: [
          { name: "A3 Sportback", image: "/images/vehicles/audi/a3-sportback.jpg" },
          { name: "A3 Sedan", image: "/images/vehicles/audi/a3-sedan.jpg" },
        ],
      },
      {
        series: "A4",
        variants: [
          { name: "A4 Sedan", image: "/images/vehicles/audi/a4-sedan.jpg" },
          { name: "A4 Avant", image: "/images/vehicles/audi/a4-avant.jpg" },
        ],
      },
      {
        series: "A6",
        variants: [
          { name: "A6 Sedan", image: "/images/vehicles/audi/a6-sedan.jpg" },
          { name: "A6 Avant", image: "/images/vehicles/audi/a6-avant.jpg" },
        ],
      },
      {
        series: "A8",
        variants: [
          { name: "A8 L", image: "/images/vehicles/audi/a8-l.jpg" },
        ],
      },
      {
        series: "Q3",
        variants: [
          { name: "Q3", image: "/images/vehicles/audi/q3.jpg" },
          { name: "Q3 Sportback", image: "/images/vehicles/audi/q3-sportback.jpg" },
        ],
      },
      {
        series: "Q5",
        variants: [
          { name: "Q5", image: "/images/vehicles/audi/q5.jpg" },
          { name: "Q5 Sportback", image: "/images/vehicles/audi/q5-sportback.jpg" },
        ],
      },
      {
        series: "Q7",
        variants: [
          { name: "Q7", image: "/images/vehicles/audi/q7.jpg" },
        ],
      },
      {
        series: "Q8",
        variants: [
          { name: "Q8", image: "/images/vehicles/audi/q8.jpg" },
          { name: "Q8 e-tron", image: "/images/vehicles/audi/q8-etron.jpg" },
        ],
      },
      {
        series: "e-tron",
        variants: [
          { name: "e-tron GT", image: "/images/vehicles/audi/etron-gt.jpg" },
        ],
      },
    ],
  },
  {
    name: "BMW",
    slug: "bmw",
    logo: "/images/vehicles/brands/bmw-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "1 Series",
        variants: [
          { name: "118i", image: "/images/vehicles/bmw/118i.jpg" },
          { name: "120i", image: "/images/vehicles/bmw/120i.jpg" },
          { name: "M135i", image: "/images/vehicles/bmw/m135i.jpg" },
        ],
      },
      {
        series: "2 Series",
        variants: [
          { name: "220i Coupe", image: "/images/vehicles/bmw/220i-coupe.jpg" },
          { name: "220i Gran Coupe", image: "/images/vehicles/bmw/220i-gran-coupe.jpg" },
          { name: "M240i", image: "/images/vehicles/bmw/m240i.jpg" },
        ],
      },
      {
        series: "3 Series",
        variants: [
          { name: "318i", image: "/images/vehicles/bmw/318i.jpg" },
          { name: "320i", image: "/images/vehicles/bmw/320i.jpg" },
          { name: "320d", image: "/images/vehicles/bmw/320d.jpg" },
          { name: "330i", image: "/images/vehicles/bmw/330i.jpg" },
          { name: "M340i", image: "/images/vehicles/bmw/m340i.jpg" },
        ],
      },
      {
        series: "4 Series",
        variants: [
          { name: "420i", image: "/images/vehicles/bmw/420i.jpg" },
          { name: "430i", image: "/images/vehicles/bmw/430i.jpg" },
          { name: "440i", image: "/images/vehicles/bmw/440i.jpg" },
          { name: "M4", image: "/images/vehicles/bmw/m4.jpg" },
        ],
      },
      {
        series: "5 Series",
        variants: [
          { name: "520i", image: "/images/vehicles/bmw/520i.jpg" },
          { name: "520d", image: "/images/vehicles/bmw/520d.jpg" },
          { name: "530i", image: "/images/vehicles/bmw/530i.jpg" },
          { name: "540i", image: "/images/vehicles/bmw/540i.jpg" },
          { name: "M550i", image: "/images/vehicles/bmw/m550i.jpg" },
        ],
      },
      {
        series: "7 Series",
        variants: [
          { name: "735i", image: "/images/vehicles/bmw/735i.jpg" },
          { name: "740i", image: "/images/vehicles/bmw/740i.jpg" },
          { name: "750i", image: "/images/vehicles/bmw/750i.jpg" },
        ],
      },
      {
        series: "X1",
        variants: [
          { name: "X1 sDrive18i", image: "/images/vehicles/bmw/x1-sdrive18i.jpg" },
          { name: "X1 xDrive25i", image: "/images/vehicles/bmw/x1-xdrive25i.jpg" },
        ],
      },
      {
        series: "X3",
        variants: [
          { name: "X3 xDrive20i", image: "/images/vehicles/bmw/x3-xdrive20i.jpg" },
          { name: "X3 xDrive30i", image: "/images/vehicles/bmw/x3-xdrive30i.jpg" },
          { name: "X3 M40i", image: "/images/vehicles/bmw/x3-m40i.jpg" },
        ],
      },
      {
        series: "X5",
        variants: [
          { name: "X5 xDrive40i", image: "/images/vehicles/bmw/x5-xdrive40i.jpg" },
          { name: "X5 xDrive45e", image: "/images/vehicles/bmw/x5-xdrive45e.jpg" },
          { name: "X5 M50i", image: "/images/vehicles/bmw/x5-m50i.jpg" },
        ],
      },
      {
        series: "X7",
        variants: [
          { name: "X7 xDrive40i", image: "/images/vehicles/bmw/x7-xdrive40i.jpg" },
        ],
      },
    ],
  },
  {
    name: "Mercedes",
    slug: "mercedes",
    logo: "/images/vehicles/brands/mercedes-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "A-Class",
        variants: [
          { name: "A 180", image: "/images/vehicles/mercedes/a180.jpg" },
          { name: "A 200", image: "/images/vehicles/mercedes/a200.jpg" },
          { name: "A 250", image: "/images/vehicles/mercedes/a250.jpg" },
          { name: "AMG A 35", image: "/images/vehicles/mercedes/amg-a35.jpg" },
        ],
      },
      {
        series: "C-Class",
        variants: [
          { name: "C 180", image: "/images/vehicles/mercedes/c180.jpg" },
          { name: "C 200", image: "/images/vehicles/mercedes/c200.jpg" },
          { name: "C 300", image: "/images/vehicles/mercedes/c300.jpg" },
          { name: "AMG C 43", image: "/images/vehicles/mercedes/amg-c43.jpg" },
          { name: "AMG C 63", image: "/images/vehicles/mercedes/amg-c63.jpg" },
        ],
      },
      {
        series: "E-Class",
        variants: [
          { name: "E 200", image: "/images/vehicles/mercedes/e200.jpg" },
          { name: "E 300", image: "/images/vehicles/mercedes/e300.jpg" },
          { name: "E 350", image: "/images/vehicles/mercedes/e350.jpg" },
          { name: "AMG E 53", image: "/images/vehicles/mercedes/amg-e53.jpg" },
        ],
      },
      {
        series: "S-Class",
        variants: [
          { name: "S 350d", image: "/images/vehicles/mercedes/s350d.jpg" },
          { name: "S 450", image: "/images/vehicles/mercedes/s450.jpg" },
          { name: "S 500", image: "/images/vehicles/mercedes/s500.jpg" },
          { name: "S 580", image: "/images/vehicles/mercedes/s580.jpg" },
        ],
      },
      {
        series: "GLA",
        variants: [
          { name: "GLA 200", image: "/images/vehicles/mercedes/gla200.jpg" },
          { name: "GLA 250", image: "/images/vehicles/mercedes/gla250.jpg" },
        ],
      },
      {
        series: "GLC",
        variants: [
          { name: "GLC 200", image: "/images/vehicles/mercedes/glc200.jpg" },
          { name: "GLC 300", image: "/images/vehicles/mercedes/glc300.jpg" },
          { name: "AMG GLC 43", image: "/images/vehicles/mercedes/amg-glc43.jpg" },
        ],
      },
      {
        series: "GLE",
        variants: [
          { name: "GLE 300d", image: "/images/vehicles/mercedes/gle300d.jpg" },
          { name: "GLE 450", image: "/images/vehicles/mercedes/gle450.jpg" },
          { name: "AMG GLE 53", image: "/images/vehicles/mercedes/amg-gle53.jpg" },
        ],
      },
      {
        series: "GLS",
        variants: [
          { name: "GLS 450", image: "/images/vehicles/mercedes/gls450.jpg" },
          { name: "GLS 580", image: "/images/vehicles/mercedes/gls580.jpg" },
        ],
      },
    ],
  },
  {
    name: "Honda",
    slug: "honda",
    logo: "/images/vehicles/brands/honda-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Civic",
        variants: [
          { name: "Civic Sedan", image: "/images/vehicles/honda/civic-sedan.jpg" },
          { name: "Civic Hatchback", image: "/images/vehicles/honda/civic-hatchback.jpg" },
          { name: "Civic Type R", image: "/images/vehicles/honda/civic-type-r.jpg" },
        ],
      },
      {
        series: "Accord",
        variants: [
          { name: "Accord", image: "/images/vehicles/honda/accord.jpg" },
          { name: "Accord Hybrid", image: "/images/vehicles/honda/accord-hybrid.jpg" },
        ],
      },
      {
        series: "CR-V",
        variants: [
          { name: "CR-V", image: "/images/vehicles/honda/crv.jpg" },
          { name: "CR-V Hybrid", image: "/images/vehicles/honda/crv-hybrid.jpg" },
        ],
      },
      {
        series: "HR-V",
        variants: [
          { name: "HR-V", image: "/images/vehicles/honda/hrv.jpg" },
        ],
      },
      {
        series: "City",
        variants: [
          { name: "City Sedan", image: "/images/vehicles/honda/city-sedan.jpg" },
          { name: "City Hatchback", image: "/images/vehicles/honda/city-hatchback.jpg" },
        ],
      },
      {
        series: "Fit / Jazz",
        variants: [
          { name: "Fit", image: "/images/vehicles/honda/fit.jpg" },
        ],
      },
      {
        series: "Vezel",
        variants: [
          { name: "Vezel", image: "/images/vehicles/honda/vezel.jpg" },
          { name: "Vezel e:HEV", image: "/images/vehicles/honda/vezel-ehev.jpg" },
        ],
      },
      {
        series: "WR-V",
        variants: [
          { name: "WR-V", image: "/images/vehicles/honda/wrv.jpg" },
        ],
      },
    ],
  },
  {
    name: "Nissan",
    slug: "nissan",
    logo: "/images/vehicles/brands/nissan-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Note",
        variants: [
          { name: "Note", image: "/images/vehicles/nissan/note.jpg" },
          { name: "Note e-Power", image: "/images/vehicles/nissan/note-epower.jpg" },
        ],
      },
      {
        series: "X-Trail",
        variants: [
          { name: "X-Trail", image: "/images/vehicles/nissan/x-trail.jpg" },
          { name: "X-Trail e-Power", image: "/images/vehicles/nissan/x-trail-epower.jpg" },
        ],
      },
      {
        series: "Qashqai",
        variants: [
          { name: "Qashqai", image: "/images/vehicles/nissan/qashqai.jpg" },
        ],
      },
      {
        series: "Patrol",
        variants: [
          { name: "Patrol", image: "/images/vehicles/nissan/patrol.jpg" },
        ],
      },
      {
        series: "Navara",
        variants: [
          { name: "Navara", image: "/images/vehicles/nissan/navara.jpg" },
        ],
      },
      {
        series: "Leaf",
        variants: [
          { name: "Leaf", image: "/images/vehicles/nissan/leaf.jpg" },
        ],
      },
      {
        series: "Kicks",
        variants: [
          { name: "Kicks", image: "/images/vehicles/nissan/kicks.jpg" },
          { name: "Kicks e-Power", image: "/images/vehicles/nissan/kicks-epower.jpg" },
        ],
      },
    ],
  },
  {
    name: "Range Rover",
    slug: "range-rover",
    logo: "/images/vehicles/brands/range-rover-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "Range Rover",
        variants: [
          { name: "Range Rover SE", image: "/images/vehicles/range-rover/rr-se.jpg" },
          { name: "Range Rover HSE", image: "/images/vehicles/range-rover/rr-hse.jpg" },
          { name: "Range Rover Autobiography", image: "/images/vehicles/range-rover/rr-autobiography.jpg" },
        ],
      },
      {
        series: "Range Rover Sport",
        variants: [
          { name: "Sport Dynamic SE", image: "/images/vehicles/range-rover/sport-se.jpg" },
          { name: "Sport Dynamic HSE", image: "/images/vehicles/range-rover/sport-hse.jpg" },
        ],
      },
      {
        series: "Range Rover Velar",
        variants: [
          { name: "Velar S", image: "/images/vehicles/range-rover/velar-s.jpg" },
          { name: "Velar R-Dynamic", image: "/images/vehicles/range-rover/velar-rdynamic.jpg" },
        ],
      },
      {
        series: "Range Rover Evoque",
        variants: [
          { name: "Evoque S", image: "/images/vehicles/range-rover/evoque-s.jpg" },
          { name: "Evoque R-Dynamic", image: "/images/vehicles/range-rover/evoque-rdynamic.jpg" },
        ],
      },
    ],
  },
  {
    name: "Toyota",
    slug: "toyota",
    logo: "/images/vehicles/brands/toyota-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Corolla",
        variants: [
          { name: "Corolla Sedan", image: "/images/vehicles/toyota/corolla-sedan.jpg" },
          { name: "Corolla Cross", image: "/images/vehicles/toyota/corolla-cross.jpg" },
          { name: "Corolla Hatchback", image: "/images/vehicles/toyota/corolla-hatchback.jpg" },
        ],
      },
      {
        series: "Camry",
        variants: [
          { name: "Camry", image: "/images/vehicles/toyota/camry.jpg" },
          { name: "Camry Hybrid", image: "/images/vehicles/toyota/camry-hybrid.jpg" },
        ],
      },
      {
        series: "RAV4",
        variants: [
          { name: "RAV4", image: "/images/vehicles/toyota/rav4.jpg" },
          { name: "RAV4 Hybrid", image: "/images/vehicles/toyota/rav4-hybrid.jpg" },
        ],
      },
      {
        series: "Land Cruiser",
        variants: [
          { name: "Land Cruiser 300", image: "/images/vehicles/toyota/land-cruiser-300.jpg" },
          { name: "Land Cruiser Prado", image: "/images/vehicles/toyota/land-cruiser-prado.jpg" },
        ],
      },
      {
        series: "Hilux",
        variants: [
          { name: "Hilux Single Cab", image: "/images/vehicles/toyota/hilux-single.jpg" },
          { name: "Hilux Double Cab", image: "/images/vehicles/toyota/hilux-double.jpg" },
        ],
      },
      {
        series: "Yaris",
        variants: [
          { name: "Yaris", image: "/images/vehicles/toyota/yaris.jpg" },
          { name: "Yaris Cross", image: "/images/vehicles/toyota/yaris-cross.jpg" },
        ],
      },
      {
        series: "Fortuner",
        variants: [
          { name: "Fortuner", image: "/images/vehicles/toyota/fortuner.jpg" },
        ],
      },
      {
        series: "Prius",
        variants: [
          { name: "Prius", image: "/images/vehicles/toyota/prius.jpg" },
          { name: "Prius Prime", image: "/images/vehicles/toyota/prius-prime.jpg" },
        ],
      },
      {
        series: "Aqua",
        variants: [
          { name: "Aqua", image: "/images/vehicles/toyota/aqua.jpg" },
        ],
      },
      {
        series: "CH-R",
        variants: [
          { name: "C-HR", image: "/images/vehicles/toyota/chr.jpg" },
          { name: "C-HR Hybrid", image: "/images/vehicles/toyota/chr-hybrid.jpg" },
        ],
      },
    ],
  },
  {
    name: "Peugeot",
    slug: "peugeot",
    logo: "/images/vehicles/brands/peugeot-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "208",
        variants: [
          { name: "208", image: "/images/vehicles/peugeot/208.jpg" },
          { name: "e-208", image: "/images/vehicles/peugeot/e-208.jpg" },
        ],
      },
      {
        series: "308",
        variants: [
          { name: "308", image: "/images/vehicles/peugeot/308.jpg" },
          { name: "308 SW", image: "/images/vehicles/peugeot/308-sw.jpg" },
        ],
      },
      {
        series: "408",
        variants: [
          { name: "408", image: "/images/vehicles/peugeot/408.jpg" },
        ],
      },
      {
        series: "508",
        variants: [
          { name: "508", image: "/images/vehicles/peugeot/508.jpg" },
          { name: "508 SW", image: "/images/vehicles/peugeot/508-sw.jpg" },
        ],
      },
      {
        series: "2008",
        variants: [
          { name: "2008", image: "/images/vehicles/peugeot/2008.jpg" },
          { name: "e-2008", image: "/images/vehicles/peugeot/e-2008.jpg" },
        ],
      },
      {
        series: "3008",
        variants: [
          { name: "3008", image: "/images/vehicles/peugeot/3008.jpg" },
        ],
      },
      {
        series: "5008",
        variants: [
          { name: "5008", image: "/images/vehicles/peugeot/5008.jpg" },
        ],
      },
    ],
  },
  {
    name: "Mitsubishi",
    slug: "mitsubishi",
    logo: "/images/vehicles/brands/mitsubishi-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Outlander",
        variants: [
          { name: "Outlander", image: "/images/vehicles/mitsubishi/outlander.jpg" },
          { name: "Outlander PHEV", image: "/images/vehicles/mitsubishi/outlander-phev.jpg" },
        ],
      },
      {
        series: "Pajero",
        variants: [
          { name: "Pajero Sport", image: "/images/vehicles/mitsubishi/pajero-sport.jpg" },
        ],
      },
      {
        series: "L200 / Triton",
        variants: [
          { name: "L200 Triton", image: "/images/vehicles/mitsubishi/l200.jpg" },
        ],
      },
      {
        series: "ASX",
        variants: [
          { name: "ASX", image: "/images/vehicles/mitsubishi/asx.jpg" },
        ],
      },
      {
        series: "Xpander",
        variants: [
          { name: "Xpander", image: "/images/vehicles/mitsubishi/xpander.jpg" },
          { name: "Xpander Cross", image: "/images/vehicles/mitsubishi/xpander-cross.jpg" },
        ],
      },
      {
        series: "Lancer",
        variants: [
          { name: "Lancer", image: "/images/vehicles/mitsubishi/lancer.jpg" },
        ],
      },
    ],
  },
  {
    name: "MG",
    slug: "mg",
    logo: "/images/vehicles/brands/mg-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "MG ZS",
        variants: [
          { name: "ZS", image: "/images/vehicles/mg/zs.jpg" },
          { name: "ZS EV", image: "/images/vehicles/mg/zs-ev.jpg" },
        ],
      },
      {
        series: "MG HS",
        variants: [
          { name: "HS", image: "/images/vehicles/mg/hs.jpg" },
          { name: "HS PHEV", image: "/images/vehicles/mg/hs-phev.jpg" },
        ],
      },
      {
        series: "MG 5",
        variants: [
          { name: "MG 5", image: "/images/vehicles/mg/mg5.jpg" },
          { name: "MG 5 EV", image: "/images/vehicles/mg/mg5-ev.jpg" },
        ],
      },
      {
        series: "MG 4",
        variants: [
          { name: "MG 4 EV", image: "/images/vehicles/mg/mg4-ev.jpg" },
        ],
      },
    ],
  },
  {
    name: "Mini",
    slug: "mini",
    logo: "/images/vehicles/brands/mini-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "Cooper",
        variants: [
          { name: "Cooper", image: "/images/vehicles/mini/cooper.jpg" },
          { name: "Cooper S", image: "/images/vehicles/mini/cooper-s.jpg" },
          { name: "Cooper SE", image: "/images/vehicles/mini/cooper-se.jpg" },
        ],
      },
      {
        series: "Countryman",
        variants: [
          { name: "Countryman", image: "/images/vehicles/mini/countryman.jpg" },
          { name: "Countryman S", image: "/images/vehicles/mini/countryman-s.jpg" },
        ],
      },
      {
        series: "Clubman",
        variants: [
          { name: "Clubman", image: "/images/vehicles/mini/clubman.jpg" },
          { name: "Clubman S", image: "/images/vehicles/mini/clubman-s.jpg" },
        ],
      },
    ],
  },
  {
    name: "Jeep",
    slug: "jeep",
    logo: "/images/vehicles/brands/jeep-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Wrangler",
        variants: [
          { name: "Wrangler Sport", image: "/images/vehicles/jeep/wrangler-sport.jpg" },
          { name: "Wrangler Sahara", image: "/images/vehicles/jeep/wrangler-sahara.jpg" },
          { name: "Wrangler Rubicon", image: "/images/vehicles/jeep/wrangler-rubicon.jpg" },
        ],
      },
      {
        series: "Grand Cherokee",
        variants: [
          { name: "Grand Cherokee", image: "/images/vehicles/jeep/grand-cherokee.jpg" },
          { name: "Grand Cherokee L", image: "/images/vehicles/jeep/grand-cherokee-l.jpg" },
        ],
      },
      {
        series: "Cherokee",
        variants: [
          { name: "Cherokee", image: "/images/vehicles/jeep/cherokee.jpg" },
        ],
      },
      {
        series: "Compass",
        variants: [
          { name: "Compass", image: "/images/vehicles/jeep/compass.jpg" },
        ],
      },
      {
        series: "Renegade",
        variants: [
          { name: "Renegade", image: "/images/vehicles/jeep/renegade.jpg" },
        ],
      },
    ],
  },
  {
    name: "Jaguar",
    slug: "jaguar",
    logo: "/images/vehicles/brands/jaguar-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "F-Pace",
        variants: [
          { name: "F-Pace P250", image: "/images/vehicles/jaguar/f-pace-p250.jpg" },
          { name: "F-Pace P400", image: "/images/vehicles/jaguar/f-pace-p400.jpg" },
          { name: "F-Pace SVR", image: "/images/vehicles/jaguar/f-pace-svr.jpg" },
        ],
      },
      {
        series: "E-Pace",
        variants: [
          { name: "E-Pace P200", image: "/images/vehicles/jaguar/e-pace-p200.jpg" },
          { name: "E-Pace P250", image: "/images/vehicles/jaguar/e-pace-p250.jpg" },
        ],
      },
      {
        series: "I-Pace",
        variants: [
          { name: "I-Pace EV400", image: "/images/vehicles/jaguar/i-pace-ev400.jpg" },
        ],
      },
      {
        series: "XE",
        variants: [
          { name: "XE P250", image: "/images/vehicles/jaguar/xe-p250.jpg" },
        ],
      },
      {
        series: "XF",
        variants: [
          { name: "XF P250", image: "/images/vehicles/jaguar/xf-p250.jpg" },
          { name: "XF P300", image: "/images/vehicles/jaguar/xf-p300.jpg" },
        ],
      },
    ],
  },
  {
    name: "Volvo",
    slug: "volvo",
    logo: "/images/vehicles/brands/volvo-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "XC40",
        variants: [
          { name: "XC40", image: "/images/vehicles/volvo/xc40.jpg" },
          { name: "XC40 Recharge", image: "/images/vehicles/volvo/xc40-recharge.jpg" },
        ],
      },
      {
        series: "XC60",
        variants: [
          { name: "XC60 B5", image: "/images/vehicles/volvo/xc60-b5.jpg" },
          { name: "XC60 T8", image: "/images/vehicles/volvo/xc60-t8.jpg" },
        ],
      },
      {
        series: "XC90",
        variants: [
          { name: "XC90 B5", image: "/images/vehicles/volvo/xc90-b5.jpg" },
          { name: "XC90 T8", image: "/images/vehicles/volvo/xc90-t8.jpg" },
        ],
      },
      {
        series: "S60",
        variants: [
          { name: "S60 B5", image: "/images/vehicles/volvo/s60-b5.jpg" },
          { name: "S60 T8", image: "/images/vehicles/volvo/s60-t8.jpg" },
        ],
      },
      {
        series: "S90",
        variants: [
          { name: "S90 B5", image: "/images/vehicles/volvo/s90-b5.jpg" },
          { name: "S90 T8", image: "/images/vehicles/volvo/s90-t8.jpg" },
        ],
      },
      {
        series: "V60",
        variants: [
          { name: "V60 B5", image: "/images/vehicles/volvo/v60-b5.jpg" },
          { name: "V60 Cross Country", image: "/images/vehicles/volvo/v60-cross-country.jpg" },
        ],
      },
    ],
  },
  {
    name: "Maybach",
    slug: "maybach",
    logo: "/images/vehicles/brands/maybach-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "S-Class",
        variants: [
          { name: "Maybach S 580", image: "/images/vehicles/maybach/s580.jpg" },
          { name: "Maybach S 680", image: "/images/vehicles/maybach/s680.jpg" },
        ],
      },
      {
        series: "GLS",
        variants: [
          { name: "Maybach GLS 600", image: "/images/vehicles/maybach/gls600.jpg" },
        ],
      },
    ],
  },
  {
    name: "Kia",
    slug: "kia",
    logo: "/images/vehicles/brands/kia-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Seltos",
        variants: [
          { name: "Seltos", image: "/images/vehicles/kia/seltos.jpg" },
        ],
      },
      {
        series: "Sportage",
        variants: [
          { name: "Sportage", image: "/images/vehicles/kia/sportage.jpg" },
          { name: "Sportage Hybrid", image: "/images/vehicles/kia/sportage-hybrid.jpg" },
        ],
      },
      {
        series: "Sorento",
        variants: [
          { name: "Sorento", image: "/images/vehicles/kia/sorento.jpg" },
          { name: "Sorento Hybrid", image: "/images/vehicles/kia/sorento-hybrid.jpg" },
        ],
      },
      {
        series: "Carnival",
        variants: [
          { name: "Carnival", image: "/images/vehicles/kia/carnival.jpg" },
        ],
      },
      {
        series: "EV6",
        variants: [
          { name: "EV6 Standard", image: "/images/vehicles/kia/ev6.jpg" },
          { name: "EV6 GT", image: "/images/vehicles/kia/ev6-gt.jpg" },
        ],
      },
      {
        series: "Picanto",
        variants: [
          { name: "Picanto", image: "/images/vehicles/kia/picanto.jpg" },
        ],
      },
      {
        series: "Stonic",
        variants: [
          { name: "Stonic", image: "/images/vehicles/kia/stonic.jpg" },
        ],
      },
    ],
  },
  {
    name: "Lexus",
    slug: "lexus",
    logo: "/images/vehicles/brands/lexus-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "ES",
        variants: [
          { name: "ES 250", image: "/images/vehicles/lexus/es250.jpg" },
          { name: "ES 300h", image: "/images/vehicles/lexus/es300h.jpg" },
        ],
      },
      {
        series: "IS",
        variants: [
          { name: "IS 300", image: "/images/vehicles/lexus/is300.jpg" },
          { name: "IS 350", image: "/images/vehicles/lexus/is350.jpg" },
          { name: "IS 500", image: "/images/vehicles/lexus/is500.jpg" },
        ],
      },
      {
        series: "NX",
        variants: [
          { name: "NX 250", image: "/images/vehicles/lexus/nx250.jpg" },
          { name: "NX 350h", image: "/images/vehicles/lexus/nx350h.jpg" },
        ],
      },
      {
        series: "RX",
        variants: [
          { name: "RX 350", image: "/images/vehicles/lexus/rx350.jpg" },
          { name: "RX 350h", image: "/images/vehicles/lexus/rx350h.jpg" },
          { name: "RX 500h", image: "/images/vehicles/lexus/rx500h.jpg" },
        ],
      },
      {
        series: "LX",
        variants: [
          { name: "LX 600", image: "/images/vehicles/lexus/lx600.jpg" },
        ],
      },
    ],
  },
  {
    name: "Ford",
    slug: "ford",
    logo: "/images/vehicles/brands/ford-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Ranger",
        variants: [
          { name: "Ranger XL", image: "/images/vehicles/ford/ranger-xl.jpg" },
          { name: "Ranger Wildtrak", image: "/images/vehicles/ford/ranger-wildtrak.jpg" },
          { name: "Ranger Raptor", image: "/images/vehicles/ford/ranger-raptor.jpg" },
        ],
      },
      {
        series: "Everest",
        variants: [
          { name: "Everest Ambiente", image: "/images/vehicles/ford/everest-ambiente.jpg" },
          { name: "Everest Titanium", image: "/images/vehicles/ford/everest-titanium.jpg" },
        ],
      },
      {
        series: "Territory",
        variants: [
          { name: "Territory", image: "/images/vehicles/ford/territory.jpg" },
        ],
      },
      {
        series: "Mustang",
        variants: [
          { name: "Mustang EcoBoost", image: "/images/vehicles/ford/mustang-ecoboost.jpg" },
          { name: "Mustang GT", image: "/images/vehicles/ford/mustang-gt.jpg" },
        ],
      },
      {
        series: "Focus",
        variants: [
          { name: "Focus", image: "/images/vehicles/ford/focus.jpg" },
          { name: "Focus ST", image: "/images/vehicles/ford/focus-st.jpg" },
        ],
      },
    ],
  },
  {
    name: "Volkswagen",
    slug: "volkswagen",
    logo: "/images/vehicles/brands/volkswagen-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Golf",
        variants: [
          { name: "Golf", image: "/images/vehicles/volkswagen/golf.jpg" },
          { name: "Golf GTI", image: "/images/vehicles/volkswagen/golf-gti.jpg" },
          { name: "Golf R", image: "/images/vehicles/volkswagen/golf-r.jpg" },
        ],
      },
      {
        series: "Passat",
        variants: [
          { name: "Passat", image: "/images/vehicles/volkswagen/passat.jpg" },
          { name: "Passat Variant", image: "/images/vehicles/volkswagen/passat-variant.jpg" },
        ],
      },
      {
        series: "Tiguan",
        variants: [
          { name: "Tiguan", image: "/images/vehicles/volkswagen/tiguan.jpg" },
          { name: "Tiguan Allspace", image: "/images/vehicles/volkswagen/tiguan-allspace.jpg" },
        ],
      },
      {
        series: "Polo",
        variants: [
          { name: "Polo", image: "/images/vehicles/volkswagen/polo.jpg" },
          { name: "Polo GTI", image: "/images/vehicles/volkswagen/polo-gti.jpg" },
        ],
      },
      {
        series: "T-Roc",
        variants: [
          { name: "T-Roc", image: "/images/vehicles/volkswagen/t-roc.jpg" },
        ],
      },
      {
        series: "Amarok",
        variants: [
          { name: "Amarok", image: "/images/vehicles/volkswagen/amarok.jpg" },
        ],
      },
      {
        series: "ID.4",
        variants: [
          { name: "ID.4", image: "/images/vehicles/volkswagen/id4.jpg" },
        ],
      },
    ],
  },
  {
    name: "Suzuki",
    slug: "suzuki",
    logo: "/images/vehicles/brands/suzuki-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Swift",
        variants: [
          { name: "Swift GL", image: "/images/vehicles/suzuki/swift-gl.jpg" },
          { name: "Swift Sport", image: "/images/vehicles/suzuki/swift-sport.jpg" },
        ],
      },
      {
        series: "Vitara",
        variants: [
          { name: "Vitara", image: "/images/vehicles/suzuki/vitara.jpg" },
        ],
      },
      {
        series: "Jimny",
        variants: [
          { name: "Jimny", image: "/images/vehicles/suzuki/jimny.jpg" },
          { name: "Jimny Sierra", image: "/images/vehicles/suzuki/jimny-sierra.jpg" },
        ],
      },
      {
        series: "S-Cross",
        variants: [
          { name: "S-Cross", image: "/images/vehicles/suzuki/s-cross.jpg" },
        ],
      },
      {
        series: "Baleno",
        variants: [
          { name: "Baleno", image: "/images/vehicles/suzuki/baleno.jpg" },
        ],
      },
      {
        series: "Wagon R",
        variants: [
          { name: "Wagon R", image: "/images/vehicles/suzuki/wagon-r.jpg" },
          { name: "Wagon R Stingray", image: "/images/vehicles/suzuki/wagon-r-stingray.jpg" },
        ],
      },
      {
        series: "Alto",
        variants: [
          { name: "Alto", image: "/images/vehicles/suzuki/alto.jpg" },
        ],
      },
      {
        series: "Every",
        variants: [
          { name: "Every", image: "/images/vehicles/suzuki/every.jpg" },
        ],
      },
    ],
  },
  {
    name: "Caterpillar",
    slug: "caterpillar",
    logo: "/images/vehicles/brands/caterpillar-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "Excavators",
        variants: [
          { name: "320 GC", image: "/images/vehicles/caterpillar/320gc.jpg" },
          { name: "330 GC", image: "/images/vehicles/caterpillar/330gc.jpg" },
          { name: "336 GC", image: "/images/vehicles/caterpillar/336gc.jpg" },
        ],
      },
      {
        series: "Wheel Loaders",
        variants: [
          { name: "950 GC", image: "/images/vehicles/caterpillar/950gc.jpg" },
          { name: "966 GC", image: "/images/vehicles/caterpillar/966gc.jpg" },
        ],
      },
      {
        series: "Bulldozers",
        variants: [
          { name: "D6", image: "/images/vehicles/caterpillar/d6.jpg" },
          { name: "D8", image: "/images/vehicles/caterpillar/d8.jpg" },
        ],
      },
    ],
  },
  {
    name: "Citroen",
    slug: "citroen",
    logo: "/images/vehicles/brands/citroen-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "C3",
        variants: [
          { name: "C3", image: "/images/vehicles/citroen/c3.jpg" },
          { name: "C3 Aircross", image: "/images/vehicles/citroen/c3-aircross.jpg" },
        ],
      },
      {
        series: "C4",
        variants: [
          { name: "C4", image: "/images/vehicles/citroen/c4.jpg" },
          { name: "C4 X", image: "/images/vehicles/citroen/c4-x.jpg" },
        ],
      },
      {
        series: "C5",
        variants: [
          { name: "C5 Aircross", image: "/images/vehicles/citroen/c5-aircross.jpg" },
          { name: "C5 X", image: "/images/vehicles/citroen/c5-x.jpg" },
        ],
      },
      {
        series: "Berlingo",
        variants: [
          { name: "Berlingo", image: "/images/vehicles/citroen/berlingo.jpg" },
        ],
      },
    ],
  },
  {
    name: "DAF",
    slug: "daf",
    logo: "/images/vehicles/brands/daf-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "XF",
        variants: [
          { name: "XF 480", image: "/images/vehicles/daf/xf480.jpg" },
          { name: "XF 530", image: "/images/vehicles/daf/xf530.jpg" },
        ],
      },
      {
        series: "XG",
        variants: [
          { name: "XG", image: "/images/vehicles/daf/xg.jpg" },
          { name: "XG+", image: "/images/vehicles/daf/xg-plus.jpg" },
        ],
      },
      {
        series: "CF",
        variants: [
          { name: "CF 370", image: "/images/vehicles/daf/cf370.jpg" },
          { name: "CF 450", image: "/images/vehicles/daf/cf450.jpg" },
        ],
      },
      {
        series: "LF",
        variants: [
          { name: "LF 210", image: "/images/vehicles/daf/lf210.jpg" },
          { name: "LF 260", image: "/images/vehicles/daf/lf260.jpg" },
        ],
      },
    ],
  },
  {
    name: "Daihatsu",
    slug: "daihatsu",
    logo: "/images/vehicles/brands/daihatsu-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Hijet",
        variants: [
          { name: "Hijet Cargo", image: "/images/vehicles/daihatsu/hijet-cargo.jpg" },
          { name: "Hijet Truck", image: "/images/vehicles/daihatsu/hijet-truck.jpg" },
        ],
      },
      {
        series: "Taft",
        variants: [
          { name: "Taft", image: "/images/vehicles/daihatsu/taft.jpg" },
        ],
      },
      {
        series: "Rocky",
        variants: [
          { name: "Rocky", image: "/images/vehicles/daihatsu/rocky.jpg" },
        ],
      },
      {
        series: "Terios",
        variants: [
          { name: "Terios", image: "/images/vehicles/daihatsu/terios.jpg" },
        ],
      },
      {
        series: "Mira",
        variants: [
          { name: "Mira", image: "/images/vehicles/daihatsu/mira.jpg" },
        ],
      },
    ],
  },
  {
    name: "Hino",
    slug: "hino",
    logo: "/images/vehicles/brands/hino-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "300 Series",
        variants: [
          { name: "Dutro 300", image: "/images/vehicles/hino/dutro-300.jpg" },
        ],
      },
      {
        series: "500 Series",
        variants: [
          { name: "Ranger 500", image: "/images/vehicles/hino/ranger-500.jpg" },
        ],
      },
      {
        series: "700 Series",
        variants: [
          { name: "Profia 700", image: "/images/vehicles/hino/profia-700.jpg" },
        ],
      },
    ],
  },
  {
    name: "Hitachi",
    slug: "hitachi",
    logo: "/images/vehicles/brands/hitachi-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "Excavators",
        variants: [
          { name: "ZX200", image: "/images/vehicles/hitachi/zx200.jpg" },
          { name: "ZX350", image: "/images/vehicles/hitachi/zx350.jpg" },
          { name: "ZX490", image: "/images/vehicles/hitachi/zx490.jpg" },
        ],
      },
      {
        series: "Wheel Loaders",
        variants: [
          { name: "ZW180", image: "/images/vehicles/hitachi/zw180.jpg" },
          { name: "ZW310", image: "/images/vehicles/hitachi/zw310.jpg" },
        ],
      },
    ],
  },
  {
    name: "Hyundai",
    slug: "hyundai",
    logo: "/images/vehicles/brands/hyundai-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Tucson",
        variants: [
          { name: "Tucson", image: "/images/vehicles/hyundai/tucson.jpg" },
          { name: "Tucson Hybrid", image: "/images/vehicles/hyundai/tucson-hybrid.jpg" },
        ],
      },
      {
        series: "Santa Fe",
        variants: [
          { name: "Santa Fe", image: "/images/vehicles/hyundai/santa-fe.jpg" },
          { name: "Santa Fe Hybrid", image: "/images/vehicles/hyundai/santa-fe-hybrid.jpg" },
        ],
      },
      {
        series: "Creta",
        variants: [
          { name: "Creta", image: "/images/vehicles/hyundai/creta.jpg" },
        ],
      },
      {
        series: "i20",
        variants: [
          { name: "i20", image: "/images/vehicles/hyundai/i20.jpg" },
          { name: "i20 N", image: "/images/vehicles/hyundai/i20-n.jpg" },
        ],
      },
      {
        series: "Elantra",
        variants: [
          { name: "Elantra", image: "/images/vehicles/hyundai/elantra.jpg" },
          { name: "Elantra N", image: "/images/vehicles/hyundai/elantra-n.jpg" },
        ],
      },
      {
        series: "Kona",
        variants: [
          { name: "Kona", image: "/images/vehicles/hyundai/kona.jpg" },
          { name: "Kona Electric", image: "/images/vehicles/hyundai/kona-electric.jpg" },
        ],
      },
      {
        series: "Ioniq",
        variants: [
          { name: "Ioniq 5", image: "/images/vehicles/hyundai/ioniq-5.jpg" },
          { name: "Ioniq 6", image: "/images/vehicles/hyundai/ioniq-6.jpg" },
        ],
      },
      {
        series: "Palisade",
        variants: [
          { name: "Palisade", image: "/images/vehicles/hyundai/palisade.jpg" },
        ],
      },
    ],
  },
  {
    name: "Isuzu",
    slug: "isuzu",
    logo: "/images/vehicles/brands/isuzu-logo.png?v=2",
    category: "commercial",
    models: [
      {
        series: "D-Max",
        variants: [
          { name: "D-Max Single Cab", image: "/images/vehicles/isuzu/dmax-single.jpg" },
          { name: "D-Max Double Cab", image: "/images/vehicles/isuzu/dmax-double.jpg" },
          { name: "D-Max V-Cross", image: "/images/vehicles/isuzu/dmax-vcross.jpg" },
        ],
      },
      {
        series: "MU-X",
        variants: [
          { name: "MU-X", image: "/images/vehicles/isuzu/mu-x.jpg" },
        ],
      },
      {
        series: "Elf / N Series",
        variants: [
          { name: "Elf NMR", image: "/images/vehicles/isuzu/elf-nmr.jpg" },
          { name: "Elf NPR", image: "/images/vehicles/isuzu/elf-npr.jpg" },
        ],
      },
      {
        series: "Forward / F Series",
        variants: [
          { name: "Forward FRR", image: "/images/vehicles/isuzu/forward-frr.jpg" },
        ],
      },
    ],
  },
  {
    name: "Kobelco",
    slug: "kobelco",
    logo: "/images/vehicles/brands/kobelco-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "Excavators",
        variants: [
          { name: "SK200", image: "/images/vehicles/kobelco/sk200.jpg" },
          { name: "SK210", image: "/images/vehicles/kobelco/sk210.jpg" },
          { name: "SK350", image: "/images/vehicles/kobelco/sk350.jpg" },
        ],
      },
      {
        series: "Mini Excavators",
        variants: [
          { name: "SK55SRX", image: "/images/vehicles/kobelco/sk55srx.jpg" },
          { name: "SK75SR", image: "/images/vehicles/kobelco/sk75sr.jpg" },
        ],
      },
    ],
  },
  {
    name: "Komatsu",
    slug: "komatsu",
    logo: "/images/vehicles/brands/komatsu-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "Excavators",
        variants: [
          { name: "PC200", image: "/images/vehicles/komatsu/pc200.jpg" },
          { name: "PC300", image: "/images/vehicles/komatsu/pc300.jpg" },
          { name: "PC450", image: "/images/vehicles/komatsu/pc450.jpg" },
        ],
      },
      {
        series: "Wheel Loaders",
        variants: [
          { name: "WA380", image: "/images/vehicles/komatsu/wa380.jpg" },
          { name: "WA470", image: "/images/vehicles/komatsu/wa470.jpg" },
        ],
      },
      {
        series: "Bulldozers",
        variants: [
          { name: "D65PX", image: "/images/vehicles/komatsu/d65px.jpg" },
        ],
      },
    ],
  },
  {
    name: "Land Rover",
    slug: "land-rover",
    logo: "/images/vehicles/brands/land-rover-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "Defender",
        variants: [
          { name: "Defender 90", image: "/images/vehicles/land-rover/defender-90.jpg" },
          { name: "Defender 110", image: "/images/vehicles/land-rover/defender-110.jpg" },
          { name: "Defender 130", image: "/images/vehicles/land-rover/defender-130.jpg" },
        ],
      },
      {
        series: "Discovery",
        variants: [
          { name: "Discovery", image: "/images/vehicles/land-rover/discovery.jpg" },
          { name: "Discovery Sport", image: "/images/vehicles/land-rover/discovery-sport.jpg" },
        ],
      },
    ],
  },
  {
    name: "MAN",
    slug: "man",
    logo: "/images/vehicles/brands/man-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "TGX",
        variants: [
          { name: "TGX 18.510", image: "/images/vehicles/man/tgx-18510.jpg" },
          { name: "TGX 26.510", image: "/images/vehicles/man/tgx-26510.jpg" },
        ],
      },
      {
        series: "TGS",
        variants: [
          { name: "TGS 18.430", image: "/images/vehicles/man/tgs-18430.jpg" },
          { name: "TGS 33.430", image: "/images/vehicles/man/tgs-33430.jpg" },
        ],
      },
      {
        series: "TGM",
        variants: [
          { name: "TGM 18.320", image: "/images/vehicles/man/tgm-18320.jpg" },
        ],
      },
      {
        series: "TGL",
        variants: [
          { name: "TGL 12.250", image: "/images/vehicles/man/tgl-12250.jpg" },
        ],
      },
    ],
  },
  {
    name: "Mazda",
    slug: "mazda",
    logo: "/images/vehicles/brands/mazda-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Mazda3",
        variants: [
          { name: "Mazda3 Sedan", image: "/images/vehicles/mazda/mazda3-sedan.jpg" },
          { name: "Mazda3 Hatchback", image: "/images/vehicles/mazda/mazda3-hatchback.jpg" },
        ],
      },
      {
        series: "Mazda6",
        variants: [
          { name: "Mazda6 Sedan", image: "/images/vehicles/mazda/mazda6-sedan.jpg" },
          { name: "Mazda6 Wagon", image: "/images/vehicles/mazda/mazda6-wagon.jpg" },
        ],
      },
      {
        series: "CX-3",
        variants: [
          { name: "CX-3", image: "/images/vehicles/mazda/cx-3.jpg" },
        ],
      },
      {
        series: "CX-5",
        variants: [
          { name: "CX-5", image: "/images/vehicles/mazda/cx-5.jpg" },
        ],
      },
      {
        series: "CX-30",
        variants: [
          { name: "CX-30", image: "/images/vehicles/mazda/cx-30.jpg" },
        ],
      },
      {
        series: "CX-60",
        variants: [
          { name: "CX-60", image: "/images/vehicles/mazda/cx-60.jpg" },
        ],
      },
      {
        series: "BT-50",
        variants: [
          { name: "BT-50", image: "/images/vehicles/mazda/bt-50.jpg" },
        ],
      },
      {
        series: "MX-5",
        variants: [
          { name: "MX-5 Miata", image: "/images/vehicles/mazda/mx-5.jpg" },
        ],
      },
    ],
  },
  {
    name: "Porsche",
    slug: "porsche",
    logo: "/images/vehicles/brands/porsche-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "911",
        variants: [
          { name: "911 Carrera", image: "/images/vehicles/porsche/911-carrera.jpg" },
          { name: "911 Carrera S", image: "/images/vehicles/porsche/911-carrera-s.jpg" },
          { name: "911 Turbo", image: "/images/vehicles/porsche/911-turbo.jpg" },
          { name: "911 GT3", image: "/images/vehicles/porsche/911-gt3.jpg" },
        ],
      },
      {
        series: "Cayenne",
        variants: [
          { name: "Cayenne", image: "/images/vehicles/porsche/cayenne.jpg" },
          { name: "Cayenne S", image: "/images/vehicles/porsche/cayenne-s.jpg" },
          { name: "Cayenne Turbo", image: "/images/vehicles/porsche/cayenne-turbo.jpg" },
        ],
      },
      {
        series: "Macan",
        variants: [
          { name: "Macan", image: "/images/vehicles/porsche/macan.jpg" },
          { name: "Macan S", image: "/images/vehicles/porsche/macan-s.jpg" },
          { name: "Macan GTS", image: "/images/vehicles/porsche/macan-gts.jpg" },
        ],
      },
      {
        series: "Panamera",
        variants: [
          { name: "Panamera", image: "/images/vehicles/porsche/panamera.jpg" },
          { name: "Panamera 4S", image: "/images/vehicles/porsche/panamera-4s.jpg" },
          { name: "Panamera Turbo", image: "/images/vehicles/porsche/panamera-turbo.jpg" },
        ],
      },
      {
        series: "Taycan",
        variants: [
          { name: "Taycan", image: "/images/vehicles/porsche/taycan.jpg" },
          { name: "Taycan 4S", image: "/images/vehicles/porsche/taycan-4s.jpg" },
          { name: "Taycan Turbo", image: "/images/vehicles/porsche/taycan-turbo.jpg" },
        ],
      },
    ],
  },
  {
    name: "Renault",
    slug: "renault",
    logo: "/images/vehicles/brands/renault-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Clio",
        variants: [
          { name: "Clio", image: "/images/vehicles/renault/clio.jpg" },
        ],
      },
      {
        series: "Captur",
        variants: [
          { name: "Captur", image: "/images/vehicles/renault/captur.jpg" },
        ],
      },
      {
        series: "Megane",
        variants: [
          { name: "Megane E-Tech", image: "/images/vehicles/renault/megane-etech.jpg" },
        ],
      },
      {
        series: "Koleos",
        variants: [
          { name: "Koleos", image: "/images/vehicles/renault/koleos.jpg" },
        ],
      },
      {
        series: "Duster",
        variants: [
          { name: "Duster", image: "/images/vehicles/renault/duster.jpg" },
        ],
      },
      {
        series: "Kwid",
        variants: [
          { name: "Kwid", image: "/images/vehicles/renault/kwid.jpg" },
        ],
      },
    ],
  },
  {
    name: "Scania",
    slug: "scania",
    logo: "/images/vehicles/brands/scania-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "R Series",
        variants: [
          { name: "R 500", image: "/images/vehicles/scania/r500.jpg" },
          { name: "R 540", image: "/images/vehicles/scania/r540.jpg" },
        ],
      },
      {
        series: "S Series",
        variants: [
          { name: "S 500", image: "/images/vehicles/scania/s500.jpg" },
          { name: "S 590", image: "/images/vehicles/scania/s590.jpg" },
        ],
      },
      {
        series: "G Series",
        variants: [
          { name: "G 410", image: "/images/vehicles/scania/g410.jpg" },
          { name: "G 500", image: "/images/vehicles/scania/g500.jpg" },
        ],
      },
      {
        series: "P Series",
        variants: [
          { name: "P 320", image: "/images/vehicles/scania/p320.jpg" },
          { name: "P 410", image: "/images/vehicles/scania/p410.jpg" },
        ],
      },
    ],
  },
  {
    name: "Skoda",
    slug: "skoda",
    logo: "/images/vehicles/brands/skoda-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Octavia",
        variants: [
          { name: "Octavia", image: "/images/vehicles/skoda/octavia.jpg" },
          { name: "Octavia RS", image: "/images/vehicles/skoda/octavia-rs.jpg" },
        ],
      },
      {
        series: "Superb",
        variants: [
          { name: "Superb", image: "/images/vehicles/skoda/superb.jpg" },
        ],
      },
      {
        series: "Kodiaq",
        variants: [
          { name: "Kodiaq", image: "/images/vehicles/skoda/kodiaq.jpg" },
          { name: "Kodiaq RS", image: "/images/vehicles/skoda/kodiaq-rs.jpg" },
        ],
      },
      {
        series: "Karoq",
        variants: [
          { name: "Karoq", image: "/images/vehicles/skoda/karoq.jpg" },
        ],
      },
      {
        series: "Kamiq",
        variants: [
          { name: "Kamiq", image: "/images/vehicles/skoda/kamiq.jpg" },
        ],
      },
      {
        series: "Fabia",
        variants: [
          { name: "Fabia", image: "/images/vehicles/skoda/fabia.jpg" },
        ],
      },
    ],
  },
  {
    name: "Ssangyong",
    slug: "ssangyong",
    logo: "/images/vehicles/brands/ssangyong-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Rexton",
        variants: [
          { name: "Rexton", image: "/images/vehicles/ssangyong/rexton.jpg" },
        ],
      },
      {
        series: "Korando",
        variants: [
          { name: "Korando", image: "/images/vehicles/ssangyong/korando.jpg" },
          { name: "Korando e-Motion", image: "/images/vehicles/ssangyong/korando-emotion.jpg" },
        ],
      },
      {
        series: "Musso",
        variants: [
          { name: "Musso", image: "/images/vehicles/ssangyong/musso.jpg" },
          { name: "Musso Grand", image: "/images/vehicles/ssangyong/musso-grand.jpg" },
        ],
      },
      {
        series: "Tivoli",
        variants: [
          { name: "Tivoli", image: "/images/vehicles/ssangyong/tivoli.jpg" },
        ],
      },
    ],
  },
  {
    name: "Subaru",
    slug: "subaru",
    logo: "/images/vehicles/brands/subaru-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Forester",
        variants: [
          { name: "Forester", image: "/images/vehicles/subaru/forester.jpg" },
          { name: "Forester e-Boxer", image: "/images/vehicles/subaru/forester-eboxer.jpg" },
        ],
      },
      {
        series: "Outback",
        variants: [
          { name: "Outback", image: "/images/vehicles/subaru/outback.jpg" },
        ],
      },
      {
        series: "XV / Crosstrek",
        variants: [
          { name: "XV", image: "/images/vehicles/subaru/xv.jpg" },
        ],
      },
      {
        series: "Impreza",
        variants: [
          { name: "Impreza", image: "/images/vehicles/subaru/impreza.jpg" },
        ],
      },
      {
        series: "WRX",
        variants: [
          { name: "WRX", image: "/images/vehicles/subaru/wrx.jpg" },
          { name: "WRX STI", image: "/images/vehicles/subaru/wrx-sti.jpg" },
        ],
      },
      {
        series: "BRZ",
        variants: [
          { name: "BRZ", image: "/images/vehicles/subaru/brz.jpg" },
        ],
      },
    ],
  },
  {
    name: "BYD",
    slug: "byd",
    logo: "/images/vehicles/brands/byd-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Atto 3",
        variants: [
          { name: "Atto 3", image: "/images/vehicles/byd/atto-3.jpg" },
        ],
      },
      {
        series: "Seal",
        variants: [
          { name: "Seal", image: "/images/vehicles/byd/seal.jpg" },
        ],
      },
      {
        series: "Dolphin",
        variants: [
          { name: "Dolphin", image: "/images/vehicles/byd/dolphin.jpg" },
        ],
      },
      {
        series: "Tang",
        variants: [
          { name: "Tang EV", image: "/images/vehicles/byd/tang-ev.jpg" },
        ],
      },
      {
        series: "Han",
        variants: [
          { name: "Han EV", image: "/images/vehicles/byd/han-ev.jpg" },
        ],
      },
    ],
  },
  {
    name: "Tesla",
    slug: "tesla",
    logo: "/images/vehicles/brands/tesla-logo.png?v=2",
    category: "luxury",
    models: [
      {
        series: "Model 3",
        variants: [
          { name: "Model 3", image: "/images/vehicles/tesla/model-3.jpg" },
          { name: "Model 3 Long Range", image: "/images/vehicles/tesla/model-3-lr.jpg" },
          { name: "Model 3 Performance", image: "/images/vehicles/tesla/model-3-performance.jpg" },
        ],
      },
      {
        series: "Model Y",
        variants: [
          { name: "Model Y", image: "/images/vehicles/tesla/model-y.jpg" },
          { name: "Model Y Long Range", image: "/images/vehicles/tesla/model-y-lr.jpg" },
          { name: "Model Y Performance", image: "/images/vehicles/tesla/model-y-performance.jpg" },
        ],
      },
      {
        series: "Model S",
        variants: [
          { name: "Model S", image: "/images/vehicles/tesla/model-s.jpg" },
          { name: "Model S Plaid", image: "/images/vehicles/tesla/model-s-plaid.jpg" },
        ],
      },
      {
        series: "Model X",
        variants: [
          { name: "Model X", image: "/images/vehicles/tesla/model-x.jpg" },
          { name: "Model X Plaid", image: "/images/vehicles/tesla/model-x-plaid.jpg" },
        ],
      },
    ],
  },
  {
    name: "Tata",
    slug: "tata",
    logo: "/images/vehicles/brands/tata-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Nexon",
        variants: [
          { name: "Nexon", image: "/images/vehicles/tata/nexon.jpg" },
          { name: "Nexon EV", image: "/images/vehicles/tata/nexon-ev.jpg" },
        ],
      },
      {
        series: "Harrier",
        variants: [
          { name: "Harrier", image: "/images/vehicles/tata/harrier.jpg" },
        ],
      },
      {
        series: "Safari",
        variants: [
          { name: "Safari", image: "/images/vehicles/tata/safari.jpg" },
        ],
      },
      {
        series: "Punch",
        variants: [
          { name: "Punch", image: "/images/vehicles/tata/punch.jpg" },
        ],
      },
      {
        series: "Tiago",
        variants: [
          { name: "Tiago", image: "/images/vehicles/tata/tiago.jpg" },
          { name: "Tiago EV", image: "/images/vehicles/tata/tiago-ev.jpg" },
        ],
      },
    ],
  },
  {
    name: "Perodua",
    slug: "perodua",
    logo: "/images/vehicles/brands/perodua-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "Myvi",
        variants: [
          { name: "Myvi", image: "/images/vehicles/perodua/myvi.jpg" },
        ],
      },
      {
        series: "Ativa",
        variants: [
          { name: "Ativa", image: "/images/vehicles/perodua/ativa.jpg" },
        ],
      },
      {
        series: "Axia",
        variants: [
          { name: "Axia", image: "/images/vehicles/perodua/axia.jpg" },
        ],
      },
      {
        series: "Aruz",
        variants: [
          { name: "Aruz", image: "/images/vehicles/perodua/aruz.jpg" },
        ],
      },
      {
        series: "Bezza",
        variants: [
          { name: "Bezza", image: "/images/vehicles/perodua/bezza.jpg" },
        ],
      },
    ],
  },
  {
    name: "JCB",
    slug: "jcb",
    logo: "/images/vehicles/brands/jcb-logo.png?v=2",
    category: "heavy",
    models: [
      {
        series: "Backhoe Loaders",
        variants: [
          { name: "3CX", image: "/images/vehicles/jcb/3cx.jpg" },
          { name: "4CX", image: "/images/vehicles/jcb/4cx.jpg" },
        ],
      },
      {
        series: "Excavators",
        variants: [
          { name: "JS200", image: "/images/vehicles/jcb/js200.jpg" },
          { name: "JS305", image: "/images/vehicles/jcb/js305.jpg" },
        ],
      },
      {
        series: "Telehandlers",
        variants: [
          { name: "535-95", image: "/images/vehicles/jcb/535-95.jpg" },
          { name: "540-170", image: "/images/vehicles/jcb/540-170.jpg" },
        ],
      },
    ],
  },
  {
    name: "Mahindra",
    slug: "mahindra",
    logo: "/images/vehicles/brands/mahindra-logo.png?v=2",
    category: "standard",
    models: [
      {
        series: "XUV700",
        variants: [
          { name: "XUV700", image: "/images/vehicles/mahindra/xuv700.jpg" },
        ],
      },
      {
        series: "Thar",
        variants: [
          { name: "Thar", image: "/images/vehicles/mahindra/thar.jpg" },
        ],
      },
      {
        series: "Scorpio",
        variants: [
          { name: "Scorpio N", image: "/images/vehicles/mahindra/scorpio-n.jpg" },
          { name: "Scorpio Classic", image: "/images/vehicles/mahindra/scorpio-classic.jpg" },
        ],
      },
      {
        series: "XUV400",
        variants: [
          { name: "XUV400 EV", image: "/images/vehicles/mahindra/xuv400-ev.jpg" },
        ],
      },
      {
        series: "Bolero",
        variants: [
          { name: "Bolero", image: "/images/vehicles/mahindra/bolero.jpg" },
          { name: "Bolero Neo", image: "/images/vehicles/mahindra/bolero-neo.jpg" },
        ],
      },
    ],
  },
  {
    name: "Yutong",
    slug: "yutong",
    logo: "/images/vehicles/brands/yutong-logo.png?v=2",
    category: "commercial",
    models: [
      {
        series: "City Bus",
        variants: [
          { name: "ZK6126HGA", image: "/images/vehicles/yutong/zk6126hga.jpg" },
          { name: "E12", image: "/images/vehicles/yutong/e12.jpg" },
        ],
      },
      {
        series: "Coach",
        variants: [
          { name: "ZK6122H", image: "/images/vehicles/yutong/zk6122h.jpg" },
          { name: "ZK6127H", image: "/images/vehicles/yutong/zk6127h.jpg" },
        ],
      },
      {
        series: "Electric Bus",
        variants: [
          { name: "E10", image: "/images/vehicles/yutong/e10.jpg" },
          { name: "E12", image: "/images/vehicles/yutong/e12-ev.jpg" },
        ],
      },
    ],
  },
];

export const brandCategories = [
  { key: "all", label: "All Brands" },
  { key: "luxury", label: "Luxury" },
  { key: "standard", label: "Standard" },
  { key: "commercial", label: "Commercial" },
  { key: "heavy", label: "Heavy Machinery" },
] as const;
