import React, { useState } from 'react'
import { useEffect } from 'react';
import './UserTable.css'
import { useTranslation } from 'react-i18next';
const UserTable = (props) => {
    const { t } = useTranslation();
    const USERS = props.users
    // the value of the search field 
    const [name, setName] = useState('');
    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);

    //SEARCH
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(USERS);
        }
        (setName)(keyword);
    };
    useEffect(() => {
        setFoundUsers(USERS)
    }, [USERS])



    return (
        <table className='user-table'>
            <input
                type="search"
                value={name}
                onChange={filter}
                className="filter-input"
                placeholder="Search"
            />
            <tbody className='table-view'>
                {foundUsers.length > 0 ?
                    (
                        foundUsers.map((user, index) => (
                            <li key={user.id} className="table-row-table">
                                <div className="col col-1 col-table" >{index + 1}</div>
                                <div className="col col-2 col-table">{user.username}</div>
                                <div className="col col-2 col-table">{user.name}</div>
                                <div className="col col-4 btn-table">
                                    <button className="btn-edit"
                                        onClick={() => {
                                            props.editUser(user)
                                        }}
                                    > {t('Accounts.edit')}
                                    </button>
                                    <button className="btn-delete"
                                        onClick={() => props.deleteUser(user.id)}
                                    >{t('Accounts.delete')}
                                    </button>
                                </div>
                            </li>
                        ))
                    )
                    :
                    (
                        <tr>
                            <td className='no-user' colSpan={3}>User not found !!</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable