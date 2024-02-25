import '/src/index.css';

type ButtonEffectProps = {
  children: React.ReactNode;
}

const ButtonEffectScale = ({ children }: ButtonEffectProps) => {
  return (
    <div className='no-underline hover:scale-110 transition cursor-pointer'>
      {children}
    </div>
  )
}

export default ButtonEffectScale;



