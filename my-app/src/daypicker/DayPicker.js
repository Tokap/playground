import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DayPickComponent extends React.Component {
    render() {
        return (
            <div>
                <DayPicker />
            </div>
        );
    }
}

export default DayPickComponent;