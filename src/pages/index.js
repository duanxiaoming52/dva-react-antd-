import dva from 'dva';
import dvaLoading from 'dva-loading';
import { createHashHistory } from 'history';
import { Router, Route, useRouterHistory } from 'dva/router';
import './index.css';
import Index from '../routes/Index';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
history.pathname = 'Index';

// 1. Initialize
const app = dva({
    history: history,
    onError(e) {
        console.log('系统错误：'+e);
    },
});

// 2. Plugins
app.use(dvaLoading());

// 3. Model
//app.model(require('../models/Common'));
//app.model(require('../models/Index'));

// 4. Router
app.router(({history})=>
    <Router history={history}>
      <Route path="/" component={Index} />
    </Router>
);
// 5. Start
app.start('#root');
