import './App.css'
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import {Button, ButtonGroup} from "@nextui-org/react";


function App() {

  return (
    <>
    <nav className='mt-8 flex justify-between items-center w-[80%] mx-auto'>
      <div className='flex justify-between items-center gap-4'>
        <img src="./src/assets/logo.png" className='w-12    border-2 border-red-900 rounded-2xl'/>
        <div className='font-Poppins font-semibold text-2xl text-center'>
        Q-Buster
        </div>
        </div>
      <div className='w-[60%]'>
        <Input
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50",
          input: [
            "bg-transparent",
            "text-center",
            "text-black/90",
            "placeholder:text-default-700/50",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "group-data-[focused=true]:bg-default-200/50",
            "!cursor-text",
          ],
        }}
        placeholder="Search your favourite food"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      </div>
      
      <div className='flex justify-between align-center text-primary gap-16 text-2xl cursor-pointer'>
      <i class="ri-shopping-cart-2-line"></i>
      <i class="ri-shopping-bag-line"></i>
      </div>
    </nav>

    <div className="main-container flex">
      <div className="left w-[50%] h-screen flex justify-center items-center">
        <div className="text-container w-[70%] font-Poppins">
        <div className='text-primary text-7xl font-semibold'>Delicious.</div>
        <div className='text-secondary text-4xl pt-4 pb-12 font-medium'>One Stop Destination</div>
        <div className='text-black text-lg'>Beat the Queue: Get a wait time & unique token - track your order live & plan your time</div>
        <div className='w-fit flex flex-center flex-col items-center'>
        <div className=' pt-10 text-3xl font-medium italic pb-7 w-fit'>Wait Less, Eat Fresh</div>
        <Button className='rounded-full px-16 text-black font-medium w-fit' color="primary" variant="shadow">Order Now!</Button>
        </div>
      </div>
    </div>
        
      <div className="right w-[50%]"></div>
    </div>
    </>
  )
}

export default App