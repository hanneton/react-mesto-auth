import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";

function AddPlacePopup(props) {

    const { values, handleChange, setValues } = useForm({
        name: '',
        link: ''
    })
    console.log(values, handleChange, setValues)
    // const [cardName, setCardName] = React.useState('');
    // const [cardLink, setCardLink] = React.useState('');

    React.useEffect(() => {
        setValues({ name: '', link: '' })
        // setCardName('');
        // setCardLink('');
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard(values.name, values.link)
        // props.onAddCard(cardName, cardLink);
    }

    // function handleCardNameChange(e) {
    //     setCardName(e.target.value);
    // }

    // function handleCardLinkChange(e) {
    //     setCardLink(e.target.value);
    // }

    return (
        <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} name="add" title="Новое место" isOpen={props.isOpen}>
            <input onChange={handleChange} value={values.name} id="title-input" className="form__item form__item_el_title" name="name" placeholder="Название"
                type="text" required minLength="2" maxLength="30" />
            <span className="form__input-error title-input-error"></span>
            <input onChange={handleChange} value={values.link} id="src-input" className="form__item form__item_el_src" name="link"
                placeholder="Ссылка на картинку" type="url" required />
            <span className="form__input-error src-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;