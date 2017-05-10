import { connect } from 'dva';
import IndexCom from '../components/Index/Index';
import MyStatus from '../components/Common/MyStatus';

function Index({dispatch,loading}) {
    const statusLists = [
        {name:'未分配',color:'blue',title:'状态未分配'},
        {name:'已分配',title:'状态已分配'},
    ];
    return (
        <div>
            <IndexCom />
            <MyStatus lists={statusLists} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        loading:state.loading
    };
}

export default connect(mapStateToProps)(Index);
