import React from "react"
import { Tree } from "src/common/types/tree"
import { Gpt } from "./features/GPT";

interface RouterTree extends Tree {
    component?: React.FC;
    children?: RouterTree[]
}

const MENUS_TREE: RouterTree = {
    key: 'root',
    children: [
        {
            key: 'gpt',
            title: 'GPT',
            children: [
                {
                    key: '11',
                    title: '会话一',
                    content: '巴拉巴拉巴拉',
                    component: Gpt
                },
                {
                    key: '22',
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
                    key: '33',
                    title: '主题颜色',
                    content: '主题颜色'
                },
                {
                    key: '44',
                    title: '语言',
                    content: '中文英文'
                },
                {
                    key: '55',
                    title: '缓存',
                    content: '清除缓存'
                }
            ]
        }
    ]
}

export {
    MENUS_TREE
}