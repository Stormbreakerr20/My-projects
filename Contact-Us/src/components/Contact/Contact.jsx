import React from 'react'
import styles from "./Contact.module.css";
import Btn from '../Button/Btn';
import {MdOutlineMessage} from 'react-icons/md';
import {IoIosCall} from 'react-icons/io';
function Contact() {
  return (
    <>
    <div className={styles.contact}>
        <div className={styles.text}>
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>
        <div className={styles.formarea}>
            <div >
                <form action="" className={styles.form}>
                <div className={styles.darkbtn}>
                    <Btn dark={true} text = 'VIA SUPP' icon={<MdOutlineMessage fontSize={'24px'}/>}></Btn>
                    <Btn dark={true} text = 'VIA CALL' icon={<IoIosCall fontSize={'24px'}/>}></Btn> 
                </div>
                <div className="whbtn">
                    <Btn dark={false} text = 'VIA EMAIL FORM' icon={<MdOutlineMessage fontSize={'24px'}/>}></Btn> 
                </div>
                <div className={styles.inpt}>
                    <label htmlFor="name" className={styles.txt}>Name</label>
                    <input type="text" name="" id="" />
                </div>
                <div className={styles.inpt}>
                    <label htmlFor="email" className={styles.txt}>Email</label>
                    <input type="email" name="" id="" />
                </div>
                <div className={styles.inpt}>
                    <label htmlFor="name" className={styles.txt}>Text</label>
                    <textarea name="" id="" cols="10" rows="6"></textarea>
                </div>
                <div className={styles.submit}>
                    <Btn dark={true} text = 'SUBMIT'></Btn>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Contact