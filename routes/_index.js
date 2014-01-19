// _index.js
exports.get_url = "/";

var LOCATIONS = [{
  value: "01matsuyama",
  name: "2013/10/26 松山サロンキティ"
}, {
  value: "02kouchi",
  name: "2013/10/27 高知X-pt."
}, {
  value: "03okinawa",
  name: "2013/11/02 沖縄桜坂セントラル"
}, {
  value: "04kobe",
  name: "2013/11/09 神戸太陽と虎"
}, {
  value: "05okayama",
  name: "2013/11/16 岡山CRAZYMAMA KINGDOM"
}, {
  value: "06takamatsu",
  name: "2013/12/7 高松MONSTER"
}, {
  value: "07yokohama",
  name: "2013/12/14 横浜BAYSIS"
}, {
  value: "08saitama",
  name: "2013/12/15 さいたま新都心HEAVEN'S ROCK VJ-3"
}, {
  value: "09kooriyama",
  name: "2013/12/26 郡山CLUB#9"
}, {
  value: "10sendai",
  name: "2013/12/28 仙台MACANA"
}, {
  value: "11shimokitazawa",
  name: "2014/01/04 下北沢GARDEN"
}, {
  value: "12fukuoka",
  name: "2014/01/11 福岡BEAT STATION"
}, {
  value: "13hiroshima",
  name: "2014/01/12 広島ナミキジャンクション"
}, {
  value: "14nagoya",
  name: "2014/01/13 名古屋Electric Lady Land"
}, {
  value: "15sapporo",
  name: "2014/01/25 札幌Sound Lab mole"
}, {
  value: "16umeda",
  name: "2014/02/01 大阪umeda AKASO"
}, {
  value: "17kanazawa",
  name: "2014/02/02 金沢vanvan V4"
}, {
  value: "18nigata",
  name: "2014/02/08 新潟CLUB RIVERST"
}, {
  value: "19matsuyama",
  name: "2014/02/16 松山サロンキティ"
}];
                

exports.get = function(req, res, next) {
  var error = req.param("error");
  console.log(error);
  if (error) {
    
    var error_message = "";
    switch(error) {
    case "nolocation":
      error_message = "場所が選択されていません";
      break;
    case "noname":
      error_message = "名前が指定されていません";
      break;
    case "nomessage1":
      error_message = "1番目のメッセージが指定されていません";
      break;
    case "nomessage2":
      error_message = "2番目のメッセージが指定されていません";
      break;
    case "nomessage3":
      error_message = "3番目のメッセージが指定されていません";
      break;
    }
    var location = req.flash("location");
    var message1 = req.flash("message1");
    var message2 = req.flash("message2");
    var message3 = req.flash("message3");
    var name = req.flash("name");
    res.render('index', {
      location: location,
      name: name,
      message1: message1,
      message2: message2,
      message3: message3,
      locations: LOCATIONS,
      error_message: error_message
    });
  }
  else {
    res.render('index', {
      location: "",
      name: "",
      message1: "",
      message2: "",
      message3: "",
      locations: LOCATIONS,
      error_message: false
    });
  }
};

