npm install typescript  
npx tsc --init  
mkdir build  
cd build  
clasp create  
mkdir src  

npm install rollup  
# 必要な依存関係を解決する (上記のjs内で使ってるplugin等々)  
npm i -D @rollup/plugin-babel @rollup/plugin-node-resolve @babel/preset-env @babel/preset-typescript @babel/plugin-transform-runtime  @rollup/plugin-node-resolve  
  
npm run build
