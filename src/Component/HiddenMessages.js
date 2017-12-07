import  React, {Component} from 'react'

export  default class HiddenMessages extends  Component{
    constructor(props) {
        super(props)


        this.state = {
            messages: [
                "The crow crows after midnight",
                "Bring a watch and dark clothes to the spot",
                "Jericho jericho Go"
            ],
            showing: -1,
        }
    }


    componentWillMount(){
        this.interval = setInterval(()=>{
            this.setState(prevState =>{
                let {showing, messages} = prevState
                showing = (++showing >= messages.length) ? -1 : showing
                return showing
            })
        },1000)
    }


    componentWillUnmount(){
        clearInterval(this.interval)
    }


    render(){
        const {showing, messages} = this.state

        return(
            <div className="hidden-messages">
                {messages.map((message,i)=>
                    <HiddenMessage key={i} hide={(i !== showing)}>{message}</HiddenMessage>
                )}
            </div>
        )
    }
}


class HiddenMessage extends Component {
    constructor(props){
        super(props)
        this.state ={
            hidden: (props.hide) ? props.hide : true
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({hidden: nextProps.hide})
    }

    render(){
        const {children } = this.props
        const {hidden}  = this.state
        return(
            <p>
                {(hidden) ?
                    children.replace(/[a-zA-Z0-9]/g, "x"): children
                }
            </p>
        )
    }
}