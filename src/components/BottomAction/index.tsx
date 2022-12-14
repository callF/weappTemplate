import taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import styles from './index.module.less';

interface IProps {
  /** 按钮的文案 */
  text: string;
  /** 点击按钮的回调 */
  onClick: () => void;
  /** 按钮是否置灰禁用 */
  disabled?: boolean;
}

const BottomAction: taro.FC<IProps> = props => {
  const { text, onClick, disabled = false } = props;

  return (
    <View className={styles.wrapper}>
      <Button className={styles.btn} onClick={onClick} disabled={disabled}>
        {text}
      </Button>
    </View>
  );
};

export default BottomAction;
