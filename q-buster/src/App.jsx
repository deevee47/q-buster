import './App.css'
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import {Button, ButtonGroup} from "@nextui-org/react";


function App() {

  return (
    <>
    <nav className='mt-8 flex justify-between items-center w-[80%] mx-auto'>
      <div>
        {/* ALSO ADD LOGO  */}
        Q-Buster</div>
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
      
      <div>
        {/* TWO ICON FROM REMIX ICONS: CART AND BAG */}

      </div>
    </nav>

    <div className="main-container flex">
      <div className="left w-[50%] h-screen flex justify-center items-center">
        <div className="text-container w-[70%]">
        <div className='text-primary text-4xl font-bold'>Delicious.</div>
        <div className='text-secondary text-3xl pt-2 pb-4'>One Stop Destination</div>
        <div className='text-black text-lg'>Beat the Queue: Get a wait time & unique token - track your order live & plan your time</div>

        <div className=' pt-10 text-lg font-bold italic'>Wait Less, Eat Fresh</div>
        <Button className='rounded-full px-16 text-black font-bold' color="primary" variant="shadow">Order Now!</Button>
      </div>
    </div>
        
      <div className="right w-[50%]"></div>
    </div>
    </>
  )
}

export default App
