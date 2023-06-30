import { FC } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { routes } from "../router/Router"
import s from "./Root.module.scss"
interface RootProps {}

export const Root: FC<RootProps> = () => {
  const paths = routes[0].children?.map((route) => route.path)
  const { pathname } = useLocation()
  const currentRoute = pathname.slice(1)

  return (
    <div className={s.root}>
      <div className={s.btns}>
        {paths?.map((path, i) => (
          <Link title={path} to={path!} key={i}>
            <button disabled={path === currentRoute}>{path}</button>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
