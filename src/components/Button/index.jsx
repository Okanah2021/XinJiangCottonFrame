import React, { Component, Fragment } from 'react'
//import ShowFrame from '../../components/ShowFrame'
//import ReactDOM from 'react-dom'
var x = 1
class Button extends Component {
    render() {
        return (
            <div>
                <img src={require("../../assets/img/basket_cotton.png").default} className="basket" id="BaskId" onMouseDown={this.BasketChange.bind(this)} />
            </div>
        )
    }
    BasketChange(e) {
        const BaskId = document.querySelector("#BaskId")
        const ConT = document.querySelector("#container")
        //console.log(e.target.src)
        if (x == 0) {  //收入的动作
            e.target.style.opacity = 0.15
            e.target.src = require("../../assets/img/basket_cotton.png").default
            BaskId.classList.add('BasketChangeAni')
            ConT.classList.add('PutIt')
            setTimeout(() => { ConT.classList.remove("PutIt"); ConT.style.opacity = 0 }, 1500)
            setTimeout(() => { BaskId.classList.remove("BasketChangeAni"); e.target.style.opacity = 1 }, 1500)
            x = 1
        } else {  //取出的动作
            e.target.style.opacity = 0.15
            e.target.src = require("../../assets/img/basket.png").default
            BaskId.classList.add('BasketChangeAni')
            ConT.classList.add('ShowIt')
            setTimeout(() => { ConT.classList.remove("ShowIt"); ConT.style.opacity = 1 }, 1500)
            setTimeout(() => { BaskId.classList.remove("BasketChangeAni"); e.target.style.opacity = 1 }, 1500)
            x = 0
        }
    }
}
export default Button