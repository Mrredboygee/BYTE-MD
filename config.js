
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUltOVYzc0NDM1RDQWFRbXhES2FvczJyMVgzZVJWMDR2OTNYWExjZVUwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDh0QTdmSWk1cndhUU1xcDRWQ0Y0d3ZDQkpsUzBBSjlmSlFYSkNEOVRtND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTHZGeGw0ZnRzQkpicU12d1ZFb0lIR1QrK3JPZzUxQWUyOXEvMmN1Zms4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHd1ZBZXplWWJWR0R4K1dxUk1Xdis3NVA4ZXdBU1hGamNQbGQ5V1k0Y2lJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1EUEdKUkkyWERISUVvN1Vzc3NkWEJmV3BpQ244OStYUnhkd0hET2hwMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFTUEVVTVIrZnFNSDRSMUh0M211Uysrb2hVbGJnS2JqdFR6aWRZR0J4V0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5Wc2RKVVdIZDFvVSt0U2wyZy9HZWw3UjhXMkpSYW5BUFQ5ZVJEdlNYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoici9oVVk1dmE0YVhRdyszN3BZWkV2QzhPRHdTc2ZmYlZXc0NhVFMzbThXOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEwRkZVVU9ib2pMc3VhRUZETkN6WDFWSnJaZTNwcmhhakl5a3V6WVhYWWdTQ0hIQ0pDTGt3cU5zUDJOak1HVzNreGdpT04xRTJrTXNrVmxrVkNaWkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6InRJejk2MFR2ZFAyd3ZxcitYWDhuaVlIdGQxSFFMcTdwaXp1VXhwM2RSYmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlwVDJWbDRQVDZXT3NkVk9TMWxWZ2ciLCJwaG9uZUlkIjoiMTU4MjhmNjItNTVmYi00OWY3LWFkNzktNTM4ZmYyNzgzYWI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVyY1Q2eWlFc2srWU5VRkR5NzZGY2dHclNXcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZeTNNZEtBNkxCdU5samhEc1EvcGVQMjFOYjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEM2Wkc5QVIiLCJtZSI6eyJpZCI6IjE4MDk4MDM3MzUyOjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIzwnZCrIPCdkJHwnZCe8J2QnfCdkIHwnZCo8J2QsiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkN5M0ZFUXh2V3J0UVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUElLSTNneVlWSFo5SFhoNXR2QjNuajZGbG1XbVh1MmMvOHhIM2Z5RGMwdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMlFtcmtoM1JhRlluSGluNC8zOVA4ai9UYWZ2cytyNDF1RWdubko5M3dIKy92M0p5K2sxcUVKaG9Sc1ZmNGdKUHZDYWJ2aHZUa1lkZytNY2FEaDJsQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhDN3dQVm1iL2Y0TGJxTzFQenZQR2lZZnpZN2wxRmVKVnVVZHp4MjJaang2dk5VV0R0R3N2R0RqdnhhVlVUMzNQVlZhYkNlY2I5NmFKakZNOEZTSEF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgwOTgwMzczNTI6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHlDaU40TW1GUjJmUjE0ZWJid2Q1NCtoWlpscGw3dG5QL01SOTM4ZzNOTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQ4MTM2Mn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
