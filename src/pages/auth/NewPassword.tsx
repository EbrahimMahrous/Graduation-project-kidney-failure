// ** Styles
import style from '../../styles/pages/auth/NewPassword.module.css'
// ** Assets
import lockIcon from '../../assets/auth/newpassword/lock-icon.png'
// ** Hooks
import { useNavigate } from 'react-router-dom';
// ** Components
import HeaderAuth from '../../components/auth/HeaderAuth';
import InputPasswordElement from '../../components/ui/InputPasswordElement';


export default function NewPassword(){
    // ** Defaults
    const navigate = useNavigate()
    const doneHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/u/done')
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
                            value= "123456789"
                            placeholder= 'ادخل كلمه المرور'
                            error= "error" 
                        />
                        <br />
                        <InputPasswordElement 
                            id= 'confirmPassword' 
                            name= 'تأكيد كلمة المرور' 
                            type= 'password' 
                            value= "123456789"
                            placeholder= 'أعد ادخل كلمة المرور'
                            error= "error" 
                        />
                       <br />
                       <button type="submit">تغير كلمه المرور</button>
                    </form>
                </div>
            </div>
        </>
    );
}

