import React from 'react'
import us from './Users.module.css'

export const Users = (props) => {

    if(props.users.length === 0) {
        props.setusers([
            {
                id: 1,
                usersAva: require('../../assets/img/usersAvaAlexey.jpg'),
                followed: true,
                firstName: 'Алексей',
                lastName: 'Нэвэльный',
                status: 'Новичок',
                location: {county: 'Россия', city: 'Москва'}
            },
            {
                id: 2,
                usersAva: require('../../assets/img/usersAvaSonya.jpg'),
                followed: true,
                firstName: 'Соня',
                lastName: 'Миронова',
                status: 'Девочка-кокетка',
                location: {county: 'Россия', city: 'Челябинск'}
            },
            {
                id: 3,
                usersAva: require('../../assets/img/usersAvaMaksim.jpg'),
                followed: false,
                firstName: 'Максим',
                lastName: 'Горький',
                status: 'АУФ',
                location: {county: 'Россия', city: 'Санкт-Петербург'}
            },
            {
                id: 4,
                usersAva: require('../../assets/img/usersAvaAlexandr.jpg'),
                followed: true,
                firstName: 'Александр',
                lastName: 'Лукашенко',
                status: 'Старичок',
                location: {county: 'Беларусь', city: 'Минск'}
            },
            {
                id: 5,
                usersAva: require('../../assets/img/usersAvaPutin.jpg'),
                followed: true,
                firstName: 'Владимир',
                lastName: 'Путин',
                status: 'Безумно можно быть первым',
                location: {county: 'Россия', city: 'Кремль'}
            },

        ])
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={us.block}>
                    <div className={us.block__info}>
                        <img className={us.usersPhoto} alt={`logo`} src={u.usersAva}/>
                        <div className={us.info}>
                            <p>{u.firstName} {u.lastName}<br/> {u.status}</p>
                            <p>{u.location.county}, {u.location.city} </p>

                        </div>
                    </div>

                    <a href={'#f'} className={us.follow}>{u.followed
                        ? <p onClick={() => {
                            props.unfollow(u.id)
                        }}>unfollow</p>
                        : <p onClick={() => {
                            props.follow(u.id)
                        }}>follow</p>}
                    </a>
                </div>

            </div>)
        }
    </div>


}