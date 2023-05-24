import React , {useState} from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import {FcLike, FcRight} from "react-icons/fc";
import {FaRegThumbsUp, FaRegThumbsDown, FaAngleRight, FaTimes} from "react-icons/fa";
const Card = ({img, title, category, totalLike}) => {
    const [modal, setModal] =useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
        <div className="box btn-shadow card">
            <div className="img">
                <img src={img} alt={img} onClick={toggleModal}/>
            </div>
            <div className="category d-flex">
                <span>
                    {category}
                </span>
                <label><FcLike></FcLike>&nbsp;&nbsp;{totalLike}</label>
            </div>
            <div className="title">
                <h2>{title}</h2>
                <a href="#popup" className='arrow' onClick={toggleModal}>
                    <FcRight ></FcRight>
                </a>
            </div>
        </div>

    {modal && (
        <div className='modal overlay'>
            <div className="d-flex modal-content">
                <div className="modal-img left">
                    <img src={img} alt={img} />
                </div>
                <div className="modal-text right">
                    <span>Features - Design</span>
                    <h1>{title}</h1>
                    <p>
                        수 밥을 장식하는 소리다.
                        이것은 따뜻한 불어 위하여서, 쓸쓸하랴? 
                        귀는 끝에 온갖 두기 황금시대의 이것이다. 
                        만천하의 곧 것이다.
                    </p>
                    <p>
                        보라, 우리의 뜨고, 사막이다. 
                        사라지지 무엇을 있는 장식하는 관현악이며, 심장은 것이다. 
                        그것을 위하여서, 그들의 싹이 그림자는 교향악이다. 
                    </p>
                    <p>
                        길지 귀는 들어 두기 그러므로 이상의 인생에 듣는다. 
                        그들은 봄바람을 있음으로써 인생의 같은 말이다. 
                        수 황금시대의 이상은 만천하의 트고, 아니한 속에 힘있다. 
                    </p>
                    <button className='btn-shadow'>
                        LIKE THIS <FaRegThumbsUp></FaRegThumbsUp>
                    </button>
                    <button className='btn-shadow'>
                        VIEW PROJECT <FaAngleRight></FaAngleRight>
                    </button>
                    <button className='btn-shadow close-modal' onClick={toggleModal}>
                        <FaTimes></FaTimes>
                    </button>
                </div>
            </div>
        </div>
    )}
        </>
    );
};

export default Card;

