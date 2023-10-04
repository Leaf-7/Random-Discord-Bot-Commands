const fetch = require ("node-fetch")

async function mcservstatus(a){
   const response = await fetch('https://api.mcsrvstat.us/2/'+a);
   const data = await response.json();
   if (data.online == true){
      let info = {
         "Ip":"Ip: `N/A`",
         "Motd":"Motd: `N/A`",
         "Playing":"Playing: `N/A`",
         "Version": "Version: `N/A`"
      }
      let str = data.motd.raw.join('\n');
      str = str.replace(/§0/g, 'm')
      str = str.replace(/§8/g, 'm')
      str = str.replace(/§4/g, 'm')
      str = str.replace(/§c/g, 'm')
      str = str.replace(/§2/g, 'm')
      str = str.replace(/§a/g, 'm')
      str = str.replace(/§6/g, 'm')
      str = str.replace(/§e/g, 'm')
      str = str.replace(/§1/g, 'm')
      str = str.replace(/§9/g, 'm')
      str = str.replace(/§5/g, 'm')
      str = str.replace(/§d/g, 'm')
      str = str.replace(/§3/g, 'm')
      str = str.replace(/§b/g, 'm')
      str = str.replace(/§7/g, 'm')
      str = str.replace(/§f/g, 'm')
      str = str.replace(/§r/g, 'm')
      str = str.replace(/§k/g, '')
      str = str.replace(/§l/g, '')
      str = str.replace(/§m/g, '')
      str = str.replace(/§n/g, '')
      str = str.replace(/§o/g, '')

      info["Ip"] = "Ip: `"+data.ip+":"+data.port+"`"
      info["Motd"] = "Motd: ```ansi\nm"+str+"\n```"
      if (data.players.list == undefined){
            info["Playing"] = "Playing: `"+data.players.online+"`"
      }
      else {
         info["Playing"] = "Playing: `"+data.players.online+"`\n```\n"+data.players.list.join(", ")+"\n```"
      }
      info["Version"] = "Version: `"+data.version+"`"
      return info.Ip+"\n"+info.Motd+"\n"+info.Playing+"\n"+info.Version
   }
   else {
      return "The server is currently offline!"
   }
}

module.exports = { mcservstatus }
