import React from 'react'
import Dropzone from 'react-dropzone-uploader'
import { CommonButton } from '../Common/CommonButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export const CommonImageField = ({ name, label, value, setFile }) => {
    const getUploadParams = () => { return { url: 'https://httpbin.org/post' } }

    const handleChangeStatus = ({ meta }, status) => {
        if (status === 'headers_received') {
            setFile(meta.name)
        }
    }

    const handlerGallery = (e) => {
        e.preventDefault()
    }

    return (
        <div className="bd-inputfield">
            <label htmlFor={name}>{label}</label>
            <div className="bd-imagefield">
                <div className={`bda-imagefield__current ${name}`}>
                    {(value) ? <img src={value} alt={name} /> : <FontAwesomeIcon icon={faImage} />}
                </div>
                <div className="bd-imagefield__upload">
                    <Dropzone
                        maxFiles={1}
                        multiple={false}
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        inputContent="Перетащите изображение"
                        accept="image/*"
                    />
                    <CommonButton
                        text="Выбрать из галереи"
                        type="accept"
                        handler={handlerGallery}
                    />
                </div>
            </div>
        </div>
    )
}