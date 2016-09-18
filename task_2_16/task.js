
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */


var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

	var city = document.getElementById("aqi-city-input").value;
	var aqi_input = document.getElementById("aqi-value-input")
	var aqi = aqi_input.value;
	city = city.trim();
	aqi.trim();
	var aqi_re = /^\d{1,3}$/;
	if (aqi_re.test(aqi)) {
		aqiData[city] = parseInt(aqi);
	}
	else {
		alert("Value of aqi should be number!");
		aqi_input.value="";
		aqi_input.focus();
	}

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aqi_table = document.getElementById("aqi-table");
	items="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for (var i in aqiData) {
		items += "<tr><td>"+i+"</td><td>"+ aqiData[i]+ "</td><button>删除</button></tr>";
	}
	
	aqi_table.innerHTML = items;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
	var aqi_table = document.getElementById("aqi-table");
  	var tr = this.parent.parent;
  	aqi_table.removeChild(tr);


  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  var add_btn = document.getElementById("add-btn");
  console.log(add_btn);
  add_btn.addEventListener("click", addBtnHandle);

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var aqi_table = document.getElementById("aqi-table");
  var del_btn = aqi_table.getElementsByTagName("button");
  for (var i = 0; i < del_btn.length; i++) {
  	del_btn[i].addEventListener("click", delBtnHandle);
  }

}

init();
