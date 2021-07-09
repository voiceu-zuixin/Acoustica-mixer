// 该observeStore函数需要返回一个函数，用于控制监听函数的关闭
// eslint-disable-next-line
export default function (store, selector, onChange) {
    // currentState用来判断后续的newState是否发生改变，
    // 因为currentState是undefined如果未改变，说明newState也是undefined
    // 则说明是新建空白project
    let currentState//undefined
    const handleChange = () => {
        let newState//undefined
        try {
            // 获取新状态,通过传进来的selector函数，给它传进store的state
            // 这里是不是也得考虑深浅拷贝的问题
            newState = selector(store.getState())
            console.log('selector',selector);
            console.log('newState',newState);
        } catch (error) {//在监听取消的时候，handleChange还会执行一次，就会报错
            // 如果发生error，直接跳出整个observeStore函数
            // console.log(selector);
            // console.log(newState);
            console.log(error);
            return
        }

        // 这样看肯定不等啊，因为currentState没定义是什么，除非newState也是undefined
        // 所以什么时候newState是undefined，当新建一个project的时候，什么也没有
        // 比如：let project = {}  console.log(project.l); 这个就会输出undefined
        if (newState !== currentState) {// 所以这个意思就是当project不是新建的时候
            onChange(newState, currentState);

            // 这有什么用，后续也没有把currentState进行任何操作，
            /*
              因为这个函数是监听器，一旦sequence的实例被创建，那么这个observeStore就形成闭包
              不会消失，直到执行unsubscribe，所以第一次的currentState是undefined，
              但是，在没取消监听之前，后续的change操作都会让newState和currentState进行比较
              所以必须每次给currentState = newState，不然每次都是newState跟undefined比较
            */
            currentState = newState;
        }
    }

    // 运行handleChange，得到
    handleChange()

    // store.subscribe可以监听变化，
    // 一旦store的state发生变化，就会调用传入的函数handleChange
    // store.subscribe()会返回一个函数，调用该函数就可以取消监听
    let unsubscribe = store.subscribe(handleChange)

    // 当unsubscribe()的时候，store.subscribe(handleChange)(),handleChange会执行,所以要try catch
    return unsubscribe;
}