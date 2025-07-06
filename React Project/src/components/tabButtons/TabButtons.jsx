import './TabButton.css'

export default function TabButtons({children, onSelect, ...props}) {
    
    // const TagName = props.richText ? 'input' : 'textarea';

    return (
        <>
            {/* <TagName /> */}
            <button onClick={onSelect}>{children}</button>
        </>
    )
}
