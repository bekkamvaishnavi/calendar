import React, { Component, PropTypes } from 'react';
import {DatePicker, DatePickerInput} from 'rc-datepicker';
//import styles from '../../../scss/datepicker.scss';

var title='Title Goes here', body='<div>Content in Motd body Content in Motd body Content in Motd body Content in Motd body Content in Motd body<a target="abc" href="http://www.google.com">Google</a></div>'; //for demo
//var title = undefined,  body = undefined; // for testin
export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'showTurboMsg': props.showTurboMsg ? props.showTurboMsg : true,
            'turboMsg': props.turboMsg ? props.turboMsg :'Turbo Message Goes here.',
            'date': props.date ? props.date : '2016-02-07',
            'FIColor': '#6BA2B7'
        };
    }
    onChange (jsDate, dateString){
        console.log(jsDate);
    }

    onClick(evt){
        console.log(evt);
        let targetClass = evt.target.getAttribute('class');
        if(targetClass.indexOf('button-left') >=0 || targetClass.indexOf('button-right') >=0){
            this.setState({
                'showTurboMsg': !this.state.showTurboMsg
            });

        }
    }
    hideExtraRow(index){
        var row = document.getElementsByClassName('react-datepicker-row')[index];
        var parent = document.getElementsByClassName('react-datepicker-body');
        var activeRows = row.getElementsByClassName('current');
        if(activeRows.length == 0){
            row.style.display = 'none';
            return true;
        }
        row.style.display = 'block';

    }
    setFIColors(){
        document.getElementsByClassName('button-left')[0].style.color = this.state.FIColor;
        document.getElementsByClassName('button-right')[0].style.color = this.state.FIColor;
        document.getElementsByClassName('selected')[0].style.borderColor = this.state.FIColor;

    }
    cleanUpUI(evt){
        console.log('cleanup UI');
        //removing extra row by checking the current class in last two rows
        var datePickerRows = document.getElementsByClassName('react-datepicker-row');

        if(this.hideExtraRow(datePickerRows.length-1)){ //n-1 row
            this.hideExtraRow(datePickerRows.length-2)
        }


    }

    render() {
        var turboStyle = {'color': this.state.FIColor};
        return (
            <div className="datePickerWidget" onClick={this.onClick.bind(this)}>
    <DatePicker value={this.state.date} onChange={this.onChange} />

        {(this.state.showTurboMsg ?
        <div className="trubro-tax" style={turboStyle}>
            <p style={turboStyle}>{this.state.turboMsg}</p>
        </div>
        : null )}

    </div>


    );
    }

    componentDidMount() {
        this.cleanUpUI();
        this.setFIColors();
    }

    componentDidUpdate(){
        this.cleanUpUI();
        this.setFIColors();
    }


}


// React.render(
//     <Modd title={title} body={body}/>,
//     document.getElementById('sdp-static-statements-app')
//     );