import React from 'react'
import us from './Users.module.css'
import userPhoto from '../../assets/img/usersAvaAlexey.jpg'
import classNames from 'classnames'
import {NavLink} from 'react-router-dom'


export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const setPaginationBtnClasses = (pageNumber, firstButton, lastButton) => {
        return classNames({
            [us.activeBtn]: now === pageNumber,
            [us.firstButton]: firstButton,
            [us.lastButton]: lastButton
        })
    }

    let now = props.currentPage

    return <div>
        <div className={us.numbers__button}>
            {

                pages.map(pageNumber => {
                    if ((pageNumber < now + 3 && pageNumber > now - 3) ||
                        pageNumber === 1 || pageNumber === pages.length
                    ) {
                        return <span key={pageNumber}
                                     className={setPaginationBtnClasses(pageNumber, now > pageNumber + 3, pageNumber === pages.length && (now < pageNumber - 4) )}
                                     onClick={() => { props.onPageChanged(pageNumber) }}
                        >{pageNumber}</span>
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
                        ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}

                            }>unfollow</button>
                        : <button disabled={props.followingInProgress
                            .some(id => id === u.id)} onClick={() => {props.follow(u.id)}

                            }>follow</button>}
                    </p>

                </div>

            </div>)
        }
    </div>
}