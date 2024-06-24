import React from "react";
import * as S from './style';
import { useState } from "react";

interface iProps {
    onClose: ()=> void
}

const Modal = (properties: iProps)=> {

    return (
        <>
        <S.Overlay>
            <S.Modal>
                AQUI ESTÁ O POP-UP!
                <button className="close" onClick={properties.onClose}>FECHAR</button>
            </S.Modal>
        </S.Overlay>
        </>
    )
}
export default Modal;