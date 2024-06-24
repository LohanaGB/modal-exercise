import React from "react";
import * as S from './style';
import Modal from '../modal/modal';
import { useState } from "react";

const Home = ()=> {

    const [showModal, setShowModal] = useState<boolean>(false)

    const openModal = ()=> {
        setShowModal(true);
    }

    const closeModal = ()=> {
        setShowModal(false);
    }

    return(
        <>
        <S.Home>
            Clique para exibir o Pop-Up!
            <button className="open" onClick={openModal}>MOSTRAR</button>
        </S.Home>
        {showModal === true && 
        <Modal onClose={closeModal}/>
        }
        
        </>
    )
}
export default Home;