// ** Styles
import style from '../../styles/pages/auth/Done.module.css'
// ** Assets
import doneIcon from '../../assets/auth/done/done.png'
import { useNavigate } from 'react-router-dom';




export default function Done(){
    // ** Defaults
    const navigate = useNavigate()
    const signInHandler = ()=>{navigate('/u/sign-in')};
    return (
        <>
            <div className= {style.done_container}>
                <div className= {style.done_content}>
                    <div className= {style.done_title}>
                        <img src= {doneIcon} alt="Done Icon" />
                        <h3>اعاده تعين كلمه المرور </h3>
                        <p>لقد تم تعير كلمه المرور بنجاح انقر لتسجيل الدخول</p>
                    </div>
                    <button onClick={signInHandler}>تسجيل الدخول</button>
                </div>
            </div>
        </>
    );
}
