import { useNavigate } from "react-router";
import { useContext } from "react";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import { ContainerInfo, MiniAvatar, ButtonBuy } from "../../styled.components";
import avatar from "../../assets/avatar.png";
import { Context } from "../../context/AppContext";

const Info = () => {
  const navigate = useNavigate();
  const { state } = useContext(Context);
  console.log(state);

  const goToDetails = () => {
    navigate("/detail/1");
  };

  return (
    <ContainerInfo height={50}>
      <section className="icon-info" onClick={() => window.open(state.url, "_blank")}>
        <FaRegPlayCircle size={40} color="red" />
      </section>
      <section className="title-info">{state.name}</section>
      <section className="details-info">
        <section className="list-info">
          <div>2020</div>
          <div>Fantastic</div>
          <div>{state.time}</div>
        </section>
      </section>
      <section className="star">
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
      </section>

      <section className="description">
        <div className="description-title">Plot Summary</div>
        <div className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis non
          rerum natus! Reiciendis eveniet facilis atque possimus fuga explicabo
          recusandae, odit et sit nam vitae voluptates accusamus laborum, omnis
          placeat?
        </div>
      </section>

      <section className="description">
        <div className="description-title">Cast</div>
        <section className="images">
          {[1, 2, 3, 4].map((item) => (
            <div className="cast-item" key={item}>
              <MiniAvatar src={avatar} />
              <div className="cast-name">Plot Summary</div>
            </div>
          ))}
        </section>
      </section>

      <section className="button-buy">
        <ButtonBuy onClick={goToDetails}>Comprar</ButtonBuy>
      </section>
    </ContainerInfo>
  );
};

export default Info;
