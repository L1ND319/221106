<<<<<<< HEAD

=======
<<<<<<< HEAD:221106/miniprogram/pages/write_note/write_note.js
// pages/write_note/write_note.js
>>>>>>> bc05d9512a5413849c09103ebce6f298e48cabce
import noteBeanUtil from '../../utils/note_bean.js'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    content: "",
    itemData: {},
    noteList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = wx.getStorageSync(app.globalData.NOTE_LIST);
    if (!list) {
      list = []
    }
    this.setData({
      noteList: list
    })

    if (options.note_id) {
      wx.setNavigationBarTitle({
        title: '编辑',
      })
      this.setData({
        itemData: options,
        title: options.title,
        content: options.content
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  titleChange: function (event) {
    this.setData({
      title: event.detail.value
    })
  },
  contentChange: function (event) {
    this.setData({
      content: event.detail.value
    })
  },
  commit: function () {
    if (this.data.itemData.note_id) {
      //编辑
      var time = app.$timeUtils.formatTime(new Date())
      var noteList = this.data.noteList
      var note = noteList[this.data.itemData.note_id]
      note.title = this.data.title
      note.content = this.data.content
      note.update_time = time
      this.setData({
        noteList: noteList
      })
    } else {
      //新增
      var time = app.$timeUtils.formatTime(new Date())
      let note = noteBeanUtil.getNoteBean(this.data.noteList.length, this.data.title, this.data.content, time, time, new Date().getTime())
      let noteList = this.data.noteList
      noteList.push(note)
      this.setData({
        noteList: noteList
      })
    }
    this.save()
    /*自动返回前一页*/
    var pages = getCurrentPages(); //当前页面
    var beforePage = pages[pages.length - 2]; //前一页
    beforePage.onLoad(); // 执行前一个页面的onLoad方法
    wx.navigateBack({
    delta: 1
    })
  },
  save: function () {
    var map = {
      key: app.globalData.NOTE_LIST,
      data: this.data.noteList,
      success: function (res) {
        wx.showToast({
          title: '操作成功',
          icon: 'success'
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '操作失败',
          icon: 'error'
        })
      }
    }
    //如果是异步的不能设置回调
    // wx.setStorageSync(app.globalData.NOTE_LIST, this.data.noteList)
    wx.setStorage(map)
  }
<<<<<<< HEAD
=======
=======
// pages/write_note/write_note.js
import noteBeanUtil from '../../utils/note_bean.js'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    content: "",
    itemData: {},
    noteList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = wx.getStorageSync(app.globalData.NOTE_LIST);
    if (!list) {
      list = []
    }
    this.setData({
      noteList: list
    })

    if (options.note_id) {
      wx.setNavigationBarTitle({
        title: '编辑',
      })
      this.setData({
        itemData: options,
        title: options.title,
        content: options.content
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  titleChange: function (event) {
    this.setData({
      title: event.detail.value
    })
  },
  contentChange: function (event) {
    this.setData({
      content: event.detail.value
    })
  },
  commit: function () {
    if (this.data.itemData.note_id) {
      //编辑
      var time = app.$timeUtils.formatTime(new Date())
      var noteList = this.data.noteList
      var note = noteList[this.data.itemData.note_id]
      note.title = this.data.title
      note.content = this.data.content
      note.update_time = time
      this.setData({
        noteList: noteList
      })
    } else {
      //新增
      var time = app.$timeUtils.formatTime(new Date())
      let note = noteBeanUtil.getNoteBean(this.data.noteList.length, this.data.title, this.data.content, time, time, new Date().getTime())
      let noteList = this.data.noteList
      noteList.push(note)
      this.setData({
        noteList: noteList
      })
    }
    this.save()
    /*自动返回前一页*/
    var pages = getCurrentPages(); //当前页面
    var beforePage = pages[pages.length - 2]; //前一页
    beforePage.onLoad(); // 执行前一个页面的onLoad方法
    wx.navigateBack({
    delta: 1
    });
  },
  save: function () {
    var map = {
      key: app.globalData.NOTE_LIST,
      data: this.data.noteList,
      success: function (res) {
        wx.showToast({
          title: '操作成功',
          icon: 'success'
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '操作失败',
          icon: 'error'
        })
      }
    }
    //如果是异步的不能设置回调
    // wx.setStorageSync(app.globalData.NOTE_LIST, this.data.noteList)
    wx.setStorage(map)
  }
>>>>>>> 9edb4a2d18727a37b293f219e4e1c7001029596e:221106/pages/write_note/write_note.js
>>>>>>> bc05d9512a5413849c09103ebce6f298e48cabce
})