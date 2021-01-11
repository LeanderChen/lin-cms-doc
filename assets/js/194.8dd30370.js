(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{573:function(a,t,s){"use strict";s.r(t);var e=s(26),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"起步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[a._v("#")]),a._v(" 起步")]),a._v(" "),s("p",[a._v("本小节将以最快、最便捷的方式教你如何启动 lin-cms 。")]),a._v(" "),s("h2",{attrs:{id:"依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[a._v("#")]),a._v(" 依赖")]),a._v(" "),s("ul",[s("li",[a._v("JDK1.8+，已在 JAVA8、9、11 上测试通过。")]),a._v(" "),s("li",[a._v("MySQL5.6+，确保你有可用的数据库环境。")]),a._v(" "),s("li",[a._v("Maven3.6+，依赖、打包需要它。")])]),a._v(" "),s("p",[a._v("lin-cms 依赖于 spring-boot 和 mybatis，如果你还不满足技术储备，那么请一定先去学习下。")]),a._v(" "),s("h2",{attrs:{id:"获取项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取项目"}},[a._v("#")]),a._v(" 获取项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/TaleLin/lin-cms-spring-boot.git latticy\n")])])]),s("blockquote",[s("p",[a._v("此处我们以 "),s("code",[a._v("latticy")]),a._v(" 作为工程名，当然你也可以以任意你喜爱的名字作为工程名。如果你想以某个指定版本（如 0.0.1 版）作为起始项目，那么请在 github 上的"),s("a",{attrs:{href:"https://github.com/TaleLin/lin-cms-spring-boot/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("版本页"),s("OutboundLink")],1),a._v("下载相应的版本即可。")])]),a._v(" "),s("h2",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),s("p",[a._v("进入项目目录：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" latticy\n")])])]),s("p",[a._v("安装依赖并打包 jar 包")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -Dmaven.test.skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),s("h2",{attrs:{id:"数据库配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[a._v("#")]),a._v(" 数据库配置")]),a._v(" "),s("h3",{attrs:{id:"导入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[a._v("#")]),a._v(" 导入数据")]),a._v(" "),s("p",[a._v("在你的开发环境 RDBMS 中，新建一个数据库，如 "),s("code",[a._v("lin-cms")]),a._v("。")]),a._v(" "),s("p",[a._v("然后找到目录下的"),s("code",[a._v("/src/main/resources/schema.sql")]),a._v("文件，并在 MySQL 中执行该脚本文件。")]),a._v(" "),s("p",[a._v("推荐你使用 navicat 等数据库工具导入并执行脚本文件，如果你熟悉 mysql 客户端工具，也可使用它导入数据。")]),a._v(" "),s("h3",{attrs:{id:"更改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改配置"}},[a._v("#")]),a._v(" 更改配置")]),a._v(" "),s("p",[a._v("找到"),s("code",[a._v("/src/main/resources/application-dev.yml")]),a._v("配置文件，并在其中修改你开发环境的数据库配置：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据源配置，请修改为你项目的实际配置")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("3306/lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("cms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("?")]),a._v("useSSL=false"),s("span",{pre:!0,attrs:{class:"token important"}},[a._v("&serverTimezone=UTC&characterEncoding=UTF8")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"root"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123456"')]),a._v("\n")])])]),s("h2",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("java -jar target/latticy-0.2.0-RC2.jar\n")])])]),s("h2",{attrs:{id:"完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完成"}},[a._v("#")]),a._v(" 完成")]),a._v(" "),s("p",[a._v("运行成功后，打开浏览器访问 "),s("code",[a._v("http://localhost:5000/")]),a._v(" ，你可以看到 ：")]),a._v(" "),s("p",[s("strong",[a._v("心上无垢，林间有风")])]),a._v(" "),s("p",[a._v("几个大字，证明你一切已经 ok , 你可以进入后面的章节学习了。")]),a._v(" "),s("p",[a._v("当然你也可以通过其它的工具验证，如:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://localhost:5000/\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("在默认的开发环境中，我们是关闭权限系统的，这可能会导致部分接口和功能不能使用，如果\n你需要和前端对接，请在"),s("code",[a._v("/src/main/resources/application-dev.yml")]),a._v("配置\n文件中开启权限拦截，如下：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开启权限拦截")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])])]),a._v(" "),s("p",[a._v("最后，祝贺你，开始了一段新的旅程。")]),a._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);t.default=r.exports}}]);