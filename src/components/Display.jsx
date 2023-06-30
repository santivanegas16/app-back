import Close from '/img/close.png';
import Profile from '/img/Profile_display.png';
import { Link as Anchor } from 'react-router-dom';


export default function Display({ options, show, setShow }) {
    let connected = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="fixed z-10 top-0 left-0 bg-gradient-to-r from-[#FF5722] to-[#F97316] w-full h-full lg:w-[430px] ">
            <div className='flex mt-5 ml-5'>
                <img src={Profile} alt='Perfil' />
                <div className='flex flex-col ml-3 text-white font-poppins'>
                    <p className='text-base font-semibold'>Santiago Vanegas Mejia</p>
                    <p className='text-sm font-medium'>santiago.vanegasm16@gmail.com</p>
                </div>
            </div>
            <div onClick={() => setShow(!show)} className="cursor-pointer absolute  right-[29px] top-[40px]"><img src={Close} alt='close' /></div>
            <div className="absolute top-[85px] w-full lg:w-[430px] flex flex-col items-center">
                {options?.map((each, index) => connected ? (
                    each.online === true ? ( 
                    //     each.role === 0 ? (
                    //     <Anchor onClick={each.onClick} key={index} to={each.to} className='text-white text-center font-poppins text-[15px] font-semibold leading-6 mt-[10px] w-[382px] rounded-lg cursor-pointer py-3 hover:bg-white hover:text-orange-500'>{each.title}</Anchor>
                    // ):(

                    // ) 
                        <Anchor onClick={each.onClick} key={index} to={each.to} className='text-white text-center font-poppins text-[15px] font-semibold leading-6 mt-[10px] w-[382px] rounded-lg cursor-pointer py-3 hover:bg-white hover:text-orange-500'>{each.title}</Anchor>
                    ) : (
                        null
                    )
                ) : (
                    each.online === false && (
                        <Anchor onClick={each.onClick} key={index} to={each.to} className='text-white text-center font-poppins text-[15px] font-semibold leading-6 mt-[10px] w-[382px] rounded-lg cursor-pointer py-3 hover:bg-white hover:text-orange-500'>{each.title}</Anchor>
                    )
                ))}
            </div>
        </div>
    )
}