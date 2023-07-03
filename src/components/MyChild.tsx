interface Props {
    text: string;
    num: number;
}

// type Props = {
//     text: string;
//     num: number;
// }

const MyChild = (props: Props): JSX.Element => {
    const { text, num } = props;

    return (
        <div>
            <h3>{text}</h3>
            <p>Number passed from props: {num}</p>
            <p>Props can be defined inside <b><i>interface</i></b> or <b><i>type</i></b> both</p>
        </div>
    )
}

export default MyChild