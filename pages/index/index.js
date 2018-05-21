//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotInfo: [],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
  },
  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: '百兆网加载中...',
    }),
    wx.request({
      url: 'https://www.apiopen.top/novelApi',
      success: function (res) {
        console.log(res.data.data),
          that.setData({
            hotInfo: res.data.data,
           
          });
        wx.hideLoading()
        wx.stopPullDownRefresh()
       
      },
      fail:function(res){
        wx.hideLoading()
        wx.stopPullDownRefresh()
      }
       
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '海量热门小说',
      path: '/pages/index/index',
      success: function (res) {
        console.log("转发成功")
        // 转发成功
      },
      fail: function (res) {
        console.log("转发失败")
      }
    }
  },

  // 下拉刷新回调
  onPullDownRefresh: function () {
    this.onLoad();
  }

})
