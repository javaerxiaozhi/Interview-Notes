import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs"; //自动生成侧边栏脚本
import { withMermaid } from "vitepress-plugin-mermaid"; // 一个可以使用md语法绘制流程图，饼状图的md扩展

// https://vitepress.dev/reference/site-config
export default withMermaid({
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
  lang: 'zh-CN',
  base: "/Interview-Notes/",
  title: "Javaer小智的编程笔记",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/Interview-Notes/img/开发中.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/开发中.png',
    outlineTitle: '页面导航', // 侧边栏标题
    outline: [1, 6], // 根据标题生成侧边栏深度
    aside: "left", // 设置右侧侧边栏在左侧显示
    search: { //设置搜索框
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    nav: [
      { 
        text: '数据结构与算法', 
        items: [
          { text: '数据结构', link: 'docs/algorithm/数据结构' },
          { text: '基础算法', link: 'docs/algorithm/基础算法' },
          { text: '排序算法', link: 'docs/algorithm/排序算法' },
          { text: '进阶算法', link: 'docs/algorithm/进阶算法' }
        ] 
      },
      {
        text: '其他',
        items: [
          { text: 'VitePress + Github Pages搭建博客', link: 'docs/other/VitePress + Github Pages搭建博客' }
        ]
      },
      // { 
      //   text: 'MarkdownExamples', 
      //   link: '/markdown-examples' 
      // }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // 第一个/front-end/react常常是nav的link，这个set_sidebar传递的参数是相对于根路径的文件夹路径，返回的是每个文件夹中文件的名称和链接
    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },

    // sidebar: { 
    //   "/docs/algorithm/": [
    //     {
    //       text: '数据结构',
    //       items: [
    //         { text: '二叉树', link: '/docs/algorithm/data-struct/二叉树' },
    //         { text: '数组', link: '/docs/algorithm/data-struct/数组' },
    //       ]
    //     },
    //     {
    //       text: '排序算法',
    //       items: [
    //         { text: '排序算法', link: '/docs/algorithm/sort/排序算法' }
    //       ]
    //     },
    //   ]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/javaerxiaozhi/Interview-Notes' }
    ],

    // footer: {
    //   copyright: 'Copyright@ 2022 Javaer XiaoZhi'
    // }
  }
});
