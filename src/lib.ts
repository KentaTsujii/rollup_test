//これはexportがついていないため、アクセスできない
const TITLE:string = 'Qiita';

//関数のモジュール化
export function showMessage():void{
  console.log(`ようこそ、${TITLE}!`);
}

//クラスのモジュール化
export class Util {
  static getVersion():string{
    return '1.0.0';
  }
}
