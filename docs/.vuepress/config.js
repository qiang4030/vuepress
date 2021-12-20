module.exports = {
  lang: "zh-CN",
  title: "VuePress",
  description: "Vue 驱动的静态网站生成器",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/favicon.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "简体中文", link: "/language/Chinese" },
          { text: "English", link: "/language/English" },
        ],
      },
      { text: "GitHub", link: "https://github.com" },
    ],
    sidebar: "auto",
  },
  plugins: ["vuepress-plugin-auto-sidebar"],
};
