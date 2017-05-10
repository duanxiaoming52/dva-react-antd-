import {Component} from 'react';

class Base extends Component {
    constructor(props) {
        super(props);
        this.spinning = false;
    }
    showloading = (force)=>{
        this.spinning = true;
        if(force){
            this.forceUpdate();
        }
    }
    hideloading = (force)=>{
        this.spinning = false;
        if(force){
            this.forceUpdate();
        }
    }
    //在渲染前调用
    componentWillMount(){
        //console.log('Component WILL MOUNT!');
    }
    //在第一次渲染后调用
    componentDidMount(){
        //console.log('Component DID MOUNT!');
    }
    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(newProps){
        //console.log('Component WILL RECEIVE PROPS!');
    }
    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    shouldComponentUpdate(newProps, newState){
        //console.log('Component SHOULD UPDATE!');
        if(!empty(newProps.loading)){
            if(newProps.loading.global){
                return false;
            }else{
                this.hideloading();
                return true;
            }
        }
        else{
            return true;
        }
    }
    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate(newProps, newState){
        //console.log('Component WILL UPDATE!');
    }
    //在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate(prevProps, prevState){
        //console.log('Component DID UPDATE!');
    }
    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount(){
        //console.log('Component WILL UNMOUNT!');
    }
}

export default Base;
