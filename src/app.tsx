import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可
import { PureComponent } from 'react';
import './app.less';
import { Provider } from 'mobx-react';
import enumStore from '@/store/enum';

const store = {
  enum: enumStore,
};

class App extends PureComponent {
  render() {
    const { children } = this.props;
    return <Provider store={store}>{children}</Provider>;
  }
}

export default App;
