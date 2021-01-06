import React from 'react'
import c from './ProfileInfo.module.css'



export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={c.span__status}>
                    <span
                        onDoubleClick={this.activateEditMode}>{this.props.status || '----'}
                    </span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={c.status__input}>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={this.state.editMode === true}
                        onBlur={this.deactivateEditMode}
                        type="text"
                        value={this.state.status}
                    />
                    </div>
                }
            </div>
        )
    }

}
