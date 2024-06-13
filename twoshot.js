//フォームと送信ボタンを非表示にする
//function RegistCheck() {
document.getElementById("regist").onclick = function() {
    const url = document.getElementById("url").value;
    const ehour = document.getElementById("ehour").value;
    const eminutes = document.getElementById("eminutes").value;
    const eseconds = document.getElementById("eseconds").value;
    const emilliseconds = document.getElementById("emilliseconds").value;

　　//nullチェック
    var flag = 0;
    if(url.length == 0){flag = 1;}
    if(ehour.length == 0){ flag = 1; }
    if(eminutes.length == 0){ flag = 1; }
    if(eseconds.length == 0){ flag = 1; }
    if(emilliseconds.length == 0){ flag = 1; }

　　//値がすべて入っていたらフォームを非表示にする
    if(flag == 0){ 
	document.getElementById('null_chk').style.display = "none"; 
	document.getElementById('url').style.display = "none"; 
	document.getElementById('ehour').style.display = "none"; 
	document.getElementById('eminutes').style.display = "none"; 
	document.getElementById('eseconds').style.display = "none"; 
	document.getElementById('emilliseconds').style.display = "none"; 
	document.getElementById('url_tx').style.display = "none"; 
	document.getElementById('regist').style.display = "none"; 
	document.getElementById('time_tx').style.display = "none"; 
	//タイマー処理
	timer();
	return false;        
　　} else {
　　　　//ひとつでもnullがある場合エラーメッセージを表示する
　　　　document.getElementById('null_chk').style.display = "block";  
	return false;
　　}

};


function timer(){
　　let timerId = setInterval(function(){
	//現在時刻取得
	var realTime = new Date();
	var hour = (realTime.getHours() );　//時間
	var minutes  = (realTime.getMinutes().toString().padStart(2, '0') );　//分	
	var seconds  = (realTime.getSeconds().toString().padStart(2, '0') );　//秒
	var milliseconds = realTime.getMilliseconds().toString().padStart(3, '0');　//ミリ秒
      	var today = "【現在の時刻】" + hour + ":" + minutes + ":" + seconds + ":" + milliseconds;
	var start = hour + minutes + seconds + milliseconds;
	document.getElementById("realtime").innerHTML = today;
	document.getElementById('realtime').style.display = "block"; 

	//URL表示
	document.getElementById("geturl").innerHTML = document.getElementById("url").value;
	document.getElementById('geturl').style.display = "block"; 

	//タイマーには問題ないが表示に40秒差異がある
	//終了時間
	 var endhour = document.getElementById("ehour").value;　//時間
  	 var endminutes  = document.getElementById("eminutes").value;　//分	
  	 var endseconds  = document.getElementById("eseconds").value;　//秒
	 var endmilliseconds = document.getElementById("emilliseconds").value;　//ミリ秒
      	 var end = endhour + endminutes + endseconds + endmilliseconds;
	
	// 経過時間の計算
  	 var elapsedMilliseconds = (end - start - 40000) + "ミリ秒後に自動で遷移します"; // 経過時間（ミリ秒）
   	 document.getElementById("progresstime").innerHTML = elapsedMilliseconds;
	 document.getElementById('progresstime').style.display = "block"; 


	//終了時間になったら自動で遷移する
  	 if((end - start) <= 0){ 
		clearInterval(timerId);
		location.href = document.getElementById("url").value;
		//ログインボタンを自動クリックする
		window.onload = function() {	
		　　document.getElementById("login-bt").click();
		};
  	　}
　　}, 1);

};

//ログインボタンを自動クリックする
//window.onload = function() {
//　　document.getElementById("login-bt").click();
//};


//ログイン処理
//function login(){
//	var logId =  Hgcll_26@yahoo.co.jp;
//	var passId = occupy123;
//	document.getElementById("loginId").innerHTML = logId;
//	document.getElementById("loginPassword").innerHTML = passId;
//};
