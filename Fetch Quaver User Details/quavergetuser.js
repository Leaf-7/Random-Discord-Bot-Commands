const fetch = require ("node-fetch")

async function quavergetuser(a){
   //const responseA = await fetch('https://api.quavergame.com/v1/users/search/'+a);
   //const dataA = await responseA.json();
   const response = await fetch('https://api.quavergame.com/v1/users/full/'+a);
   const data = await response.json();
   if (data.status == 200){
      let info = {
         "Username":"Username: `N/A`",
         "Avatar":"Avatar: `N/A`",
         "Country":"Country: `N/A`",
         "Online":"Online: `N/A`",
         "FKey":"4 Key: `N/A`",
         "SKey":"7 Key: `N/A`",
         "Dump":"Dump: `N/A`"
      }
      info["Username"] = "Username: `"+JSON.stringify(data.user.info.username)+"`"
      info["Avatar"] = "Avatar: `"+JSON.stringify(data.user.info.avatar_url)+"`"
      info["Country"] = "Country: `"+JSON.stringify(data.user.info.country)+"`"
      if (data.user.info.online == true) {
         info["Online"] = "Online: `Yes`"
      }
      else {
         info["Online"] = "Online: `No, "+JSON.stringify(data.user.info.latest_activity)+"`"
      }
      info["FKey"] = "4 Key: ```ansi\nGlobal Rank: "+JSON.stringify(data.user.keys4.globalRank)+"\nCountry Rank: "+JSON.stringify(data.user.keys4.countryRank)+"\nMax Combo: "+JSON.stringify(data.user.keys4.stats.max_combo)+"\nGrades:\n\u001b[1;37m"+JSON.stringify(data.user.keys4.stats.count_grade_x)+"\u001b[1;37m·\u001b[1;33m"+JSON.stringify(data.user.keys4.stats.count_grade_ss)+"\u001b[1;37m·\u001b[1;33m"+JSON.stringify(data.user.keys4.stats.count_grade_s)+"\u001b[1;37m·\u001b[1;32m"+JSON.stringify(data.user.keys4.stats.count_grade_a)+"\u001b[1;37m·\u001b[1;34m"+JSON.stringify(data.user.keys4.stats.count_grade_b)+"\u001b[1;37m·\u001b[1;35m"+JSON.stringify(data.user.keys4.stats.count_grade_c)+"\u001b[1;37m·\u001b[1;31m"+JSON.stringify(data.user.keys4.stats.count_grade_d)+"```"
      info["SKey"] = "7 Key: ```ansi\nGlobal Rank: "+JSON.stringify(data.user.keys7.globalRank)+"\nCountry Rank: "+JSON.stringify(data.user.keys7.countryRank)+"\nMax Combo: "+JSON.stringify(data.user.keys7.stats.max_combo)+"\nGrades:\n\u001b[1;37m"+JSON.stringify(data.user.keys7.stats.count_grade_x)+"\u001b[1;37m·\u001b[1;33m"+JSON.stringify(data.user.keys7.stats.count_grade_ss)+"\u001b[1;37m·\u001b[1;33m"+JSON.stringify(data.user.keys7.stats.count_grade_s)+"\u001b[1;37m·\u001b[1;32m"+JSON.stringify(data.user.keys7.stats.count_grade_a)+"\u001b[1;37m·\u001b[1;34m"+JSON.stringify(data.user.keys7.stats.count_grade_b)+"\u001b[1;37m·\u001b[1;35m"+JSON.stringify(data.user.keys7.stats.count_grade_c)+"\u001b[1;37m·\u001b[1;31m"+JSON.stringify(data.user.keys7.stats.count_grade_d)+"```"
      info["Dump"] = "Dump: ```\n"+JSON.stringify(data)+"\n```"
      return info.Username+"\n"+info.Avatar+"\n"+info.Country+"\n"+info.Online+"\n"+info.FKey+"\n"+info.SKey
//+"\n---\n"+info.Dump
   }
   else {
      return "Invalid username!"
   }
}

module.exports = { quavergetuser }
