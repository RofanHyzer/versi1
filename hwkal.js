// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6281225414296'
global.ig = 'https://instagram/@ditzsir' // ubah aja
global.taa = 'https://raditsesi.my.id'
global.gh = 'https://github.com/RofanHyzer'
global.email = 'admin@raditsesi.my.id' //serah
global.region = 'indonesia' // serah
global.dana = '081391701391'
global.gopay = '-'
global.ovo = '087848419398'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'RofanOffc' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6281225414296'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Demom MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Ygy' // ubah aja ini nama sticker
global.author = 'By Rofan' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})