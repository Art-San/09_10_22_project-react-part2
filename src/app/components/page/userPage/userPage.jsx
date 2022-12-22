import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import UserCard from '../../ui/userCard'
import QualitiesCard from '../../ui/qualitiesCard'
import MeetingsCard from '../../ui/meetingsCard'
import Comments from '../../ui/comments'
// Методичка к уроку
// https://vladilen.notion.site/cf4d82976c8a44d2a3fd8b57ad20b287

// Файлы итогового проекта:
// https://drive.google.com/drive/folders/1QBUI2M-h75WMbJsgO7ze8pdSIjz0srdJ

// Вопрос #1
// Почему мы вынесли UserCard, QualitiesCard, MeetingsCard
// и Comments в отдельные компоненты, а не оставили все в userPage.jsx?

// Вопрос #2
// Почему функцию handleRemoveComment() мы определили в comments.jsx,
// а не в comment.jsx?

// Вопрос #3
// Для чего в компоненте addCommentForm.jsx мы вынесли начальное состояние
// data в переменную initialData?

// Верные ответы: открыть
// https://vladilen.notion.site/2-2-53c551cbd56c4bbb8faf770dab2b710d

const UserPage = ({ userId }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    }, [])
    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        )
    } else {
        return <h1>Loading</h1>
    }
}

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage
