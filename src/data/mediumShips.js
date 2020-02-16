const mediumShips = [
    {
        shipid: 0,
        name: "Default",
        length: 150,
        mass: 30,
        tons: 2866
    },
    {
        gid: 51,
        shipid: 1,
        name: "Medium Tanker type 1",
        length: 120,
        mass: 36,
        tons: 5018
    }, // 51 M TNK – 1 L 120 M/H 36 5018
    {
        gid: 52,
        shipid: 2,
        name: "Medium Tanker type 2",
        length: 111,
        mass: 36,
        tons: 5018
    }, // 52 M TNK – 2 L 111 M/H 36 5018 
    {
        gid: 53,
        shipid: 3,
        name: "Medium Tanker type 3",
        length: 114,
        mass: 35,
        tons: 5018
    }, // 53 M TNK – 3 L 114 M/H 35 5018 
    {
        gid: 66,
        shipid: 3,
        name: "Medium Tanker type 5",
        length: 118,
        mass: 43,
        tons: 6046
    }, // 66 M TNK – 5 L 118 M/H 43 6046 
    {
        gid: 50,
        shipid: 3,
        name: "Medium Tanker type 10",
        length: 115,
        mass: 35,
        tons: 4978
    },// 50 M TNK – 10 L 115 M/H 35 4978
    {
        gid: 58,
        shipid: 3,
        name: "Medium Tanker type 12",
        length: 116,
        mass: 44,
        tons: 5729
    }, // 58 M TNK – 12 L 116 M/H 44 5729
    {
        gid: 79,
        shipid: 3,
        name: "Medium Tanker type 14",
        length: 118,
        mass: 34,
        tons: 8027
    }, // 79 M TNK – 14 L 118 M/H 34 8027
    {
        gid: 80,
        shipid: 3,
        name: "Medium Tanker type 15",
        length: 122,
        mass: 44,
        tons: 8064
    }, // 80 M TNK – 15 L 122 M/H 44 8064
    {
        gid: 75,
        shipid: 3,
        name: "Medium Tanker type 16",
        length: 123,
        mass: 44,
        tons: 7483
    }, // 75 M TNK – 16 L 123 M/H 44 7483
    {
        gid: 71,
        shipid: 3,
        name: "Medium Tanker type 18",
        length: 124,
        mass: 42,
        tons: 7034
    }, // 71 M TNK – 18 L 124 M/H 42 7034 
    {
        gid: 73,
        shipid: 3,
        name: "Medium Tanker type 19",
        length: 125,
        mass: 36,
        tons: 7254
    }, // 73 M TNK – 19 L 125 M/H 36 7254 
    {
        gid: 72,
        shipid: 3,
        name: "Medium Tanker type 20",
        length: 125,
        mass: 36,
        tons: 7037
    }, // 72 M TNK – 20 L 125 M/H 36 7037 
    {
        gid: 63,
        shipid: 3,
        name: "Medium Tanker type 18",
        length: 120,
        mass: 34,
        tons: 5936
    }, // 63 M TNK – 21 L 120 M/H 34 5936
    {
        gid: 61,
        shipid: 3,
        name: "Medium Tanker type 18",
        length: 117,
        mass: 29,
        tons: 5838
    }, // 61 M TNK – 23 L 117 M/H 29 5838
    {
        gid: 65,
        shipid: 3,
        name: "Medium Tanker type 24",
        length: 116,
        mass: 36,
        tons: 5947
    }, // 65 M TNK – 24 L 116 M/H 36 5947 
    {
        gid: 67,
        shipid: 3,
        name: "Medium Tanker type 25",
        length: 116,
        mass: 35,
        tons: 6067
    }, // 67 M TNK – 25 L 116 M/H 35 6067
    {
        gid: 70,
        shipid: 3,
        name: "Medium Tanker type 26",
        length: 119,
        mass: 40,
        tons: 6436
    }, // 70 M TNK – 27 L 119 M/H 40 6436 
    {
        gid: 68,
        shipid: 3,
        name: "Medium Tanker type 28",
        length: 122,
        mass: 35,
        tons: 6205
    }, // 68 M TNK – 28 L 122 M/H 35 6205
    {
        gid: 59,
        shipid: 3,
        name: "Medium Tanker type 29",
        length: 123,
        mass: 35,
        tons: 5738
    }, // 59 M TNK – 29 L 123 M/H 35 5738
    {
        gid: 69,
        shipid: 3,
        name: "Medium Tanker type 31",
        length: 122,
        mass: 45,
        tons: 6352
    }, // 69 M TNK – 31 L 122 M/H 45 6352
    {
        gid: 57,
        shipid: 3,
        name: "Medium Tanker type 32",
        length: 120,
        mass: 36,
        tons: 5375
    }, // 57 M TNK – 32 L 120 M/H 36 5375
    {
        gid: 64,
        shipid: 3,
        name: "Medium Tanker type 33",
        length: 118,
        mass: 31,
        tons: 5936
    }, // 64 M TNK – 33 L 118 M/H 31 5936
    {
        gid: 62,
        shipid: 3,
        name: "Medium Tanker type 35",
        length: 119,
        mass: 35,
        tons: 5930
    }, // 62 M TNK – 35 L 119 M/H 35 5930
    {
        gid: 56,
        shipid: 3,
        name: "Medium Tanker type 36",
        length: 119,
        mass: 44,
        tons: 5298
    }, // 56 M TNK – 36 L 119 M/H 44 5298  
    {
        gid: 55,
        shipid: 3,
        name: "Medium Tanker type 39",
        length: 124,
        mass: 35,
        tons: 5289
    }, // 55 M TNK – 39 L 124 M/H 35 5289
    {
        gid: 49,
        shipid: 3,
        name: "Medium Tanker type 40",
        length: 122,
        mass: 28,
        tons: 4957
    },// 49 M TNK – 40 L 122 M/H 28 4957 
    {
        gid: 46,
        shipid: 3,
        name: "Medium Tanker type 41",
        length: 122,
        mass: 34,
        tons: 4527
    }, // 46 M TNK – 41 L 122 M/H 34 4527 
    {
        gid: 54,
        shipid: 3,
        name: "Medium Tanker type 42",
        length: 123,
        mass: 26,
        tons: 5039
    }, // 54 M TNK – 42 L 123 M/H 26 5039 
    {
        gid: 74,
        shipid: 3,
        name: "Medium Tanker type 44",
        length: 125,
        mass: 32,
        tons: 7398
    }, // 74 M TNK – 44 L 125 M/H 32 7398
    {
        gid: 76,
        shipid: 3,
        name: "Medium Tanker type 48",
        length: 117,
        mass: 39,
        tons: 7487
    }, // 76 M TNK – 48 L 117 M/H 39 7487
    {
        gid: 77,
        shipid: 3,
        name: "Medium Tanker type 49",
        length: 117,
        mass: 39,
        tons: 7594
    }, // 77 M TNK – 49 L 117 M/H 39 7594
    {
        gid: 60,
        shipid: 3,
        name: "Medium Tanker type 52",
        length: 123,
        mass: 33,
        tons: 5784
    },// 60 M TNK – 52 L 123 M/H 33 5784
    {
        gid: 47,
        shipid: 3,
        name: "Medium Tanker type 55",
        length: 125,
        mass: 36,
        tons: 4837
    }, // 47 M TNK – 55 L 125 M/H 36 4837 
    {
        gid: 48,
        shipid: 3,
        name: "Medium Tanker type 56",
        length: 122,
        mass: 39,
        tons: 4837
    },// 48 M TNK – 56 L 122 M/H 39 4837 
    {
        gid: 78,
        shipid: 3,
        name: "Medium Tanker type 59",
        length: 124,
        mass: 42,
        tons: 7846
    },// 78 M TNK – 59 L 124 M/H 42 7846
    {
        gid: 85,
        shipid: 3,
        name: "Passenger Liner Type 4",
        length: 165,
        mass: 39,
        tons: 14528
    },// 85 Passenger Liner Type 4 L165 M/H 39 14528
    {
        gid: 86,
        shipid: 3,
        name: "Passenger Liner Type 5",
        length: 170,
        mass: 38,
        tons: 15056
    },// 86 Passenger Liner Type 5 L170 M/H 38 15056
    {
        gid: 82,
        shipid: 3,
        name: "Passenger Liner Type 6",
        length: 150,
        mass: 36,
        tons: 12647
    }, // 82 Passenger Liner Type 6 L150 M/H 36 12647 
    {
        gid: 83,
        shipid: 3,
        name: "Passenger Liner Type 7",
        length: 162,
        mass: 39,
        tons: 13537
    },// 83 Passenger Liner Type 7 L162 M/H 39 13537
    {
        gid: 84,
        shipid: 3,
        name: "Passenger Liner Type 8",
        length: 140,
        mass: 30,
        tons: 13855
    },// 84 Passenger Liner Type 8 L140 M/H 30 13855


    // ********************HEAVY FIGHTER START *************


    {
        gid: 96,
        shipid: 3,
        name: "Heavy Freighter Type 1",
        length: 130,
        mass: 36,
        tons: 6545
    }, // 96 Heavy Freighter Type 1 L 130 M/H 36 6545
    {
        gid: 97,
        shipid: 3,
        name: "Heavy Freighter Type 2",
        length: 143,
        mass: 29,
        tons: 6545
    }, // 97 Heavy Freighter Type 2 L 143 M/H 29 6545
    {
        gid: 93,
        shipid: 3,
        name: "Heavy Freighter Type 3",
        length: 165,
        mass: 29,
        tons: 6545
    },// 98 Heavy Freighter Type 3 L 165 M/H 29 6545 

    // 115 Heavy Freighter Type 4 L 135 M/H 28 8432
    // 129 Heavy Freighter Type 5 L 134 M/H 34 9121  
    // 130 Heavy Freighter Type 6 L 145 M/H 41 9402
    // 121 Heavy Freighter Type 7 L 132 M/H 34 8795
    // 127 Heavy Freighter Type 8 L 145 M/H 28 8938

    {
        gid: 84,
        shipid: 3,
        name: "Heavy Freighter Type 9",
        length: 134,
        mass: 37,
        tons: 8464
    }, // 84 Heavy Freighter Type 9 L 134 M/H 37 8462
    {
        gid: 91,
        shipid: 3,
        name: "Heavy Freighter Type 26",
        length: 109,
        mass: 29,
        tons: 5012
    },// 91 Heavy Freighter Type 26 L 109 M/H 29 5012
    
    {
        gid: 92,
        shipid: 3,
        name: "Heavy Freighter Type 27",
        length: 115,
        mass: 33,
        tons: 6015
    }, // 92 Heavy Freighter Type 27 L 115 M/H 33 6015

    // 99 Heavy Freighter Type 29 L 117 M/H 27 6915  
    // 100 Heavy Freighter Type 28 L 111 M/H 34 7019
    {
        gid: 93,
        shipid: 3,
        name: "Heavy Freighter Type 43",
        length: 120,
        mass: 35,
        tons: 6243
    }, // 93 Heavy Freighter Type 43 L 120 M/H 35 6243
    {
        gid: 93,
        shipid: 3,
        name: "Heavy Freighter Type 44",
        length: 124,
        mass: 35,
        tons: 6384
    },// 95 Heavy Freighter Type 44 L 124 M/H 35 6384
    {
        gid: 93,
        shipid: 3,
        name: "Heavy Freighter Type 45",
        length: 120,
        mass: 35,
        tons: 6243
    },// 94 Heavy Freighter Type 45 L 124 M/H 35 6363 
    
  
    // 101 Heavy Freighter Type 18 L 124 M/H 35 7129
    // 102 Heavy Freighter Type 17 L 128 M/H 34 7254
    // 103 Heavy Freighter Type 41 L 137 M/H 36 7256
    // 104 Heavy Freighter Type 12 L 125 M/H 35 7295
    // 105 Heavy Freighter Type 40 L 130M/H 36 7352 
    // 106 Heavy Freighter Type 10 L 128 M/H 34 7372
    // 107 Heavy Freighter Type 42 L 128 M/H 32 7375
    // 108 Heavy Freighter Type 21 L 130 M/H 39 7438
    // 109 Heavy Freighter Type 16 L 125 M/H 41 7835
    // 110 Heavy Freighter Type 33 L 128 M/H 36 7925
    // 111 Heavy Freighter Type 19 L 135 M/H 36 8068
    // 112 Heavy Freighter Type 11 L 142 M/H 35 8272
    // 113 Heavy Freighter Type 32 L 132 M/H 35 8367
    // 114 Heavy Freighter Type 15 L 138 M/H 40 8386
    
    // 116 Heavy Freighter Type 14 L 137 M/H 35 8463
    // 117 Heavy Freighter Type 24 L 132 M/H 34 8472 
    // 118 Heavy Freighter Type 30 L 122 M/H 28 8518
    // 119 Heavy Freighter Type 22 L 139 M/H 38 8548
    // 120 Heavy Freighter Type 13 L 138 M/H 37 8748
     
    // 122 Heavy Freighter Type 35 L 138 M/H 39 8816  
    // 123 Heavy Freighter Type 34 L 130 M/H 35 8912  
    // 124 Heavy Freighter Type 38 L 133 M/H 35 8914 
    // 125 Heavy Freighter Type 31 L 122 M/H 34 8915
    // 126 Heavy Freighter Type 20 L 137 M/H 41 8925
      
    // 128 Heavy Freighter Type 25 L 141 M/H 44 9015
      
    // 131 Heavy Freighter Type 23 L 142 M/H 33 9482
    // 132 Heavy Freighter Type 36 L 144 M/H 26 9518 
    // 133 Heavy Freighter Type 46 L 145 M/H 36 9543
    // 134 Heavy Freighter Type 39 L 144 M/H 31 9547
    // 135 Heavy Freighter Type 37 L 141 M/H 34 9816

    // 136 Heavy Tanker type 16 L 137 M/H 42 11099
    // 137 H TNK – 14 L 139 M/H 46 11209
    // 138 H TNK – 2 L 138 M/H 46 11445
    // 139 H TNK – 15 L 134 M/H 43 12537
    // 140 H TNK – 4 L 144 M/H 47 12738
    // 141 H TNK – 24 L 142 M/H 37 12784
    // 142 H TNK – 1 L 142 M/H 26 12942
    // 143 H TNK – 21 L 127 M/H 38 13386
    // 144 H TNK – 32 L 150 M/H 52 13426
    // 145 H TNK – 10 L 153 M/H 38 13636 
    // 146 H TNK – 17 L 132 M/H 44 13636 
    // 147 H TNK – 3 L 145 M/H 49 13637 
    // 148 H TNK – 34 L 133 M/H 34 13854 
    // 149 H TNK – 5 L 140 M/H 35 13935
    // 150 H TNK – 11 L 155 M/H 37 13957 
    // 151 H TNK – 22 L 125 M/H 34 14056 
    // 152 H TNK – 29 L 156 M/H 28 14057 
    // 153 H TNK – 9 L 149 M/H 37 14126 
    // 154 H TNK – 18 L 130 M/H 41 14254 
    // 155 H TNK – 6 L 142 M/H 24 14365
    // 156 H TNK – 25 L 144 M/H 31 14538
    // 157 H TNK – 33 L 138 M/H 36 14638
    // 158 H TNK – 12 L 150 M/H 28 14923
    // 159 H TNK – 7 L 150 M/H 40 14946
    // 160 H TNK – 20 L 125 M/H 47 14956
    // 161 H TNK – 30 L 158 M/H 30 14989 
    // 162 H TNK – 23 L 130 M/H 31 14994 
    // 163 H TNK – 8 L 152 M/H 41 15018 
    // 164 H TNK – 31 L 156 M/H 51 15057 
    // 165 H TNK – 27 L 142 M/H 38 15067
    // 166 H TNK – 19 L 129 M/H 36 15098
    // 167 H TNK – 35 L 144 M/H 38 15185
    // 168 H TNK – 13 L 145 M/H 28 15204
    // 169 H TNK – 26 L 147 M/H 35 15217
    // 170 H TNK – 28 L 147 M/H 38 15328


    // 171 Requisitioned Trawler – 12 L 50 M/H 19 397
    // 172 R TWRL – 3 L 55 M/H 19 497
    // 173 R TWRL – 14 L 56 M/H 19 537
    // 174 R TWRL – 1 L 50 M/H 17 538
    // 175 R TWRL – 15 L 55 M/H 19 538
    // 176 R TWRL – 17 L 52 M/H 19 538
    // 177 R TWRL – 22 L 55 M/H 19 573 
    // 178 R TWRL – 2 L 50 M/H 18 574 
    // 179 R TWRL – 28 L 45 M/H 15 636 
    // 180 R TWRL – 19 L 58 M/H 17 690

]

export default mediumShips


    // 87 Flower Class Corvette L 62 M/H 20 925 
    // 88 Bittern Class Sloop L 81 M/H 23 1190
    // 89 Tribal Class Destroyer L 115 M/H 32 2520
    // 90 Bogue Aircraft Carrier L 151 M/H 35 16620