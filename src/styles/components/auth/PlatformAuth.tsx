// ** Styles
import style from '../../components/auth/PlatformAuth.module.css'
// Assets
import google from '../../../assets/components/auth/platformauth/google.png'
import facebook from '../../../assets/components/auth/platformauth/facebook.png'
import apple from '../../../assets/components/auth/platformauth/apple.png'
interface IPlatformAuth {
    title: string,
    tail: string,
    subTail: string,
    onSubTailClick: () => void
}

const PlatformAuth = ({title, tail, subTail, onSubTailClick} : IPlatformAuth) => {
  return (
    <>
      <div className={style.platform_auth_container}>
        <p>{title}</p>
        <div className={style.platform_auth_icons}>
          <img src={google} alt="google icon" />
          <img src={facebook} alt="facebook icon" />
          <img src={apple} alt="apple icon" />
        </div>
        <p className= {style.tail}>
          {tail}
          <span onClick={onSubTailClick}>{subTail}</span>
        </p>
      </div>
    </>
  );
};

export default PlatformAuth;
