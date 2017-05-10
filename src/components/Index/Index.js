import Action from './Action';
import styles from './Index.css';
import {Button,Icon} from 'antd';
import MySearch from '../Common/MySearch';
import MyTable from '../Common/MyTable';

class Index extends Action {
    componentWillMount(){
        //表的设置
        this.columns = [{
            key: 'id',
            width:30,
            render:(text,record,index)=>(<span>{index+1}</span>)
        },{
            dataIndex: 'name',
            key: 'name',
            width:60,
            render:(text)=>{
                return <div className="over" style={{width:'60px'}}>{text}</div>
            }
        },{
            dataIndex: 'description',
            key: 'description',
        },{
            width:40,
            render: (text, record) => (
                <Button type="primary" size="small" onClick={()=>this.viewHandler(record.id)}>查看</Button>
            ),
        }];
    }
    componentDidMount(){
        this.search();
    }
    render(){
        return (
            <div className={styles.normal}>
                <MySearch 
                    ref="mySearch"
                    placeholder="按名称查找"
                    onSearch={this.searchHandler}
                    onHide={this.hideHandler}
                />
                <div className="content" style={{display:this.state.allDisplay}}>
                    {
                        this.state.showView == 1?
                            <div>
                                <div className="back border"><a onClick={this.backHandler}><Icon type="left" />返回列表</a></div>
                                <div className="view border">
                                    <h3>{this.state.info.name}</h3>
                                    <p>{this.state.info.description}</p>
                                </div>
                            </div>
                        :
                            <div className="lists border">
                                <MyTable 
                                    rowKey="id"
                                    columns={this.columns}
                                    dataSource={this.state.list}
                                    pagination={false}
                                    showHeader={false}
                                    size="small"
                                    onRowClick={this.selectHandler}
                                />
                            </div>
                    }
                </div>
            </div>
        );
    }
    viewHandler = (id)=>{
        this.setState({showView:1},function(){
            this.getInfo(id);
        });
    }
    backHandler = ()=>{
        this.setState({showView:0});
    }
    searchHandler = ()=>{
        this.setState({allDisplay:'block',showView:0},function(){
            this.search();
        });
    }
    hideHandler = ()=>{
        this.setState({allDisplay:'none'});
    }
    selectHandler = ()=>{
        console.log('selectHandler');
    }
}

export default Index;
