import { StateCreator } from "zustand";

type Notification = {
    text: string
    error: boolean
    show: boolean
}
export type NotificationSliceType = {
    notification: Notification,
    //showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void, ambos parámetros obligatorios
    //hacer opcional error y establecerlo en false por defecto
    showNotification: (payload: Pick<Notification, 'text'> & Partial<Pick<Notification, 'error'>>) => void,
    closeNotification: () => void
}

export const createNotificationsSlice: StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: ({ text, error = false }) => {
        set({
            notification: {
                text,
                error,
                show: true
            }
        })
        setTimeout(() => {
            get().closeNotification()
        }, 3500)
    },
    closeNotification: () => {
        set({ notification: { ...get().notification, show: false } })
    }
})