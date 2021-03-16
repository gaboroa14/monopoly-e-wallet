const Key = ({number, action}) => {
    return (
        <div className="column is-4">
            <div onClick={(e) => action(e)} className="button is-large has-background-warning has-text-white" value={number}>
                {number}
            </div>
        </div>
    )
}

export default Key;