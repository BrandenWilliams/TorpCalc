const shipData = [
    {
        shipid: 0,
        name: "Default",
        length: 150,
        mass: 30,
        tons: 2866
    },
    {
        gid: 20,
        shipid: 1,
        name: "Light Merchant Type 1",
        length: 96,
        mass: 33,
        tons: 2866
    },
    {
        gid: 10,
        shipid: 2,
        name: "Light Merchant Type 2",
        length: 80,
        mass: 29,
        tons: 2155
    },
    {
        gid: 3,
        shipid: 3,
        name: "Light Merchant Type 3",
        length: 75,
        mass: 19,
        tons: 1450,
    },
    {
        gid: 1,
        shipid: 4,
        name: "Light Merchant Type 4",
        length: 75,
        mass: 21,
        tons: 1240,
    },
    {
        gid:9,
        shipid: 5,
        name: "Light Merchant Type 5",
        length: 87,
        mass: 18,
        tons: 2152
    },
    {
        gid: 30,
        shipid: 8,
        name: "Light Merchant Type 8",
        length: 87,
        mass: 15,
        tons: 3020
    },
    {
        gid: 32,
        shipid: 9,
        name: "Light Merchant Type 9",
        length: 94,
        mass: 23,
        tons: 3100
    },
    {
        gid: 6,
        shipid: 10,
        name: "Light Merchant Type 10", 
        length: 75,
        mass: 19,
        tons: 2100
    },
    {
        gid: 11,
        shipid: 11,
        name: "Light Merchant Type 11",
        length: 86,
        mass: 22,
        tons: 2350
    },
    {
        gid: 21,
        shipid: 12,
        name: "Light Merchant Type 12",
        length: 98,
        mass: 27,
        tons: 2870
    },
    {
        gid: 5,
        shipid: 13, 
        name: "Light Merchant Type 13",
        length: 79,
        mass: 22,
        tons: 1984
    },
    {
        gid: 15,
        shipid: 14,
        name: "Light Merchant Type 14",
        length: 89,
        mass: 26,
        tons: 2478
    },
    {
        gid: 25,
        shipid: 15,
        name: "Light Merchant Type 15",
        length: 95,
        mass: 28,
        tons: 2982
    },
    {
        gid: 22,
        shipid: 16,
        name: "Light Merchant Type 16",
        length: 81,
        mass: 20,
        tons: 874
    },
    {
        gid: 29,
        shipid: 17,
        name: "Light Merchant Type 17",
        length: 81,
        mass: 21,
        tons: 3005
    },
    {
        gid: 2,
        shipid: 18,
        name: "Light Merchant Type 18", 
        length: 81,
        mass: 21,
        tons: 1243
    },
    {
        gid: 33,
        shipid: 19,
        name: "Light Merchant Type 19",
        length: 99,
        mass: 23,
        tons: 3118
    },
    {
        gid: 34,
        shipid: 20,
        name: "Light Merchant Type 20",
        length: 91,
        mass: 17,
        tons: 3118
    },
    {
        gid: 7,
        shipid: 21,
        name: "Light Merchant Type 21",
        length: 87,
        mass: 23,
        tons: 2106
    },
    {
        gid: 24,
        shipid: 22,
        name: "Light Merchant Type 22",
        length: 92,
        mass: 26,
        tons: 2964
    },
    {
        gid: 28,
        shipid: 23,
        name: "Light Merchant Type 23",
        length: 82,
        mass: 23,
        tons: 2998
    },
    {
        gid: 23,
        shipid: 24,
        name: "Light Merchant Type 24",
        length: 91,
        mass: 28,
        tons: 2891
    },
    {
        gid: 36,
        shipid: 25,
        name: "Light Merchant Type 25",
        length: 98,
        mass: 27,
        tons: 3190
    },
    {
        gid: 18,
        shipid: 26,
        name: "Light Merchant Type 26",
        length: 92,
        mass: 30,
        tons: 2759
    },
    {
        gid: 35,
        shipid: 27,
        name: "Light Merchant Type 27",
        length: 98,
        mass: 26,
        tons: 3119
    },
    {
        gid: 19,
        shipid: 28,
        name: "Light Merchant Type 28",
        length: 87,
        mass: 23,
        tons: 2793
    },
    {
        gid: 27,
        shipid: 29,
        name: "Light Merchant Type 29",
        length: 92,
        mass: 24,
        tons: 2991
    },
    {
        gid:8,
        shipid: 30,
        name: "Light Merchant Type 30",
        length: 87,
        mass: 21,
        tons: 2116
    },
    {
        gid: 4,
        shipid: 31,
        name: "Light Merchant Type 31",
        length: 75, 
        mass: 21,
        tons: 1964,
    },
    {
        gid: 16,
        shipid: 32,
        name: "Light Merchant Type 32",
        length: 75,
        mass: 19,
        tons: 2647
    },
    {
        gid: 17,
        shipid: 33,
        name: "Light Merchant Type 33",
        length: 78,
        mass: 18,
        tons: 2647
    },
    {
        gid: 26,
        shipid: 34,
        name: "Light Merchant Type 34",
        length: 89,
        mass: 29,
        tons: 2989
    },
    {
        gid: 37,
        shipid: 35,
        name: "Light Merchant Type 35",
        length: 95,
        mass: 25,
        tons: 3287
    },
    {
        gid: 12,
        shipid: 37,
        name: "Light Merchant Type 37",
        length: 75,
        mass: 21,
        tons: 2356
    },
    {
        gid: 13,
        shipid: 38,
        name: "Light Merchant Type 38",
        length: 75,
        mass: 18,
        tons: 2356

    },
    {
        gid: 14,
        shipid: 40,
        name: "Light Merchant Type 40",
        length: 82,
        mass: 23,
        tons: 2436
    },
    {
        gid: 31,
        shipid: 41,
        name: "Light Merchant Type 41",
        length: 94,
        mass: 27,
        tons: 3058
    },

    // ******************** MEDIUM TANKER *************************

    {
        gid: 51,
        shipid: 42,
        name: "Medium Tanker type 1",
        length: 120,
        mass: 36,
        tons: 5018
    }, // 51 M TNK – 1 L 120 M/H 36 5018
    {
        gid: 52,
        shipid: 43,
        name: "Medium Tanker type 2",
        length: 111,
        mass: 36,
        tons: 5018
    }, // 52 M TNK – 2 L 111 M/H 36 5018 
    {
        gid: 53,
        shipid: 44,
        name: "Medium Tanker type 3",
        length: 114,
        mass: 35,
        tons: 5018
    }, // 53 M TNK – 3 L 114 M/H 35 5018 
    {
        gid: 66,
        shipid: 45,
        name: "Medium Tanker type 5",
        length: 118,
        mass: 43,
        tons: 6046
    }, // 66 M TNK – 5 L 118 M/H 43 6046 
    {
        gid: 50,
        shipid: 46,
        name: "Medium Tanker type 10",
        length: 115,
        mass: 35,
        tons: 4978
    },// 50 M TNK – 10 L 115 M/H 35 4978
    {
        gid: 58,
        shipid: 47,
        name: "Medium Tanker type 12",
        length: 116,
        mass: 44,
        tons: 5729
    }, // 58 M TNK – 12 L 116 M/H 44 5729
    {
        gid: 79,
        shipid: 48,
        name: "Medium Tanker type 14",
        length: 118,
        mass: 34,
        tons: 8027
    }, // 79 M TNK – 14 L 118 M/H 34 8027
    {
        gid: 80,
        shipid: 49,
        name: "Medium Tanker type 15",
        length: 122,
        mass: 44,
        tons: 8064
    }, // 80 M TNK – 15 L 122 M/H 44 8064
    {
        gid: 75,
        shipid: 50,
        name: "Medium Tanker type 16",
        length: 123,
        mass: 44,
        tons: 7483
    }, // 75 M TNK – 16 L 123 M/H 44 7483
    {
        gid: 71,
        shipid: 51,
        name: "Medium Tanker type 18",
        length: 124,
        mass: 42,
        tons: 7034
    }, // 71 M TNK – 18 L 124 M/H 42 7034 
    {
        gid: 73,
        shipid: 52,
        name: "Medium Tanker type 19",
        length: 125,
        mass: 36,
        tons: 7254
    }, // 73 M TNK – 19 L 125 M/H 36 7254 
    {
        gid: 72,
        shipid: 53,
        name: "Medium Tanker type 20",
        length: 125,
        mass: 36,
        tons: 7037
    }, // 72 M TNK – 20 L 125 M/H 36 7037 
    {
        gid: 63,
        shipid: 54,
        name: "Medium Tanker type 21",
        length: 120,
        mass: 34,
        tons: 5936
    }, // 63 M TNK – 21 L 120 M/H 34 5936
    {
        gid: 61,
        shipid: 55,
        name: "Medium Tanker type 23",
        length: 117,
        mass: 29,
        tons: 5838
    }, // 61 M TNK – 23 L 117 M/H 29 5838
    {
        gid: 65,
        shipid: 56,
        name: "Medium Tanker type 24",
        length: 116,
        mass: 36,
        tons: 5947
    }, // 65 M TNK – 24 L 116 M/H 36 5947 
    {
        gid: 67,
        shipid: 57,
        name: "Medium Tanker type 25",
        length: 116,
        mass: 35,
        tons: 6067
    }, // 67 M TNK – 25 L 116 M/H 35 6067
    {
        gid: 70,
        shipid: 58,
        name: "Medium Tanker type 27",
        length: 119,
        mass: 40,
        tons: 6436
    }, // 70 M TNK – 27 L 119 M/H 40 6436 
    {
        gid: 68,
        shipid: 59,
        name: "Medium Tanker type 28",
        length: 122,
        mass: 35,
        tons: 6205
    }, // 68 M TNK – 28 L 122 M/H 35 6205
    {
        gid: 59,
        shipid: 60,
        name: "Medium Tanker type 29",
        length: 123,
        mass: 35,
        tons: 5738
    }, // 59 M TNK – 29 L 123 M/H 35 5738
    {
        gid: 69,
        shipid: 61,
        name: "Medium Tanker type 31",
        length: 122,
        mass: 45,
        tons: 6352
    }, // 69 M TNK – 31 L 122 M/H 45 6352
    {
        gid: 57,
        shipid: 62,
        name: "Medium Tanker type 32",
        length: 120,
        mass: 36,
        tons: 5375
    }, // 57 M TNK – 32 L 120 M/H 36 5375
    {
        gid: 64,
        shipid: 63,
        name: "Medium Tanker type 33",
        length: 118,
        mass: 31,
        tons: 5936
    }, // 64 M TNK – 33 L 118 M/H 31 5936
    {
        gid: 62,
        shipid: 64,
        name: "Medium Tanker type 35",
        length: 119,
        mass: 35,
        tons: 5930
    }, // 62 M TNK – 35 L 119 M/H 35 5930
    {
        gid: 56,
        shipid: 65,
        name: "Medium Tanker type 36",
        length: 119,
        mass: 44,
        tons: 5298
    }, // 56 M TNK – 36 L 119 M/H 44 5298  
    {
        gid: 55,
        shipid: 66,
        name: "Medium Tanker type 39",
        length: 124,
        mass: 35,
        tons: 5289
    }, // 55 M TNK – 39 L 124 M/H 35 5289
    {
        gid: 49,
        shipid: 67,
        name: "Medium Tanker type 40",
        length: 122,
        mass: 28,
        tons: 4957
    },// 49 M TNK – 40 L 122 M/H 28 4957 
    {
        gid: 46,
        shipid: 68,
        name: "Medium Tanker type 41",
        length: 122,
        mass: 34,
        tons: 4527
    }, // 46 M TNK – 41 L 122 M/H 34 4527 
    {
        gid: 54,
        shipid: 69,
        name: "Medium Tanker type 42",
        length: 123,
        mass: 26,
        tons: 5039
    }, // 54 M TNK – 42 L 123 M/H 26 5039 
    {
        gid: 74,
        shipid: 70,
        name: "Medium Tanker type 44",
        length: 125,
        mass: 32,
        tons: 7398
    }, // 74 M TNK – 44 L 125 M/H 32 7398
    {
        gid: 76,
        shipid: 71,
        name: "Medium Tanker type 48",
        length: 117,
        mass: 39,
        tons: 7487
    }, // 76 M TNK – 48 L 117 M/H 39 7487
    {
        gid: 77,
        shipid: 72,
        name: "Medium Tanker type 49",
        length: 117,
        mass: 39,
        tons: 7594
    }, // 77 M TNK – 49 L 117 M/H 39 7594
    {
        gid: 60,
        shipid: 73,
        name: "Medium Tanker type 52",
        length: 123,
        mass: 33,
        tons: 5784
    },// 60 M TNK – 52 L 123 M/H 33 5784
    {
        gid: 47,
        shipid: 74,
        name: "Medium Tanker type 55",
        length: 125,
        mass: 36,
        tons: 4837
    }, // 47 M TNK – 55 L 125 M/H 36 4837 
    {
        gid: 48,
        shipid: 75,
        name: "Medium Tanker type 56",
        length: 122,
        mass: 39,
        tons: 4837
    },// 48 M TNK – 56 L 122 M/H 39 4837 
    {
        gid: 78,
        shipid: 76,
        name: "Medium Tanker type 59",
        length: 124,
        mass: 42,
        tons: 7846
    },// 78 M TNK – 59 L 124 M/H 42 7846

    // ******************** PASSENGER LINERS *************************

    {
        gid: 85,
        shipid: 77,
        name: "Passenger Liner Type 4",
        length: 165,
        mass: 39,
        tons: 14528
    },// 85 Passenger Liner Type 4 L165 M/H 39 14528
    {
        gid: 86,
        shipid: 78,
        name: "Passenger Liner Type 5",
        length: 170,
        mass: 38,
        tons: 15056
    },// 86 Passenger Liner Type 5 L170 M/H 38 15056
    {
        gid: 82,
        shipid: 79,
        name: "Passenger Liner Type 6",
        length: 150,
        mass: 36,
        tons: 12647
    }, // 82 Passenger Liner Type 6 L150 M/H 36 12647 
    {
        gid: 83,
        shipid: 80,
        name: "Passenger Liner Type 7",
        length: 162,
        mass: 39,
        tons: 13537
    },// 83 Passenger Liner Type 7 L162 M/H 39 13537
    {
        gid: 84,
        shipid: 81,
        name: "Passenger Liner Type 8",
        length: 140,
        mass: 30,
        tons: 13855
    },// 84 Passenger Liner Type 8 L140 M/H 30 13855

    // ********************HEAVY FIGHTER START *************

    {
        gid: 96,
        shipid: 82,
        name: "Heavy Freighter Type 1",
        length: 130,
        mass: 36,
        tons: 6545
    }, // 96 Heavy Freighter Type 1 L 130 M/H 36 6545
    {
        gid: 97,
        shipid: 83,
        name: "Heavy Freighter Type 2",
        length: 143,
        mass: 29,
        tons: 6545
    }, // 97 Heavy Freighter Type 2 L 143 M/H 29 6545
    {
        gid: 98,
        shipid: 84,
        name: "Heavy Freighter Type 3",
        length: 165,
        mass: 29,
        tons: 6545
    },// 98 Heavy Freighter Type 3 L 165 M/H 29 6545 
    {
        gid: 115,
        shipid: 85,
        name: "Heavy Freighter Type 4",
        length: 135,
        mass: 28,
        tons: 8432
    },// 115 Heavy Freighter Type 4 L 135 M/H 28 8432
    {
        gid: 129,
        shipid: 86,
        name: "Heavy Freighter Type 5",
        length: 134,
        mass: 34,
        tons: 9121
    },// 129 Heavy Freighter Type 5 L 134 M/H 34 9121  
    {
        gid: 130,
        shipid: 87,
        name: "Heavy Freighter Type 6",
        length: 145,
        mass: 41,
        tons: 9402
    },// 130 Heavy Freighter Type 6 L 145 M/H 41 9402
    {
        gid: 121,
        shipid: 88,
        name: "Heavy Freighter Type 7",
        length: 132,
        mass: 34,
        tons: 8795
    },// 121 Heavy Freighter Type 7 L 132 M/H 34 8795
    {
        gid: 127,
        shipid: 89,
        name: "Heavy Freighter Type 8",
        length: 145,
        mass: 28,
        tons: 8938
    },// 127 Heavy Freighter Type 8 L 145 M/H 28 8938
    {
        gid: 84,
        shipid: 90,
        name: "Heavy Freighter Type 9",
        length: 134,
        mass: 37,
        tons: 8464
    }, // 84 Heavy Freighter Type 9 L 134 M/H 37 8462
    {
        gid: 106,
        shipid: 91,
        name: "Heavy Freighter Type 10",
        length: 128,
        mass: 34,
        tons: 7372
    },// 106 Heavy Freighter Type 10 L 128 M/H 34 7372
    {
        gid: 84,
        shipid: 92,
        name: "Heavy Freighter Type 11",
        length: 142,
        mass: 35,
        tons: 8272
    },// 112 Heavy Freighter Type 11 L 142 M/H 35 8272
    {
        gid: 104,
        shipid: 93,
        name: "Heavy Freighter Type 12",
        length: 125,
        mass: 35,
        tons: 7295
    }, // 104 Heavy Freighter Type 12 L 125 M/H 35 7295
    {
        gid: 120,
        shipid: 94,
        name: "Heavy Freighter Type 13",
        length: 138,
        mass: 37,
        tons: 8748
    },// 120 Heavy Freighter Type 13 L 138 M/H 37 8748
    {
        gid: 116,
        shipid: 95,
        name: "Heavy Freighter Type 14",
        length: 137,
        mass: 35,
        tons: 8463
    },// 116 Heavy Freighter Type 14 L 137 M/H 35 8463
    {
        gid: 114,
        shipid: 96,
        name: "Heavy Freighter Type 15",
        length: 138,
        mass: 40,
        tons: 8386
    },// 114 Heavy Freighter Type 15 L 138 M/H 40 8386
    {
        gid: 109,
        shipid: 97,
        name: "Heavy Freighter Type 16",
        length: 125,
        mass: 41,
        tons: 7835
    },// 109 Heavy Freighter Type 16 L 125 M/H 41 7835
    {
        gid: 102,
        shipid: 98,
        name: "Heavy Freighter Type 17",
        length: 128,
        mass: 34,
        tons: 7254
    },// 102 Heavy Freighter Type 17 L 128 M/H 34 7254
    {
        gid: 101,
        shipid: 99,
        name: "Heavy Freighter Type 18",
        length: 124,
        mass: 35,
        tons: 7129
    },// 101 Heavy Freighter Type 18 L 124 M/H 35 7129
    {
        gid: 111,
        shipid: 100,
        name: "Heavy Freighter Type 19",
        length: 135,
        mass: 36,
        tons: 8068
    },// 111 Heavy Freighter Type 19 L 135 M/H 36 8068
    {
        gid: 126,
        shipid: 101,
        name: "Heavy Freighter Type 20",
        length: 137,
        mass: 41,
        tons: 8925
    },// 126 Heavy Freighter Type 20 L 137 M/H 41 8925
    {
        gid: 108,
        shipid: 102,
        name: "Heavy Freighter Type 21",
        length: 130,
        mass: 39,
        tons: 7438
    },// 108 Heavy Freighter Type 21 L 130 M/H 39 7438
    {
        gid: 119,
        shipid: 103,
        name: "Heavy Freighter Type 22",
        length: 139,
        mass: 38,
        tons: 8548
    },// 119 Heavy Freighter Type 22 L 139 M/H 38 8548
    {
        gid: 131,
        shipid: 104,
        name: "Heavy Freighter Type 23",
        length: 142,
        mass: 33,
        tons: 9482
    },// 131 Heavy Freighter Type 23 L 142 M/H 33 9482
    {
        gid: 117,
        shipid: 105,
        name: "Heavy Freighter Type 24",
        length: 132,
        mass: 34,
        tons: 8472
    },// 117 Heavy Freighter Type 24 L 132 M/H 34 8472
    {
        gid: 128,
        shipid: 106,
        name: "Heavy Freighter Type 25",
        length: 141,
        mass: 44,
        tons: 9015
    },// 128 Heavy Freighter Type 25 L 141 M/H 44 9015 
    {
        gid: 91,
        shipid: 107,
        name: "Heavy Freighter Type 26",
        length: 109,
        mass: 29,
        tons: 5012
    },// 91 Heavy Freighter Type 26 L 109 M/H 29 5012  
    {
        gid: 92,
        shipid: 108,
        name: "Heavy Freighter Type 27",
        length: 115,
        mass: 33,
        tons: 6015
    }, // 92 Heavy Freighter Type 27 L 115 M/H 33 6015
    {
        gid: 100,
        shipid: 109,
        name: "Heavy Freighter Type 28",
        length: 165,
        mass: 29,
        tons: 6545
    },// 100 Heavy Freighter Type 28 L 111 M/H 34 7019
    {
        gid: 99,
        shipid: 110,
        name: "Heavy Freighter Type 29",
        length: 117,
        mass: 27,
        tons: 6915
    },// 99 Heavy Freighter Type 29 L 117 M/H 27 6915
    {
        gid: 118,
        shipid: 111,
        name: "Heavy Freighter Type 30",
        length: 122,
        mass: 28,
        tons: 8518
    },// 118 Heavy Freighter Type 30 L 122 M/H 28 8518
    {
        gid: 125,
        shipid: 112,
        name: "Heavy Freighter Type 31",
        length: 122,
        mass: 34,
        tons: 8915
    },// 125 Heavy Freighter Type 31 L 122 M/H 34 8915
    {
        gid: 113,
        shipid: 113,
        name: "Heavy Freighter Type 32",
        length: 132,
        mass: 35,
        tons: 8367
    },// 113 Heavy Freighter Type 32 L 132 M/H 35 8367
    {
        gid: 110,
        shipid: 114,
        name: "Heavy Freighter Type 33",
        length: 136,
        mass: 36,
        tons: 7925
    },// 110 Heavy Freighter Type 33 L 128 M/H 36 7925
    {
        gid: 123,
        shipid: 115,
        name: "Heavy Freighter Type 34",
        length: 130,
        mass: 35,
        tons: 8912
    },// 123 Heavy Freighter Type 34 L 130 M/H 35 8912 
    {
        gid: 122,
        shipid: 116,
        name: "Heavy Freighter Type 35",
        length: 138,
        mass: 39,
        tons: 8816
    },// 122 Heavy Freighter Type 35 L 138 M/H 39 8816  
    {
        gid: 132,
        shipid: 117,
        name: "Heavy Freighter Type 36",
        length: 144,
        mass: 26,
        tons: 9518
    },// 132 Heavy Freighter Type 36 L 144 M/H 26 9518
    {
        gid: 135,
        shipid: 118,
        name: "Heavy Freighter Type 37",
        length: 141,
        mass: 34,
        tons: 9816
    },// 135 Heavy Freighter Type 37 L 141 M/H 34 9816  
    {
        gid: 124,
        shipid: 119,
        name: "Heavy Freighter Type 38",
        length: 133,
        mass: 35,
        tons: 8914
    },// 124 Heavy Freighter Type 38 L 133 M/H 35 8914 
    {
        gid: 134,
        shipid: 120,
        name: "Heavy Freighter Type 39",
        length: 144,
        mass: 31,
        tons: 9547
    },// 134 Heavy Freighter Type 39 L 144 M/H 31 9547
    {
        gid: 105,
        shipid: 121,
        name: "Heavy Freighter Type 40",
        length: 130,
        mass: 36,
        tons: 7352
    },// 105 Heavy Freighter Type 40 L 130 M/H 36 7352 
    {
        gid: 103,
        shipid: 122,
        name: "Heavy Freighter Type 41",
        length: 137,
        mass: 36,
        tons: 7256
    },// 103 Heavy Freighter Type 41 L 137 M/H 36 7256
    {
        gid: 107,
        shipid: 123,
        name: "Heavy Freighter Type 42",
        length: 128,
        mass: 32,
        tons: 7375
    },// 107 Heavy Freighter Type 42 L 128 M/H 32 7375
    {
        gid: 93,
        shipid: 124,
        name: "Heavy Freighter Type 43",
        length: 120,
        mass: 35,
        tons: 6243
    }, // 93 Heavy Freighter Type 43 L 120 M/H 35 6243
    {
        gid: 93,
        shipid: 125,
        name: "Heavy Freighter Type 44",
        length: 124,
        mass: 35,
        tons: 6384
    },// 95 Heavy Freighter Type 44 L 124 M/H 35 6384
    {
        gid: 93,
        shipid: 126,
        name: "Heavy Freighter Type 45",
        length: 120,
        mass: 35,
        tons: 6243
    },// 94 Heavy Freighter Type 45 L 124 M/H 35 6363 
    {
        gid: 133,
        shipid: 127,
        name: "Heavy Freighter Type 46",
        length: 145,
        mass: 36,
        tons: 9543
    },// 133 Heavy Freighter Type 46 L 145 M/H 36 9543
    
    // *************** HEAVY TANKERS ****************

    {
        gid: 142,
        shipid: 128,
        name: "Heavy Tanker type 1",
        length: 142,
        mass: 26,
        tons: 12942
    },// 142 Heavy Tanker type 1 L 142 M/H 26 12942
    {
        gid: 138,
        shipid: 129,
        name: "Heavy Tanker type 2",
        length: 138,
        mass: 46,
        tons: 11445
    },// 138 Heavy Tanker type 2 L 138 M/H 46 11445
    {
        gid: 147,
        shipid: 130,
        name: "Heavy Tanker type 3",
        length: 145,
        mass: 49,
        tons: 13637
    },// 147 Heavy Tanker type 3 L 145 M/H 49 13637
    {
        gid: 140,
        shipid: 131,
        name: "Heavy Tanker type 4",
        length: 144,
        mass: 47,
        tons: 12738
    },// 140 Heavy Tanker type 4 L 144 M/H 47 12738
    {
        gid: 149,
        shipid: 132,
        name: "Heavy Tanker type 5",
        length: 140,
        mass: 35,
        tons: 13935
    },// 149 Heavy Tanker type 5 L 140 M/H 35 13935
    {
        gid: 155,
        shipid: 133,
        name: "Heavy Tanker type 6",
        length: 142,
        mass: 24,
        tons: 14365
    },// 155 Heavy Tanker type 6 L 142 M/H 24 14365
    {
        gid: 159,
        shipid: 134,
        name: "Heavy Tanker type 7",
        length: 150,
        mass: 40,
        tons: 14946
    }, // 159 Heavy Tanker type 7 L 150 M/H 40 14946
    {
        gid: 163,
        shipid: 135,
        name: "Heavy Tanker type 8",
        length: 152,
        mass: 41,
        tons: 15018
    },// 163 Heavy Tanker type 8 L 152 M/H 41 15018 
    {
        gid: 153,
        shipid: 136,
        name: "Heavy Tanker type 9",
        length: 149,
        mass: 37,
        tons: 14126
    },// 153 Heavy Tanker type 9 L 149 M/H 37 14126
    {
        gid: 145,
        shipid: 137,
        name: "Heavy Tanker type 10",
        length: 153,
        mass: 38,
        tons: 13636
    },// 145 Heavy Tanker type 10 L 153 M/H 38 13636
    {
        gid: 150,
        shipid: 138,
        name: "Heavy Tanker type 11",
        length: 155,
        mass: 37,
        tons: 13957
    },// 150 Heavy Tanker type 11 L 155 M/H 37 13957
    {
        gid: 158,
        shipid: 139,
        name: "Heavy Tanker type 12",
        length: 150,
        mass: 28,
        tons: 14923
    },// 158 Heavy Tanker type 12 L 150 M/H 28 14923
    {
        gid: 168,
        shipid: 140,
        name: "Heavy Tanker type 13",
        length: 145,
        mass: 28,
        tons: 15204
    },// 168 Heavy Tanker type 13 L 145 M/H 28 15204
    {
        gid: 150,
        shipid: 141,
        name: "Heavy Tanker type 14",
        length: 139,
        mass: 46,
        tons: 11209
    },// 137 Heavy Tanker type 14 L 139 M/H 46 11209
    {
        gid: 139,
        shipid: 142,
        name: "Heavy Tanker type 15",
        length: 134,
        mass: 43,
        tons: 12537
    },// 139 Heavy Tanker type 15 L 134 M/H 43 12537
    {
        gid: 136,
        shipid: 143,
        name: "Heavy Tanker type 16",
        length: 137,
        mass: 42,
        tons: 11099
    },// 136 Heavy Tanker type 16 L 137 M/H 42 11099
    {
        gid: 146,
        shipid: 144,
        name: "Heavy Tanker type 17",
        length: 132,
        mass: 44,
        tons: 13636
    },// 146 Heavy Tanker type 17 L 132 M/H 44 13636
    {
        gid: 154,
        shipid: 145,
        name: "Heavy Tanker type 18",
        length: 130,
        mass: 41,
        tons: 14254
    }, // 154 Heavy Tanker type 18 L 130 M/H 41 14254
    {
        gid: 166,
        shipid: 146,
        name: "Heavy Tanker type 19",
        length: 129,
        mass: 36,
        tons: 15098
    },// 166 Heavy Tanker type 19 L 129 M/H 36 15098
    {
        gid: 160,
        shipid: 147,
        name: "Heavy Tanker type 20",
        length: 125,
        mass: 47,
        tons: 14956
    },// 160 Heavy Tanker type 20 L 125 M/H 47 14956
    {
        gid: 143,
        shipid: 148,
        name: "Heavy Tanker type 21",
        length: 127,
        mass: 38,
        tons: 13386
    },// 143 Heavy Tanker type 21 L 127 M/H 38 13386
    {
        gid: 151,
        shipid: 149,
        name: "Heavy Tanker type 22",
        length: 125,
        mass: 34,
        tons: 14056
    },// 151 Heavy Tanker type 22 L 125 M/H 34 14056
    {
        gid: 162,
        shipid: 150,
        name: "Heavy Tanker type 23",
        length: 130,
        mass: 31,
        tons: 14994
    },// 162 Heavy Tanker type 23 L 130 M/H 31 14994
    {
        gid: 141,
        shipid: 151,
        name: "Heavy Tanker type 24",
        length: 142,
        mass: 37,
        tons: 12784
    },// 141 Heavy Tanker type 24 L 142 M/H 37 12784
    {
        gid: 156,
        shipid: 152,
        name: "Heavy Tanker type 25",
        length: 144,
        mass: 31,
        tons: 14538
    },// 156 Heavy Tanker type 25 L 144 M/H 31 14538
    {
        gid: 169,
        shipid: 153,
        name: "Heavy Tanker type 26",
        length: 147,
        mass: 35,
        tons: 15217
    },// 169 Heavy Tanker type 26 L 147 M/H 35 15217
    {
        gid: 165,
        shipid: 154,
        name: "Heavy Tanker type 27",
        length: 142,
        mass: 38,
        tons: 15067
    },// 165 Heavy Tanker type 27 L 142 M/H 38 15067
    {
        gid: 170,
        shipid: 155,
        name: "Heavy Tanker type 28",
        length: 147,
        mass: 38,
        tons: 15328
    },// 170 Heavy Tanker type 28 L 147 M/H 38 15328
    {
        gid: 152,
        shipid: 156,
        name: "Heavy Tanker type 29",
        length: 156,
        mass: 28,
        tons: 14057
    },// 152 Heavy Tanker type 29 L 156 M/H 28 14057 
    {
        gid: 161,
        shipid: 157,
        name: "Heavy Tanker type 30",
        length: 158,
        mass: 30,
        tons: 14989
    },// 161 Heavy Tanker type 30 L 158 M/H 30 14989
    {
        gid: 164,
        shipid: 158,
        name: "Heavy Tanker type 31",
        length: 156,
        mass: 51,
        tons: 15057
    },// 164 Heavy Tanker type 31 L 156 M/H 51 15057
    {
        gid: 144,
        shipid: 159,
        name: "Heavy Tanker type 32",
        length: 150,
        mass: 52,
        tons: 13426
    },// 144 Heavy Tanker type 32 L 150 M/H 52 13426
    {
        gid: 157,
        shipid: 160,
        name: "Heavy Tanker type 33",
        length: 138,
        mass: 36,
        tons: 14638
    },// 157 Heavy Tanker type 33 L 138 M/H 36 14638 
    {
        gid: 148,
        shipid: 161,
        name: "Heavy Tanker type 34",
        length: 133,
        mass: 34,
        tons: 13854
    },// 148 Heavy Tanker type 34 L 133 M/H 34 13854 
    {
        gid: 150,
        shipid: 162,
        name: "Heavy Tanker type 11",
        length: 155,
        mass: 37,
        tons: 13957
    }, // 167 Heavy Tanker type 35 L 144 M/H 38 15185
    
    // ********************** Requisitioned Trawler ********************* 

    {
        gid: 174,
        shipid: 163,
        name: "Requisitioned Trawler Type 1",
        length: 50,
        mass: 17,
        tons: 538
    },// 174 Requisitioned Trawler Type 1 L 50 M/H 17 538
    {
        gid: 178,
        shipid: 164,
        name: "Requisitioned Trawler Type 2",
        length: 50,
        mass: 18,
        tons: 574
    },// 178 Requisitioned Trawler Type 2 L 50 M/H 18 574
    {
        gid: 172,
        shipid: 165,
        name: "Requisitioned Trawler Type 3",
        length: 55,
        mass: 19,
        tons: 497
    },// 172 Requisitioned Trawler Type 3 L 55 M/H 19 497
    {
        gid: 171,
        shipid: 166,
        name: "Requisitioned Trawler Type 12",
        length: 50,
        mass: 19,
        tons: 397
    },// 171 Requisitioned Trawler Type 12 L 50 M/H 19 397
    {
        gid: 173,
        shipid: 167,
        name: "Requisitioned Trawler Type 14",
        length: 56,
        mass: 19,
        tons: 537
    }, // 173 Requisitioned Trawler Type 14 L 56 M/H 19 537
    {
        gid: 175,
        shipid: 168,
        name: "Requisitioned Trawler Type 15",
        length: 55,
        mass: 19,
        tons: 538
    }, // 175 Requisitioned Trawler Type 15 L 55 M/H 19 538
    {
        gid: 176,
        shipid: 169,
        name: "Requisitioned Trawler Type 17",
        length: 52,
        mass: 19,
        tons: 538
    }, // 176 Requisitioned Trawler Type 17 L 52 M/H 19 538
    {
        gid: 180,
        shipid: 170,
        name: "Requisitioned Trawler Type 19",
        length: 58,
        mass: 17,
        tons: 690
    }, // 180 Requisitioned Trawler Type 19 L 58 M/H 17 690
    {
        gid: 177,
        shipid: 171,
        name: "Requisitioned Trawler Type 22",
        length: 55,
        mass: 19,
        tons: 573
    }, // 177 Requisitioned Trawler Type 22 L 55 M/H 19 573 
    {
        gid: 179,
        shipid: 172,
        name: "Requisitioned Trawler Type 28",
        length: 45,
        mass: 15,
        tons: 636
    },// 179 Requisitioned Trawler Type 28 L 45 M/H 15 636 
    
    // *********************** WARSHIPS ****************************

    {
        gid: 87,
        shipid: 173,
        name: "Flower Class Corvette",
        length: 62,
        mass: 20,
        tons: 925
    },// 87 Flower Class Corvette L 62 M/H 20 925 
    {
        gid: 88,
        shipid: 174,
        name: "Bittern Class Sloop",
        length: 81,
        mass: 23,
        tons: 1190
    },// 88 Bittern Class Sloop L 81 M/H 23 1190
    {
        gid: 89,
        shipid: 175,
        name: "Tribal Class Destroyer",
        length: 115,
        mass: 32,
        tons: 2520
    },// 89 Tribal Class Destroyer L 115 M/H 32 2520
    {
        gid: 90,
        shipid: 176,
        name: "Bogue Aircraft Carrier",
        length: 151,
        mass: 35,
        tons: 16620
    },// 90 Bogue Aircraft Carrier L 151 M/H 35 16620
    
]
export default shipData