const MENUS = [
    {
        key: 'gpt',
        title: 'GPT',
        children: [
            {
                title: '会话一',
                content: '巴拉巴拉巴拉'
            },
            {
                title: '会话二',
                content: '莫西莫西莫西'
            }
        ]
    },
    {
        key: 'log',
        title: 'Log',
        content: '更新日志',
    },
    {
        key: 'setting',
        title: '设置',
        children: [
            {
                title: '主题颜色',
                content: '主题颜色'
            },
            {
                title: '语言',
                content: '中文英文'
            },
            {
                title: '缓存',
                content: '清除缓存'
            }
        ]
    }
]

export {
    MENUS
}