import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: 'NekoiMeiov Bot 服务协议',
    description: 'NekoiMeiov Bot 服务协议与隐私政策',
    themeConfig: {
        nav: false,
        sidebar: false,
        editLink: false,
        lastUpdated: false,
        footer: {
            copyright: '© 2026 NekoiMeiov_Team. 保留所有权利。'
        },
        darkModeSwitchLabel: '主题',
        docFooter: {
            prev: false,
            next: false
        }
    },
    markdown: {
        lineNumbers: false,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: '#'
        }
    },
    cleanUrls: true
})