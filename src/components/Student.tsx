

type Props = {
    firstName:string,
    secondName:string,
    marks: number []
}

function Student (props:Props){
    const calculateAverage = (marks: number[]): number => {
        if (marks.length === 0) return 0;
    
        const sum = marks.reduce((total, mark) => total + mark, 0);
        return sum / marks.length;
      };
    
      const averageMark = calculateAverage(props.marks);
    return (<div>
        <p>Имя:{props.firstName}</p>
        <p>Фамилия: {props.secondName}</p>
        <p>Оценки: {props.marks.join(',')}</p>
        <p>Средняя оценка: {averageMark.toFixed(2)}</p>
        </div>
        
    )
}

export default Student;