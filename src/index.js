import dva from 'dva';
import createLoading from 'dva-loading';

window.imgUrl = "http://47.93.57.18:8083"

// 1. Initialize!!!!
const app = dva({
    initialState: {

    }
});
// 2. Plugins
app.use(createLoading());
// 3. Model
app.model(require('./models/app').default);
app.model(require('./models/userInfo').default); // 个人信息
app.model(require('./models/login').default);  // 登陆
app.model(require('./models/register').default); // 注册
app.model(require('./models/code').default);   // 验证码

// app.model(require('./models/indexpage').default);

// !! 搜索和搜索结页共用 ./models/search
app.model(require('./models/search').default);

app.model(require('./models/zx').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
