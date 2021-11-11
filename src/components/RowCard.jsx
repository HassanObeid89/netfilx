export default function RowCard({show}) {
    console.log(show)
    return (
        <li>
            <img src={show.imgUrl} alt=''/>
        </li>
    )
}
