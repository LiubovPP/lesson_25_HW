//Задача: Создание компонента изображения

// Условие: Напишите компонент изображения (Image), который принимает URL изображения в качестве пропсов и отображает его.

type Props = {
    url:string
}

function Image (props:Props){
    return (
        <img src={"props.url"} alt="" />
    )
}

export default Image;

