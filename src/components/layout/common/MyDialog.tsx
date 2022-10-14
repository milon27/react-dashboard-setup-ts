import React from 'react'
import { Modal } from '@milon27/react-modal'
import { toast } from 'react-toastify'
import Button from '../form/Button'

interface IMyDialog {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

// this is a sample dialog
export default function MyDialog({ show, setShow }: IMyDialog) {

    return (<Modal
        show={show}
        onClose={() => {
            setShow(false)
        }}
        title='Dialog Title'
        footer={<>
            <Button type='outline' onClick={() => {
                setShow(false)
            }}>Ok</Button>
            <Button onClick={() => {
                toast("Copied")
                setShow(false)
            }}>Copy</Button>
        </>}
    >
        <div className='max-w-md'>
            dialog content
        </div>
    </Modal>)
}
