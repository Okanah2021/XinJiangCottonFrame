import React, { Component, Fragment } from 'react'
//import ReactDOM from 'react-dom'
//新疆棉花照片展示框组件实现：三个部分，其中两个展示图片列表，一个主展示图。小图用数组输出。
class ShowFrame extends Component {
    constructor(props) {  //构造函数
        super(props)
        this.state = {
            imgAAA: <img src={require(`../../assets/img/img1.jpg`).default} id="current" />,
            imgArrEffect:[]
        }
    }
    render() {
        var NowImg = () => this.state.imgAAA  //当前的主展示图
        //图片列表，用数组输出
        var imgs1 = () => {  
            var ImgArr = [];
            for (var i = 1; i < 6; i++) {
                ImgArr.push(<img src={require(`../../assets/img/img` + i + `.jpg`).default} className="image" />)
            }
            return (ImgArr)
        }
        var imgs2 = () => {
            var ImgArr = [];
            for (var i = 6; i < 11; i++) {
                ImgArr.push(<img src={require(`../../assets/img/img` + i + `.jpg`).default} className="image" />)
            }
            return (ImgArr)
        }
        return (
            <Fragment>
                
                <div className="container" id="container">
                    <div id="ConT" className="ConT">
                        {
                            //图片展示框结构：上层、下层为小图列表，中层为大图展示
                        }
                        <div className="imgs" onClick={this.imgChange.bind(this)} onMouseMove={this.MouseMove.bind(this)} onMouseOut={this.MouseOut.bind(this) }>
                            {imgs1()}
                        </div>
                        <div className="main-img">
                            {NowImg()}
                        </div>
                        <div className="imgs" onClick={this.imgChange.bind(this)} onMouseMove={this.MouseMove.bind(this)} onMouseOut={this.MouseOut.bind(this)}>
                            {imgs2()}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    imgChange(e) {
        if (e.target.className !== "imgs") {
            //***还是用原生的写法，因为现在还不会用太多JSX和ES6语法,以后再深入研究一下***
            const current = document.querySelector("#current")
            const imgs = document.querySelectorAll(".imgs img")
            //设置所有的图片的透明度
            imgs.forEach(img => (img.style.opacity = 0.97, img.style.border = ""))
            current.src = e.target.src
            //主展示图动画效果
            current.classList.add('fade-in')
            //设置点击图片的透明度
            e.target.style.opacity = 0.45
            e.target.style.border = "2px solid white"
            //移除动画效果
            setTimeout(() => current.classList.remove("fade-in"), 1000)
            // 不加切换时的透明度用这句就行
            //this.setState({
            //    imgAAA: <img src={e.target.src} id="current" /> 
            //})
            console.log(e.target)
        }
    }
    MouseMove(e) {
        if (e.target.className !== "imgs") {
            //鼠标经过时设置边框
            e.target.style.border = "2px solid white"
        }
    }
    MouseOut(e) {
        //鼠标离开时清除边框
        e.target.style.border = ""
    }
}
export default ShowFrame