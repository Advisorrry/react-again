import React from 'react'
import us from './Users.module.css'
import userPhoto from '../../assets/img/usersAvaAlexey.jpg'
import classNames from 'classnames'
import {NavLink} from 'react-router-dom'
import {getFollow, getUnFollow} from '../../api/api'


export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const setPaginationBtnClasses = (p, firstButton, lastButton) => {
        return classNames({
            [us.activeBtn]: now === p,
            [us.firstButton]: firstButton,
            [us.lastButton]: lastButton
        })
    }

    let now = props.currentPage

    return <div>
        <div className={us.numbers__button}>
            {

                pages.map(p => {
                    if ((p < now + 3 && p > now - 3) ||
                        p === 1 || p === pages.length
                    ) {

                        return <span key={p}
                                     className={setPaginationBtnClasses(p, now > p + 3, p === pages.length && (now < p - 4) )}
                                     onClick={() => { props.onPageChanged(p) }}
                        >{p}</span>
                    } return ''

                })}
        </div>
        {

            props.users.map(u => <div key={u.id}>
                <div className={us.block}>
                    <div className={us.block__info}>
                         <NavLink to={'/profile/' + u.id }><img className={us.usersPhoto} alt={`logo`} src={u.photos.small != null ? u.photos.small : userPhoto  }/> </NavLink>
                        <div className={us.info}>
                            <p>{`Имя: ${u.name}`}<br/> {u.status != null ? u.status : `Люблю пельмешки`}</p>
                            <p>{'Прекрасная страна'}, {'Лучший город'} </p>

                        </div>
                    </div>


                    <p className={us.follow}>{u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                           getUnFollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                               props.toggleFollowingProgress(false, u.id)
                                })

                        }}>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            getFollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                props.toggleFollowingProgress(false, u.id)
                                })

                        }}>follow</button>}
                    </p>

                </div>

            </div>)
        }
    </div>
}