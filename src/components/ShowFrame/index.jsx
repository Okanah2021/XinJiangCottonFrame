import React, { Component, Fragment } from 'react'
//import ReactDOM from 'react-dom'
//�½��޻���Ƭչʾ�����ʵ�֣��������֣���������չʾͼƬ�б�һ����չʾͼ��Сͼ�����������
class ShowFrame extends Component {
    constructor(props) {  //���캯��
        super(props)
        this.state = {
            imgAAA: <img src={require(`../../assets/img/img1.jpg`).default} id="current" />,
            imgArrEffect:[]
        }
    }
    render() {
        var NowImg = () => this.state.imgAAA  //��ǰ����չʾͼ
        //ͼƬ�б����������
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
                            //ͼƬչʾ��ṹ���ϲ㡢�²�ΪСͼ�б��в�Ϊ��ͼչʾ
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
            //***������ԭ����д������Ϊ���ڻ�������̫��JSX��ES6�﷨,�Ժ��������о�һ��***
            const current = document.querySelector("#current")
            const imgs = document.querySelectorAll(".imgs img")
            //�������е�ͼƬ��͸����
            imgs.forEach(img => (img.style.opacity = 0.97, img.style.border = ""))
            current.src = e.target.src
            //��չʾͼ����Ч��
            current.classList.add('fade-in')
            //���õ��ͼƬ��͸����
            e.target.style.opacity = 0.45
            e.target.style.border = "2px solid white"
            //�Ƴ�����Ч��
            setTimeout(() => current.classList.remove("fade-in"), 1000)
            // �����л�ʱ��͸������������
            //this.setState({
            //    imgAAA: <img src={e.target.src} id="current" /> 
            //})
            console.log(e.target)
        }
    }
    MouseMove(e) {
        if (e.target.className !== "imgs") {
            //��꾭��ʱ���ñ߿�
            e.target.style.border = "2px solid white"
        }
    }
    MouseOut(e) {
        //����뿪ʱ����߿�
        e.target.style.border = ""
    }
}
export default ShowFrame