import React from 'react';
import Tooltip from './tooltip/Tooltip';
import tooltipImg from './tooltip.png';

class App extends React.Component {
    tooltipHtmlContent = (
        <div>
            Tooltip with HTML and image <img src={tooltipImg} alt='tooltip'/>
        </div>
    );

    render() {
        return (
            <div className='grid-container'>
                <div className='grid-item'>
                    <Tooltip content={this.tooltipHtmlContent}>
                        <button>Button</button>
                    </Tooltip>
                </div>
                <div className='grid-item'>
                    <Tooltip content='Tooltip with text'>
                        Text
                    </Tooltip>
                </div>
                <div className='grid-item'>
                    <Tooltip content='Tooltip with icon'>
                        <span className='icon icon-tooltip'/>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default App;
