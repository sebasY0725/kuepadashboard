import "./card.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
export default function CardSecond() {
  return (
    <div class="card">
      <div class="number-square SecondCard ">
        <p class="number-container">30</p>
      </div>
      <div class="card-info">
        <p class="info-title">Leads de Primer contacto</p>
        <p class="info-number">
          <LocalPhoneIcon />
          15
        </p>
        <p class="info-number">
          <MessageIcon />
          15
        </p>
      </div>
    </div>
  );
}
