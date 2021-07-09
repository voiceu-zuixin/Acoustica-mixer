// 这种写法会报错，因为ES Module)和cjs(CommonJS)的互操作性。
// 所以要么用eslint-disable-next-line，要么单独写,然后不用default

// eslint-disable-next-line
export default {
    NOTE:'note'
}

// 不用default的话，外部引入的时候就要加中括号了
// const NOTE = 'note';
// export  {
//     NOTE
// }
