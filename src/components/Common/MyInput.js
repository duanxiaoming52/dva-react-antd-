import MyBase from './MyBase';
import {Input,Icon} from 'antd';

class MyInput extends MyBase {
    constructor(props) {
        super(props);
        this.state = {value:''};
    }
    componentWillReceiveProps(nextProps){
        const {value} = nextProps;
        this.state.value = value;
    }
    render(){
        let suffix = '';
        if(!empty(this.state.value)){
            suffix = <Icon type="close-circle" onClick={this.hideHandler} />;
        }
        return (
            <Input
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.changeHandler}
                suffix={suffix}
            />
        );
    }

    changeHandler = (e)=>{
        this.setState({value:e.target.value});
        if(!empty(this.props.onChange)){
            this.props.onChange(e.target.value);
        }
    }

    hideHandler = ()=>{
        this.setState({value:''});
        if(!empty(this.props.onChange)){
            this.props.onChange('');
        }
    }

    values = ()=>{
        return this.state.value;
    }
}

export default MyInput;
