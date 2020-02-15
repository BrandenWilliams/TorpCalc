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
    }
    
    
   

// 46 M TNK – 41 L 122 M/H 34 4527 
// 47 M TNK – 55 L 125 M/H 36 4837 
// 48 M TNK – 56 L 122 M/H 39 4837 
// 49 M TNK – 40 L 122 M/H 28 4957  
// 50 M TNK – 10 L 115 M/H 35 4978
// 51 M TNK – 1 L 120 M/H 36 5018 
// 52 M TNK – 2 L 111 M/H 36 5018  
// 53 M TNK – 3 L 114 M/H 35 5018  
// 54 M TNK – 42 L 123 M/H 26 5039 
// 55 M TNK – 39 L 124 M/H 35 5289 
// 56 M TNK – 36 L 119 M/H 44 5298 
// 57 M TNK – 32 L 120 M/H 36 5375 
// 58 M TNK – 12 L 116 M/H 44 5729 
// 59 M TNK – 29 L 123 M/H 35 5738  
// 60 M TNK – 52 L 123 M/H 33 5784 
// 61 M TNK – 23 L 117 M/H 29 5838 
// 62 M TNK – 35 L 119 M/H 35 5930  
// 63 M TNK – 21 L 120 M/H 34 5936 
// 64 M TNK – 33 L 118 M/H 31 5936 
// 65 M TNK – 24 L 116 M/H 36 5947 
// 66 M TNK – 5 L 118 M/H 43 6046 
// 67 M TNK – 25 L 116 M/H 35 6067 
// 68 M TNK – 28 L 122 M/H 35 6205 
// 69 M TNK – 31 L 122 M/H 45 6352 
// 70 M TNK – 27 L 119 M/H 40 6436 
// 71 M TNK – 18 L 124 M/H 42 7034 
// 72 M TNK – 20 L 125 M/H 36 7037 
// 73 M TNK – 19 L 125 M/H 36 7254 
// 74 M TNK – 44 L 125 M/H 32 7398
// 75 M TNK – 16 L 123 M/H 44 7483 
// 76 M TNK – 48 L 117 M/H 39 7487
// 77 M TNK – 49 L 117 M/H 39 7594
// 78 M TNK – 59 L 124 M/H 42 7846
// 79 M TNK – 14 L 118 M/H 34 8027 
// 80 M TNK – 15 L 122 M/H 44 8064 
// 81 H FRT – 9 L 134 M/H 37 8462  
// 82 P LNR-6 L150 M/H 36 12647 
// 83 P LNR-7 L162 M/H 39 13537
// 84 P LNR-8 L140 M/H 30 13855
// 85 P LNR-4 L165 M/H 39 14528
// 86 P LNR-5 L170 M/H 38 15056
// 87 FLW CVT L 62 M/H 20 925 
// 88 BTN SLP L 81 M/H 23 1190
// 89 TRBL DD L 115 M/H 32 2520
// 90 BOUGE CVE L 151 M/H 35 16620
// 91 H FRT – 26 L 109 M/H 29 5012 
// 92 H FRT – 27 L 115 M/H 33 6015
// 93 H FRT – 43 L 120 M/H 35 6243
// 94 H FRT – 45 L 124 M/H 35 6363 
// 95 H FRT – 44 L 124 M/H 35 6384 
// 96 H FRT – 1 L 130 M/H 36 6545
// 97 H FRT – 2 L 143 M/H 29 6545
// 98 H FRT – 3 L 165 M/H 29 6545 
// 99 H FRT – 29 L 117 M/H 27 6915  
// 100 H FRT – 28 L 111 M/H 34 7019
// 101 H FRT – 18 L 124 M/H 35 7129
// 102 H FRT – 17 L 128 M/H 34 7254
// 103 H FRT – 41 L 137 M/H 36 7256
// 104 H FRT – 12 L 125 M/H 35 7295
// 105 H FRT – 40 L 130M/H 36 7352 
// 106 H FRT – 10 L 128 M/H 34 7372
// 107 H FRT – 42 L 128 M/H 32 7375
// 108 H FRT – 21 L 130 M/H 39 7438
// 109 H FRT – 16 L 125 M/H 41 7835
// 110 H FRT – 33 L 128 M/H 36 7925
// 111 H FRT – 19 L 135 M/H 36 8068
// 112 H FRT – 11 L 142 M/H 35 8272
// 113 H FRT – 32 L 132 M/H 35 8367
// 114 H FRT – 15 L 138 M/H 40 8386
// 115 H FRT – 4 L 135 M/H 28 8432
// 116 H FRT – 14 L 137 M/H 35 8463
// 117 H FRT – 24 L 132 M/H 34 8472 
// 118 H FRT – 30 L 122 M/H 28 8518
// 119 H FRT – 22 L 139 M/H 38 8548
// 120 H FRT – 13 L 138 M/H 37 8748
// 121 H FRT – 7 L 132 M/H 34 8795 
// 122 H FRT – 35 L 138 M/H 39 8816  
// 123 H FRT – 34 L 130 M/H 35 8912  
// 124 H FRT – 38 L 133 M/H 35 8914 
// 125 H FRT – 31 L 122 M/H 34 8915
// 126 H FRT – 20 L 137 M/H 41 8925
// 127 H FRT – 8 L 145 M/H 28 8938  
// 128 H FRT – 25 L 141 M/H 44 9015
// 129 H FRT – 5 L 134 M/H 34 9121  
// 130 H FRT – 6 L 145 M/H 41 9402  
// 131 H FRT – 23 L 142 M/H 33 9482
// 132 H FRT – 36 L 144 M/H 26 9518 
// 133 H FRT – 46 L 145 M/H 36 9543
// 134 H FRT – 39 L 144 M/H 31 9547
// 135 H FRT – 37 L 141 M/H 34 9816
// 136 H TNK – 16 L 137 M/H 42 11099
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
// 171 R TWRL – 12 L 50 M/H 19 397
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
export default shipData