// ** Styles
import style from '../../styles/components/auth/HeaderAuth.module.css'
// ** Interface
import { IHeaderAuth } from '../../interfaces';





const HeaderAuth = ({img, headLine, p, subTitle} : IHeaderAuth) => {
    return (
        <>
            <div className= {style.header_auth_title}>
                <img src={img?.src} alt= {img?.alt} />
                <h3>{headLine}</h3>
                <p>{p}</p>
                <h4>{subTitle}</h4>
            </div>
        </>
    );
}

export default HeaderAuth;
