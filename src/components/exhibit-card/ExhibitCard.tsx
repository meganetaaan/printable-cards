import logo from '../../assets/logo.drawio.png'
import icon from '../../assets/icon.drawio.png'
import './ExhibitCard.css'

export type ExhibitCardProps = {
  name: string;
  createdBy: string;
  description: string;
}

const smallTitle = {
  fontSize: '20px'
}

export function ExhibitCard(props: ExhibitCardProps) {
  return (
    <div className="card">
      <div className="header">
        <p className="title" style={props.name.length > 20 ? smallTitle : {}}>{props.name}</p>
        <img src={icon} alt="コミュニティアイコン" className="icon" />
      </div>
      <div className="handle">Created by: {props.createdBy}</div>
      <div className="description">{props.description}</div>
      <div className="footer">
        <img src={logo} alt="コミュニティロゴ" className="logo" />
      </div>
    </div>
  )
}