module.exports = {
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 80, // 每行最多显示的字符数
  "trailingComma": "all", // 尾随逗号
  "bracketSpacing": true, // 对象括号是否添加空格
  "vueIndentScriptAndStyle": false, // vue的script和style的内容是否缩进
  "jsxSingleQuote": true, // jsx中使用单引号
    "bracketSameLine": false, // 组件最后的尖括号不另起一行
    "arrowParens": 'always', // 箭头函数参数始终添加括号
    "htmlWhitespaceSensitivity": 'ignore', // html存在空格是不敏感的
    "endOfLine": 'auto', // 行结尾形式 mac和linux是\n  windows是\r\n
    "singleAttributePerLine": false, // 组件或者标签的属性是否控制一行只显示一个属性
    "overrides": [ // 覆盖默认配置
        {
            files: '*.vue', // 适用于 .vue 文件
            options: {
                printWidth: 80, // 自定义 .vue 文件的 printWidth
                tabWidth: 2, // 自定义 .vue 文件的 tabWidth
            },
        },
        {
            files: ['*.ts', '*.js', '*.json'],
            options: {
                tabWidth: 2, // 自定义 .json 文件的 tabWidth
            },
        },
    ],
  "importOrder": [ //导入规则
    "^vue$",
    "<THIRD_PARTY_MODULES>",
    "^@/plugins/(.*)$",
    "^@/router/(.*)$",
    "^@/layouts/(.*)$",
    "^@/permission/(.*)$",
    "^@/components/(.*)$",
    "^@/hooks/(.*)$",
    "^@/store/(.*)$",
    "^@/utils/(.*)$",
    "^@/constant/(.*)$",
    "^@/api/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}