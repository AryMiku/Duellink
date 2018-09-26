var data = [
    {
        Code : "1",
        Name : "Yubel",
        Effect : 'การ์ดใบนี้ไม่สามารถถูกทำลายจากการต่อสู้ได้. หากการ์ดใบนี้อยู่ในสภาพตั้งโจมตีหงายหน้า' +
                'และถูกโจมตีโดยการ์ดมอนสเตอร์ของฝ่ายตรงข้าม, ทำความเสียหายกับผู้เล่นฝ่ายตรงข้ามตามพลังโจมตีของการ์ดมอนสเตอร์ใบนั้นด้วย.' +
                 'ความเสียหายจากการต่อสู้ที่ผู้ควบคุมการ์ดใบนี้ได้รับจากเอฟเฟคการต่อสู้กับการ์ดใบนี้จะกลายเป็น 0. ในช่วงเอนด์เฟสเรา' +
                 ', หากไม่ทำการรีริสการ์ดมอนสเตอร์ที่เราควบคุมอยู่ 1 ใบ การ์ดใบนี้จะถูกทำลาย.'+
                 ' หากการ์ดใบนี้ถูกทำลายโดยเอฟเฟคอื่นนอกเหนือจากเอฟเฟคของการ์ดใบนี้,'+
                 ' เราจะสามารถอัญเชิญแบบพิเศษ "Yubel - Terror Incarnate" จากในมือ ในเด็ค หรือในสุสานเราได้ 1 ใบ ',
        Pic :'<img src="img/EffectMonster/yubel.jpg" height="200" width="130">',
        Star : "10",
        Type : "ปีศาจ",
        Element : "มืด",
        Type2 : ["เอฟเฟค"],
        ATK : "0",
        DEF : "0",
        Rule : "ไม่มีเงื่อนไข",
        Effecttive : [],
        Connect : [2]
    },
    {
        Code : "2",
        Name : "Yubel - Terror Incarnate",
        Effect : 'การ์ดใบนี้ไม่สามารถอัญเชิญแบบปกติได้. การ์ดใบนี้ไม่สามารถอัญเชิญแบบพิเศษได้ยกเว้นโดยเอฟเฟคของ "Yubel".' +
         'การ์ดใบนี้ไม่สามารถถูกทำลายจากการต่อสู้ได้. หากการ์ดใบนี้อยู่ในสภาพตั้งโจมตีหงายหน้า และถูกโจมตีโดยการ์ดมอนสเตอร์ของฝ่ายตรงข้าม, '+
         'ทำความเสียหายกับผู้เล่นฝ่ายตรงข้ามตามพลังโจมตีของการ์ดมอนสเตอร์ใบนั้นด้วย. ความเสียหายจากการต่อสู้ที่ผู้ควบคุมการ์ดใบนี้ได้รับจากเอฟเฟคการต่อสู้กับการ์ดใบนี้จะกลายเป็น 0.'+
         'ในช่วงเอนด์เฟสเรา, ทำลายการ์ดมอนสเตอร์ทั้งหมดบนสนามยกเว้นการ์ดใบนี้. หากการ์ดใบนี้ออกจากสนาม, '+
         'เราสามารถอัญเชิญแบบพิเศษ "Yubel - The Ultimate Nightmare" จากบนมือ ในเด็ค หรือในสุสานเราได้ 1 ใบ',
        Pic : '<img src="img/EffectMonster/yubel2.jpg" height="200" width="130">',
        Star : "11",
        Type : "ปีศาจ",
        Element : "มืด",
        Type2 : ["เอฟเฟค"],
        ATK : "0",
        DEF : "0",
        Rule : "ต้องเรียกมาจาก Yubel เท่านั้น",
        Effecttive : [],
        Connect : [3]
    },
    {
        Code : "3",
        Name : "Yubel - The Ultimate Nightmare",
        Effect : 'การ์ดใบนี้ไม่สามารถอัญเชิญแบบปกติได้. การ์ดใบนี้ไม่สามารถอัญเชิญแบบพิเศษได้ยกเว้นโดยเอฟเฟคของ "Yubel - Terror Incarnate".'+
         'การ์ดใบนี้ไม่สามารถถูกทำลายจากการต่อสู้ได้. หากการ์ดใบนี้อยู่ในสภาพตั้งโจมตีหงายหน้าต่อสู้กับการ์ดมอนสเตอร์ของฝ่ายตรงข้าม, ในช่วงจบดาเมจเสต็ปนั้น'+
         'ทำความเสียหายกับผู้เล่นฝ่ายตรงข้ามตามพลังโจมตีจากการ์ดมอนสเตอร์ของฝ่ายตรงข้ามที่ต่อสู้ด้วย และทำลายการ์ดมอนสเตอร์ใบนั้น.'+
         'ความเสียหายจากการต่อสู้ที่ผู้ควบคุมการ์ดใบนี้ได้รับจากเอฟเฟคการต่อสู้กับการ์ดใบนี้จะกลายเป็น 0',
        Pic : '<img src="img/EffectMonster/yubel3.jpg" height="200" width="130">',
        Star : "12",
        Type : "ปีศาจ",
        Element : "มืด",
        Type2 : ["เอฟเฟค"],
        ATK : "0",
        DEF : "0",
        Rule : "ต้องเรียกมาจาก Yubel - Terror Incarnate เท่านั้น",
        Effecttive : [],
        Connect : []
    },
    {
        Code : "4",
        Name : "Black Rose Dragon",
        Effect : 'เมื่อการ์ดนี้ถูกเรียกโดยการซิงโครสำเร็จ,'+
         'สามารถทำลายการ์ดทุกใบบนสนามได้. เทิร์นละครั้ง สามารถนำการ์ดเผ่าพืช 1 ใบในสุสานออกจากเกม เพื่อเปลื่ยนแนววางการ์ดที่ตั้งรับอยู่บนสนาม 1 ใบ'+
         'เป็นตั้งโจมตีแบบหงายหน้า และลดพลังโจมตีของการ์ดมอนสเตอร์ใบนั้นเป็น 0 จนจบเทิร์น',
        Pic : '<img src="img/Synchro/blackrose.jpg" height="200" width="130">',
        Star : "7",
        Type : "มังกร",
        Element : "ไฟ",
        Type2 : ["เอฟเฟค","ซิงโคร"],
        ATK : "2400",
        DEF : "1800",
        Rule : "มอนเตอร์จูนเนอร์ 1 ใบ + มอนเตอร์ไม่ใช่จูนเนอร์ 1 ใบขึ้นไป",
        Effecttive : [],
        Connect : []
    },
    {
        Code : "5",
        Name : "Junk Anchor (จังค์ แองเกอร์)",
        Effect : 'คุณสามารถใช้การ์ดใบนี้แทนมอนสเตอรจูนเนอร์ที่มีชื่อว่า "Synchron" ได้ 1 ใบ' +  
        'ในการเรียกแบบซิงโคร เทิร์นละครั้งคุณสามารถทิ้งการ์ด 1 ใบจากบนมือลงสุสาน เลือกมอนสเตอร์ที่มีชื่อว่า "Junk" ที่ไม่ใช่จูนเนอร์ 1 ใบจากในสุสานของคุณ' + 
        'จากนั้นเรียกแบบพิเศษการ์ดที่เลือก จากนั้นทำการเรียกแบบซิงโครโดยใช้การ์ดใบนี้กับการ์ดที่เลือก โดยเรียกมอนสเตอร์ซิงโครที่ใช้มอนสเตอรจูนเนอร์ที่มีชื่อว่า' +
        '"Synchron" เป็นส่วนประกอบ 1 ใบ แต่วัตถุดิบซิงโครที่ใช้เรียกนั้นจะถูกนำออกนอกเกม',
        Pic : '<img src="img/EffectMonster/JunkAnchor.jpg" height="200" width="130">',
        Star : "2",
        Type : "นักรบ",
        Element : "ดิน",
        Type2 : ["เอฟเฟค","จูนเนอร์"],
        ATK : "0",
        DEF : "0",
        Rule : "เป็นจูนเนอร์มอนเตอร์ที่สามารถแทน Synchron ได้",
        Effecttive : [],
        Connect : []
    },
    {
        Code : "6",
        Name : "Limiter Overload",
        Effect : 'เมื่อการ์ดใบนี้ถูกส่งลงสุสานจากที่ไหนก็ตามอัญเชิญแบบพิเศษ "Speed Warrior" จากในมือ, เด็ค หรือในสุสานได้ 1 ใบ',
        Pic : '<img src="img/Trap/LimiterOverload.png" height="200" width="130">',
        Star : "",
        Type : "กับดัก",
        Element : "กับดัก",
        Type2 : ["กับดัก","กับดักปกติ"],
        ATK : "0",
        DEF : "0",
        Rule : "ไม่มี",
        Effecttive : ["อัญเชิญแบบพิเศษ","ทิ้งลงสุสาน"],
        Connect : []
    },
    {
        Code : "7",
        Name : "Junk Warrior",
        Effect : '"Junk Synchron" + มอนสเตอร์ที่ไม่ใช่จูนเนอร์ 1 ใบขึ้นไป' +
        'เมื่อการ์ดใบนี้ถูกเรียกแบบซิงโครสำเร็จ การ์ดใบนี้จะได้รับพลังโจมตีเพิ่มขึ้นเท่ากับผลรวมของพลังโจมตีทั้งหมดของมอนสเตอร์ที่มีเลเวล 2 หรือต่ำกว่า บนสนามของคุณ',
        Pic : '<img src="img/Synchro/junk-warrior.jpg" height="200" width="130">',
        Star : "5",
        Type : "นักรบ",
        Element : "มืด",
        Type2 : ["เอฟเฟค","ซิงโคร"],
        ATK : "2300",
        DEF : "1300",
        Rule : "Junk Synchron + มอนเตอร์ที่ไม่ใช่จูนเนอร์ 1 ใบขึ้นไป",
        Effecttive : ["เพิ่มพลังโจมตี"],
        Connect : []
    },
]