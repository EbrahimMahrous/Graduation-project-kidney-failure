// ** Styles

// ** Components
import InputElement from "../../components/ui/InputElement";
import InputPasswordElement from "../../components/ui/InputPasswordElement";
import HeaderAuth from "../../components/auth/HeaderAuth";
// ** Assets
import emailIcon from '../../assets/auth/signup/email.png'





export default function SignUp(){
    return (
        <>
            <div>
            <HeaderAuth
                headLine="تسجيل دخول"
            />
            <InputElement
                id="userEmail"
                name="البريد الالكتروني"
                type="email"
                value="ebraheemalimahrous000@gmail.com"
                placeholder="ادخل البريد الالكتروني"
                img={{ src: emailIcon, alt: 'working...' }}
                error= "error"
            />
            <br />
            <InputPasswordElement 
                id= 'userPassword' 
                name= 'كلمه المرور' 
                type= 'password' 
                value= "123456789"
                placeholder= 'ادخل كلمه المرور'
                img= {{ src: 'working...', alt: 'working...' }}
                error= "error" 
            />
            </div>
        </>
    );
}

