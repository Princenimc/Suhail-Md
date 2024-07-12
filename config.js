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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_23_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDkzLFxuICAgICAgICA3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICA3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICA3NixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInh0cDRxbjhhalBpTVJUTXdGbmUrNnkvSVBmd0hTaXB5UndVWDAyZEpqeTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc0eUtwYnloU2hpeDh2cjFOMG1zT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzBjY2E4NGQtNDQyNi00YzM4LTlhNWMtNWViYzViZjE1Njk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDc4LFxuICAgICAgMTczLFxuICAgICAgNyxcbiAgICAgIDE0MyxcbiAgICAgIDEyOSxcbiAgICAgIDExMyxcbiAgICAgIDExNyxcbiAgICAgIDI0NCxcbiAgICAgIDIxNixcbiAgICAgIDE3LFxuICAgICAgNzEsXG4gICAgICAxNjEsXG4gICAgICAxNjksXG4gICAgICAxNzQsXG4gICAgICAyMDcsXG4gICAgICAyMjQsXG4gICAgICAxNTksXG4gICAgICAxNTMsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDE1MyxcbiAgICAgIDYyLFxuICAgICAgMTUsXG4gICAgICAxNTcsXG4gICAgICAzOCxcbiAgICAgIDIyNSxcbiAgICAgIDU0LFxuICAgICAgNDQsXG4gICAgICAxNzgsXG4gICAgICAxNzksXG4gICAgICA5OSxcbiAgICAgIDc1LFxuICAgICAgMTY2LFxuICAgICAgMjMxLFxuICAgICAgMTAyLFxuICAgICAgMjQ0LFxuICAgICAgMTUzLFxuICAgICAgMjQzLFxuICAgICAgNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzZQOTVQNlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODEwMDY3MTY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlByaW5jZVwiLFxuICAgIFwibGlkXCI6IFwiOTUxNjQwNDMzOTEwMTQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYVZoSUVIRUlQUXc3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndOOUhLdklIMHphSDZOUUNtbURVQVVTUVlVbTlkRG9PQmJqaDQ0WDhiQXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZVJwbDIrTlNobE5mS3N4bHpFTjRlTzZrUWZUandEMlNCelZTZkxmWmU4Uk9YZndCS2dFTFhOd0tKaVRXbEFtUEhZaHE0dFpoZkNlL3BSQlJXbzBMQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjdUaC93OWZSVytmZExOeUVrdlRTMlJzTVlWTHFXSmJXcnNxT3B0MU96djdMaXFBd0ppamZIS09hLys1bVl4Vy9laWRvVmg1bHhiKytHMjZWS1JkQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MTAwNjcxNjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzcyNjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDMvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEMy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
