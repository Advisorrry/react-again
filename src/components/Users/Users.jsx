import randomPhoto1 from '../../assets/randomPhotos/randomPhoto1.jpg'
import randomPhoto2 from '../../assets/randomPhotos/randomPhoto2.jpg'
import randomPhoto3 from '../../assets/randomPhotos/randomPhoto3.jpg'
import randomPhoto4 from '../../assets/randomPhotos/randomPhoto4.jpg'
import randomPhoto5 from '../../assets/randomPhotos/randomPhoto5.jpg'
import randomPhoto6 from '../../assets/randomPhotos/randomPhoto6.jpg'
import randomPhoto7 from '../../assets/randomPhotos/randomPhoto7.jpg'
import randomPhoto8 from '../../assets/randomPhotos/randomPhoto8.jpg'
import randomPhoto9 from '../../assets/randomPhotos/randomPhoto9.jpg'
import randomPhoto10 from '../../assets/randomPhotos/randomPhoto10.jpg'



import React from 'react'
import us from './Users.module.css'
import classNames from 'classnames'
import {NavLink} from 'react-router-dom'


export const Users = (props) => {

    let randomPhotos = [
        randomPhoto1,randomPhoto6,
        randomPhoto2,randomPhoto7,
        randomPhoto3,randomPhoto8,
        randomPhoto4,randomPhoto9,
        randomPhoto5,randomPhoto10,
    ]

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }


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
                         <NavLink to={'/profile/' + u.id }><img className={us.usersPhoto} alt={`logo`} src={u.photos.small != null ? u.photos.small : randomPhotos[getRandomInt(10)]  }/> </NavLink>
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