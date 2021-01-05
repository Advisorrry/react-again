import React from 'react'
import c from './ProfileInfo.module.css'



export class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={c.span__status}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={c.status__input}>
                    <input autoFocus={this.state.editMode === true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }

}
