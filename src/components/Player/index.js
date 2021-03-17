const Player = ({playerName,token,amount,action}) => {
    return(
        <div onClick={action} className="card has-text-centered ">
            <header className="card-header ">
                <div className="card-header-title is-centered">
                    <div className="has-background-warning pl-5 pr-5 pt-1 has-text-white" style={{borderRadius:"5px"}}>
                        {playerName}
                    </div>
                </div>
            </header>
            <div className="card-image is-128x128">
                <figure className="image is-4by3">
                    <img src={token} alt="token"/>
                </figure>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item has-text-black is-centered">
                ₩ {amount}
                </p>
            </footer>
        </div>
    )
}

export default Player;



