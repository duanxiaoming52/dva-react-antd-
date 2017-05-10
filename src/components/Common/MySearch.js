import Base from './Base';
import styles from './MySearch.css';
import {Input,Icon} from 'antd';

class MySearch extends Base {
    constructor(props) {
        super(props);
        this.state = {value:'',suffix:props.suffix?props.suffix:'close'};
    }
    render(){
        return (
            <div className={styles.mySearch}>
                <Input.Search
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.changeHandler}
                    suffix={<Icon type={this.state.suffix} onClick={this.hideHandler} />}
                    addonAfter={<Icon type="search" onClick={()=>this.props.onSearch()} />}
                    onSearch={()=>this.props.onSearch()}
                />
            </div>
        );
    }
    changeHandler = (e)=>{
        this.setState({ value: e.target.value });
    }
    hideHandler = ()=>{
        this.setState({ value: '' });
        this.props.onHide();
    }
    values = ()=>{
        return this.state.value;
    }
}

export default MySearch;
