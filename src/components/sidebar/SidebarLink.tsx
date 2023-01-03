import { NavLink } from "react-router-dom";
import { sidebartype } from '../../models/sidebartype';

interface Props {
  data:sidebartype[]
}

const SidebarLink = ({data}:Props) => {
  return (
    <>
        {data.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.link}
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                <li>
                  <img src={`/assets/icons/${link.icon}.svg`} alt='users' />
                  <span>{link.title}</span>
                </li>
              </NavLink>
            )
          })}
    </>
  )
}

export default SidebarLink