import './AddCategoryForm.css';
import { useRef } from 'react';

function AddCategoryForm(props) {
    const nameInputRef = useRef();
    const categoryInputRef = useRef();
    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;
        const category = {
            name: nameValue,
            category: categoryValue
        }
        props.onAddCategory(category);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
            <label>Vali kategooria liik</label><br />

            <select required ref={categoryInputRef}>
                <option value="BASIC" selected="selected">BASIC</option>
                <option value="DELUXE">DELUXE</option>
                <option value="PREMIUM">PREMIUM</option>
            </select><br />

            <button>Sisesta uus kategooria</button>
        </form>
    );
}

export default AddCategoryForm;