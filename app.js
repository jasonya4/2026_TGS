// 1. Data Structure for Itinerary (9/12 - 9/20)
const itineraryData = [
    {
        date: "09/12",
        day: "SAT",
        title: "福岡抵達與小倉夜生活",
        items: [
            { time: "15:20", title: "<a href='https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport' target='_blank'>抵達福岡機場</a>", desc: "搭乘 AK1510 抵達福岡機場 (FUK)" },
            { time: "16:30", title: "前往<a href='https://www.google.com/maps/search/?api=1&query=Kokura+Station' target='_blank'>小倉</a>", desc: "搭乘地下鐵至博多站，轉乘新幹線前往小倉 (使用「山陽新幹線單程車票」約 ¥1,600 + 地鐵 ¥260)" },
            { time: "17:30", title: "購買<a href='https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E9%83%BD%E3%81%8D%E3%82%93%E3%81%90+%E5%B0%8F%E5%80%89%E9%A7%85%E5%BA%97' target='_blank'>伊都 KING</a>", desc: "抵達小倉站時，先不出新幹線改札口，在站內買「甘王草莓銅鑼燒」" },
            { time: "18:00", title: "入住<a href='https://www.google.com/maps/search/?api=1&query=Tabist+Hotel+Tetora+Kitakyushu' target='_blank'>Tabist泰托拉北九州</a>", desc: "抵達小倉站，辦理入住 (Tabist Hotel Tetora Kitakyushu) 並放置行李" },
            { time: "19:00", title: "<a href='https://www.google.com/maps/search/?api=1&query=%E3%80%8CA%E7%B4%9A%E5%B0%8F%E5%80%89%E3%80%8D' target='_blank'>A級小倉劇場</a>", desc: "體驗充滿昭和復古感與舞台聲光張力的劇場文化" },
            { time: "21:30", title: "<a href='https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E5%80%89+%E5%B0%8F%E6%96%87%E5%AD%97%E9%80%9A%E3%82%8A+%E5%B1%8B%E5%8F%B0' target='_blank'>屋台豚骨拉麵宵夜</a>", desc: "前往小倉小文字通一帶，在屋台點碗道地的豚骨拉麵，隨後回飯店休息" }
        ]
    },
    {
        date: "09/13",
        day: "SUN",
        title: "關門海峽大環線與百億夜景",
        items: [
            { time: "10:45", title: "購票與準備", desc: "於 JR 小倉站購買實體「關門海峽四葉草套票」(¥800)，並確認手機已購買「北九州市・下關樂享周遊券」" },
            { time: "11:00", title: "小倉 → <a href='https://www.google.com/maps/search/?api=1&query=Mojiko+Station' target='_blank'>門司港</a>", desc: "小倉站搭乘 JR 鹿兒島本線前往門司港站 (¥280)" },
            { time: "11:20", title: "午餐：<a href='https://www.google.com/maps/search/?api=1&query=伽哩本舖+門司港' target='_blank'>伽哩本舖</a>", desc: "避開尖峰人潮，一抵達門司港先享用招牌起司燒咖哩" },
            { time: "12:30", title: "潮風號觀光列車 🍀", desc: "於「九州鐵道紀念館站」持四葉草套票搭乘", note: "【使用四葉草套票】" },
            { time: "12:55", title: "<a href='https://www.google.com/maps/search/?api=1&query=Kanmon+Pedestrian+Tunnel' target='_blank'>關門海底人道</a>", desc: "步行橫跨海底隧道前往山口縣下關" },
            { time: "13:20", title: "下關接駁巴士 🍀", desc: "從御裳川搭乘下關巴士前往唐戶", note: "【使用四葉草套票】" },
            { time: "13:40", title: "<a href='https://www.google.com/maps/search/?api=1&query=Kamon+Wharf' target='_blank'>Kamon Wharf (下關)</a> 🎟️", desc: "使用「樂享周遊券」兌換 1000 日圓商品券，購買「井上商店河豚仙貝」與「河豚茶泡飯」", note: "【使用樂享周遊券 1/3】" },
            { time: "14:50", title: "關門聯絡船 🍀", desc: "從唐戶棧橋搭船返回門司港", note: "【使用四葉草套票】" },
            { time: "15:00", title: "門司港布丁", desc: "前往 MILK HALL MOJIKO 品嚐知名的昭和復古硬布丁" },
            { time: "15:35", title: "門司港 → 小倉", desc: "搭乘 JR 鹿兒島本線返回小倉站 (¥280)" },
            { time: "16:00", title: "<a href='https://www.google.com/maps/search/?api=1&query=Kitakyushu+Manga+Museum' target='_blank'>北九州市漫畫博物館</a>", desc: "前往車站旁的 Aruaru City 看展與閱讀漫畫" },
            { time: "17:35", title: "小倉 → 八幡", desc: "搭乘 JR 鹿兒島本線前往八幡站 (¥280)" },
            { time: "18:00", title: "免費接駁車", desc: "從八幡站搭免費接駁車前往纜車站 (免費)" },
            { time: "18:30", title: "<a href='https://www.google.com/maps/search/?api=1&query=Sarakurayama' target='_blank'>皿倉山百萬夜景</a> 🎟️", desc: "搭乘登山纜車與爬坡車攻頂欣賞新日本三大夜景", note: "【使用樂享周遊券 3/3】(原價來回 ¥1,230)" },
            { time: "20:30", title: "八幡 → 小倉", desc: "搭乘 JR 鹿兒島本線返回小倉站 (¥280)" },
            { time: "21:00", title: "晚餐：<a href='https://www.google.com/maps/search/?api=1&query=Motsunabe+Kokura' target='_blank'>牛腸鍋 (小倉)</a>", desc: "看完夜景後，前往小倉市區的牛腸鍋名店 (如 田しゅう) 大啖熱騰騰的もつ鍋" }
        ]
    },
    {
        date: "09/14",
        day: "MON",
        title: "溫泉極致放鬆與夜間登船",
        items: [
            { time: "11:00", title: "退房與寄放行李", desc: "Tabist泰托拉退房。大行李寄放飯店櫃檯，攜帶輕便泡湯包", note: "行李寄放策略：大行李放飯店，只帶小包包" },
            { time: "11:30", title: "午餐：<a href='https://www.google.com/maps/search/?api=1&query=Rihga+Royal+Hotel+Kokura' target='_blank'>RITOAS</a>", desc: "里加皇家酒店 2 樓享用精緻午餐" },
            { time: "13:00", title: "<a href='https://www.google.com/maps/search/?api=1&query=Kokura+Castle' target='_blank'>小倉城＋庭園</a> 🎟️", desc: "漫步前往小倉城，使用「樂享周遊券」兌換套票並享受抹茶茶道體驗", note: "【使用樂享周遊券 2/3】" },
            { time: "14:45", title: "小倉站周邊採買", desc: "候車前先去買 Lakanto 代糖與九州限定博多通饅頭", note: "【採買】松本清 / 小倉銘品蔵" },
            { time: "15:20", title: "免費接駁車 (去程)", desc: "小倉站北口圓環搭乘免費接駁車前往 Corona World (免費)" },
            { time: "15:35", title: "<a href='https://www.google.com/maps/search/?api=1&query=Corona+World+Kokura' target='_blank'>Corona World</a> 推幣機", desc: "遊戲中心進行推幣機大戰" },
            { time: "18:00", title: "<a href='https://www.google.com/maps/search/?api=1&query=Corona+no+Yu+Kokura' target='_blank'>天然温泉コロナの湯</a>", desc: "泡露天風呂洗去疲勞，館內享用晚餐", note: "結帳時記得索取「回程乘車券」" },
            { time: "19:50", title: "免費接駁車 (保險方案)", desc: "搭乘 19:50 班次返回小倉站北口 (20:05 抵達)，時間非常充裕", note: "【備案推薦】" },
            { time: "20:50", title: "免費接駁車 (極限方案)", desc: "搭乘 20:50 班次返回小倉站北口 (21:05 抵達)，僅有 1 小時領行李", note: "【若玩太晚的底線】" },
            { time: "21:10", title: "領取行李", desc: "回飯店領取大行李，準備登船" },
            { time: "22:10", title: "渡輪接駁巴士", desc: "小倉站北口搭乘「東京九州渡輪」免費專車 (免費)" },
            { time: "23:55", title: "<a href='https://www.google.com/maps/search/?api=1&query=Tokyo+Kyushu+Ferry+Shinmoji' target='_blank'>東京九州渡輪</a>啟航", desc: "展開 21 小時豪華海上航程" }
        ]
    },
    {
        date: "09/15",
        day: "TUE",
        title: "海上縱貫與夜衝川崎",
        items: [
            { time: "全天", title: "海上航行", desc: "享受豪華渡輪設施、大浴場與海景" },
            { time: "20:45", title: "抵達橫須賀", desc: "渡輪抵達橫須賀港碼頭" },
            { time: "21:35", title: "搭車前往川崎", desc: "橫須賀中央站搭乘京急本線直達京急川崎站 (約 ¥320)" },
            { time: "22:30", title: "入住<a href='https://www.google.com/maps/search/?api=1&query=Customa+Cafe+Kawasaki' target='_blank'>川崎網咖</a>", desc: "入住 川崎グランカスタマ 或 快活CLUB 川崎店過夜" }
        ]
    },
    {
        date: "09/16",
        day: "WED",
        title: "川崎劇場之巔與東京基地",
        items: [
            { time: "11:30", title: "退房與行李寄放", desc: "網咖睡到自然醒，將大行李鎖在 JR 川崎站置物櫃", note: "置物櫃攻略：JR 川崎站中央南/北改札口外有大量大型置物櫃" },
            { time: "12:00", title: "<a href='https://www.google.com/maps/search/?api=1&query=Kawasaki+Rockza' target='_blank'>川崎ロック座</a>", desc: "觀賞頂級 Kawasaki Rockza 劇場演出" },
            { time: "16:00", title: "川崎車站周邊購物", desc: "看完劇場後，買藍牙耳機(EarFun/Soundcore/JBL)、Workman半袖T恤、VENEX恢復衣", note: "【採買】Yodobashi / WorkmanGirl / Bic Camera" },
            { time: "18:30", title: "直達錦糸町", desc: "從 JR 川崎站取行李，搭乘 JR 總武線直達錦糸町 (約 ¥480)" },
            { time: "晚上", title: "入住 <a href='https://www.famy-inn.com/' target='_blank'>Famy Inn 錦糸町</a>", desc: "抵達東京總基地辦理入住" },
            { time: "19:30", title: "晚餐：<a href='https://www.google.com/maps/search/?api=1&query=Negishi+Kinshicho' target='_blank'>ねぎし 錦糸町店</a>", desc: "享用美味的牛舌山藥麥飯套餐" },
            { time: "21:00", title: "樂天地 SPA 與 TAITO", desc: "TAITO STATION 暖身開戶，隨後至天然溫泉樂天地 SPA 泡湯" }
        ]
    },
    {
        date: "09/17",
        day: "THU",
        title: "2026 TGS 業務日 (Day 1)",
        items: [
            { time: "08:30", title: "從飯店出發", desc: "離開 Famy Inn 步行前往 JR 錦糸町站" },
            { time: "08:38", title: "搭乘 JR 總武線", desc: "【第 2 月台】搭乘 08:38 或 08:42 往千葉方向之各站停車列車" },
            { time: "09:06", title: "西船橋站轉乘", desc: "【第 11/12 月台】下車後轉乘 09:06 往海濱幕張之武藏野/京葉線" },
            { time: "09:18", title: "抵達海濱幕張站", desc: "抵達海濱幕張，出站後跟隨人潮往南口 (South Exit) 步行" },
            { time: "09:35", title: "抵達會場排隊", desc: "抵達 TGS 會場外，進行安檢與排隊等候入場" },
            { time: "10:00", title: "<a href='https://www.google.com/maps/search/?api=1&query=Makuhari+Messe' target='_blank'>TGS 2026 開展</a>", desc: "準時進入幕張展覽館 (Makuhari Messe) 參加業務日" },
            { time: "晚上", title: "東京市區", desc: "自由活動或回錦糸町休息" }
        ]
    },
    {
        date: "09/18",
        day: "FRI",
        title: "2026 TGS 業務日 (Day 2)",
        items: [
            { time: "08:30", title: "出發前往幕張", desc: "與 Day 1 相同，搭乘總武線至西船橋轉京葉線" },
            { time: "10:00", title: "TGS 2026", desc: "幕張展覽館繼續觀展與體驗新遊戲" },
            { time: "晚上", title: "<a href='https://www.google.com/maps/search/?api=1&query=Nintendo+Tokyo' target='_blank'>新宿/澀谷</a>", desc: "前往 Nintendo Tokyo 採買任天堂原廠限定周邊 (薩爾達、瑪利歐等)" }
        ]
    },
    {
        date: "09/19",
        day: "SAT",
        title: "推幣機遠征與秋葉原掃貨",
        items: [
            { time: "10:45", title: "Round 1 遠征", desc: "前往 市川鬼高店 或 南砂町 SUNAMO 店體驗超大型 Medal Game (單程車資約 ¥170)" },
            { time: "11:30", title: "Round 1 推幣機畢業考", desc: "大型推幣機遊玩" },
            { time: "下午", title: "<a href='https://www.google.com/maps/search/?api=1&query=Akihabara' target='_blank'>秋葉原大肆搜刮</a>", desc: "秋葉原中央通、無線電會館掃公仔與模型戰利品" },
            { time: "晚上", title: "打包戰利品", desc: "回錦糸町飯店努力將戰利品塞入行李箱" }
        ]
    },
    {
        date: "09/20",
        day: "SUN",
        title: "最後採買與完美歸途",
        items: [
            { time: "10:30", title: "退房與寄放行李", desc: "大行李寄放 <a href='https://www.famy-inn.com/' target='_blank'>Famy Inn</a> 櫃檯，輕裝出門", note: "行李寄放策略：全部丟在飯店大廳最完美" },
            { time: "11:00", title: "<a href='https://www.google.com/maps/search/?api=1&query=ARCAKIT+Kinshicho' target='_blank'>ARCAKIT</a> / <a href='https://www.google.com/maps/search/?api=1&query=Marui+Kinshicho' target='_blank'>OIOI</a> 採買", desc: "最後補貨買 Femcare洗劑、Pelican肥皂、MAPUTI慕斯、阿魯露斯糖漿等雜貨" },
            { time: "14:00", title: "悠閒午餐", desc: "錦糸町享用午餐並回飯店完成最後打包" },
            { time: "13:00 / 16:00", title: "機場巴士 (方案一)", desc: "錦糸町站北口搭乘 Skytree Shuttle，免搬行李。<br>選項①: 13:00 發車 (14:03 抵達) 提早去機場逛街<br>選項②: 16:00 發車 (17:03 抵達) 時間最剛好", note: "【無腦直達】" },
            { time: "16:15 / 16:45", title: "JR快速列車 (方案二)", desc: "第 4 月台搭乘 JR 總武快速線。<br>選項①: 16:15 發車 (17:35 抵達) 距離開櫃剩40分<br>選項②: 16:45 發車 (18:05 抵達) 完美無縫接軌", note: "【精準抵達】" },
            { time: "18:15", title: "虎航報到", desc: "第二航廈 3F 櫃台開櫃辦理託運 (20:00死線關櫃)" },
            { time: "20:45", title: "班機起飛 (IT701)", desc: "滿載而歸，結束縱貫日本大冒險！" }
        ]
    }
];

// 2. Data Structure for Checklist
const checklistData = [
    {
        category: "必備文件與電子票",
        items: [
            { id: "c1", text: "護照 (確認效期)" },
            { id: "c2", text: "Visit Japan Web 截圖與 QR Code" },
            { id: "c3", text: "2026 TGS 電玩展門票 / 媒體證" },
            { id: "c4", text: "Tabist泰托拉 / 渡輪 / 錦糸町飯店訂房確認信" },
            { id: "c5", text: "線上購買 <a href='https://travelcontentsapp.com/have-fun-pass/kitakyushucity-shimonosekicity/' target='_blank' style='color:var(--neon-cyan);text-decoration:underline;'>北九州市・下關樂享周遊券</a> / 四葉草套票憑證" },
            { id: "c6", text: "線上購買 <a href='https://www.westjr.co.jp/travel-information/tc/tickets-passes/oneway/hakatakokura/' target='_blank' style='color:var(--neon-cyan);text-decoration:underline;'>山陽新幹線單程車票（博多-小倉）</a>" },
            { id: "c7", text: "預先下載註冊 川崎網咖 APP 會員 (快活CLUB / グランカスタマ)" }
        ]
    },
    {
        category: "電子產品與裝備",
        items: [
            { id: "e1", text: "大容量行動電源 (TGS必備)" },
            { id: "e2", text: "萬用轉接頭與充電線" },
            { id: "e3", text: "上網 SIM 卡 / WiFi 機" },
            { id: "e4", text: "Suica / PASMO 實體卡或綁定 Apple Pay" }
        ]
    },
    {
        category: "生活與其他",
        items: [
            { id: "l1", text: "日幣現金 (推幣機與屋台需要現金)" },
            { id: "l2", text: "大容量可摺疊行李袋 (裝秋葉原戰利品)" },
            { id: "l3", text: "舒適好走的運動鞋 (展場與橫跨海峽必備)" },
            { id: "l4", text: "輕便換洗衣物 (含泡湯專用隨身包)" },
            { id: "l5", text: "常備藥品 (腸胃藥、止痛藥、休足時間)" }
        ]
    }
];

// 3. Data Structure for Shopping List
const shoppingData = [
    { time: "出發前", location: "<a href='https://www.google.com/maps/search/?api=1&query=Online' target='_blank'>線上</a>", items: ["<a href='https://travelcontentsapp.com/have-fun-pass/kitakyushucity-shimonosekicity/' target='_blank'>北九州市・下關樂享周遊券</a>", "<a href='https://www.westjr.co.jp/travel-information/tc/tickets-passes/oneway/hakatakokura/' target='_blank'>山陽新幹線單程車票（博多-小倉）</a>"], note: "出發前必備的交通與景點神卡" },
    { time: "9/12 (傍晚)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Kokura+Station' target='_blank'>小倉車站新幹線內</a>", items: ["<a href='https://www.google.com/search?tbm=isch&q=%E4%BC%8A%E9%83%BD%E3%81%8D%E3%82%93%E3%81%90+%E3%81%A9%E3%82%89%E3%81%8D%E3%82%93%E3%81%90' target='_blank'>伊都 KING 甘王草莓銅鑼燒</a>"], note: "抵達小倉時不出站直接購買" },
    { time: "9/13 (早上)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Kokura+Station' target='_blank'>JR 小倉站</a>", items: ["關門海峽四葉草套票 (實體券)"], note: "用於搭乘潮風號、接駁巴士與聯絡船" },
    { time: "9/13 (下午)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Kamon+Wharf' target='_blank'>Kamon Wharf (下關)</a>", items: ["井上商店河豚仙貝", "河豚茶泡飯"], note: "使用「樂享周遊券」兌換 1,000 日圓折抵" },
    { time: "9/14 (離開前)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Kokura+Station' target='_blank'>小倉車站周邊</a>", items: ["<a href='https://www.google.com/search?tbm=isch&q=%E3%83%A9%E3%82%AB%E3%83%B3%E3%83%88+%E3%82%A2%E3%83%AB%E3%83%AD%E3%83%BC%E3%82%B9%E3%83%96%E3%83%AC%E3%83%B3+100g' target='_blank'>Lakanto Allose Blend 代糖</a>", "<a href='https://www.google.com/search?tbm=isch&q=%E5%8D%9A%E5%A4%9A%E9%80%9A%E3%82%8A%E3%82%82%E3%82%93' target='_blank'>博多通りもん (博多通饅頭)</a>"], note: "離開九州前買好代糖與限定伴手禮 (<a href='https://www.google.com/maps/search/?api=1&query=Matsumoto+Kiyoshi+Kokura' target='_blank'>松本清</a> / <a href='https://www.google.com/maps/search/?api=1&query=Meihinkura+Kokura' target='_blank'>銘品蔵</a>)" },
    { time: "9/16 (下午)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Kawasaki+Station' target='_blank'>川崎車站周邊</a>", items: ["<a href='https://www.google.com/search?tbm=isch&q=EarFun+Air+Pro+4%2B' target='_blank'>EarFun</a> / <a href='https://www.google.com/search?tbm=isch&q=Soundcore+Liberty+4+Pro' target='_blank'>Soundcore</a> / <a href='https://www.google.com/search?tbm=isch&q=JBL+Live+Beam+3' target='_blank'>JBL</a> 藍牙耳機", "<a href='https://www.google.com/search?tbm=isch&q=Workman+Mediheal+%E5%8D%8A%E8%A2%96T%E3%82%B7%E3%83%A3%E3%83%84' target='_blank'>Workman Mediheal 半袖T恤</a>", "<a href='https://www.google.com/search?tbm=isch&q=VENEX+Recovery+Cool%2B' target='_blank'>VENEX Recovery Cool+</a>"], note: "<a href='https://www.google.com/maps/search/?api=1&query=Yodobashi+Camera+Kawasaki+LeFRONT' target='_blank'>Yodobashi</a> / <a href='https://www.google.com/maps/search/?api=1&query=Workman+Girl+Kawasaki+LeFRONT' target='_blank'>WorkmanGirl</a> (LeFRONT) / <a href='https://www.google.com/maps/search/?api=1&query=Bic+Camera+LAZONA+Kawasaki' target='_blank'>Bic Camera</a> (LAZONA)" },
    { time: "9/17 - 9/18", location: "<a href='https://www.google.com/maps/search/?api=1&query=Makuhari+Messe' target='_blank'>TGS 幕張展覽館</a>", items: ["TGS 限定周邊", "遊戲廠商特典"], note: "視會場攤位與戰況而定" },
    { time: "9/18 (晚上)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Nintendo+Tokyo' target='_blank'>Nintendo Tokyo (澀谷)</a>", items: ["任天堂原廠限定周邊 (薩爾達、瑪利歐、斯普拉遁)"], note: "如果有安排前往市區，強烈建議去旗艦店掃貨" },
    { time: "9/19 (下午)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Akihabara' target='_blank'>秋葉原</a>", items: ["公仔、模型、動漫精品", "(備案) 補買漏網之魚的藍牙耳機或 VENEX"], note: "<a href='https://www.google.com/maps/search/?api=1&query=%E7%A7%8B%E8%91%89%E5%8E%9F%E3%83%A9%E3%82%B8%E3%82%AA%E4%BC%9A%E9%A4%A8' target='_blank'>無線電會館</a> / 中央通大肆搜刮" },
    { time: "9/20 (早上)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Kinshicho+Station' target='_blank'>錦糸町站前</a>", items: ["<a href='https://www.google.com/search?tbm=isch&q=%E3%82%A2%E3%83%AB%E3%82%B8%E3%82%A7%E3%83%A9%E3%83%B3+%E3%83%95%E3%82%A7%E3%83%A0%E3%82%B1%E3%82%A2+%E3%83%9B%E3%82%A4%E3%83%83%E3%83%97%E3%82%A6%E3%82%A9%E3%83%83%E3%82%B7%E3%83%A5' target='_blank'>ARGELAN Femcare 洗劑</a>", "<a href='https://www.google.com/search?tbm=isch&q=FANCL+%E5%B0%BF%E9%85%B8%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88' target='_blank'>FANCL 尿酸サポート</a>", "<a href='https://www.google.com/search?tbm=isch&q=%E3%83%9A%E3%83%AA%E3%82%AB%E3%83%B3%E7%9F%B3%E9%B9%B8+ForBack' target='_blank'>Pelican 藥用肥皂</a> / <a href='https://www.google.com/search?tbm=isch&q=%E3%83%9A%E3%83%AA%E3%82%AB%E3%83%B3%E7%9F%B3%E9%B9%B8+%E6%B3%A5%E7%82%AD%E7%9F%B3+%E6%B4%97%E9%A1%94%E7%9F%B3%E9%B9%B8' target='_blank'>泥炭石潔面皂</a>", "<a href='https://www.google.com/search?tbm=isch&q=MAPUTI+%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8B%E3%83%83%E3%82%AF%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9%E3%82%A4%E3%83%B3%E3%83%86%E3%82%A3%E3%83%A1%E3%82%A4%E3%83%88%E3%82%BD%E3%83%BC%E3%83%97' target='_blank'>MAPUTI 私密潔淨慕斯</a>", "<a href='https://www.google.com/search?tbm=isch&q=PHJAPAN+%E3%83%8F%E3%83%B3%E3%82%B5%E3%83%A0%E3%82%B1%E3%82%A2' target='_blank'>PHJAPAN 慕斯</a>", "<a href='https://www.google.com/search?tbm=isch&q=%E3%82%A2%E3%82%A4%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2+%E6%B4%97%E6%BF%AF%E6%A9%9F%E3%81%A7%E6%B4%97%E3%81%86%E3%83%80%E3%82%A6%E3%83%B3%E5%B0%82%E7%94%A8%E6%B4%97%E5%89%A4' target='_blank'>Aimedia 羽絨清潔劑</a>", "<a href='https://www.google.com/search?tbm=isch&q=%E3%83%9E%E3%82%A4%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB+%E3%82%A2%E3%83%AB%E3%83%AD%E3%83%BC%E3%82%B9%E3%82%B7%E3%83%AD%E3%83%83%E3%83%97' target='_blank'>My Normal 阿魯露斯糖漿</a>", "大宗零食伴手禮"], note: "最後一天早上將所有雜貨一次買齊 (<a href='https://www.google.com/maps/search/?api=1&query=Matsumoto+Kiyoshi+Kinshicho' target='_blank'>松本清</a> / <a href='https://www.google.com/maps/search/?api=1&query=LOFT+Kinshicho' target='_blank'>LOFT</a> / <a href='https://www.google.com/maps/search/?api=1&query=LIFE+Kinshicho' target='_blank'>LIFE</a>)" },
    { time: "9/20 (下午)", location: "<a href='https://www.google.com/maps/search/?api=1&query=Narita+Airport+Terminal+2' target='_blank'>成田機場 T2 商店街</a>", items: ["神奇寶貝中心 (Pokemon Store) 周邊", "東京香蕉、白色戀人 等免稅伴手禮"], note: "距離開櫃前還有近 1.5 小時可慢慢逛" }
];

// 4. UI Rendering Logic
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initCountdown();
    renderItinerary();
    renderChecklist();
    renderShoppingList();
    
    // Select the first day by default
    if(itineraryData.length > 0) {
        selectDay(0);
    }
});

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

function initCountdown() {
    // Target: Sept 12, 2026, 09:30:00 (GMT+8) - Taoyuan Airport Check-in
    const targetDate = new Date('2026-09-12T09:30:00+08:00').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('cd-days').innerText = "00";
            document.getElementById('cd-hours').innerText = "00";
            document.getElementById('cd-mins').innerText = "00";
            document.getElementById('cd-secs').innerText = "00";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('cd-days').innerText = days.toString().padStart(2, '0');
        document.getElementById('cd-hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('cd-mins').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('cd-secs').innerText = seconds.toString().padStart(2, '0');
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function renderItinerary() {
    const selectorContainer = document.getElementById('day-selector');
    
    // Generate Day Buttons
    itineraryData.forEach((dayData, index) => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        btn.innerHTML = `<span class="day-date">${dayData.date} (${dayData.day})</span><span class="day-title">${dayData.title.substring(0, 6)}...</span>`;
        btn.onclick = () => selectDay(index);
        selectorContainer.appendChild(btn);
    });
}

function selectDay(index) {
    // Update active button
    const btns = document.querySelectorAll('.day-btn');
    btns.forEach((btn, i) => {
        if(i === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    
    // Render content
    const display = document.getElementById('itinerary-display');
    const dayData = itineraryData[index];
    
    let html = `
        <div class="day-header">
            <h3>${dayData.date} ${dayData.title}</h3>
        </div>
        <div class="timeline">
    `;
    
    dayData.items.forEach(item => {
        html += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="time-badge">${item.time}</div>
                    <div class="item-title">${item.title}</div>
                    <div class="item-desc">${item.desc}</div>
                    ${item.note ? `<div class="item-note">💡 ${item.note}</div>` : ''}
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    display.innerHTML = html;
}

// Checklist logic with localStorage
function renderChecklist() {
    const container = document.getElementById('checklist-categories');
    let savedState = JSON.parse(localStorage.getItem('tgs2026_checklist')) || {};
    
    let html = '';
    
    checklistData.forEach(cat => {
        html += `
            <div class="category-block">
                <h3>${cat.category}</h3>
        `;
        
        cat.items.forEach(item => {
            const isChecked = savedState[item.id] ? 'checked' : '';
            html += `
                <label class="check-item">
                    <input type="checkbox" id="${item.id}" ${isChecked} onchange="updateChecklist()">
                    <span>${item.text}</span>
                </label>
            `;
        });
        
        html += `</div>`;
    });
    
    container.innerHTML = html;
    updateProgress();
}

window.updateChecklist = function() {
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    let state = {};
    
    checkboxes.forEach(cb => {
        state[cb.id] = cb.checked;
    });
    
    localStorage.setItem('tgs2026_checklist', JSON.stringify(state));
    updateProgress();
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    if(checkboxes.length === 0) return;
    
    let checked = 0;
    checkboxes.forEach(cb => {
        if(cb.checked) checked++;
    });
    
    const percentage = (checked / checkboxes.length) * 100;
    document.getElementById('checklist-progress').style.width = percentage + '%';
}

function renderShoppingList() {
    const container = document.getElementById('shopping-list');
    if(!container) return;
    
    let html = '';
    shoppingData.forEach(task => {
        const itemsHtml = task.items.map(item => `<li>${item}</li>`).join('');
        html += `
            <div class="shopping-card">
                <div class="shopping-header">
                    <span class="shopping-time">${task.time}</span>
                    <span class="shopping-location">${task.location}</span>
                </div>
                <ul class="shopping-items">
                    ${itemsHtml}
                </ul>
                ${task.note ? `<div class="shopping-note">${task.note}</div>` : ''}
            </div>
        `;
    });
    container.innerHTML = html;
}
