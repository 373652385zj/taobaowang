function footerData() {

    footerData = {
        footerdata1: [
            {
                title: '消费者保障',
                child_title: [
                    { text: '保障范围', url: '' },
                    { text: '退货退款流程', url: '' },
                    { text: '服务中心', url: '' },
                    { text: '更多特色服务', url: '' },
                ],
            }, {
                title: '新手上路',
                child_title: [
                    { text: '新手专区', url: '' },
                    { text: '消费警示', url: '' },
                    { text: '交易安全', url: '' },
                    { text: '24小时在线帮助', url: '' },
                    { text: '免费开店', url: '' },
                ]
            }, {
                title: '付款方式',
                child_title: [
                    { text: '快捷支付', url: '' },
                    { text: '信用卡', url: '' },
                    { text: '余额宝', url: '' },
                    { text: '蚂蚁花呗', url: '' },
                    { text: '货到付款', url: '' },
                ]
            }, {
                title: '淘宝特色',
                child_title: [
                    { text: '手机淘宝', url: '' },
                    { text: '旺旺/旺信', url: '' },
                    { text: '大众评审', url: '' },
                ]
            },
        ],
        footerdata2: [{ text: "阿里巴巴集团", url: "" }, { text: "淘宝网", url: "" }, { text: "天猫", url: "" }, { text: "聚划算", url: "" }, { text: "全球速卖通", url: "" }, { text: "阿里巴巴国际交易市场", url: "" }, { text: "1688", url: "" }, { text: "阿里妈妈", url: "" }, { text: "飞猪", url: "" }, { text: "阿里云计算", url: "" }, { text: "AliOS", url: "" }, { text: "阿里通信", url: "" }, { text: "一淘", url: "" }, { text: "万网", url: "" }, { text: "高德", url: "" }, { text: "UC", url: "" }, { text: "友盟虾米", url: "" }, { text: "大麦网", url: "" }, { text: "钉钉", url: "" }, { text: "支付宝", url: "" }, { text: "优酷", url: "" }, { text: "土豆", url: "" }, { text: "阿里健康", url: "" }, { text: "阿里影业", url: "" },],
        footerdata3: [{ text: "关于淘宝", url: "" }, { text: "合作伙伴", url: "" }, { text: "营销中心", url: "" }, { text: "廉正举报", url: "" }, { text: "联系客服", url: "" }, { text: "开放平台", url: "" }, { text: "诚征英才", url: "" }, { text: "联系我们", url: "" }, { text: "网站地图", url: "" }, { text: "隐私权政策", url: "" }, { text: "法律声明", url: "" }, { text: "知识产权", url: "" }],
        footerdata4: '© 2003-现在 Taobao.com 版权所有',
        footerdata5: [{ text: "增值电信业务经营许可证：浙B2-20080224", url: "" }, { text: "增值电信业务经营许可证（跨地区）： B2-20150210", url: "" }, { text: "网络文化经营许可证：浙网文[2016]0268-027号", url: "" }, { text: "浙江省网络食品销售第三方平台提供者备案：浙网食A33010001互联网药品信息服务资格证书（浙）-经营性-2018-0010", url: "" }, { text: "短消息类服务接入代码使用证书：号【2016】00154-A01", url: "" }, { text: "信息网络传播视听许可证：1109364号", url: "" }, { text: "出版物网络交易平台服务经营备案号：新出发浙备字第002号浙公网安备33010002000078号 ", url: "" }, { text: "广播电视节目制作经营许可证（浙）字第01012号", url: "" }, { text: "市场名称登记证：工商网市字3301004120号", url: "" }, { text: "医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00004号", url: "" }],
        footerPicObj: {
            police: 'http://img.alicdn.com/tps/i1/T1FeW3XXNfXXXXXXXX-36-36.gif',
            picGather: 'https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg'
        }
    }
}
exports.alerter = function() {
    alert("我是自定义模块！")
}






/*
var str = '',a = 4,t = 6
for(i=0;i<4;i++){
  if(document.querySelectorAll('.tb-footer-bd p:nth-child('+a+') span:nth-child('+i+') a')){
    str+="('"+t+"',"+"'"+document.querySelectorAll('.tb-footer-bd p:nth-child('+a+') span')[i].innerText+"'"+",'"+document.querySelectorAll('.tb-footer-bd p:nth-child('+a+') span a')[i].getAttribute('href')+"'),"
  }else{
    str+="('"+t+"',"+"'"+document.querySelectorAll('.tb-footer-bd p:nth-child('+a+') span')[i].innerText+"'"+",''),"
  }

}
console.log(str)

for(i=1;i<=document.querySelectorAll('.tb-footer-ft span').length;i++){
	console.log(document.querySelector('.tb-footer-ft span:nth-child('+i+') a').getAttribute('style'))


}


var length1 = document.querySelectorAll('.service-float-item').length,length2,length3,arr=[]
for(let i=0;i<length1;i++) {
	a = document.querySelectorAll('.service-float-item')[i].getAttribute('data-index')
	length2 = document.querySelectorAll('.service-float-item:nth-child('+(i+1)+') .service-panel').length
		console.log('===='+i+'=float===')
	for(let z=0;z<length2;z++){
		s = document.querySelector('.service-float-item:nth-child('+(i+1)+') .service-panel:nth-child('+(z+1)+') h5 a').innerText
		length3 = document.querySelectorAll('.service-float-item:nth-child('+(i+1)+') .service-panel:nth-child('+(z+i)+') p').length
		console.log(document.querySelectorAll('.service-float-item:nth-child('+(i+1)+') .service-panel h5')[z])
// 		console.log('====2=float===')
		var str = ''
		for(let j=0;j<length3;j++) {
// 			console.log("('"+a+"','"+s+"',"+document.querySelectorAll('.service-float-item:nth-child('+(i+1)+') p a')[j].innerText+")")
// 			console.log(document.querySelectorAll('.service-float-item:nth-child('+(i+1)+') .service-panel:nth-child('+(z+i)+') p')[j])
			str += document.querySelectorAll('.service-float-item:nth-child('+(i+1)+') .service-panel:nth-child('+(z+i)+') p a')[j].innerText + ","
		}
		arr.push(str)
	}
}
// arr

for(let l=0;l<document.querySelectorAll('.service-float-item').length;l++){
	for(let i=0;i<document.querySelectorAll('.service-float-item').length;i++){
		d = document.querySelectorAll('.service-float-item')[i].getAttribute('data-index')
		if(document.querySelectorAll('.service-float-item')[i].getAttribute('data-index') == l){
			console.log(l,document.querySelectorAll('.service-float-item .service-rmd')[i])
			for(let j=0;j<document.querySelectorAll('.service-float-item .service-rmd:nth-child('+(i+1)+') h5').length;j++){
				console.log(i,document.querySelectorAll('.service-float-item .service-rmd:nth-child('+(i+1)+') h5')[j].innerText)
			}
			
		}
	}
}


var goodsList = document.querySelectorAll(".list.clearfix.goods-list a"),str = ""
for(i=0;i<goodsList.length;i++){
	var href = goodsList[i].getAttribute("href")
	var src = goodsList[i].children[0].children[0].getAttribute("src")
	var title = goodsList[i].children[1].children[0].innerText
	var intro = goodsList[i].children[1].children[1].innerText
	var evaluate = goodsList[i].children[1].children[2].innerText//parseInt()取数字
	str += "('1','"+href+"','"+src+"','"+title+"','"+intro+"','"+parseInt(evaluate.substring(1,evaluate.length))+"'),"
	console.group(i+1)
	console.log(href+'\n')	
	console.log(src+'\n')
	console.log(title+'\n')
	console.log(intro+'\n')
	console.log(parseInt(evaluate.substring(1,evaluate.length)))
	console.groupEnd(i+1)
}
str


('3','//qiang.taobao.com/?itemId=574995160321','//img.alicdn.com/tps/i4/TB2buamoYorBKNjSZFjXXc_SpXa_!!0-juitemmedia.jpg_360x360q90.jpg','超大面包蟹2只装','拍下减30第二份半价','128','268.00'),('3','//qiang.taobao.com/?itemId=595940269897','//img.alicdn.com/tps/i4/O1CN016h2zET1sZkCh0Jp4o_!!0-juitemmedia.jpg_360x360q90.jpg','越南进口16度甜海边板栗薯','第2份1元共发10斤','19.9','99.00'),('3','//qiang.taobao.com/?itemId=576082846608','//img.alicdn.com/tps/i4/O1CN0133QBJP1UHpwIldCda_!!0-juitemmedia.jpg_360x360q90.jpg','智利冰鲜三文鱼中段送芥末酱油','下单立减10元','74.99','168.00')









*/