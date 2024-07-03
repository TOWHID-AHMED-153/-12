module.exports = {
	config: {
		name: "dialog",
		aliases: ["dlg"],
		version: "2.0",
		author: "MR.AYAN",
		countDown: 30,
		role: 0,
		shortDescription: "",
		longDescription: "get kanda/p***n video hilake sojaa",
		category: "𝟭𝟴+",
		guide: "{p}{n}",
	},

	sentVideos: [],

	onStart: async function ({ api, event, message }) {
		const senderID = event.senderID;

		const loadingMessage = await message.reply({
			body: "✅ | 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗩𝗶𝗱𝗲𝗼...",
		});

		const link = [
			"https://i.imgur.com/yeTyL5P.mp4",
			"https://i.imgur.com/sjeKuVp.mp4",
			"https://i.imgur.com/NzuB6hq.mp4",
			"https://i.imgur.com/IC5PVIm.mp4",
			"https://i.imgur.com/LjYjDXn.mp4",
			"https://i.imgur.com/gxVJLkC.mp4",
			"https://i.imgur.com/aloOEcx.mp4",
			"https://i.imgur.com/Qh9UOqD.mp4",
			"https://i.imgur.com/rIzucYv.mp4",
			"https://i.imgur.com/bukOKaM.mp4",
			"https://i.imgur.com/Xy7Z0lN.mp4",
			"https://i.imgur.com/UgnUFZz.mp4",
			"https://i.imgur.com/yeTyL5P.mp4",
			"https://i.imgur.com/qm01onK.mp4",
			"https://i.imgur.com/3DbSNav.mp4",
			"https://i.imgur.com/ow5cU4I.mp4",
			"https://i.imgur.com/8aC1bTt.mp4",
			"https://i.imgur.com/sRHzUGn.mp4",
			"https://i.imgur.com/397dMzt.mp4",
			"https://i.imgur.com/hAmb1hX.mp4",
			"https://i.imgur.com/i1oukV1.mp4",
			"https://i.imgur.com/FtKrFlX.mp4",
			"https://i.imgur.com/2szhnrg.mp4",
			"https://i.imgur.com/952WL0j.mp4",
			"https://i.imgur.com/ST9vnye.mp4",
			"https://i.imgur.com/s0IoWJS.mp4",
			"https://i.imgur.com/lqdiOIV.mp4",
			"https://i.imgur.com/A5JkuKV.mp4",
			"https://i.imgur.com/41Fa0pQ.mp4",
			"https://i.imgur.com/SU0RtsS.mp4",
			"https://i.imgur.com/6sTvfi2.mp4",
			"https://i.imgur.com/79X6Gd6.mp4",
			"https://i.imgur.com/uM19SEw.mp4",

		];

		const availableVideos = link.filter(video => !this.sentVideos.includes(video));

		if (availableVideos.length === 0) {
			this.sentVideos = [];
		}

		const randomIndex = Math.floor(Math.random() * availableVideos.length);
		const randomVideo = availableVideos[randomIndex];

		this.sentVideos.push(randomVideo);

		if (senderID !== null) {
			message.reply({
				body: '☔☔☔☔☔☔',
				attachment: await global.utils.getStreamFromURL(randomVideo),
			});

			setTimeout(() => {
				api.unsendMessage(loadingMessage.messageID);
			}, 50000);
		}
	},
};

/* Don't change author okay bro i will fixed author 

Original fb I'd : https://m.me/NOOBS.DEVELOPER.AYAN

Do you change this author you are a gay hahahaha */
