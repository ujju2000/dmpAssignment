import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useContext } from 'react'
import emailjs from '@emailjs/browser';
import { UserContext } from '../context/Context';

export default function Modal() {
  const form = useRef();
  const {isOpen , setIsOpen} = useContext(UserContext);

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0c3wr1c', 'template_bspjl2s', form.current, 'M8mv6attyx7PfSJom')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  
                  <div className="p-4 mt-2 flex flex-col items-center justify-center ">
                    <img src="assets/logo.png" alt="" className = 'h-[60px] w-[200px] ' />

                    <h6>SAVE 30% OFF ON YOUR TOUR</h6>

                    <span>We need basic details to apply this offer!</span>

                    
                  </div>
                  <div className="mt-4 flex flex-col ">

                  <form ref={form} onSubmit={sendEmail} className = 'flex flex-col '>
                    
                    <input type="text" name="user_name" className='border border-2 p-2 my-2' placeholder = "Name" />
                    
                    <input type="email" name="user_email" className='border border-2  p-2 my-2' placeholder = "Email"/>
                    
                    <input type = 'text' name = 'user_phone' className='border border-2  p-2 my-2' placeholder = "Phone"/>
                    
                    <input type="text" name="user_destination"  className='border border-2  p-2 my-2 ' placeholder = "Destination" />
                    <input type="submit" value="Send"  className = 'bg-red-400 text-white w-1/3 mx-auto my-4 rounded-md font-semibold p-2' />
                </form>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
