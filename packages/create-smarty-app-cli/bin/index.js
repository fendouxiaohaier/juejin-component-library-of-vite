#!/usr/bin/env node

console.log("create-smarty ....");

// Figlet 提供炫酷的文字效果；
import figlet from "figlet";

// Clear 清除屏幕；
import clear from "clear";

// Chalk-animation 提供命令行动画与渐变颜色。
import chalkAnimation from "chalk-animation";

// inquirer 这个库完成。它会根据配置显示界面并把结果返回为 json。
import inquirer from "inquirer";

clear();

// const log = (content) => console.log(chalk.green(content));

/** 问题选项 */
const opts = {
  "SmartyUI应用模版(Vite)": "smarty-ui-vite",
  SmartyAdmin模版: "admin",
  组件库脚手架: "uitemplate",
  组件库文档网站: "uitemplate",
  退出: "quit",
};

/** 问题 */
const question = [
  {
    type: "rawlist" /* 选择框 */,
    message: "请选择要创建的项目？",
    name: "operation",
    choices: Object.keys(opts),
  },
];

// 打印欢迎画面
const logo = figlet.textSync("Smarty UI!", {
  // font: "Ghost",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

const rainbow = chalkAnimation.rainbow(logo);
setTimeout(() => {
  rainbow.stop(); // Animation stops
  query();
}, 500);

async function query() {
  const answer = await inquirer.prompt(question);

  if (answer.operation === "退出") return;

  const { default: op } = await import(
    `../lib/operations/${opts[answer.operation]}.js`
  );
  await op();
}
