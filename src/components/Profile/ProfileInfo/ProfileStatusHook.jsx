import React, {useEffect, useState} from 'react'
import c from './ProfileInfo.module.css'



export const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

        return (
            <div>
                {!editMode &&
                    <div className={c.span__status}>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Люблю пельмешки'}
                    </span>
                    </div>
                }
                {editMode &&
                    <div className={c.status__input}>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        type="text"
                        value={status}
                    />
                    </div>
                }
            </div>
        )

}
