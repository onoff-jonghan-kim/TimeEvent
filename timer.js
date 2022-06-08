Date.prototype.format = function (f) {
if (!this.valueOf()) return " ";
let d = this;

return f.replace(/(yyyy|MM|dd)/gi, function (i) {
    switch (i) {
        case "yyyy": return d.getFullYear(); // 년 (4자리)
        case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)
        case "dd": return d.getDate().zf(2); // 일 (2자리)
        default: return $1;
    }
  });
};
String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };


function TimeEvent(){
  let today = new Date();
  let setToday = today.format('MM/dd/yyyy');

  if((today.getDay() >=1 && today.getDay() <= 5)){ //월~금, 홀리데이 판별

    //평일마다 일어나는 이벤트

    if (new Date() >= new Date( setToday+' 19:00:00') // 언제부터
          && new Date() < new Date(setToday+' 19:32:00')) { //언제까지
            // 여기안에 평일마다 일어나는 이벤트를 넣어주기
            console.log("Here is Event time!");

    }else{
      console.log("time event is over.")
    }

    // 평일마다 반복되는 이벤트 끝

  }
}

window.addEventListener('DOMContentLoaded', function(){
  setInterval(() =>{
    TimeEvent();
  },1000); // 1초마다 체크
});