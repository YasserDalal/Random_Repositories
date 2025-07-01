
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function Watermark({ className }) {
  return (
    <div className={className}>
      <div>© 2025 Yasser L. Dalal. All rights reserved.</div>
      <div className="flex justify-center">
        <div className="flex flex-col pt-2">
          <div className='pb-2'>Powered by React</div>
          <FontAwesomeIcon icon={faReact} size="2x" className="text-[#3881ff]"/>
        </div>
      </div>
    </div>
  );
};
