import React, { Component, Fragment } from 'react'
//import ReactDOM from 'react-dom'
class Cloud extends Component {
	render() {
		return (
			<Fragment>
				<div className="App">
					<header className="App-header">
						<div class="background" id="location">
							<div class="cloud" id="cloud_A" />
							<div class="cloud" id="cloud_B" />
							<div class="cloud" id="cloud_C" />
							<div class="cloud" id="cloud_D" />
							<div class="cloud" id="cloud_E" />
							<div class="cloud" id="cloud_F" />
							<div class="cloud" id="cloud_G" />
							<div class="cloud" id="cloud_H" />
						</div>
					</header>
				</div>
			</Fragment>
		)
    }
}
//无奈的是虽然效果实现了，但这种同时加载这么多DOM的写法超级吃CPU。。现在只会用这种写法。。。（哭泣）9代i5经测试在鼠标快速滑动调用onmousemove时CPU可以瞬间跑到20 % 多。。
document.onmousemove = (cursor) => {
	document.getElementById("cloud_A").style.transform = "translateX(" + cursor.pageX / 3 + "px)";
	document.getElementById("cloud_B").style.transform = "translateX(-" + cursor.pageX / 4 + "px)";
	document.getElementById("cloud_C").style.transform = "translateX(" + cursor.pageX / 2.6 + "px)";
	document.getElementById("cloud_D").style.transform = "translateX(-" + cursor.pageX / 3.5 + "px)";
	document.getElementById("cloud_E").style.transform = "translateY(" + cursor.pageX / 4.1 + "px)";
	document.getElementById("cloud_F").style.transform = "translateY(-" + cursor.pageX / 3.7 + "px)";
	document.getElementById("cloud_G").style.transform = "translateX(-" + cursor.pageX / 3.2 + "px) translateY(-" + cursor.pageX / 4.1 + "px)";
	document.getElementById("cloud_H").style.transform = "translateX(" + cursor.pageX / 4.4 + "px) translateY(" + cursor.pageX / 3 + "px)";
}
export default Cloud