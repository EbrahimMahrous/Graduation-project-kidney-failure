// ** Styles
import style from '../../styles/pages/main/AllowAndNotAllowHome.module.css'
// ** Data
import { allowAndNotAllowData } from "../../data";
// ** Assets
import like from '../../assets/main/AllowAndNotAllow/like.png'
import disLike from '../../assets/main/AllowAndNotAllow/dislike.png'





export default function AllowAndNotAllow(){


    const localAllowAndNotAllowData = allowAndNotAllowData

    const allowFoodRender = localAllowAndNotAllowData.allow.food.map((item, index) => (<li key={index}>{item}</li>))
    const allowDrinksRender = localAllowAndNotAllowData.allow.drinks.map((item, index) => (<li key={index}>{item}</li>))
    const notAllowFoodRender = localAllowAndNotAllowData.notAllow.food.map((item, index) => (<li key={index}>{item}</li>))
    const notAllowDrinksRender = localAllowAndNotAllowData.notAllow.drinks.map((item, index) => (<li key={index}>{item}</li>))

    return (
        <>
            <div className= {style.allow_and_not_allow_container}>
                {/* Allow */}
                <div className= {style.allow_container}>
                    <div className= {style.allow_header}>
                        <h3>الاطعمه والمشروبات المسموح بها</h3>
                        <img src= {like} alt="" />
                    </div>
                    <div className= {style.allow_content}>
                        <ul>
                            <li><h4>الماكولات</h4></li>
                            {allowFoodRender}
                        </ul>
                        <ul>
                            <li><h4>المشروبات</h4></li>
                            {allowDrinksRender}
                        </ul>
                    </div>
                </div>
                {/* Not Allow */}
                <div className= {style.not_allow_container}>
                    <div className= {style.not_allow_header}>
                        <h3>الاطعمه والمشروبات الغير مسموح بها</h3>
                        <img src= {disLike} alt="" />
                    </div>
                    <div className= {style.not_allow_content}>
                        <ul>
                            <li><h4>الماكولات</h4></li>
                            {notAllowFoodRender}
                        </ul>
                        <ul>
                            <li><h4>المشروبات</h4></li>
                            {notAllowDrinksRender}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
}

