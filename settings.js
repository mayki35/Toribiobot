 const fs = require('fs')  
 const path = require('path') 
const baileys = require('@whiskeysockets/baileys'); 
 const axios = require('axios');
 const moment = require('moment-timezone')
 const {getBuffer, getSizeMedia} = require('./libs/fuctions.js')
 const chalk = require('chalk')  
 const os = require('os')
 const fetch = require('node-fetch')
 const FormData = require('form-data')  
global.botNumberCode = "+51925595067" //Ejemplo: +59309090909
global.phoneNumber = "+51925595067"

global.owner = [ 
  ['51925595067', 'TORIBIOBOT', true],
  ['51925595067', 'TORIBIOBOT', true],
  [''],
  [''],
  [''], 
  [''],
  ['']]
  
  global.mods = ['51925595067 '] //Moderadores del bot
  global.prems = [''],  

 global.botname = "TORIBIOBOT" 
 global.wm = 'TORI' 
 global.vs = '1.0.0' 
 global.place = 'America/Bogota' // Aquí puede encontrar su ubicación https://momentjs.com/timezone/ 
global.baileys = baileys
global.axios = axios
global.fs = fs
global.fetch = fetch
global.os = os
global.chalk = chalk
global.FormData = FormData
global.getBuffer = getBuffer
global.getSizeMedia = getSizeMedia
global.moment = moment
 global.language = 'es' // Aquí puede encontrar su idioma https://cloud.google.com/translate/docs/languages?hl=es-419 
 //global.keyp7 = ['HVYBvnPn']
global.xanax = 'xanax-apis'
global.keyp7 = '6WwQYcXs'
global.lolkeysapi = "GataDiosV2" //api lohum 
global.keyxy = ['4ZFZiZK2Vw']
 global.imagen1 = fs.readFileSync('./media/menu.jpg') 
global.query = imagen1
 global.imagen2 = fs.readFileSync('./media/menu2.jpg') 
 global.imagen3 = fs.readFileSync('./media/menu3.jpg') 
 global.noperfil = fs.readFileSync('./media/sinfoto.jpg') 
 global.md = 'https://github.com/mayki35' 
 global.nn = 'https://chat.whatsapp.com/KmdZqLz3tva0N5AUDZmsmq' //Update  
 const ctxd = [ 
"AF",  "AX",   "AL", "DZ",  "AS",   "AD",  "AO",   "AI",  "AQ", "AG", "AR", "AM", "AW", "AU",  "AT", 
       "AZ", 
       "BS", 
       "BH", 
       "BD", 
       "BB", 
       "BY", 
       "BE", 
       "BZ", 
       "BJ", 
       "BM", 
       "BT", 
       "BO", 
       "BQ", 
       "BA", 
       "BW", 
       "BV", 
       "BR", 
       "IO", 
       "BN", 
       "BG", 
       "BF", 
       "BI", 
       "KH", 
       "CM", 
       "CA", 
       "CV", 
       "KY", 
       "CF", 
       "TD", 
       "CL", 
       "CN", 
       "CX", 
       "CC", 
       "CO", 
       "KM", 
       "CG", 
       "CD", 
       "CK", 
       "CR", 
       "CI", 
       "HR", 
       "CU", 
       "CW", 
       "CY", 
       "CZ", 
       "DK", 
       "DJ", 
       "DM", 
       "DO", 
       "EC", 
       "EG", 
       "SV", 
       "GQ", 
       "ER", 
       "EE", 
       "ET", 
       "FK", 
       "FO", 
       "FJ", 
       "FI", 
       "FR", 
       "GF", 
       "PF", 
       "TF", 
       "GA", 
       "GM", 
       "GE", 
       "DE", 
       "GH", 
       "GI", 
       "GR", 
       "GL", 
       "GD", 
       "GP", 
       "GU", 
       "GT", 
       "GG", 
       "GN", 
       "GW", 
       "GY", 
       "HT", 
       "HM", 
       "VA", 
       "HN", 
       "HK", 
       "HU", 
       "IS", 
       "IN", 
       "ID", 
       "IR", 
       "IQ", 
       "IE", 
       "IM", 
       "IL", 
       "IT", 
       "JM", 
       "JP", 
       "JE", 
       "JO", 
       "KZ", 
       "KE", 
       "KI", 
       "KP", 
       "KR", 
       "XK", 
       "KW", 
       "KG", 
       "LA", 
       "LV", 
       "LB", 
       "LS", 
       "LR", 
       "LY", 
       "LI", 
       "LT", 
       "LU", 
       "MO", 
       "MK", 
       "MG", 
       "MW", 
       "MY", 
       "MV", 
       "ML", 
       "MT", 
       "MH", 
       "MQ", 
       "MR", 
       "MU", 
       "YT", 
       "MX", 
       "FM", 
       "MD", 
       "MC", 
       "MN", 
       "ME", 
       "MS", 
       "MA", 
       "MZ", 
       "MM", 
       "NA", 
       "NR", 
       "NP", 
       "NL", 
       "AN", 
       "NC", 
       "NZ", 
       "NI", 
       "NE", 
       "NG", 
       "NU", 
       "NF", 
       "MP", 
       "NO", 
       "OM", 
       "PK", 
       "PW", 
       "PS", 
       "PA", 
       "PG", 
       "PY", 
       "PE", 
       "PH", 
       "PN", 
       "PL", 
       "PT", 
       "PR", 
       "QA", 
       "RS", 
       "RE", 
       "RO", 
       "RU", 
       "RW", 
       "BL", 
       "SH", 
       "KN", 
       "LC", 
       "MF", 
       "PM", 
       "VC", 
       "WS", 
       "SM", 
       "ST", 
       "SA", 
       "SN", 
       "CS", 
       "SC", 
       "SL", 
       "SG", 
       "SX", 
       "SK", 
       "SI", 
       "SB", 
       "SO", 
       "ZA", 
       "GS", 
       "SS", 
       "ES", 
       "LK", 
       "SD", 
       "SR", 
       "SJ", 
       "SZ", 
       "SE", 
       "CH", 
       "SY", 
       "TW", 
       "TJ", 
       "TZ", 
       "TH", 
       "TL", 
       "TG", 
       "TK", 
       "TO", 
       "TT", 
       "TN", 
       "TR", 
       "XT", 
       "TM", 
       "TC", 
       "TV", 
       "UG", 
       "UA", 
       "AE", 
       "GB", 
       "US", 
       "UM", 
       "UY", 
       "UZ", 
       "VU", 
       "VE", 
       "VN", 
       "VG", "VI", "WF", "EH",  "YE", "ZM", "ZW"]; 
global.ctpro = ctxd;
 global.packname = "TORIBIOBOT" 
 global.author = "mayki" 
  
 let file = require.resolve(__filename)  
 fs.watchFile(file, () => {  
 fs.unwatchFile(file) 
 const fileName = path.basename(file) 
 console.log(chalk.greenBright.bold(`Update '${fileName}'.`))  
 delete require.cache[file]  
 require(file)  
 })
