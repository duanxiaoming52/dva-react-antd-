import MyBase from './MyBase';
import styles from './MyTable.css';
import {Table} from 'antd';

class Mytable extends MyBase {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Table
                className={styles.myTable}
                rowKey={this.props.rowKey}
                columns={this.props.columns}
                dataSource={this.props.dataSource}
                pagination={this.props.pagination}
                showHeader={this.props.showHeader}
                size={this.props.size}
                onRowClick={this.props.onRowClick}
            />
        );
    }
}

export default Mytable;
