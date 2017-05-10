import Base from '../Common/Base';
import { connect } from 'dva';
import styles from './Index.css';
import MySearch from '../Common/MySearch';

class Index extends Base {
    render(){
        return (
            <div className={styles.normal}>
                <MySearch />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Index);
