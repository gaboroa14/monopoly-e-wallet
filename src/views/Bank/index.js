import Logo from "../../components/Logo";
import Swal from "sweetalert2";
import { useHistory, Link } from "react-router-dom";
import PlayerGroup from "../../components/PlayerGroup";


const Bank =()=>{
    let history = useHistory();

  const showBankerOptions = () => {
    Swal.fire({
        title: '¿Que quieres hacer?',
        showCloseButton: true,
        showDenyButton: true,
        showCancelButton: false,
        denyButtonColor: "green",
        confirmButtonText: `Pass Go`,
        denyButtonText: `Cobrar/pagar`,
        }).then((result) => {
            if (result.isConfirmed) {
          Swal.fire('Pagado!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire({
                showCloseButton: true,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonColor: "green",
                confirmButtonText: `Pagar`,
                denyButtonText: `Cobrar`,
                }).then((result) => {
                if (result.isConfirmed) {
                    handleSendingMoney()
                } else if (result.isDenied) {
                    handleSendingMoney()
                }
              });
        }
      });
  };

  const handleSendingMoney = () => {
    history.push("/send");
  };

  const players = [
    {
      playerName: "GABOX",
      token: "http://placekitten.com/128/128",
      amount: "1000",
      action: showBankerOptions,
    },
    {
      playerName: "ANYI",
      token: "http://placekitten.com/128/129",
      amount: "~2000",
      action: showBankerOptions,
    },
    {
      playerName: "AJAV06",
      token: "http://placekitten.com/129/128",
      amount: "~1000",
      action: showBankerOptions,
    },
    {
      playerName: "JONABB",
      token: "http://placekitten.com/127/128",
      amount: "~2000",
      action: showBankerOptions,
    },
  ];
    return (
        <section className="section is-centered">
            <div className="container">
                <Logo />
                <PlayerGroup players={players} />
                <div className="columns is-mobile is-half is-centered has-text-centered">
                    <div className="column is-12">
                        <Link to="/bankrupt/">
                            <div className="box has-text-danger">chao cheo</div>
                            <div className="box has-text-danger">chao cheo</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Bank;

