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
//���ε�����ȻЧ��ʵ���ˣ�������ͬʱ������ô��DOM��д��������CPU��������ֻ��������д����������������9��i5�������������ٻ�������onmousemoveʱCPU����˲���ܵ�20 % �ࡣ��
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