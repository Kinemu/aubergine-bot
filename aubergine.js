const app = require("./required.js");
let aubergine = app.startAubergine();

aubergine.on('ready', () => {
	console.log("Let's aubergine!!");
	aubergine.user.setGame("🍆");
});

aubergine.on("message", (message) => {

	let arg = (message.content.split(" ").slice(1))[0];
	user = aubergine.users.find(u => u.username === arg);

	function postMessageMention(arg1, arg2, arg3) {
		if (message.content.startsWith(arg1)) {
			if (arg == null)
				message.channel.send(arg2[Math.floor(Math.random() * arg2.length)]);
			else
				message.channel.send(arg + " " + arg3);
		}
	}

	function postMessage(arg1, arg2) {
		if (message.content.startsWith(arg1))
			message.channel.send(arg2);
	}

	function postRandomMessage(arg1, arg2) {
		if (message.content.startsWith(arg1))
			message.channel.send(arg2[Math.floor(Math.random() * arg2.length)]);
	}


	kinemu = aubergine.users.find(u => u.username === "Kinemu");
    eggplant = [":eggplant:", "pik@, reine l'aubergine :eggplant:", kinemu + " :eggplant:", "Aubergine!", ":regional_indicator_a: :regional_indicator_u: :regional_indicator_b: :regional_indicator_e: :regional_indicator_r: :regional_indicator_g: :regional_indicator_i: :regional_indicator_n: :regional_indicator_e:"];
    banana = [":banana:", "pik@, reine de la banane :eggplant:", "Banane!", ":regional_indicator_b: :regional_indicator_a: :regional_indicator_n: :regional_indicator_a: :regional_indicator_n: :regional_indicator_a:"];
    kebab = ["🥙", "Kebab <3", ":regional_indicator_k: :regional_indicator_e: :regional_indicator_b: :regional_indicator_a: :regional_indicator_b:"];
    pasta = [":spaghetti:", "Pasta <3", ":regional_indicator_p: :regional_indicator_a: :regional_indicator_s: :regional_indicator_t: :regional_indicator_a:"];
	tacos = ["Tacos < Kebab"];

    lassalle = ["http://imgur.com/a/QazsT", "http://imgur.comA/a/nSKXs", "http://imgur.com/a/tPgPW", "http://imgur.com/a/uigG1", "http://imgur.com/a/OxBtR", "http://imgur.com/a/8SLlc", "http://imgur.com/a/ynXGP", "http://imgur.com/a/lbHED", "http://imgur.com/a/qm8BO", "http://imgur.com/a/B3FpF", "http://imgur.com/a/bThkT", "http://imgur.com/a/8ZFEI", "http://imgur.com/a/nWtIC", "http://imgur.com/a/UjtqU"];
    poutou = ["https://www.youtube.com/watch?v=F8QH-w6g7ms", "http://imgur.com/a/5Jt0M", "http://imgur.com/a/kZbl8", "http://imgur.com/a/uqMgN", "http://imgur.com/a/LHgre", "http://imgur.com/a/4CXDA", "http://imgur.com/a/9rI7U", "http://imgur.com/a/Ogsox", "http://imgur.com/a/3lwBo", "http://imgur.com/a/UVSLK", "http://imgur.com/a/VHxUH", "http://imgur.com/a/s7enc", "http://imgur.com/a/u5mhU"];

    denis = ["https://www.youtube.com/watch?v=XE6YaLtctcI", "http://imgur.com/UYqXdHG", "http://imgur.com/WoaK37g", "http://imgur.com/syvl6Qh", "http://imgur.com/eoHmqjU", "http://imgur.com/1PGQyqE", "http://imgur.com/CfcWTAS", "http://imgur.com/wSQXwCf", "http://imgur.com/liwQI7F", "http://imgur.com/X5lyo4I", "http://imgur.com/WLtPOkc", "http://imgur.com/m9e7jSO" ];

    duck = ["COIN COIN", ":duck:", ":regional_indicator_d: :regional_indicator_u: :regional_indicator_c: :regional_indicator_k:"];
    lovelive = ["https://www.youtube.com/watch?v=nvPv-lcPZbY", "https://www.youtube.com/watch?v=hjB5QB54ZAw", "https://www.youtube.com/watch?v=RwqvrGaGXDI", "https://www.youtube.com/watch?v=MutLiEwJpt0", "https://www.youtube.com/watch?v=nORjYWsNlC0", "https://www.youtube.com/watch?v=v5KFcRuSe2M", "https://www.youtube.com/watch?v=MIEtGBlHr-U", "https://www.youtube.com/watch?v=OyPtr_hh9e8", "https://www.youtube.com/watch?v=2wyqHSyzCLk", "https://www.youtube.com/watch?v=jT8CHAQ0c2Q", "https://www.youtube.com/watch?v=z0xFPrjQOcY", "https://www.youtube.com/watch?v=rjf4NNU-JqA", "https://www.youtube.com/watch?v=7ZuPAmktbNM", "https://www.youtube.com/watch?v=sonFpwBvMbM", "https://www.youtube.com/watch?v=XzQ-jMeB8GA", "https://www.youtube.com/watch?v=Ae_94w5gK2s", "https://www.youtube.com/watch?v=Vu4pBRC7W3g"];
    snowhalation = ["https://www.youtube.com/watch?v=g1p5eNOsl7I", "https://www.youtube.com/watch?v=kjO0eSLa75g", "https://www.youtube.com/watch?v=TN3w-mxwoYE", "https://www.youtube.com/watch?v=Ulnbjqf0Os0", "https://www.youtube.com/watch?v=v_UaC0otbKE", "https://www.youtube.com/watch?v=8-XQrVHKc6I", "https://www.youtube.com/watch?v=cdoaqFHlB7M", "https://www.youtube.com/watch?v=Aa1c4-hNLXI"];
	
	postMessageMention("!aubergine", eggplant, ":eggplant:");
	postMessageMention("!pasta", pasta, ":spaghetti:");
	postMessageMention("!banane", banana, ":banana:");
	postMessageMention("!duck", duck, ":duck:");
	postMessageMention("!kebab", kebab, "🥙");
	postMessageMention("!tacos", tacos, "🌮");
	postMessage("!pomme", "«Mangez des pommes» — Jacques Chirac");
	postMessage("!kemono", "Kemono Friends! https://www.youtube.com/watch?v=zeq2M6_sJP8");
	postMessage("!ppp", "PPP! https://www.youtube.com/watch?v=q5vwy1ED36I");
	postMessage("!donkeykong", "https://www.youtube.com/watch?v=kA5Wc1_Zghk");
	postRandomMessage("!lassalle", lassalle);
    postRandomMessage("!poutou", poutou);
    postRandomMessage("!denis", denis);
	postRandomMessage("!lovelive", lovelive);
	postRandomMessage("!snowhalation", snowhalation);
    postMessage("!help", "Available commands: !aubergine, !pasta, !banane, !duck, !kebab, !tacos, !pomme, !kemono, !ppp, !donkeykong, !lassalle, !poutou, !lovelive, !snowhalation, !denis");
});
