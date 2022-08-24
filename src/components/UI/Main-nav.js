import { Anchor, MediaQuery, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  headerNavItem: {
    textTransform: 'uppercase',
    padding: '0 0.5em',
    fontWeight: '500',
    color: 'rgb(68, 61, 61)'
  }
}))

const MainNav = () => {
  const { classes } = useStyles();
  return (
    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
      <nav>
        <Anchor className={classes.headerNavItem} component={Link} to="/">
          Главная
        </Anchor>
        <Anchor className={classes.headerNavItem} component={Link} to="/about-us">
          О нас
        </Anchor>
        <Anchor className={classes.headerNavItem} component={Link} to="/service">
          Услуги
        </Anchor>
        <Anchor className={classes.headerNavItem} component={Link} to="/catalog">
          Продукция
        </Anchor>
        <Anchor className={classes.headerNavItem} component={Link} to="/exclusive">
          Эксклюзив
        </Anchor>
        <Anchor className={classes.headerNavItem} component={Link} to="/price">
          Прайсы
        </Anchor>
        <Anchor className={classes.headerNavItem} component={Link} to="/contacts">
          Контакты
        </Anchor>
      </nav>
    </MediaQuery>
  );
};
export default MainNav;
