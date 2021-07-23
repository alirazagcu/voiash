import React from "react";
import "./Footer.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
export default function BnavBar() {
  return (
    <Card className="footer0">
      <div className="footer1">
        <div className="footer2">
          <Link className="link1">Contacto</Link>

          <Link className="link">F.A.Q</Link>

          <Link className="link">Términos legales</Link>

          <Link className="link">Política de Privacidad</Link>
        </div>
        <div className="footer3">
          <a href="https://www.facebook.com/VoiashDiscover/">
            <FacebookIcon className="social" />
          </a>
          <a href="https://www.instagram.com/voiash/">
            {" "}
            <InstagramIcon className="social" />
          </a>
          <a href="https://www.youtube.com/channel/UC_we-JVlkFTuo-Z__9VtM3A">
            {" "}
            <YouTubeIcon className="social1" />{" "}
          </a>
        </div>
      </div>
    </Card>
  );
}
