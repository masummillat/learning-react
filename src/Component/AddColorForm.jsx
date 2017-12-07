import React,{Component} from  'react';
import propTypes from 'prop-types';

export  default  class AddColorForm extends  Component{

    constructor(props){
        super(props)
        this.submit = this.submit.bind(this);

    }

    submit(e){
    const { _title, _color } = this.refs
        e.preventDefault();

            this.props.onNewColor(_title.value,_color.value);

        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render(){
       const {_title,_color}  = this.props;
        return(
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title ..." required/>
                <input ref="_color" type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onNewColor:propTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f => f
}
AddColorForm.defaultProps = {
    _title:'White',
    _color:'#ffffff'
}