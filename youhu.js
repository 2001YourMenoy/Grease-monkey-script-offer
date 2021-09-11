// ==UserScript==
// @name         New Userscript
// @namespace    http://huangbo.ltd
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.douban.com/*
//触发url 正则表达式匹配
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==


//油猴脚本核心概念 外挂一个js文件 生成的界面使用js代码生成 逻辑也由js代码生成
(function () {
    function viewInit() {
        let btnOpen = document.createElement('button')
        btnOpen.innerText = "设置"
        let btnOpenStyle = btnOpen.style;
        btnOpenStyle.position = "fixed"
        btnOpenStyle.zIndex = "1000"
        btnOpenStyle.top = "4rem"
        btnOpenStyle.left = "4rem"
        btnOpenStyle.padding = "1rem 2rem"
        btnOpenStyle.border = "none"
        btnOpenStyle.marginTop = "0.6rem"
        btnOpenStyle.backgroundColor = "#4DD0E1"
        btnOpenStyle.borderRadius = "4px"
        document.body.appendChild(btnOpen)
        let box = document.createElement('div')
        box.style.borderRadius = "6px"
        box.style.width = "24rem"
        box.style.height = "18rem"
        box.style.position = "fixed"
        box.style.zIndex = "1000"
        box.style.top = "0"
        box.style.left = "0"
        box.style.background = "#ffffffe9"
        box.style.border = "yellow  solid  2px"
        box.style.padding = "2rem"
        box.style.display = "none"
        let title = document.createElement('h1')
        title.style.marginTop = "10px"
        title.style.textAlign = "center"
        title.style.fontSize = "1rem"
        title.innerHTML = "黄渤的demo"
        box.appendChild(title)
        let check = document.createElement('input')
        check.type = "checkbox"
        box.appendChild(check)
        let checkText = document.createElement('span')
        checkText.innerText = "启动爬虫"
        box.appendChild(checkText)
        let boxText = document.createElement('div')
        boxText.style.width = "100%"
        boxText.style.height = "70%"
        boxText.style.backgroundColor = "#ECF0F1e7"
        let Text = document.createElement('textarea')
        let TextStyle = Text.style;
        TextStyle.height = "100%"
        TextStyle.width = "100%"
        Text.placeholder = "这里是爬虫数据"
        boxText.appendChild(Text)
        box.appendChild(boxText)
        let btnClose = document.createElement('button')
        btnClose.innerText = "关闭控制台"
        let btnCloseStyle = btnClose.style;
        btnCloseStyle.padding = "0.6rem"
        btnCloseStyle.border = "none"
        btnCloseStyle.marginTop = "0.6rem"
        btnCloseStyle.position = "absolute"
        btnCloseStyle.left = "50%"
        btnCloseStyle.borderRadius = "4px"
        btnCloseStyle.transform = "translate(-50%)"
        btnCloseStyle.backgroundColor = "#4DD0E1"
        box.appendChild(btnClose)
        //返回脚本界面
        document.body.appendChild(box)
        //参数方法
        function addEventListener() {
            btnClose.addEventListener('click', () => {
                box.style.display = "none"
                btnOpen.style.display = "block"
            })
            btnOpen.addEventListener('click', () => {
                box.style.display = "block"
                btnOpen.style.display = "none"
            })
            check.addEventListener('change',()=>{
                if(check.checked){

                }else{

                }
            })
        }
        //启动爬虫 双向绑定
        function get(){
            
        }

        addEventListener();
    }



    try {
        let userAgent = navigator.userAgent
        console.log(navigator.userAgent);
        if (!userAgent.match(/Mobile/)) {
            window.onload = () => {
                viewInit()
            }
        }
        console.log('移动端 自动关闭脚本');
    } catch (e) {
        console.error("脚本出现故障" + e)
    }


})();