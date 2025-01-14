/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended",
    '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting'
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    "sourceType": "module"
  },
  rules: {
    'vue/multi-word-component-names': [0],
    'vue/max-attributes-per-line': [
      0,
      {
          // 强制每行的最大属性数
          singleline: 10, // 单行时可以接收最大数量
          multiline: {
              max: 1,
              allowFirstLine: false, // 属性和标记名在同一行
          },
      },
  ],
  'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后换行
  'vue/multiline-html-element-content-newline': 'off',
  'vue/name-property-casing': [0, 'PascalCase'],
  'vue/no-v-html': 'off',
  'accessor-pairs': 2, // 缩进
  'arrow-spacing': [
      2,
      {
          // 强制箭头函前后都使用空格
          before: true,
          after: true,
      },
  ],
  'block-spacing': [2, 'always'], // 强制括号中开头或者结尾有空格，要求使用至少一个或多个空格
  'brace-style': [
      2,
      '1tbs',
      {
          // 强制开括号在同一行
          allowSingleLine: true, // 允许开括号和闭括号在同一行，默认是false
      },
  ],
  camelcase: 0, // 强制属性名称为驼峰风格
  // (默认) 禁用拖尾逗号，根据 ECMAScript 5（和 ECMAScript 3！）规范，对象文字中的尾随逗号是有效的。
  // 但是，IE8（不在 IE8 文档模式下）及以下版本在遇到 JavaScript 中的尾随逗号时会抛出错误。
  'comma-dangle': [0, 'never'],
  'comma-spacing': [
      2,
      {
          // 强制在逗号前后使用一致的空格
          before: false, // 前面不要
          after: true, // 后面要
      },
  ],
  'comma-style': [2, 'last'], // (默认) 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
  'constructor-super': 2, // 要求在构造函数中有 super() 的调用
  curly: [2, 'multi-line'], // 强制所有控制语句使用一致的括号风格，允许在单行中省略大括号
  'dot-location': [2, 'property'], // 强制在点号之前和之后一致的换行
  'eol-last': 2, // 要求或禁止文件末尾存在空行,强制文件末尾不要有换行符
  eqeqeq: ['error', 'always', { null: 'ignore' }], // 要求使用 === 和 !==,不要对null使用此规则
  'generator-star-spacing': [
      2,
      {
          // 强制 generator 函数中 * 号周围使用一致的空格
          before: true,
          after: true,
      },
  ],
  'handle-callback-err': [2, '^(err|error)$'], // 要求回调函数中有容错处理
  indent: ['error', 4],
  'vue/html-indent': ['error', 4],
  'jsx-quotes': [2, 'prefer-single'], // 强制在 JSX 属性中一致地使用双引号或单引号,强制所有不包含单引号的 JSX 属性值使用单引号。
  'key-spacing': [
      2,
      {
          // 强制在对象字面量的属性中键和值之间使用一致的间距
          beforeColon: false,
          afterColon: true,
      },
  ],
  'keyword-spacing': [
      2,
      {
          // 强制在关键字前后使用一致的空格
          before: true,
          after: true,
      },
  ],
  'new-cap': [
      2,
      {
          // 要求构造函数首字母大写
          newIsCap: true, // (默认) 要求调用 new 操作符时有首字母大小的函数
          capIsNew: false, // 允许调用首字母大写的函数时没有 new 操作符。
      },
  ],
  'new-parens': 2, // 强制或禁止调用无参构造函数时有圆括号
  'no-array-constructor': 2, // 禁用 Array 构造函数
  // arguments.caller 和 arguments.callee 的使用使一些代码优化变得不可能。
  // 在 JavaScript 的新版本中它们已被弃用，同时在 ECMAScript 5 的严格模式下，它们也是被禁用的
  'no-caller': 2,
  'no-console': 'off', // 禁止调用 console 对象的方法
  'no-class-assign': 2, // 禁止修改类声明的变量
  'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
  'no-const-assign': 2, // 禁止修改 const 声明的变量
  'no-control-regex': 0, // 禁止在正则表达式中使用控制字符
  'no-delete-var': 2, // 禁止删除变量
  'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
  'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
  'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
  'no-duplicate-case': 2, // 禁止出现重复的 case 标签
  'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
  'no-empty-pattern': 2, // 禁止使用空解构模式
  'no-eval': 2, // 禁用 eval()
  'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
  'no-extend-native': 2, // 禁止扩展原生类型
  'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
  'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
  'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
  'no-fallthrough': 2, // 禁止 case 语句落空
  'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
  'no-func-assign': 2, // 禁止对 function 声明重新赋值
  'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
  'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的块中出现变量声明或 function 声明
  'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
  'no-irregular-whitespace': 2, // 禁止不规则的空白
  'no-iterator': 2, // 禁用 __iterator__ 属性
  'no-label-var': 2, // 不允许标签与变量同名
  'no-labels': [
      2,
      {
          // 禁用标签语句
          allowLoop: false,
          allowSwitch: false,
      },
  ],
  'no-lone-blocks': 2, // 禁用不必要的嵌套块
  'no-mixed-spaces-and-tabs': 0, // 禁止空格和 tab 的混合缩进
  'no-multi-spaces': 0, // 禁止使用多个空格
  'no-multi-str': 2, // 禁止使用多行字符串
  'no-multiple-empty-lines': [
      2,
      {
          // 禁止出现多行空行,最大一行
          max: 1,
      },
  ],
  'no-native-reassign': 2, // 不允许修改只读全局变量
  'no-negated-in-lhs': 2, // 不允许对表达式中的左操作数求反
  'no-new-object': 2, // 禁用 Object 的构造函数
  'no-new-require': 2, // 禁止调用 require 时使用 new 操作符
  'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用
  'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
  'no-obj-calls': 2, // 禁止把全局对象作为函数调用
  'no-octal': 2, // 禁用八进制字面量
  'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
  'no-path-concat': 2, // 禁止对 __dirname 和 __filename 进行字符串连接
  'no-proto': 2, // 禁用 __proto__ 属性
  'no-redeclare': 2, // 禁止多次声明同一变量
  'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
  'no-return-assign': [2, 'except-parens'], // 禁止在 return 语句中使用赋值语句
  'no-self-assign': 2, // 禁止自我赋值
  'no-self-compare': 2, // 禁止自身比较
  'no-sequences': 2, // 禁用逗号操作符
  'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
  'no-spaced-func': 2, // 不允许函数标识符及其应用程序之间存在间距
  'no-sparse-arrays': 2, // 禁用稀疏数组
  'no-this-before-super': 2, // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
  'no-throw-literal': 2, // 禁止抛出异常字面量
  'no-trailing-spaces': 2, // 禁用行尾空格
  'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
  'no-undef-init': 2, // 禁止将变量初始化为 undefined
  'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
  'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
  'no-unneeded-ternary': [
      2,
      {
          // 禁止可以在有更简单的可替代的表达式时使用三元操作符
          defaultAssignment: false,
      },
  ],
  'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
  'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
  "no-unused-vars": "error", // 检查未使用的变量
  // 'no-unused-vars': [
  //     2,
  //     {
  //         // 禁止出现未使用过的变量
  //         vars: 'all',
  //         args: 'none',
  //     },
  // ],
  'no-useless-call': 2, //	禁止不必要的 .call() 和 .apply()
  'no-useless-computed-key': 2, //	禁止在对象中使用不必要的计算属性
  'no-useless-constructor': 2, // 禁用不必要的构造函数
  'no-useless-escape': 0, // 禁用不必要的转义字符
  'no-whitespace-before-property': 2, // 禁止属性前有空白
  'no-with': 2, // 禁用 with 语句
  'one-var': [
      2,
      {
          // 强制函数中的变量要么一起声明要么分开声明
          initialized: 'never', // 要求每个作用域的初始化的变量有多个变量声明
      },
  ],
  'operator-linebreak': [
      2,
      'after',
      {
          // 强制操作符使用一致的换行符
          overrides: {
              '?': 'before',
              ':': 'before',
          },
      },
  ],
  'padded-blocks': [2, 'never'], // 要求或禁止块内填充
  quotes: [
      2,
      'single',
      {
          avoidEscape: true,
          allowTemplateLiterals: true,
      },
  ],
  semi: 0, // 要求或禁止使用分号代替 ASI
  'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
  'space-before-function-paren': [2, 'never'], // 强制在 function的左括号之前使用一致的空格
  'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
  'space-infix-ops': 2, //	要求操作符周围有空格
  'space-unary-ops': [
      2,
      {
          // 强制在一元操作符前后使用一致的空格
          words: true,
          nonwords: false,
      },
  ],
  'spaced-comment': [
      2,
      'always',
      {
          // 强制在注释中 // 或 /* 使用一致的空格
          markers: [
              'global',
              'globals',
              'eslint',
              'eslint-disable',
              '*package',
              '!',
              ',',
          ],
      },
  ],
  'template-curly-spacing': [2, 'never'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
  'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
  'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
  'wrap-iife': [2, 'any'], // 要求 IIFE 使用括号括起来
  'yield-star-spacing': [2, 'both'], // 强制在 yield* 表达式中 * 周围使用空格
  yoda: [2, 'never'], // 要求或禁止 “Yoda” 条件
  'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  'Mixed spaces and tabs  no-mixed-spaces-and-tabs': 0, // 混合空格和制表符没有混合空格和制表符
  'object-curly-spacing': [
      2,
      'always',
      {
          objectsInObjects: false, // 强制在花括号中使用一致的空格
      },
  ],
  'array-bracket-spacing': [2, 'never'], // 强制数组方括号中使用一致的空格
  'vue/component-tags-order': 0,
  "vue/no-lone-template": 0,
  "vue/no-multiple-slot-args": 0,
  }
}
