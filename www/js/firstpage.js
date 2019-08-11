
window.onload = function () {
    var actGoods = document.getElementById('act_goods');
    var actTmao = document.getElementById('act_tmao');
    var actShop = document.getElementById('act_shop');
    var searchContent = document.querySelector('.searchContent')
    var searchTip = document.createElement('div')
    var cameraIco = document.createElement('div')
    var actButton = document.querySelectorAll('div.searchBox ul li button')

    searchTip.setAttribute('class', 'searchTip')
    cameraIco.setAttribute('class', 'cameraIco')

    var searchTipArr = ['新款连衣裙', '四件套', '潮流T恤', '时尚女鞋', '短裤', '半身裙', '男士外套', '墙纸', '行车记录仪', '新款男鞋', '耳机', '时尚女包', '沙发']

    for (i = 0; i < searchTipArr.length; i++) {
        searchTip.innerHTML += '<span id="tip' + i + '" onclick="alert("asdf")">' + searchTipArr[i] + '<span/> '
    }
    // 给类名为 searchContent 的标签添加新标签字符串
    function searchContentAddStr(valueText) {
        var spaceStr = ''
        for (i = 0; i < 10; i++) {
            spaceStr += '&nbsp;'
        }
        searchContent.innerHTML = "<div class='searchAct'>" +
            "<input id='searchInput' type='text' placeholder='" + spaceStr + "" + valueText + "' />" +
            "<input id='searchBtn' type='submit' value='搜索'/>"
            + "<div/>"
    }
    // 给类名为 searchContent 的标签添加新元素
    function searchContentAddHtml() {
        searchContent.appendChild(searchTip)
        // 点击每个tip都能将本身的字符赋到input里面
        for (let i = 0; i < searchTipArr.length; i++) {
            document.getElementById('tip' + i).onclick = function () {
                document.getElementById('searchInput').setAttribute('value', searchTipArr[i])
            }
        }
    }
    // 添加“相机”按钮，用于添加图片
    function addCameraIco() {
        document.querySelector('.searchAct').appendChild(cameraIco)
    }
    // 设置点击后的样式
    function onclickStyle(a) {
        actButton[a].setAttribute('style', 'background: orangered;color: white;')
        if (a == 0) {
            addCameraIco()
        }
    }
    // 恢复样式
    function onmouseoutStyle(a) {
        actButton[a].setAttribute('style', 'background: white;color: orangered;')
    }
    // 给三个搜索方式按钮 设置点击效果
    var random_sum = Math.round(Math.random() * searchTipArr.length)
    // 默认显示
    searchContentAddStr(searchTipArr[random_sum])
    searchContentAddHtml()
    onclickStyle(0)
    addCameraIco()
    actGoods.onclick = function () {
        searchContentAddStr(searchTipArr[random_sum])
        searchContentAddHtml()
        onclickStyle(0)
        onmouseoutStyle(1)
        onmouseoutStyle(2)
    }
    actTmao.onclick = function () {
        searchContentAddStr('')
        onmouseoutStyle(0)
        onclickStyle(1)
        onmouseoutStyle(2)
    }
    actShop.onclick = function () {
        searchContentAddStr('')
        searchContentAddHtml()
        onmouseoutStyle(0)
        onmouseoutStyle(1)
        onclickStyle(2)
    }


    // 设置bodier的第二个模块的显示样式
    var left_top_left_line = document.querySelectorAll(".left_top_left_line");
    var left_top_left_content = document.querySelector(".left_top_left_content");
    left_top_left_content.setAttribute('style', 'display: none;opacity: 0;') // 锁
    // left_top_left_content.setAttribute('style', 'display: block;opacity: 1;')

    var t = true // 这是接口为“/shoptypedata”的ajax的一把锁
    for (let i = 0; i < left_top_left_line.length; i++) {
        left_top_left_line[i].onmouseover = () => {
            console.log("t:", t)
            left_top_left_content.setAttribute('style', 'opacity: 0;display: block;')
            setTimeout(() => {
                left_top_left_content.setAttribute('style', 'opacity: 1;display: block;')
            }, 1)// 给left_top_left_content一点点时间（1毫秒）反应一下自己原先是隐形的，才好实现过度效果

            // 给后台发送数据请求
            var ltll_data_type = left_top_left_line[i].getAttribute('data-type')
            if (t) {
                ajax({
                    url: '/shoptypedata',
                    data: { line: ltll_data_type },
                    type: 'get',
                    success: (str) => {
                        var data = eval('(' + str + ')')
                        console.log(data) // 接收obj数据
                        // 把获得的数据和html联合
                        // 向.ltlContent_left存放html内容
                        var ltlContentLeft = document.querySelector('.ltlContent_left')
                        ltlContentLeft.innerHTML = ""
                        var ltlContentRightUL = document.querySelector('.ltlContent_right ul')
                        ltlContentRightUL.innerHTML = ""
                        for (let j = Number(ltll_data_type); j < (Number(ltll_data_type) + 3); j++) {
                            var strIN1 = "", strIN2 = "", strIN_arr = []
                            for (let i = 0; i < data.length; i++) {
                                if (data[i].text_num == (j)) {
                                    strIN_arr.push(data[i])
                                }
                            }
                            for (let i = 0; i < strIN_arr.length; i++) {
                                if (strIN_arr[i].text_cont != null) {
                                    strIN2 += "<li>" +
                                        "<a class='" + (strIN_arr[i].bc_sign != null ? 'h' : '') + "' href=" + strIN_arr[i].url + ">" + strIN_arr[i].text_cont + "</a>"
                                        + "</li>"
                                } else if (strIN_arr[i].text_cont == null) {
                                    strIN1 = "<p>" +
                                        "<a href=" + strIN_arr[i].url + ">" + strIN_arr[i].text + "</a>" +
                                        "<a href=" + strIN_arr[i].url + ">更多></a>"
                                        + "</p>"
                                }
                            }
                            ltlContentLeft.innerHTML += "<div class='ltlContent_left_title'>" + strIN1 + "</div>" +
                                "<ul class='ltlContent_left_classify'>" + strIN2 + "</ul>"
                        }
                        // 猜你喜欢
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].rmd_type != null) {
                                ltlContentRightUL.innerHTML += "<li>" +
                                    "<a href='" + data[i].rmd_url + "'>" +
                                    "<img src='" + data[i].rmd_src + "' alt='" + data[i].rmd_title + "' />" +
                                    "<span>" + data[i].rmd_title + "</span>"
                                    + "</a>"
                                    + "</li>"

                            }
                        }

                        t = false
                    },
                    error: (err) => {
                        console.log(err)
                    }
                })
            }


        }
        left_top_left_line[i].onmouseleave = () => {
            t = true
            left_top_left_content.setAttribute('style', 'display: none;opacity: 0;') // 锁
        }
        left_top_left_content.onmouseover = () => {
            left_top_left_content.setAttribute('style', 'display: block;')
        }
        left_top_left_content.onmouseleave = () => {
            t = true
            left_top_left_content.setAttribute('style', 'display: none;opacity: 0;') // 锁
        }

    }

    // 设置bodier的第三个模块的显示样式(轮播图)

    var leftMove = document.querySelector('.left_move')
    var rightMove = document.querySelector('.right_move')
    var imgBox = document.querySelector('.img_box')
    var imgBox_a = document.querySelectorAll('.img_box a')
    var bottom_button_li = document.querySelectorAll('.bottom_button li')
    var imgleftTopRightTopLeftBox = document.querySelector('.left_top_right_top_left')

    var left_num = 0, img_type = 0
    bottom_button_li[img_type].classList.add('bg_red') // 默认选项
    imgBox.setAttribute('style', 'left:' + left_num + 'px') // 默认选项
    function add_left_num() { // 增加left_num值
        left_num += 520
        if (left_num == 520) {
            left_num = (-520 * (imgBox_a.length - 1))
        }
        imgBox.setAttribute('style', 'left:' + left_num + 'px')
        if (img_type == 0) {
            img_type = (imgBox_a.length - 1)
        } else {
            img_type--
        }
        for (let i = 0; i < bottom_button_li.length; i++) {
            if (img_type == i) {
                bottom_button_li[img_type].classList.add('bg_red')
            } else {
                bottom_button_li[i].classList.remove('bg_red')
            }
        }

        console.log("left_num:", left_num)
        console.log("img_type:", img_type)
    }
    leftMove.onclick = () => {// 轮播图右箭头
        add_left_num()
    }
    function reduce_left_num() { // 减少left_num值
        left_num += -520
        if (left_num == (-520 * imgBox_a.length)) {
            left_num = 0
        }
        imgBox.setAttribute('style', 'left:' + left_num + 'px')
        if (img_type == (imgBox_a.length - 1)) {
            img_type = 0
        } else {
            img_type++
        }
        for (let i = 0; i < bottom_button_li.length; i++) {
            if (img_type == i) {
                bottom_button_li[img_type].classList.add('bg_red')
            } else {
                bottom_button_li[i].classList.remove('bg_red')
            }
        }
    }
    rightMove.onclick = () => { // 轮播图右箭头
        reduce_left_num()
    }
    for (let j = 0; j < bottom_button_li.length; j++) {
        bottom_button_li[j].onclick = () => {
            left_num = -520 * j
            imgBox.setAttribute('style', 'left:' + left_num + 'px')
            img_type = j
            for (let i = 0; i < bottom_button_li.length; i++) {
                if (j == i) {
                    bottom_button_li[j].classList.add('bg_red')
                } else {
                    bottom_button_li[i].classList.remove('bg_red')
                }
            }
        }
    }
    // 轮播图自动播放
    var setInterval_time = 2000
    var setTime = setInterval(() => {
        reduce_left_num()
    }, setInterval_time)

    imgleftTopRightTopLeftBox.onmouseover = () => {
        clearInterval(setTime)
    }
    imgleftTopRightTopLeftBox.onmouseleave = () => {
        setTime = setInterval(() => {
            reduce_left_num()
        }, setInterval_time)
    }

    // 第二个轮播图设置
    var leftLtrblMove = document.querySelector('.left_ltrbl_move')
    var rightLtrblMove = document.querySelector('.right_ltrbl_move')
    var ltrblTwolayer_ul = document.querySelector('.ltrbl_twolayer ul')
    var ltrblTwolayer_li = document.querySelectorAll('.ltrbl_twolayer ul li')
    var changeSum = document.querySelector('.change_sum')
    var ltrblTwoline_li = document.querySelectorAll('.ltrbl_twoline ul li')
    var ltrblThreeline = document.querySelector('.ltrbl_threeline')

    var ltrbl_left_num = 0, slide_type = 1
    // 改变当前状态
    function change_sum() {
        changeSum.innerText = slide_type
        for (let i = 0; i < ltrblTwoline_li.length; i++) {
            if ((i + 1) == slide_type) {
                ltrblTwoline_li[i].classList.add('b')
            } else {
                ltrblTwoline_li[i].classList.remove('b')
            }
        }
    }
    change_sum()
    function ltrbl_reduce_left_move() {
        if (slide_type != ltrblTwolayer_li.length) {
            slide_type++
        } else {
            slide_type = 1
        }
        change_sum()
        if (ltrbl_left_num != -520 * (ltrblTwolayer_li.length - 1)) {
            ltrbl_left_num += -520
        } else {
            ltrbl_left_num = 0
        }
        ltrblTwolayer_ul.setAttribute('style', 'left: ' + ltrbl_left_num + ';')
    }
    rightLtrblMove.onclick = () => {
        ltrbl_reduce_left_move()
    }
    leftLtrblMove.onclick = () => {
        if (slide_type != 1) {
            slide_type--
        } else {
            slide_type = ltrblTwolayer_li.length
        }
        change_sum()
        if (ltrbl_left_num != 0) {
            ltrbl_left_num += 520
        } else {
            ltrbl_left_num = -520 * (ltrblTwolayer_li.length - 1)
        }
        ltrblTwolayer_ul.setAttribute('style', 'left: ' + ltrbl_left_num + ';')
    }
    // 自动播放轮播图
    var setTime1 = setInterval(() => {
        ltrbl_reduce_left_move()
    }, setInterval_time)
    ltrblThreeline.onmouseover = () => {
        clearInterval(setTime1)
    }
    ltrblThreeline.onmouseleave = () => {
        setInterval(() => {
            ltrbl_reduce_left_move()
        }, setInterval_time)
    }

    ajax({
        url: "/persondata",
        data: { name: "373652385zzj" },
        success: (str) => {
            var data = eval("(" + str + ")")
            var person = data[0]
            console.log(person)
            var headPic_a = document.querySelector('.onemodule .head_pic a')
            var personName = document.querySelector('.onemodule .person_name')
            var activity_a = document.querySelectorAll('.onemodule .activity a')
            var purchaseInf_span = document.querySelectorAll('.onemodule .purchase_information span')
            var purchaseInf_h = document.querySelectorAll('.onemodule .purchase_information h4')
            var purchaseInf_text = ['待收货', '待发货', '待付款', '待评价']
            var purchaseInf_sum = []
            purchaseInf_sum.push(person.dshouhuo)
            purchaseInf_sum.push(person.dfahuo)
            purchaseInf_sum.push(person.dfukuan)
            purchaseInf_sum.push(person.dpingjia)
            headPic_a.setAttribute('href', person.personweb_url)
            headPic_a.firstChild.setAttribute('src', person.head_src)
            personName.innerText = "Hi! " + person.name
            activity_a[0].innerText = person.punch_text
            activity_a[1].innerText = person.club_text
            activity_a[0].setAttribute('href', person.punch_url)
            activity_a[1].setAttribute('href', person.club_url)
            for (let i = 0; i < purchaseInf_text.length; i++) {
                purchaseInf_span[i].innerText = purchaseInf_sum[i]
                purchaseInf_h[i].innerText = purchaseInf_text[i]
            }
        },
        error: (err) => {
            console.log(err)
        }
    })

    // 设置bodier的第八个模块的显示样式（选择框）
    var threemodule_title_li = document.querySelectorAll('.threemodule_title li')
    var threemodule_cont_li = document.querySelectorAll('.threemodule_cont li')

    // 默认选项
    for (let k = 0; k < threemodule_cont_li.length; k++) {
        if (threemodule_cont_li[k].getAttribute('data-type') == 1) {
            threemodule_cont_li[k].setAttribute('style', 'display: inline-block;')
        }
    }
    threemodule_title_li[0].classList.add('h')
    for (let i = 0; i < threemodule_title_li.length; i++) {
        threemodule_title_li[i].onmouseover = () => {
            //  鼠标经过使得标签字体加粗！
            for (let j = 0; j < threemodule_title_li.length; j++) {
                if (j == i) {
                    threemodule_title_li[j].classList.add('h')
                } else {
                    threemodule_title_li[j].classList.remove('h')
                }
            }

            for (let j = 0; j < threemodule_cont_li.length; j++) {
                if ((i + 1) == threemodule_cont_li[j].getAttribute('data-type')) {
                    threemodule_cont_li[j].setAttribute('style', 'display: inline-block;')
                } else {
                    threemodule_cont_li[j].setAttribute('style', 'display: none;')
                }
            }
        }
    }

    // 设置bodier的第九个模块的显示样式
    var fourmodule_li = document.querySelectorAll(".fourmodule ul li")
    var closeLayerBtn = document.querySelector('.fourmodule_cont .closeLayerBtn')
    var fourmoduleCont = document.querySelector('.fourmodule_cont')
    var fourmoduleCont_li = document.querySelectorAll('.fourmodule_cont li')
    // 对第九个模块的按钮以及弹层做样式功能设置
    fourmodule_li[0].classList.add('h')
    for (let i = 0; i < 3; i++) {
        fourmodule_li[i].onmouseover = () => {
            for (let j = 0; j < 3; j++) {
                if (j != i) {
                    fourmodule_li[j].classList.remove('h')
                    fourmoduleCont_li[j].classList.remove('show')
                } else {
                    fourmodule_li[i].classList.add('h')
                    fourmoduleCont_li[i].classList.add('show')
                    fourmoduleCont.classList.remove('close')
                }
            }

        }
    }

    closeLayerBtn.onclick = () => {
        fourmoduleCont.classList.add('close')
        for(let i=0;i<3;i++) {
            fourmodule_li[i].classList.remove('h')
        }
    }

}