import React, { useContext, useEffect, useState } from 'react'

export const ReminderContext = React.createContext()
export const useReminderContext = () => useContext(ReminderContext)


const mockupReminderList = [
    { title: "Test 1", isDone: false, isFavorite: true },
    { title: "Test 2", isDone: true, isFavorite: false },
    { title: "Test 3", isDone: false, isFavorite: true }
]


export const ReminderController = ({ children }) => {

    const [taskInput, setTaskInput] = useState("")
    const [reminderList, setReminderList] = useState(mockupReminderList)
    const [isEditingIndex, setEditingIndex] = useState(-1)


    const [totalReminder, setTotalReminder] = useState(0)
    const [totalFavorite, setTotalFavorite] = useState(0)
    const [totalDone, setTotalDone] = useState(0)


    useEffect(() => {
        setTotalReminder(reminderList.length)
        setTotalFavorite(
            reminderList.filter(m => m.isFavorite).length
        )
        setTotalDone(
            reminderList.filter(m => m.isDone).length
        )
    }, [reminderList])


    const onSave = () => {
        if (!taskInput) return;
        if (isEditingIndex === -1) {
            setReminderList([
            ...reminderList,
            { title: taskInput , isDone: false , isFavorite: false}
        ])
        } else {
            let tmp = reminderList
            tmp[isEditingIndex] = {
                ...tmp[isEditingIndex],
                title: taskInput
            }
        }
        setTaskInput("")
    }

    const onDelete = (item) => {
        setReminderList([
            ...reminderList.filter(m => m !== item)
        ])
    }

    const onEdit = (item) => {
        setTaskInput(item.title)
        const findEditingIndex = reminderList.findIndex(m => m === item)
        setEditingIndex(findEditingIndex)
    }


    const onClickFavorite = (item) => {
        const findEditingIndex = reminderList.findIndex(m => m === item)
        let tmp = reminderList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isFavorite: !tmp[findEditingIndex].isFavorite
        }
        setReminderList([...tmp])
    }

    const onClickDone = (item) => {
        const findEditingIndex = reminderList.findIndex(m => m === item)
        let tmp = reminderList
        tmp[findEditingIndex] = {
            ...tmp[findEditingIndex],
            isDone: !tmp[findEditingIndex].isDone
        }
        setReminderList([...tmp])
    }

    return (
        <ReminderContext.Provider value={{
            taskInput, 
            reminderList , 
            totalReminder, 
            totalFavorite,
            totalDone,

            setTaskInput, 
            onSave , 
            onDelete , 
            onEdit , 
            onClickFavorite, 
            onClickDone ,
            
        }}>
            {children}
        </ReminderContext.Provider>
    )
}