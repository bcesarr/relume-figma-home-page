import "./style.css";

export default function ButtonComponent({buttonName , switchButton}) {
    return (
        <button className={`button-${switchButton}`} type="button">{buttonName}</button>
    )
}