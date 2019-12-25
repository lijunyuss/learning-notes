module.exports = {
    title: '学习笔记',
    description: 'Just playing around',
    docsRepo: "http://192.168.0.154:10081/front/arespress",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    lastUpdated: "Last Updated",
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: 'HTML',
                items: [{
                        text: 'HTML',
                        items: [{
                            text: 'WEB 标准',
                            link: '/views/html/html/web-standards/'
                        }, {
                            text: 'HTML 标签',
                            link: '/views/html/html/html-tag/'
                        }, {
                            text: 'HTML 结构',
                            link: '/views/html/html/html-skeleton/'
                        }, {
                            text: 'DIV 布局',
                            link: '/views/html/html/div-layout/'
                        }]
                    },
                    {
                        text: 'H5',
                        items: [{
                                text: '音频',
                                link: '/views/html/h5/h5-audio/'
                            },
                            {
                                text: '新标签',
                                link: '/views/html/h5/h5-audio'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'CSS',
                items: [{
                    text: '基础',
                    items: [{
                        text: 'CSS',
                        link: '/views/css/base/css'
                    }, {
                        text: 'CSS重点',
                        link: '/views/css/base/css-stress'
                    }, {
                        text: 'CSS3',
                        link: '/views/css/base/css3'
                    }]
                }, {
                    text: '预处理器',
                    items: [{
                        text: 'LESS',
                        link: '/views/css/preprocessor/less'
                    }, {
                        text: 'Sass',
                        link: '/views/css/preprocessor/sass'
                    }, {
                        text: 'Stylus',
                        link: '/views/css/preprocessor/stylus'
                    }]
                }]
            },
            {
                text: 'JavaScript',
                items: [{
                    text: '基础',
                    items: [{
                        text: 'JavaScript基础',
                        link: '/views/js/base/js'
                    }, {
                        text: 'ES6',
                        link: '/views/css/js/ES6'
                    }, {
                        text: 'jQuery',
                        link: '/views/css/js/jquery'
                    }]
                }]
            }, {
                text: 'NodeJs',
                link: '/nodejs/'
            }, {
                text: 'Vue',
                link: '/vue/'
            }
        ],
        sidebarDepth: 1,
        sidebar: {
            '/views/html/html/': [
                "web-standards",
                "html-tag",
            ]
        }
    },
}