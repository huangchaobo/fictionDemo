// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  book_list:[]
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/search/search',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  toSearch: function(e){
   
    var that=this
    wx.showLoading({
      title: '百兆网加载中...',
    })
    wx.request({
      url: 'https://www.apiopen.top/novelInfoApi',
      data:{
        name: e.detail
      },
      success:function(res){
        that.setData({
          book_list: res.data.data.data
        })
        console.log(res.data);
        wx.hideLoading();
      }
    })
  },
})