import mealsTable from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const { Fragment } = require("react");


const Header = (props) => {
  return (
    <Fragment>
      <header className="fixed w-full h-20 bg-[#8a2b06] text-[white] flex justify-between items-center shadow-[0_2px_8px_rgba(0,0,0,0.25)] z-10 px-[10%] py-0 left-0 top-0">
        <h1>Dev Food Store</h1>
        <HeaderCartButton onClick = {props.onClick}/>
      </header>
      <div className='w-full h-[25rem] z-0 overflow-hidden'>
        <img src={mealsTable} className='w-[110%] h-full object-cover rotateZ(-5deg) rotate-[-5deg] translate-y-[-4rem] translate-x-[-1rem]' alt='meals table' />
      </div>
    </Fragment>
  );
};

export default Header;
