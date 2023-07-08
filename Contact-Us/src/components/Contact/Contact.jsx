import React, { useState } from 'react'
import styles from "./Contact.module.css";
import Btn from '../Button/Btn';
import {MdOutlineMessage} from 'react-icons/md';
import {IoIosCall} from 'react-icons/io';
function Contact() {
    const [name,setname] =useState("");
    const [email,setemail] =useState("");
    const [text,settext] =useState("");

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(e.target[3].value);
        console.log(e.target[4].value);
        console.log(e.target[5].value);
        setname(e.target[3].value);
        setemail(e.target[4].value);
        settext(e.target[5].value);
        
    }
    const call=()=>{
        console.log("Call");
    }


  return (
    <>
    <div className={styles.contact}>
        <div className={styles.text}>
            <h1>CONTACT US</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>
        <div className={styles.formarea}>
            <div >
                <form action="" className={styles.form} onSubmit={handlesubmit}>
                    <div className={styles.darkbtn}>
                        <Btn dark={true} text = 'VIA SUPP' icon={<MdOutlineMessage fontSize={'24px'}/>}></Btn>
                        <Btn dark={true} text = 'VIA CALL' icon={<IoIosCall fontSize={'24px'} />} onClick={call}></Btn> 
                    </div>
                    <div>
                        <Btn dark={false} text = 'VIA EMAIL FORM' icon={<MdOutlineMessage fontSize={'24px'}/>}></Btn> 
                    </div>
                    <div className={styles.inpt}>
                        <label htmlFor="name" className={styles.txt}>Name</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className={styles.inpt}>
                        <label htmlFor="email" className={styles.txt}>Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className={styles.inpt}>
                        <label htmlFor="text" className={styles.txt}>Text</label>
                        <textarea name="text" id="" cols="10" rows="6"></textarea>
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