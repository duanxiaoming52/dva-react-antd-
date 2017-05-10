import Base from '../Base';
import Actions from '../Actions';

class Action extends Base {
    state = {
        info:{},
        list:[],
        allDisplay:'block',
        showView:0
    };
    search(){
        const name = this.refs.mySearch.values();
        Actions.ajaxget('getList',{name},(result)=>{
            this.setState({list:result});
        });
    }
    getInfo(id){
        Actions.ajaxget('getInfo',{id},(result)=>{
            this.setState({info:result.data});
        })
    }
}

export default Action;