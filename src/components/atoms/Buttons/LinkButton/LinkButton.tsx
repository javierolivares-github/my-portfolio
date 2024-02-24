import '/src/index.css';

type LinkButtonProps = {
  url: string;
  target: string;
  children: React.ReactNode;
}

const LinkButton = ({ url, target, children }: LinkButtonProps) => {
  return (
    <a 
      className='no-underline hover:scale-110 transition cursor-pointer' 
      href={url} 
      target={target}
    >
      {children}
    </a>
  )
}

export default LinkButton;



