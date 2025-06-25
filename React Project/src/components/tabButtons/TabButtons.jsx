import './TabButton.css'

export default function TabButtons({children, onSelect}) {
    return (
        <button onClick={onSelect}>{children}</button>
    )
}
