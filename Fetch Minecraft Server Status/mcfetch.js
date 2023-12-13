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
      str = str.replace(/§0/g, '^[[2;1;30m')
      str = str.replace(/§8/g, '^[[0;1;30m')
      str = str.replace(/§4/g, '^[[2;1;31m')
      str = str.replace(/§c/g, '^[[0;1;31m')
      str = str.replace(/§2/g, '^[[2;1;32m')
      str = str.replace(/§a/g, '^[[0;1;32m')
      str = str.replace(/§6/g, '^[[2;1;33m')
      str = str.replace(/§e/g, '^[[0;1;33m')
      str = str.replace(/§1/g, '^[[2;1;34m')
      str = str.replace(/§9/g, '^[[0;1;34m')
      str = str.replace(/§5/g, '^[[2;1;35m')
      str = str.replace(/§d/g, '^[[0;1;35m')
      str = str.replace(/§3/g, '^[[2;1;36m')
      str = str.replace(/§b/g, '^[[0;1;36m')
      str = str.replace(/§7/g, '^[[2;1;37m')
      str = str.replace(/§f/g, '^[[0;1;37m')
      str = str.replace(/§r/g, '^[[0;1;37m')
      str = str.replace(/§k/g, '')
      str = str.replace(/§l/g, '')
      str = str.replace(/§m/g, '')
      str = str.replace(/§n/g, '')
      str = str.replace(/§o/g, '')

      info["Ip"] = "Ip: `"+data.ip+":"+data.port+"`"
      info["Motd"] = "Motd: ```ansi\n"+str+"\n```"
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
