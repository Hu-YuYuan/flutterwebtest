// 获取token
    function testJs() {
        jsSuccess('token');
    }


    function getAccessToken() {
      console.log('call getAccessToken')
      let param
      param = {
        backid: 'accessTokenCallback',
        backFunc: 'accessTokenCallback',
      }

      if (window.WebContainer && window.WebContainer.feixinGetAccessToken) {
        window.WebContainer.feixinGetAccessToken(JSON.stringify(param))
      } else if (
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.feixinGetAccessToken
      ) {
        window.webkit.messageHandlers.feixinGetAccessToken.postMessage(param)
      } else {
        console.log('getAccessToken failure')
      }
    }

    // 获取token回调
    accessTokenCallback(res) {
      console.log('getAccessToken' + res)
    }

//    window.accessTokenCallback = vm.accessTokenCallback

    // 获取用户基本信息

        getInfo() {
          console.log('call getinfo func')

          let param = {
            backid: 'getUserInfo',
          }
          if (window.WebContainer && window.WebContainer.getUserInfo) {
            window.WebContainer.getUserInfo(JSON.stringify(param))
          } else if (
            window.webkit &&
            window.webkit.messageHandlers &&
            window.webkit.messageHandlers.feixinGetCurrentUserInfo
          ) {
            window.webkit.messageHandlers.feixinGetCurrentUserInfo.postMessage(
              param
            )
          } else {
            // alert('No native APIs found.')
            console.log('No native APIs found.')
            // this.userPhone = '13763325151'
            // this.userName = 'lbh'
            // this.enterId = '123'
            // this.getRequestList()
            this.clientType = 4

            this.getAccessToken()
          }
        },

        // 句柄回调获取userInfo
        getUserInfo(info) {
          console.log('获取用户信息成功')
          console.log(info)
          if (window.WebContainer && window.WebContainer.getUserInfo) {
            this.userName = JSON.parse(info).name
            this.userPhone = JSON.parse(info).phone
          } else if (
            window.webkit &&
            window.webkit.messageHandlers &&
            window.webkit.messageHandlers.feixinGetCurrentUserInfo
          ) {
            this.userName = info.name
            this.userPhone = info.phone
          }

          this.$nextTick(() => {
            // this.getRequestList()
            this.getAccessToken()
          })
        }