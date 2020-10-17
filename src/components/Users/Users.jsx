import React from 'react'
import us from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/usersAvaAlexey.jpg'
import classNames from 'classnames'

export class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
    })
}

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items)

            })
    }



    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

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

        let now = this.props.currentPage


        return <div>
            <div className={us.numbers__button}>
                {

                    pages.map(p => {
                        if ((p < now + 3 && p > now - 3) ||
                            p === 1 || p === pages.length
                        ) {

                            return <span key={p}
                                         className={setPaginationBtnClasses(p, now > p + 3, p === pages.length && (now < p - 4) )}
                                         onClick={() => { this.onPageChanged(p) }}
                            >{p}</span>
                        } return ''

                    })}
            </div>
            {

                this.props.users.map(u => <div key={u.id}>
                    <div className={us.block}>
                        <div className={us.block__info}>
                            <img className={us.usersPhoto} alt={`logo`} src={u.photos.small != null ? u.photos.small : userPhoto  }/>
                            <div className={us.info}>
                                <p>{`Имя: ${u.name}`}<br/> {u.status != null ? u.status : `Люблю пельмешки`}</p>
                                <p>{'Прекрасная страна'}, {'Лучший город'} </p>

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