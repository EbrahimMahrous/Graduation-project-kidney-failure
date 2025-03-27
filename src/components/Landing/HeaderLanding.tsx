// ** Style
import style from '../../styles/components/Landing/HeaderLanding.module.css';






interface HeaderLandingProps {
    title?: string,
    description: string,
    img?: {
        src: string,
        alt: string
    };
}

const HeaderLanding = ({ img, title, description }: HeaderLandingProps) => {
    return (
        <div className={style.header_landing_container}>
            <div className={style.header_landing_content}>
                {img && (
                    <img
                        src={img.src}
                        alt={img.alt || 'Landing header image'}
                        className={style.header_landing_image}
                    />
                )}
                {title && <h3>{title}</h3>}
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HeaderLanding;
