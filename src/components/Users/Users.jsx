import React from 'react'
import us from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/usersAvaAlexey.jpg'

export class Users extends React.Component{
    constructor(props) {
        super(props)

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setusers(response.data.items)
        })
    }



    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={us.block}>
                        <div className={us.block__info}>
                            <img className={us.usersPhoto} alt={`logo`} src={u.photos.small != null ? u.photos.small : userPhoto  }/>
                            <div className={us.info}>
                                <p>{u.name}<br/> {u.status}</p>
                                <p>{'u.location.county'}, {'u.location.city'} </p>

                            </div>
                        </div>

                        <a href={'#f'} className={us.follow}>{u.followed
                            ? <p onClick={() => {
                                this.props.unfollow(u.id)
                            }}>unfollow</p>
                            : <p onClick={() => {
                                this.props.follow(u.id)
                            }}>follow</p>}
                        </a>
                    </div>

                </div>)
            }
        </div>

    }

}