export default defineAppConfig({
  pages: ["pages/index/index", "pages/home/index"],
  tabBar: {
    list: [
      {
        iconPath: "assets/home.png",
        selectedIconPath: "assets/home_on.png",
        pagePath: "pages/index/index",
        text: "index",
      },
      {
        iconPath: "assets/home.png",
        selectedIconPath: "assets/home_on.png",
        pagePath: "pages/home/index",
        text: "home",
      },
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white",
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
