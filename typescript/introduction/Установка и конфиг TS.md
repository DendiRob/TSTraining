tsconfig.json: (example)
```
{
  "compilerOptions": {
    "target": "es5", //Определяет версию ECMAScript (JavaScript) стандарта, в которую TypeScript будет компилировать ваш код
    "module": "commonjs", //what module type you will use
    "strict": true,//Включает строгий режим TypeScript, что означает более строгую проверку типов и более строгие правила для кода
    "outDir": "./dist",//Этот параметр указывает каталог, в который будет помещен скомпилированный JavaScript-код
    "rootDir": "./src" // Указывает корневой каталог, в котором находятся исходные файлы TypeScript
  },
  "exclude": ["node_modules"]//dont compile this sfile
}
```