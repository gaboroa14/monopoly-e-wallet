const PlayerName = ({name, onTextChange}) => {
    return(
        <div>
            <label className="is-white is-size-4" style={{letterSpacing:'2px'}}>
                Jugador:<br/>
                <input className="input" value={name} onChange={(e) => onTextChange(e)}></input>
            </label>
        </div>
    );
}

export default PlayerName;