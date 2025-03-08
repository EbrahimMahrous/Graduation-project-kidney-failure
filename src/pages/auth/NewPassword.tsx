// ** Styles
import style from '../../styles/pages/auth/NewPassword.module.css'
// ** Assets
import lockIcon from '../../assets/auth/newpassword/lock-icon.png'
// ** Hooks
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// ** Components
import HeaderAuth from '../../components/auth/HeaderAuth';
import InputPasswordElement from '../../components/ui/InputPasswordElement';



export default function NewPassword(){
    // ** Defaults
    const navigate = useNavigate()

    // ** States
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // ** Handlers
    const doneHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/u/done')
    }

    const changeNewPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value)
    }
    const changeConfirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
    }

    
    return (
        <>
            <div className= {style.newpassword_container}>
                <div className= {style.newpassword_content}>
                    <HeaderAuth
                        img={{src: lockIcon, alt: 'lock Icon'}}
                        headLine='تغير كلمه مرور جديده'
                        p='يجب ان تكون كلمه المرور الجديده مختلفه عن كلمه المرور التي استخدمتها سابقاً'
                    />
                    {/* Form */}
                    <form className= {style.newpassword_form} action="" onSubmit={doneHandler}>
                        <InputPasswordElement 
                            id= 'newPassword' 
                            name= 'كلمه المرور' 
                            type= 'password' 
                            value= {newPassword}
                            onChange={changeNewPasswordHandler}
                            placeholder= 'ادخل كلمه المرور'
                            error= "يرجى إدخال البريد الإلكتروني بشكل صحيح" 
                        />
                        <br />
                        <InputPasswordElement 
                            id= 'confirmPassword' 
                            name= 'تأكيد كلمة المرور' 
                            type= 'password' 
                            value= {confirmPassword}
                            onChange={changeConfirmPasswordHandler}
                            placeholder= 'أعد ادخل كلمة المرور'
                            error= "يرجى إدخال البريد الإلكتروني بشكل صحيح" 
                        />
                       <br />
                       <button type="submit">تغير كلمه المرور</button>
                    </form>
                </div>
            </div>
        </>
    );
}

