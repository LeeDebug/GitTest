// 下面这个意思是告诉 TypeScript *.vue 后缀的文件可以交给 vue 模块来处理。
// 而在代码中导入 *.vue 文件的时候，需要写上 .vue 后缀。原因还是因为 TypeScript
// 默认只识别 *.ts文件， 不识别 *.vue 文件
// 就比如main.ts 中需要 import App from './App.vue'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.styl' {
  const styl: Record<string, string>;
  export default styl;
}

declare module '*.png' {
  const png: Record<string, string>;
  export default png;
}