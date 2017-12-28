import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <div>
                <i  className={this.props.icon.valueOf()}
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                />
            </div>
        );
    }
}

export default Icon;