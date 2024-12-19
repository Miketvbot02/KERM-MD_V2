//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50946377259";
global.owner = process.env.OWNER_NUMBER || "50946377259";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtRR0l2dW1adlZTdjJnZWo2Q1YwMjFPN0RWQ3poeXF6ZTB5WklXSHdGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGJTV1VMTm1wZEtYOFB6VUpBUGpraGFNVW8rV1lMNDk2eTBMVWZJZE5Dbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRlBDQWF0UjZMVEtvQWgxb2ZmZGZHVXJFbElXRUtMVVNoOEdLbWcwSFdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrb1ZKL1FlT3hwMTVwRkRWdjk3K2dYZVYwRzBPWW1WYmltYlNSbjNVTkJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLTDRtM3hqN0pDbTlLVlg0N1hSaHYwMmp4aUFhV2E0WXNXK3ovU0ZYV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ0MmQwaG85b0tvdmM5TWpqUmlUR0o5OE5HZExqUFNXQmhlNXBaUERRblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FLUi9lWW50ZGRseTNJZW1jMlNDYWVqaE40cTQ0UHZZb2RGanIrUU1Vcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVd1c2NyQ1M1RCtDMGJ6QkpIV0tIOVJMVVF5V1ZTWDhtQ2hMbkIyNzN3VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWaVNZTEdnYWU3dFNDakpDbEhCbWhnYkFqNUwrTVpTK1VubmVzUHYwMVlvMmV1aVMwZU9CY2dqTU44RXlJL211dVdZRHNTUUtmendTeUtkZjliT2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6Ik9xTEpPcWNtQlkvSXltMUwraE5CWFJZRlNWRmdCNUcrTVlBbllRQUlaclE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDYzNzcyNTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUJGM0U3NzRFNTZGNUZCNTFBREE4QTkzNDIwMUMxQzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDYzOTk1Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM1BLYnp2UjhRanllRUlkc3daUDhCUSIsInBob25lSWQiOiJjNTgwODVhNi03MDRmLTRjNjUtYWFjZC05ODkwMmI3ZTVjYmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODJEWkl0cWVGbGZiS3NyUDRuVlkxS3JuSUdJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVCemZnYTZrck5OZjEzdnBWc1JxdkdPZjV5ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNMVJLVjk4WiIsIm1lIjp7ImlkIjoiNTA5NDYzNzcyNTk6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZeg8J2XtvCdl7jwnZey8J2YgfCdmIMg8J2XovCdl7PwnZezIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPeXdnWmNHRU1PQ2tyc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4Qm53NHZlRmRkQnlWZWRWOWdzZVo5MnFlcm9hR2c0VXI2QXF2MHZQYmhVPSIsImFjY291bnRTaWduYXR1cmUiOiJGZXo2c1F6Zk5TMml5dFQwSTk0UmcrQkFqc0ZhNG5ZcC9aaHdsSHdNcmt3L0o5VVVEUjBRekw1R2I4Wnh0NWdEZVVHN0lmSjEvMXZJazVhWE5VZmZEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRW9KYldaTFpsbHBNZ09qdDZORllZZXVKM3BuRVRuOE1JSG5oR0lGSlRZckZqZXZ4Z1lWNTJkUzAzYllJMDNlV0tDOVBzZ09RM1MwejdXNTNCSEdEaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0NjM3NzI1OTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZBWjhPTDNoWFhRY2xYblZmWUxIbWZkcW5xNkdob09GSytnS3I5THoyNFYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ2Mzk5NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTYwIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
