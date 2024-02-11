// Задача 1: Создание компонента кнопки

// Условие: Создайте простой компонент кнопки (Button), который принимает текст кнопки в качестве пропсов и отображает этот текст внутри кнопки.

type Props = {
    buttonName:string
}

function Button (props:Props){
    return (
        <button>
        {props.buttonName}
        </button>
    )
}

export default Button;