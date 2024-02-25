import '/src/index.css';

const PrimaryButton = ({label, handleClick}: ButtonProps) => {
  return (
    <button 
    className={`border-none outline-none cursor-pointer rounded-[0.5rem] flex justify-center items-center px-6 py-3 bg-primary-900 hover:bg-primary-600 text-white font-semibold text-[1rem] leading-6 transition active:scale-95`}
    onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default PrimaryButton;

type ButtonProps = {
  label: string;
  handleClick?: () => void;
}



