import classes from "./Main.module.scss";

const Menu = () => {
  return (
    <div className={classes.main}>
      <div className={classes.titleContainer}>The Memory Game</div>
      <div className={classes.menuContainer}>
        <div>Single Player</div>
        <div>Player vs Player</div>
        <div>Options</div>
      </div>
    </div>
  );
};

export default Menu;
