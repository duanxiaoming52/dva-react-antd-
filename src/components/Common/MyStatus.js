import Base from './Base';
import {Tooltip} from 'antd';
import styles from './Status.css';

class MyStatus extends Base {
    render(){
        return (
            <ul className={styles.Status}>
            {
                this.props.lists.map(function(item,index){
                    return (
                        <li className={item.color} key={index}>
                            <Tooltip placement="topLeft" title={item.title?item.title:''}>
                                <i className="iconfont icon-circle"></i>{item.name}
                            </Tooltip>
                        </li>
                    );
                })
            }
            </ul>
        );
    }
}

export default MyStatus;
