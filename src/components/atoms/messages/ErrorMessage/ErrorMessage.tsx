import '/src/index.css';
import Headline3 from '../../typography/Headline3';
import { MessageProps } from '../../../../lib/types';

const ErrorMessage = ({ message }: MessageProps) => {
  return (
    <div className='p-4 lg:p-8'>
      <Headline3 color={`text-red-600`}>{message}</Headline3>
    </div>
  )
}

export default ErrorMessage;




