// ** Styles
import style from '../../styles/components/ui/Modal.module.css'
// ** Assets
import uploadIcon from '../../assets/main/Modal/upload.png'
import scanResult from '../../assets/main/Modal/scan-result.png'
// import uploadedIcon from '../../assets/main/Modal/uploaded.png'
// import closeIcon from '../../assets/main/Modal/close.png'
import deleteIcon from '../../assets/main/Modal/action.png'
import downloadIcon from '../../assets/main/Modal/arrow-down.png'
import shareIcon from '../../assets/main/Modal/share.png'
// Hooks
import { useState } from 'react';
// Components

import ButtonElement from '../../components/ui/ButtonElement';


// ** Modal Component
interface ModalProps {
    onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
    // ** Hooks
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [dragOver, setDragOver] = useState(false)
    const [step, setStep] = useState(1)

    // ** Handle File Selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file) setSelectedFile(file)
    }

    // ** Handle drag events
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(true)
    }

    const handleDragLeave = () => setDragOver(false)

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragOver(false)
        const file = e.dataTransfer.files?.[0]
        if (file) setSelectedFile(file)
    }

    // ** Remove Selected File
    const handleRemoveFile = () => setSelectedFile(null)

    // ** Move to Next Step
    const handleNext = () => {
        if(selectedFile){
            setStep(2)
        }
    }

    return (
        <>
            <div className={style.modal_container_overlay} onClick={onClose}>
                <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
                    {step === 1 ? (
                    <>
                        {/* Upload Step */}
                        <h2>تحميل الوسائط</h2>
                        <p>ارفع صور الأشعة المقطعية لتحصل على تحليل سريع لحالتك الصحية</p>

                        {/* Drag & Drop Area */}
                        <div
                            className={`${style.box_upload_content} ${dragOver ? style.drag_active : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <img 
                                src= {selectedFile && selectedFile.type.startsWith('image/') ? URL.createObjectURL(selectedFile): uploadIcon} 
                                alt="Upload" 
                                className={style.upload_file_photo}
                            />

                            <p>اسحب ملفاتك لبدأ التحميل</p>
                            <h6>او</h6>
                            <label>
                                تصفح الملفات
                                <input type="file" onChange={handleFileChange} hidden />
                            </label>
                        </div>

                        <p>يدعم فقط jpg,svg,png,zip</p>

                         {/* Uploaded File at Bottom */}
                        {selectedFile && (
                            <div className={style.file_uploaded_container}>
                                <p>{selectedFile?.name}</p>
                                <button 
                                    onClick={handleRemoveFile}
                                    className={style.file_delete_button}
                                >
                                    <img src= {deleteIcon} alt="Deleted Button" />
                                </button>
                            </div>
                        )}

                        {/* Buttons */}

                        <div className={style.modal_buttons}>
                            <ButtonElement
                                className={style.cancel_button}
                                txt='إلغاء'
                                onClick={onClose}
                                variant='secondary'
                            />
                            <ButtonElement
                                className={style.next_button}
                                txt='التالي'
                                onClick={handleNext}
                            />
                        </div>
                    </>
                    
                ) : (
                    <>
                        {/* Result Step */}
                        <div className={style.result_container}>
                            <h3 className={style.result_title}>نتيجه الأشعه</h3>
                            <img src= {scanResult} alt="Scan Result" className={style.result_image} />
                            <p className={style.result_text}>يوجد ورم</p>

                            <div className={style.result_buttons}>
                                <ButtonElement
                                    txt='تنزيل النتيجه'
                                    imgButton= {downloadIcon}
                                />
                                <ButtonElement
                                    txt='مشاركه النتيجه'
                                    variant='secondary'
                                    imgButton= {shareIcon}
                                />
                            </div>
                        </div>
                    </>
                )}
                </div>
            </div>
        </>
    )
}