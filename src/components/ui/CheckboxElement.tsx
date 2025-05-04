// ** Styles
import style from "../../styles/components/ui/CheckboxElement.module.css";

interface ICheckboxElement {
  id: string;
  name: string;
  label: string;
  sublabel?: string;
  tail?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
  error?: string;
}

const CheckboxElement = ({
  id,
  name,
  label,
  sublabel,
  tail,
  checked = false,
  onChange,
  onClick,
  error,
}: ICheckboxElement) => {
  return (
    <>
      <div className={style.input_checkbox_content}>
        <div className={style.input_checkbox}>
          <input
            id={id}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor={id}>
            {label} {sublabel && <a href="/">{sublabel}</a>}
          </label>
        </div>
        {tail && <p onClick={onClick}>{tail}</p>}
      </div>
      <span className={style.error}>{error}</span>
    </>
  );
};

export default CheckboxElement;
