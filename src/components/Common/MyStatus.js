import MyBase from './MyBase';
import {Tooltip} from 'antd';
import styles from './MyStatus.css';

class MyStatus extends MyBase {
    render(){
        return (
            <ul className={styles.myStatus}>
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
