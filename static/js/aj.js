/***** 全局参数 *****/
window.wv = {};
wv.generalHost = 'http://h5.qiushanpr.com'
wv.apiHost = wv.generalHost + '/serveryggnewpro';			//api地址
wv.staticHost = wv.generalHost;			//静态服务器地址
wv.baseHost = wv.generalHost;		//页面的地址，用于分享
wv.userinfo = null

/**
 * weixin分享
 */


/*****微信分享接口*****/
function weixinShare(name) {
  var targetUrl = location.href.split('#')[0];
  $.ajax({
    type: "POST",
    url: 'http://h5.qiushanpr.com/case/2018/yggnewpro/wp-weixin/safe.php?test=1&targetUrl=' + encodeURIComponent(targetUrl),
    dataType: "json",
    async: true,
    success: function (response) {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: response.appId, // 必填，公众号的唯一标识
        timestamp: response.timestamp, // 必填，生成签名的时间戳
        nonceStr: response.nonceStr, // 必填，生成签名的随机串
        signature: response.signature, // 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });

      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      var content = {
        title: '海尔冷链在线渔业专题',
        desc: '海尔冷链在线助商户掌握最新渔业商机',
        link: 'http://h5.qiushanpr.com/case/2018/coldpro/index.html',
        imgUrl: 'http://h5.qiushanpr.com/case/2018/coldpro/img/cover.jpg',
      }

      wx.ready(function () {
        wx.updateAppMessageShareData(content);
        wx.updateTimelineShareData(content);
        wx.onMenuShareTimeline(content);
        wx.onMenuShareAppMessage(content);
      });
    }

  });
};
weixinShare();


/**
 * 通用请求包装
 * @param {Object} method        方法： get post,put
 * @param {Object} api          api地址
 * @param {Object} data            请求数据
 * @param {Function} success(data)      成功回调
 * @param {Function} fail(result:code,msg)    失败毁掉
 */
function request(method, api, data, success, fail) {
  $.ajax({
    type: method,
    timeout: 20 * 1000,
    data: method.toLowerCase() == 'get' ? data : JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json',
      "x-page-href": location.href
    },
    url: wv.apiHost + api,
    dataType: "json",
    success: function (result) {
      if (result.code == 0) {
        success && success.call(this, result.data)
      } else {
        if (result.code == 403) {
          return window.location.href = result.data.oauthUrl
        }
        fail && fail.call(this, result)
      }
    },
    error: function (e) {
      alert('请求失败，请刷新重试')
    }
  })
}

/**
 * 通用请求包装
 * @param {Object} api          api地址
 * @param {Function} success(data)      成功回调
 * @param {Function} fail(result:code,msg)    失败回调
 */
function get(api, data, success, fail) {
  request("get", api, data, success, fail)
}

/**
 * 通用请求包装
 * @param {Object} api          api地址
 * @param {Object} data            请求数据
 * @param {Function} success(data)      成功回调
 * @param {Function} fail(result:code,msg)    失败毁掉
 */
function post(api, data, success, fail) {
  request('post', api, data, success, fail)
}


/**
 * 通用请求包装
 * @param {Object} api          api地址
 * @param {Object} data            请求数据
 * @param {Function} success(data)      成功回调
 * @param {Function} fail(result:code,msg)    失败毁掉
 */
function put(api, data, success, fail) {
  request('put', api, data, success, fail)
}


/**
 * 简单的模板渲染
 * @param {Object} tplUrl    模板的ID
 * @param {Object} data    模板渲染数据
 */
function render(tplUrl, data) {
  var template = $("#" + tplUrl).html()
  if (!template) {
    console.error('模板不存在....')
  }
  for (var k in data) {
    template = template.replace("${" + k + "}", data[k])
  }
  return template
}


//分享初始化
function init(data, ready) {
  data.debug = false
  wx.config(data)
  wx.ready(function () {
    ready && ready()
  })
}

//分享,用法如下
/**
 * init(wechatconfig,function(){
			share({
				link:'http://xxxx',
				title:'title',
				desc:'description',
				imgUrl:'http://xmay.yun-net.cn/img/cover.jpg'

			})
		})
 注：weichatconfig从api获取
 * @param data
 */
function share(data) {
  wx.onMenuShareAppMessage(data)
  wx.onMenuShareQQ(data)
  wx.onMenuShareWeibo(data)
  wx.onMenuShareQZone(data)
  wx.onMenuShareTimeline(data)
}

//获取get请求参数
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}
