import React from 'react'
import Cookies from 'js-cookie';
import './style.scss'

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

export const LogoutPopup = ({openModal, setOpenModal}) => {
 
    const handleOpen = () => setOpenModal(!openModal);

    const handleLogout = () => {
      Cookies.remove('UserData');
      handleOpen();
      window.location.reload();
    }
   
    return (
      <>
        <Dialog open={openModal} handler={handleOpen} className='w-[400px]'>
          <DialogHeader className='justify-center'>Are you sure?</DialogHeader>
          <DialogBody className='text-center'>
            you will be logged out of your Socialz Account.
          </DialogBody>
          <DialogFooter className='justify-center'>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={handleLogout}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
}
