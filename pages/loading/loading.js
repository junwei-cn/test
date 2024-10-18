const install = app => {
  app.config.globalProperties.$loading = {
    show(params) {
      uni.navigateTo({
        url: `/pages/loading/index?params=${params}`,
        events: {
          confirm: function(data) {
            params?.confirm?.(data);
          },
          cancel: function(data) {
            params?.cancel?.(data)
          }
        },
        animationType: "fade-in",
      })
    }
  }
}

export default install;