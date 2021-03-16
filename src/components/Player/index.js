const Player = ({playerName,token,amount,action}) => {
    return(
        <div onClick={action} className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {playerName}
                </p>
            </header>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={token}/>
                </figure>
            </div>
            <footer class="card-footer">
                <p className="card-amount">
                    {amount}
                </p>
            </footer>
        </div>
    )
}

export default Player;
