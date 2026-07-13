const bg2 = document.getElementById('bg2');
const bg1 = document.getElementById('bg1');

const menu = {
  names: {
    c0: "Minimal inspection fee",
    c1: "Site and grounds",
    c2: "Structural integrity, exterior",
    c3: "Roof",
    c4: "Floor area, interior finishes",
    c5: "Humidity and water penetration",
    c6: "Thermal insulation",
    c7: "Electrical system",
    c8: "Plumbing System",
    c9: "Ventilation and AC",
    c10: "Heating",
    c11: "Safety and Ecology",
    c12: "Swimming pool",
    c13: "Garage",

S0_1: "Minimal inspection fee",

    S1_1: "Fence and retaining walls",
    S1_2: "Terraces, patios",
    S1_3: "Staircases, balustrades, ramps",
    S1_4: "Rainwater drainage",
    S1_5: "Main entrance",
    S1_6: "Intercom and lightning",
    S1_7: "Permanent sun protection",
    S1_8: "Irrigation system",
    S1_9: "Landscaping",

    S2_1: "Foundation & basement",    
    S2_2: "Walls, facades",
    S2_3: "Foundation Plinth & Apron",
    S2_4: "Main entrance",
    S2_5: "Other architectural elements",

    S3_1: "Roof covering",
    S3_2: "Roof framing",
    S3_3: "Vapor and water proofing",
    S3_4: "Connections, flashes",
    S3_5: "Gutters and downspouts",
    S3_6: "Other roof elements",

    S4_1: "Floor area",
    S4_2: "Living rooms",
    S4_3: "Bathrooms",
    S4_4: "Floors",
    S4_5: "Ceilings",
    S4_6: "Doors",

    S5_1: "Air humidity",
    S5_2: "Floor and wall humidity levels in living areas",
    S5_3: "Floor and wall humidity levels in wet areas",
    S5_4: "Floor and wall humidity levels in other areas",
    S5_5: "Other signs of leakages and high humidity",

    S6_1: "Walls, floors",
    S6_2: "Ceilings",
    S6_3: "Windows, blinds, shutters",

    S7_1: "Outdoor service box, meter",
    S7_2: "Distribution panel, main switch, fuses",
    S7_3: "Number of lines, potential overloads",
    S7_4: "Thermal imaging",
    S7_5: "Grounding",
    S7_6: "Protection devices",
    S7_7: "Power outlets, switches, lighting",

    S8_1: "Main valve, counter",
    S8_2: "Pressure and flow rate",
    S8_3: "Valves, taps, showers",
    S8_4: "Toilets, sinks, bathtubs",
    S8_5: "Water heaters",
    S8_6: "Water quality",

    S9_1: "Mechanical ventilation",
    S9_2: "Exhaust ventilation in wet areas",
    S9_3: "Exhaust ventilation in kitchen",
    S9_4: "Air conditioners, capacity adequacy",

    S10_1: "Heating system, type and capacity adequacy",
    S10_2: "Heated floors",
    S10_3: "Radiators, convectors, fan coils",
    S10_4: "Fireplaces, stoves, chimneys",

    S11_1: "Mould, fungi, bacteria, allergens",
    S11_2: "Noise, lighting levels",
    S11_3: "Smoke and CO detectors, fire alarms",
    S11_4: "Security systems, cameras, alarms",
    S11_5: "Electromagnetic fields, radiation",



     S12_1: "Appearance and Pool Interior",
     S12_2: "Filtering and circulation system",
     S12_3: "Water quality",

      S13_1: "Vehicle access, doors, gates",
      S13_2: "Electrical system, lighting, outlets",
      S13_3: "Fire safety, ventilation, water drainage"
  }
}



const pricing_old = {
  price: {
    c0:{ // basic fee unconditional of works that we add to the package
            house: { small: 120, medium: 120, large: 120 }, 
      apartment: { small: 120, medium: 120, large: 120  }
    },

    c1: {
      house: { small: 120, medium: 120, large: 240 },
      apartment: { small: 120, medium: 120, large: 240  }
    },
    c2: {
      house: { small: 90, medium: 120, large: 240 },
      apartment: { small: 90, medium: 120, large: 240 }
    },
    c3: {
      house: { small: 60, medium: 120, large: 240 },
      apartment: { small: 60, medium: 120, large: 240 }
    },
    c4: {
      house: { small: 60, medium: 120, large: 240 },
      apartment: {small: 60, medium: 120, large: 240 }
    },
    c5: {
      house: { small: 70, medium: 90, large: 135 },
      apartment: {  small: 70, medium: 90, large: 135  }
    },
    c6: {
      house: { small: 30, medium: 60, large: 90 },
      apartment: { small: 30, medium: 60, large: 90  }
    },
    c7: {
      house: { small: 45, medium: 60, large: 90 },
      apartment: { small: 45, medium: 60, large: 90 }
    }
    ,
    c8: {
      house: { small: 45, medium: 60, large: 90 },
      apartment: { small: 45, medium: 60, large: 90 }
    },
    c9: {
      house: { small: 45, medium: 60, large: 90 },
      apartment: {  small: 45, medium: 60, large: 90 }
    },
    c10: {
      house: { small: 45, medium: 60, large: 90 },
      apartment: { small: 45, medium: 60, large: 90 }
    }
    ,
    c11: {
      house: { small: 15, medium: 30, large: 45 },
      apartment: {small: 15, medium: 30, large: 45  }
    }
    ,
    c12: {
      house: { small: 30, medium: 30, large: 45 },
      apartment: { small: 30, medium: 30, large: 45  }
    }
    ,
    c13: {
      house: { small: 30, medium: 30, large: 45 },
      apartment: { small: 30, medium: 30, large: 45 }
    }

  }
}


const pricing = {
  price: {
    c0:{ // basic fee unconditional of works that we add to the package
            house: { small: 90, medium: 90, large: 90 }, 
      apartment: { small: 90, medium: 90, large: 90 }
    },

    c1: {
      house: { small: 100, medium: 100, large: 200 },
      apartment: { small: 100, medium: 100, large: 200  }
    },
    c2: {
      house: { small: 80, medium: 100, large: 200 },
      apartment: {  small: 80, medium: 100, large: 200  }
    },
    c3: {
      house: { small: 50, medium: 100, large: 200 },
      apartment: { small: 50, medium: 100, large: 200 }
    },
    c4: {
      house: { small: 50, medium: 100, large: 200 },
      apartment: {small: 50, medium: 80, large: 160 }
    },
    c5: {
      house: { small: 60, medium: 80, large: 120 },
      apartment: {  small: 40, medium: 50, large: 100 }
    },
    c6: {
      house: { small: 25, medium: 50, large: 80 },
      apartment: { small: 25, medium: 50, large: 80  }
    },
    c7: {
      house: { small: 40, medium: 50, large: 80 },
      apartment: { small: 40, medium: 50, large: 80 }
    }
    ,
    c8: {
      house: { small: 40, medium: 50, large: 80 },
      apartment: { small: 40, medium: 50, large: 80 }
    },
    c9: {
      house: { small: 40, medium: 50, large: 80 },
      apartment: { small: 20, medium: 30, large: 90 }
    },
    c10: {
      house: { small: 40, medium: 50, large: 80 },
      apartment: { small: 40, medium: 50, large: 80 }
    }
    ,
    c11: {
      house: { small: 10, medium: 25, large: 40 },
      apartment: {small: 10, medium: 25, large: 40  }
    }
    ,
    c12: {
      house: { small: 25, medium: 25, large: 40 },
      apartment: { small: 25, medium: 25, large: 40   }
    }
    ,
    c13: {
      house: { small: 25, medium: 25, large: 40 },
      apartment: { small: 25, medium: 25, large: 40 }
    }

  }
}




const priceStructure = {

s0_1: 1,  

s1_1 : 0.23,
s1_2 : 0.23,
s1_3 : 0.09,
s1_4 : 0.09,
s1_5 : 0.05,
s1_6 : 0.05,
s1_7 : 0.09,
s1_8 : 0.09,
s1_9 : 0.09,

s2_1 : 0.30,
s2_2 : 0.30,
s2_3 : 0.30,
s2_4 : 0.05,
s2_5 : 0.05,

s3_1 : 0.30,
s3_2 : 0.30,
s3_3 : 0.10,
s3_4 : 0.10,
s3_5 : 0.05,
s3_6 : 0.15,

s4_1 : 0.25,
s4_2 : 0.30,
s4_3 : 0.25,
s4_4 : 0.10,
s4_5 : 0.05,
s4_6 : 0.05,



s5_1 : 0.20,
s5_2 : 0.20,
s5_3 : 0.20,
s5_4 : 0.20,
s5_5 : 0.20,



s6_1 : 0.40,
s6_2 : 0.20,
s6_3 : 0.40,



s7_1 : 0.20,
s7_2 : 0.10,
s7_3 : 0.20,
s7_4 : 0.10,
s7_5 : 0.10,
s7_6 : 0.10,
s7_7 : 0.20,



s8_1 : 0.10,
s8_2 : 0.20,
s8_3 : 0.20,
s8_4 : 0.20,
s8_5 : 0.20,
s8_6 : 0.10,



s9_1 : 0.20,
s9_2 : 0.20,
s9_3 : 0.20,
s9_4 : 0.40,



s10_1 : 0.40,
s10_2 : 0.20,
s10_3 : 0.30,
s10_4 : 0.10,



s11_1 : 0.20,
s11_2 : 0.20,
s11_3 : 0.20,
s11_4 : 0.20,
s11_5 : 0.20,



s12_1 : 0.30,
s12_2 : 0.50,
s12_3 : 0.20,



s13_1 : 0.30,
s13_2 : 0.40,
s13_3 : 0.30,
}


const works = {
  house: {
    c0:{main: true, sub:{s0_1:true}},
    c1: { main: true, sub: { s1_1: true, s1_2: true, s1_3: true, s1_4: true, s1_5: true, s1_6: true, s1_7: true, s1_8: true, s1_9: true, s1_10: true } },
    c2: { main: true, sub: { s2_1: true, s2_2: true, s2_3: true, s2_4: true, s2_5: true, s2_6: true, s2_7: true, s2_8: true, s2_9: true, s2_10: true } },
    c3: { main: true, sub: { s3_1: true, s3_2: true, s3_3: true, s3_4: true, s3_5: true, s3_6: true, s3_7: true, s3_8: true, s3_9: true, s3_10: true } },
    c4: { main: true, sub: { s4_1: true, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: true, s4_7: true, s4_8: true, s4_9: true, s4_10: true } },
    c5: { main: true, sub: { s5_1: true, s5_2: true, s5_3: true, s5_4: true, s5_5: true, s5_6: true, s5_7: true, s5_8: true, s5_9: true, s5_10: true } },
    c6: { main: true, sub: { s6_1: true, s6_2: true, s6_3: true, s6_4: true, s6_5: true, s6_6: true, s6_7: true, s6_8: true, s6_9: true, s6_10: true } },
    c7: { main: true, sub: { s7_1: true, s7_2: true, s7_3: true, s7_4: true, s7_5: true, s7_6: true, s7_7: true, s7_8: true, s7_9: true, s7_10: true } },
    c8: { main: true, sub: { s8_1: true, s8_2: true, s8_3: true, s8_4: true, s8_5: true, s8_6: true, s8_7: true, s8_8: true, s8_9: true, s8_10: true } },
    c9: { main: true, sub: { s9_1: true, s9_2: true, s9_3: true, s9_4: true, s9_5: true, s9_6: true, s9_7: true, s9_8: true, s9_9: true, s9_10: true } },
    c10: { main: true, sub: { s10_1: true, s10_2: true, s10_3: true, s10_4: true, s10_5: true, s10_6: true, s10_7: true, s10_8: true, s10_9: true, s10_10: true } },
    c11: { main: true, sub: { s11_1: true, s11_2: true, s11_3: true, s11_4: true, s11_5: true, s11_6: true, s11_7: true, s11_8: true, s11_9: true, s11_10: true } },
    c12: { main: true, sub: { s12_1: true, s12_2: true, s12_3: true, s12_4: true, s12_5: true, s12_6: true, s12_7: true, s12_8: true, s12_9: true, s12_10: true } },
    c13: { main: true, sub: { s13_1: true, s13_2: true, s13_3: true, s13_4: true, s13_5: true, s13_6: true, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },

  },
  apartment: {
    c0:{main: true, sub:{s0_1:true}},
    c1: { main: true, sub: { s1_1: true, s1_2: true, s1_3: true, s1_4: true, s1_5: true, s1_6: true, s1_7: true, s1_8: true, s1_9: true, s1_10: true } },
    c2: { main: true, sub: { s2_1: true, s2_2: true, s2_3: true, s2_4: true, s2_5: true, s2_6: true, s2_7: true, s2_8: true, s2_9: true, s2_10: true } },
    c3: { main: true, sub: { s3_1: true, s3_2: true, s3_3: true, s3_4: true, s3_5: true, s3_6: true, s3_7: true, s3_8: true, s3_9: true, s3_10: true } },
    c4: { main: true, sub: { s4_1: true, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: true, s4_7: true, s4_8: true, s4_9: true, s4_10: true } },
    c5: { main: true, sub: { s5_1: true, s5_2: true, s5_3: true, s5_4: true, s5_5: true, s5_6: true, s5_7: true, s5_8: true, s5_9: true, s5_10: true } },
    c6: { main: true, sub: { s6_1: true, s6_2: true, s6_3: true, s6_4: true, s6_5: true, s6_6: true, s6_7: true, s6_8: true, s6_9: true, s6_10: true } },
    c7: { main: true, sub: { s7_1: true, s7_2: true, s7_3: true, s7_4: true, s7_5: true, s7_6: true, s7_7: true, s7_8: true, s7_9: true, s7_10: true } },
    c8: { main: true, sub: { s8_1: true, s8_2: true, s8_3: true, s8_4: true, s8_5: true, s8_6: true, s8_7: true, s8_8: true, s8_9: true, s8_10: true } },
    c9: { main: true, sub: { s9_1: true, s9_2: true, s9_3: true, s9_4: true, s9_5: true, s9_6: true, s9_7: true, s9_8: true, s9_9: true, s9_10: true } },
    c10: { main: true, sub: { s10_1: true, s10_2: true, s10_3: true, s10_4: true, s10_5: true, s10_6: true, s10_7: true, s10_8: true, s10_9: true, s10_10: true } },
    c11: { main: true, sub: { s11_1: true, s11_2: true, s11_3: true, s11_4: true, s11_5: true, s11_6: true, s11_7: true, s11_8: true, s11_9: true, s11_10: true } },
    c12: { main: true, sub: { s12_1: true, s12_2: true, s12_3: true, s12_4: true, s12_5: true, s12_6: true, s12_7: true, s12_8: true, s12_9: true, s12_10: true } },
    c13: { main: true, sub: { s13_1: true, s13_2: true, s13_3: true, s13_4: true, s13_5: true, s13_6: true, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },
  },
}


const packages = {
  minimal: {
    house: {
      c0:{main: true, sub:{s0_1:true}},
      c1: { main: true, sub: { s1_1: true, s1_2: true, s1_3: false, s1_4: false, s1_5: false, s1_6: false, s1_7: false, s1_8: false, s1_9: false, s1_10: false } },
      c2: { main: true, sub: { s2_1: true, s2_2: true, s2_3: true, s2_4: false, s2_5: false, s2_6: false, s2_7: false, s2_8: false, s2_9: false, s2_10: false } },
      c3: { main: true, sub: { s3_1: true, s3_2: true, s3_3: false, s3_4: false, s3_5: false, s3_6: false, s3_7: false, s3_8: false, s3_9: false, s3_10: false } },
      c4: { main: true, sub: { s4_1: false, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: false, s4_7: false, s4_8: false, s4_9: false, s4_10: false } },
      c5: { main: true, sub: { s5_1: false, s5_2: true, s5_3: true, s5_4: false, s5_5: false, s5_6: false, s5_7: false, s5_8: false, s5_9: false, s5_10: false } },
    c6: { main: false, sub: { s6_1: false, s6_2: false, s6_3: false, s6_4: false, s6_5: false, s6_6: false, s6_7: false, s6_8: false, s6_9: false, s6_10: false } },
    c7: { main: true, sub: { s7_1: false, s7_2: true, s7_3: true, s7_4: false, s7_5: true, s7_6: true, s7_7: false, s7_8: false, s7_9: false, s7_10: false } },
    c8: { main: true, sub: { s8_1: true, s8_2: false, s8_3: true, s8_4: true, s8_5: true, s8_6: false, s8_7: false, s8_8: false, s8_9: false, s8_10: false } },
    c9: { main: false, sub: { s9_1: false, s9_2: false, s9_3: false, s9_4: false, s9_5: false, s9_6: false, s9_7: false, s9_8: true, s9_9: true, s9_10: true } },
    c10: { main: false, sub: { s10_1: false, s10_2: false, s10_3: false, s10_4: false, s10_5: false, s10_6: false, s10_7: false, s10_8: false, s10_9: true, s10_10: true } },
    c11: { main: false, sub: { s11_1: false, s11_2: false, s11_3: false, s11_4: false, s11_5: false, s11_6: false, s11_7: false, s11_8: false, s11_9: true, s11_10: true } },
    c12: { main: false, sub: { s12_1: false, s12_2: false, s12_3: false, s12_4: false, s12_5: false, s12_6: false, s12_7: true, s12_8: true, s12_9: true, s12_10: true } },
    c13: { main: false, sub: { s13_1: false, s13_2: false, s13_3: false, s13_4: false, s13_5: false, s13_6: false, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },

    },
    apartment: {
      c0:{main: true, sub:{s0_1:true}},
      c1: { main: false, sub: { s1_1: false, s1_2: false, s1_3: false, s1_4: false, s1_5: false, s1_6: false, s1_7: false, s1_8: false, s1_9: false, s1_10: false } },
      c2: { main: false, sub: { s2_1: false, s2_2: false, s2_3: false, s2_4: false, s2_5: false, s2_6: false, s2_7: false, s2_8: false, s2_9: true, s2_10: true } },
      c3: { main: false, sub: { s3_1: false, s3_2: false, s3_3: false, s3_4: false, s3_5: false, s3_6: false, s3_7: false, s3_8: false, s3_9: false, s3_10: false } },
        c4: { main: true, sub: { s4_1: false, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: false, s4_7: false, s4_8: false, s4_9: false, s4_10: false } },
      c5: { main: true, sub: { s5_1: false, s5_2: true, s5_3: true, s5_4: false, s5_5: false, s5_6: false, s5_7: false, s5_8: false, s5_9: false, s5_10: false } },
      c6: { main: false, sub: { s6_1: false, s6_2: false, s6_3: false, s6_4: false, s6_5: false, s6_6: false, s6_7: false, s6_8: false, s6_9: false, s6_10: false } },
       c7: { main: true, sub: { s7_1: false, s7_2: true, s7_3: true, s7_4: false, s7_5: true, s7_6: true, s7_7: false, s7_8: false, s7_9: false, s7_10: false } },
     c8: { main: true, sub: { s8_1: true, s8_2: false, s8_3: true, s8_4: true, s8_5: true, s8_6: false, s8_7: false, s8_8: false, s8_9: false, s8_10: false } },
      c9: { main: false, sub: { s9_1: false, s9_2: false, s9_3: false, s9_4: false, s9_5: false, s9_6: false, s9_7: false, s9_8: true, s9_9: true, s9_10: true } },
      c10: { main: false, sub: { s10_1: false, s10_2: false, s10_3: false, s10_4: false, s10_5: false, s10_6: false, s10_7: false, s10_8: false, s10_9: true, s10_10: true } },
       c11: { main: false, sub: { s11_1: false, s11_2: false, s11_3: false, s11_4: false, s11_5: false, s11_6: false, s11_7: false, s11_8: false, s11_9: true, s11_10: true } },
     c12: { main: false, sub: { s12_1: false, s12_2: false, s12_3: false, s12_4: false, s12_5: false, s12_6: false, s12_7: true, s12_8: true, s12_9: true, s12_10: true } },
     c13: { main: false, sub: { s13_1: false, s13_2: false, s13_3: false, s13_4: false, s13_5: false, s13_6: false, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },
    }
  },
  standard: {
    house: {
      c0:{main: true, sub:{s0_1:true}},
      c1: { main: true, sub: { s1_1: true, s1_2: true, s1_3: true, s1_4: true, s1_5: true, s1_6: true, s1_7: false, s1_8: false, s1_9: false, s1_10: false } },
      c2: { main: true, sub: { s2_1: true, s2_2: true, s2_3: true, s2_4: true, s2_5: false, s2_6: false, s2_7: false, s2_8: false, s2_9: false, s2_10: false } },
      c3: { main: true, sub: { s3_1: true, s3_2: true, s3_3: true, s3_4: true, s3_5: false, s3_6: false, s3_7: false, s3_8: false, s3_9: false, s3_10: false } },
      c4: { main: true, sub: { s4_1: true, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: false, s4_7: false, s4_8: false, s4_9: false, s4_10: false } },
      c5: { main: true, sub: { s5_1: true, s5_2: true, s5_3: true, s5_4: true, s5_5: true, s5_6: true, s5_7: true, s5_8: true, s5_9: true, s5_10: true } },
    c6: { main: true, sub: { s6_1: true, s6_2: true, s6_3: true, s6_4: true, s6_5: true, s6_6: true, s6_7: true, s6_8: true, s6_9: true, s6_10: true } },
    c7: { main: true, sub: { s7_1: true, s7_2: true, s7_3: true, s7_4: true, s7_5: true, s7_6: true, s7_7: true, s7_8: true, s7_9: true, s7_10: true } },
    c8: { main: true, sub: { s8_1: true, s8_2: true, s8_3: true, s8_4: true, s8_5: true, s8_6: false, s8_7: false, s8_8: false, s8_9: false, s8_10: true } },
    c9: { main: true, sub: { s9_1: true, s9_2: true, s9_3: true, s9_4: true, s9_5: true, s9_6: true, s9_7: true, s9_8: true, s9_9: true, s9_10: true } },
    c10: { main: true, sub: { s10_1: true, s10_2: false, s10_3: true, s10_4: false, s10_5: false, s10_6: false, s10_7: false, s10_8: false, s10_9: true, s10_10: true } },
    c11: { main: true, sub: { s11_1: true, s11_2: true, s11_3: true, s11_4: false, s11_5: false, s11_6: false, s11_7: false, s11_8: false, s11_9: true, s11_10: true } },
    c12: { main: true, sub: { s12_1: true, s12_2: true, s12_3: false, s12_4: false, s12_5: false, s12_6: false, s12_7: false, s12_8: false, s12_9: true, s12_10: true } },
    c13: { main: true, sub: { s13_1: true, s13_2: true, s13_3: true, s13_4: true, s13_5: true, s13_6: true, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },

    },
    apartment: {
     c0:{main: true, sub:{s0_1:true}},
      c1: { main: true, sub: { s1_1: false, s1_2: false, s1_3: true, s1_4: false, s1_5: true, s1_6: true, s1_7: false, s1_8: false, s1_9: false, s1_10: false } },
      c2: { main: true, sub: { s2_1: false, s2_2: true, s2_3: false, s2_4: true, s2_5: false, s2_6: false, s2_7: false, s2_8: false, s2_9: true, s2_10: true } },
      c3: { main: false, sub: { s3_1: false, s3_2: false, s3_3: false, s3_4: false, s3_5: false, s3_6: false, s3_7: false, s3_8: false, s3_9: false, s3_10: false } },
      c4: { main: true, sub: { s4_1: true, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: false, s4_7: false, s4_8: false, s4_9: false, s4_10: false } },
     c5: { main: true, sub: { s5_1: true, s5_2: true, s5_3: true, s5_4: true, s5_5: true, s5_6: true, s5_7: true, s5_8: true, s5_9: true, s5_10: true } },
     c6: { main: true, sub: { s6_1: true, s6_2: true, s6_3: true, s6_4: true, s6_5: true, s6_6: true, s6_7: true, s6_8: true, s6_9: true, s6_10: true } },
      c7: { main: true, sub: { s7_1: true, s7_2: true, s7_3: true, s7_4: true, s7_5: true, s7_6: true, s7_7: true, s7_8: true, s7_9: true, s7_10: true } },
     c8: { main: true, sub: { s8_1: true, s8_2: true, s8_3: true, s8_4: true, s8_5: true, s8_6: false, s8_7: false, s8_8: false, s8_9: false, s8_10: true } },
      c9: { main: true, sub: { s9_1: true, s9_2: true, s9_3: true, s9_4: true, s9_5: true, s9_6: true, s9_7: true, s9_8: true, s9_9: true, s9_10: true } },
     c10: { main: true, sub: { s10_1: true, s10_2: false, s10_3: true, s10_4: false, s10_5: false, s10_6: false, s10_7: false, s10_8: false, s10_9: true, s10_10: true } },
      c11: { main: true, sub: { s11_1: true, s11_2: true, s11_3: true, s11_4: false, s11_5: false, s11_6: false, s11_7: false, s11_8: false, s11_9: true, s11_10: true } },
      c12: { main: false, sub: { s12_1: false, s12_2: false, s12_3: false, s12_4: false, s12_5: false, s12_6: false, s12_7: true, s12_8: true, s12_9: true, s12_10: true } },
     c13: { main: false, sub: { s13_1: false, s13_2: false, s13_3: false, s13_4: false, s13_5: false, s13_6: false, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },
    }
  },
  extended: {
    house: {
      c0:{main: true, sub:{s0_1:true}},
      c1: { main: true, sub: { s1_1: true, s1_2: true, s1_3: true, s1_4: true, s1_5: true, s1_6: true, s1_7: true, s1_8: true, s1_9: true, s1_10: true } },
      c2: { main: true, sub: { s2_1: true, s2_2: true, s2_3: true, s2_4: true, s2_5: true, s2_6: true, s2_7: true, s2_8: true, s2_9: true, s2_10: true } },
      c3: { main: true, sub: { s3_1: true, s3_2: true, s3_3: true, s3_4: true, s3_5: true, s3_6: true, s3_7: true, s3_8: true, s3_9: true, s3_10: true } },
      c4: { main: true, sub: { s4_1: true, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: true, s4_7: true, s4_8: true, s4_9: true, s4_10: true } },
      c5: { main: true, sub: { s5_1: true, s5_2: true, s5_3: true, s5_4: true, s5_5: true, s5_6: true, s5_7: true, s5_8: true, s5_9: true, s5_10: true } },
    c6: { main: true, sub: { s6_1: true, s6_2: true, s6_3: true, s6_4: true, s6_5: true, s6_6: true, s6_7: true, s6_8: true, s6_9: true, s6_10: true } },
    c7: { main: true, sub: { s7_1: true, s7_2: true, s7_3: true, s7_4: true, s7_5: true, s7_6: true, s7_7: true, s7_8: true, s7_9: true, s7_10: true } },
    c8: { main: true, sub: { s8_1: true, s8_2: true, s8_3: true, s8_4: true, s8_5: true, s8_6: true, s8_7: true, s8_8: true, s8_9: true, s8_10: true } },
    c9: { main: true, sub: { s9_1: true, s9_2: true, s9_3: true, s9_4: true, s9_5: true, s9_6: true, s9_7: true, s9_8: true, s9_9: true, s9_10: true } },
    c10: { main: true, sub: { s10_1: true, s10_2: true, s10_3: true, s10_4: true, s10_5: true, s10_6: true, s10_7: true, s10_8: true, s10_9: true, s10_10: true } },
    c11: { main: true, sub: { s11_1: true, s11_2: true, s11_3: true, s11_4: true, s11_5: true, s11_6: true, s11_7: true, s11_8: true, s11_9: true, s11_10: true } },
    c12: { main: true, sub: { s12_1: true, s12_2: true, s12_3: true, s12_4: true, s12_5: true, s12_6: true, s12_7: true, s12_8: true, s12_9: true, s12_10: true } },
    c13: { main: true, sub: { s13_1: true, s13_2: true, s13_3: true, s13_4: true, s13_5: true, s13_6: true, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },

    },
    apartment: {
      c0:{main: true, sub:{s0_1:true}},
      c1: { main: true, sub: { s1_1: false, s1_2: false, s1_3: true, s1_4: false, s1_5: true, s1_6: true, s1_7: false, s1_8: false, s1_9: false, s1_10: false } },
     c2: { main: true, sub: { s2_1: false, s2_2: true, s2_3: false, s2_4: true, s2_5: false, s2_6: false, s2_7: false, s2_8: false, s2_9: true, s2_10: true } },
      c3: { main: false, sub: { s3_1: false, s3_2: false, s3_3: false, s3_4: false, s3_5: false, s3_6: false, s3_7: false, s3_8: false, s3_9: false, s3_10: false } },
      c4: { main: true, sub: { s4_1: true, s4_2: true, s4_3: true, s4_4: true, s4_5: true, s4_6: true, s4_7: true, s4_8: true, s4_9: true, s4_10: true } },
       c5: { main: true, sub: { s5_1: true, s5_2: true, s5_3: true, s5_4: true, s5_5: true, s5_6: true, s5_7: true, s5_8: true, s5_9: true, s5_10: true } },
      c6: { main: true, sub: { s6_1: true, s6_2: true, s6_3: true, s6_4: true, s6_5: true, s6_6: true, s6_7: true, s6_8: true, s6_9: true, s6_10: true } },
     c7: { main: true, sub: { s7_1: true, s7_2: true, s7_3: true, s7_4: true, s7_5: true, s7_6: true, s7_7: true, s7_8: true, s7_9: true, s7_10: true } },
     c8: { main: true, sub: { s8_1: true, s8_2: true, s8_3: true, s8_4: true, s8_5: true, s8_6: true, s8_7: true, s8_8: true, s8_9: true, s8_10: true } },
       c9: { main: true, sub: { s9_1: true, s9_2: true, s9_3: true, s9_4: true, s9_5: true, s9_6: true, s9_7: true, s9_8: true, s9_9: true, s9_10: true } },
      c10: { main: true, sub: { s10_1: true, s10_2: true, s10_3: true, s10_4: true, s10_5: true, s10_6: true, s10_7: true, s10_8: true, s10_9: true, s10_10: true } },
     c11: { main: true, sub: { s11_1: true, s11_2: true, s11_3: true, s11_4: true, s11_5: true, s11_6: true, s11_7: true, s11_8: true, s11_9: true, s11_10: true } },
      c12: { main: false, sub: { s12_1: false, s12_2: false, s12_3: false, s12_4: false, s12_5: false, s12_6: false, s12_7: true, s12_8: true, s12_9: true, s12_10: true } },
      c13: { main: true, sub: { s13_1: true, s13_2: true, s13_3: true, s13_4: true, s13_5: true, s13_6: true, s13_7: true, s13_8: true, s13_9: true, s13_10: true } },
    }
  }
}



let selectedType = 'house';
let selectedSize = 'medium';
let selectedPackage = 'standard';


updatePackage(); 
calcTotal();


function calcTotal() {
      let totalObject={};
      let total = 0;

      document.querySelectorAll('.calc__child-checkbox').forEach(b => {
        let splt = b.id.replace("s", "").split("_");
        let category = "c" + splt[0];
        if (category in totalObject) {

        } else {
            totalObject[category] = 0;
        }
        if (b.checked ) {
            let t = pricing["price"][category][selectedType][selectedSize] * priceStructure[b.id];
            total = total + t;
            totalObject[category]+= t;
        } 
    });

    console.log(totalObject);
    console.log(total);
    document.getElementById('priceDisplay').textContent = Math.round(total);

    document.querySelectorAll('.calc__extra-price').forEach(p => {
        let category = p.id.split("-")[1];
        p.textContent = "€" + Math.round(totalObject[category]);
        //console.log(category + " " + selectedType + " " + selectedSize + " €" + pricing["price"][category][selectedType][selectedSize]);
    });
}


// function updatePrice() { // util assign prices per category next to category checkbox
//     document.querySelectorAll('.calc__extra-price').forEach(p => {
//         let category = p.id.split("-")[1];
//         p.textContent = "€" + pricing["price"][category][selectedType][selectedSize];
//         //console.log(category + " " + selectedType + " " + selectedSize + " €" + pricing["price"][category][selectedType][selectedSize]);
//     });
// }

function updateBoxes(box) { // triggered with input change, updates checkboxes based on selected package and type
    // console.log(box.id)
    // console.log(box.value)
    // console.log(box.checked)
    let boxtype = box.id.charAt(0);
    if (boxtype == "c") {
        toggleChildBoxes(box.id, box.checked); // cat, state
    }
    else if (boxtype == "s") {
        let category = "c" + box.id.replace("s", "").split("_")[0];
        let isAnyChildCheckedResult = isAnyChildChecked(category);
        // console.log(box.checked);
        // console.log(isAnyChildCheckedResult);
        if (box.checked || isAnyChildCheckedResult) {
            document.getElementById(category).checked = true;
        } else if (!box.checked && !isAnyChildCheckedResult) {
            document.getElementById(category).checked = false;
        } else {
            console.log("ERROR2");
        }
    }
    else {
        console.log("ERROR ")
    }
    calcTotal(); 
}

function isAnyChildChecked(cat) { // util
    let ischecked = false;
    document.querySelectorAll('.calc__child-checkbox').forEach(b => {
        let splt = b.id.replace("s", "").split("_");
        let category = "c" + splt[0];   
        // console.log(cat + " " + category);
        if (category == cat) {
            if (b.checked){
                ischecked = true;                
            }
        }
    });
    return ischecked;
}

function toggleChildBoxes(cat, state) { // util
    console.log(cat);
    let targetCategory = cat.slice(1);
    document.querySelectorAll('.calc__child-checkbox').forEach(b => {
        let splt = b.id.replace("s", "").split("_");
        let category = "c" + splt[0];        
        if (category == cat) {
            if (state == false) {
                b.checked = false;
            } else {
                if (!b.disabled) {
                    //b.checked = packages[selectedPackage][selectedType][category]["sub"][b.id]; // check if included in the package
                    b.checked = works[selectedType][category]["sub"][b.id];
                } else {
                    console.log("disabled " + b.id);
                    b.checked = false;
                }
            }
        }
    });



}

function updatePackage() { // put checkboxes based on seelcted package
    //console.log("updatePackage")
    document.querySelectorAll('.calc__parent-checkbox').forEach(w => {
        if (!w.disabled) {
            w.checked = packages[selectedPackage][selectedType][w.id]["main"];
        } else {
            console.log("disabled " + w.id);
             w.checked = false;
        }
    });
    document.querySelectorAll('.calc__child-checkbox').forEach(w => {
        let splt = w.id.replace("s", "").split("_");
        let category = "c" + splt[0];
        if (!w.disabled) {
            w.checked = packages[selectedPackage][selectedType][category]["sub"][w.id];
        } else {
            console.log("disabled " + w.id);
            w.checked = false;
        }
        // w.disabled = !(works[selectedType][category]["sub"][w.id]);
    });

     calcTotal() ; 
}








function updateWorks() { //hide or show categories and subcategories based on selected type
    document.querySelectorAll('.calc__parent-checkbox').forEach(w => {
        w.disabled = !(works[selectedType][w.id]["main"]);
        let p1 = w.parentElement; // label
        let p2 = p1.parentElement; // div
        let button = p1.nextElementSibling;
        if (works[selectedType][w.id]["main"]) {
            p2.style.display = 'flex';
            p2.style.visibility = 'visible';
        } else {
            p2.style.display = 'none';
            p2.style.visibility = 'hidden';
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            if (isExpanded) toggleInspectionCategory(button);
        }

    });
    document.querySelectorAll('.calc__child-checkbox').forEach(w => {
        let splt = w.id.replace("s", "").split("_");
        // console.log(splt);
        let category = "c" + splt[0];
        w.disabled = !(works[selectedType][category]["sub"][w.id]);
    });

     calcTotal() ; 
}


// function updateCategories(){ //
//     document.querySelectorAll('.calc__extra-price').forEach(p => {
//         console.log(p.id);
//         let category = p.id.split("-")[1];   
//         console.log(category);        
//         p.textContent = "€"+pricing["price"][category][selectedType][selectedSize];
//     });
// }


 

function selectPackage(el, package) { // toggle buttons
        document.querySelectorAll('.calc__package-radio-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    selectedPackage = package;
    updatePackage();

    //updatePrice();
calcTotal();
}


function selectType(el, type) { // toggle buttons
  document.querySelectorAll('.calc__house-radio-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  selectedType = type;
  // console.log(selectedType);

  if (selectedType === 'apartment') {
    document.getElementById("btn_small").innerHTML = "Small <br> (<100 m2)";
    document.getElementById("btn_medium").innerHTML = "Medium <br>(100-200 m2)";
    document.getElementById("btn_large").innerHTML = "Large <br>(200-300 m2)";
  } else {
        document.getElementById("btn_small").innerHTML = "Small <br>(<150 m2)";
    document.getElementById("btn_medium").innerHTML = "Medium <br>(150-300 m2)";
    document.getElementById("btn_large").innerHTML = "Large <br>(300-500 m2)";
  }


  updateWorks();
  updatePackage();
  //updatePrice();
  calcTotal();
}


  function selectSize(el, size) { // toggle buttons
    document.querySelectorAll('.calc__size-radio-btn').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    selectedSize = size;
    // console.log(selectedSize);
    updatePackage();
    //updatePrice();
    //updateCalc();
    calcTotal();
  }


window.onload = function() {
  console.log("OnLOAD")
  window.scrollTo(0, 0);
};


window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const max = 0.3 * window.innerHeight;
    const real_progress = scroll / max;
    const progress = Math.min(scroll / max, 1);
    const reveal = 100 - (progress * 100);
    const threshold = 1.3; // Adjust this value to control when the fade-out starts

    bg2.style.clipPath = `inset(${reveal}% 0 0 0)`;
    if (real_progress <= 1) {
        bg2.style.opacity = 1;
        bg1.style.opacity = 1;
   
    }
    else if (real_progress > 1 && real_progress <= threshold) {
        //bg2.style.opacity = (1 - (real_progress - 1) / (threshold - 1));
        bg1.style.opacity = 0;
        bg2.style.opacity = (1 - (real_progress - 1) / (threshold - 1));
      
    } else {
        bg2.style.opacity = 0;
        bg1.style.opacity = 0;
       
    }
});


  /* ---- FAQ accordion ---- */
  function toggleFAQ(el) {
    const item = el.parentElement;
    const wasOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  }



const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    console.log("menuToggle clicked");
    navLinks.classList.toggle('active');
});



// document.querySelectorAll('.toggle-btn').forEach(button => {

//     button.addEventListener('click', () => {
//         console.log('Toggle button clicked');
//         const parent = button.parentElement;
//         const next = button.nextElementSibling;
//         console.log(parent.id);
//         console.log(next.id);
//         const submenu = next;
//         console.log(submenu.id);
//         const isExpanded = button.getAttribute('aria-expanded') === 'true';

//         // Toggle expansion state
//         button.setAttribute('aria-expanded', !isExpanded);
//         console.log (button.classList);

//         if (isExpanded) {button.classList.add('open');} else {button.classList.remove('open')}
//         console.log (button.classList);
//         submenu.hidden = isExpanded;
//     });
// });


function toggleInspectionCategory(button) { // expand contract inspection categy
    // console.log('Toggle button clicked');
    const parent = button.parentElement;
    const next = button.nextElementSibling;
    // console.log(button.classList);
    const submenu = next;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    // console.log(button.classList);
    if (isExpanded) {
        button.classList.remove('calc_open');
    } else { button.classList.add('calc_open') }
    // console.log(button.classList);
    submenu.hidden = isExpanded;
}




// function updateCalc() {
//     // const size = parseInt(document.getElementById('sizeSlider').value);
//     // document.getElementById('sizeDisplay').textContent = size;

//     // console.log("ST " + selectedType);
//     // console.log("SS " + selectedSize);

    
//     // let total = base + Math.max(0, size - 60) * perM2;

//     // // Add extras
//     // document.querySelectorAll('.calc__extra input[type=checkbox]').forEach(cb => {
//     //     if (cb.checked) {
//     //         total += parseInt(cb.value);
//     //         cb.closest('.calc__extra').classList.add('selected');
//     //     } else {
//     //         cb.closest('.calc__extra').classList.remove('selected');
//     //     }
//     // });

//     // document.getElementById('priceDisplay').textContent = Math.round(total);
// }



