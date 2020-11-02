import React from 'react'
import preloader from '../../assets/img/loading.gif'

export const Preloader = (props, isFetching) => {
    return (

                 <img alt={'Загрузка...'} src={preloader} width='50px' height='50px' />

    )
}