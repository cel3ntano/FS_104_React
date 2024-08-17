import { Triangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className='loader'>
      <Triangle
        visible={true}
        height='180'
        width='180'
        color='#ae40cf'
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
