export default function SeasonCard({season}) {
    return (
        <li>
            {season.name}
            <button>Add Episode</button>
        </li>
    )
}
