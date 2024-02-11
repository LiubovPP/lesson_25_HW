// Задача: Создание компонента заголовка

// Условие: Напишите компонент заголовка (Header), который принимает текст заголовка в качестве пропсов и выводит его с использованием тега h1.

type Props = {
    headerText:string
}

function Header (props:Props){
    return (
        <h1>
            {props.headerText}
        </h1>
    )
}

export default Header;