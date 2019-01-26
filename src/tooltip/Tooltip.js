import React from 'react';
import PropTypes from 'prop-types'
import TooltipPortal from './TooltipPortal'
import './Tooltip.scss';

const MARGIN_TOP = 10;
const WIDTH = 200;

class Tooltip extends React.PureComponent {
    static propTypes = {
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
        ]).isRequired,
    };

    state = {
        isVisible: false,
    };

    showTooltip = () => {
        const textRectangle = this.ref.getBoundingClientRect();

        this.setState({
            isVisible: true,
            style: {
                width: WIDTH,
                left: textRectangle.left + textRectangle.width / 2 - WIDTH / 2,
                top: textRectangle.height + textRectangle.top + MARGIN_TOP,
            },
        });
    };

    hideTooltip = () => {
        this.setState({ isVisible: false });
    };

    setRef = (ref) => {
        this.ref = ref
    };

    render() {
        return (
            <span
                onMouseOver={this.showTooltip}
                onMouseOut={this.hideTooltip}
                ref={this.setRef}
            >
                {this.props.children}

                {this.state.isVisible && (
                    <TooltipPortal>
                        <div
                            style={this.state.style}
                            className='tooltip'
                        >
                            {this.props.content}
                        </div>
                    </TooltipPortal>
                )}
            </span>
        );
    }
}

export default Tooltip;
