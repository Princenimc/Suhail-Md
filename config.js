const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348081006716";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_23_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTksXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDI1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzk2bkdOUHVWWVFpQlNSSWEwQngvTTRSZXFhdmV4blpRS0J5ZTA4bDR0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDgxMDA2NzE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOUZFNEQ1QjdBOEI2MzVCQTZDODA2NTFCRTRDNzgxMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MjA2MzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSGk1ZDlRVVVSMEdqUTRoTUNPV2xQUVwiLFxuICBcInBob25lSWRcIjogXCJiNDI4YTlkYy0zMTRhLTQ4MDMtYjRlYi1hYzdkNGMwODBmZWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxNzAsXG4gICAgICA1NCxcbiAgICAgIDM4LFxuICAgICAgMTk1LFxuICAgICAgMTU3LFxuICAgICAgMTk5LFxuICAgICAgODYsXG4gICAgICA1NCxcbiAgICAgIDI0MixcbiAgICAgIDE4NSxcbiAgICAgIDE2OSxcbiAgICAgIDE2MSxcbiAgICAgIDEyMCxcbiAgICAgIDEwLFxuICAgICAgMTMyLFxuICAgICAgMjA1LFxuICAgICAgMTQ4LFxuICAgICAgMTExLFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgOTksXG4gICAgICAxNjUsXG4gICAgICA1MSxcbiAgICAgIDI3LFxuICAgICAgMTUwLFxuICAgICAgMTc5LFxuICAgICAgNDksXG4gICAgICAyMzAsXG4gICAgICAyNTIsXG4gICAgICAxNDYsXG4gICAgICAyMzYsXG4gICAgICA5OCxcbiAgICAgIDE5LFxuICAgICAgMjA4LFxuICAgICAgMTMsXG4gICAgICAyNDMsXG4gICAgICAyLFxuICAgICAgMjIzLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZXQUVMUVBMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgxMDA2NzE2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQcmluY2VcIixcbiAgICBcImxpZFwiOiBcIjk1MTY0MDQzMzkxMDE0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dWaElFSEVMS2Z0TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3TjlIS3ZJSDB6YUg2TlFDbW1EVUFVU1FZVW05ZERvT0Jiamg0NFg4YkFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5RZjZVanR5M0NPQnFuakhMVVUyRUltbmVqTm1lK2grQ1FKRTRVbWF4R05qbHZ1VHRmcWV2U3JteENXdTAvNVNTS0Fob29uaUlmZ2VyeFFNTnJDR0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkI4SS82ekdSNndiZXZQSDF6dVVwU1ZGKzA0YVpvYldkWDgyZHZJWGx3OGVBVEtzU001RU9vZ3poNHdFUVRRcU5BUk5keGxDUnhNcGJkbmViVUd1cWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODEwMDY3MTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUyMDYzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB2eFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHZ4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ2NxeGVDN2dZRFRXUzIwREJUTzByY2hQVTJWZ3hudjcrb0M2cHhqTS9yTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODgxMjEzNjA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1MjA2MzMxOTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
