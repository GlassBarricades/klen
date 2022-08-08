import { Anchor, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  sideNav: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontWeight: '500'
  },
  sideNavItem: {
    fontSize: '23px',
    padding: '0.8em',
    color: 'gray',
    marginLeft: '5em'
  }
}));

const SideNav = ({status, trigger}) => {
  const { classes } = useStyles();

    return (
        <nav className={classes.sideNav}>
        <Anchor className={classes.sideNavItem} component={Link} to="/" onClick={trigger}>
          Главная
        </Anchor>
        <Anchor className={classes.sideNavItem} component={Link} to="/about-us" onClick={trigger}>
          О нас
        </Anchor>
        <Anchor className={classes.sideNavItem} component={Link} to="/service" onClick={trigger}>
        Услуги
        </Anchor>
        <Anchor className={classes.sideNavItem} component={Link} to="/catalog" onClick={trigger}>
        Продукция
        </Anchor>
        <Anchor className={classes.sideNavItem} component={Link} to="/price" onClick={trigger}>
        Прайсы
        </Anchor>
        <Anchor className={classes.sideNavItem} component={Link} to="/contacts" onClick={trigger}>
        Контакты
        </Anchor>
        <Anchor className={classes.sideNavItem} component={Link} to="/admin" onClick={trigger}>
        Админ
        </Anchor>
      </nav>
    )
}
export default SideNav;