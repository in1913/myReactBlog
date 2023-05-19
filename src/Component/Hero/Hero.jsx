import React from 'react';
import "./hero.css";
import HeroImg from "../../img/main.png";
import { RiFacebookCircleLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { DiAndroid, DiDatabase, DiEclipse, DiDebian  } from "react-icons/di";
import {Typewriter} from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div>
            <section className='hero' id="hero">
                <div className="container f-flex top">
                    <div className="left top">
                        <h3>welcome to my world</h3>
                        <h1>
                            Hi, I'm <span>Inyoung Choi.</span>
                        </h1>
                        <h2>

                        </h2>
                            <span>
                                <Typewriter words={[" Newbie Developer.", "Professional Coder."]}
                                    loop cursor cursorStyle="|" delaySpeed={1000} typeSpeed={70} deleteSpeed={50}
                                />

                            </span>
                        <p>
                        얼마나 곳이 별과 되는 기쁘며, 위하여 끓는다. 아름답고 이 불러 황금시대를 이상의 뛰노는 기쁘며, 실현에 운다. 꽃이 생생하며, 우리 못할 바로 구하기 사는가 이상의 사막이다. 못할 끓는 수 찬미를 이상 무엇을 대고, 별과 설산에서 이것이다. 같이, 예수는 물방아 얼음에 것이다. 설레는 오아이스도 위하여 품으며, 풀이 몸이 것이다. 돋고, 자신과 피가 이상은 피고, 이상 우리의 붙잡아 하여도 끓는다. 귀는 그와 실현에 별과 긴지라 앞이 맺어, 있는가? 그러므로 품었기 무엇을 할지니, 가장 싸인 꾸며 뼈 사막이다. 용기가 이성은 이것이야말로 인도하겠다는 보라. 이것이야말로 황금시대의 싹이 가치를 능히 아니다.
                        </p>

                        <div className='hero-btn d-flex'>
                            <div className="col">
                                <h4>View My SNS</h4>
                                <div className="button">
                                    <button className="btn-shadow">
                                        <RiFacebookCircleLine className='icon'></RiFacebookCircleLine>
                                    </button>
                                    <button className="btn-shadow">
                                        <RiInstagramLine className='icon'></RiInstagramLine>
                                    </button>
                                    <button className="btn-shadow">
                                        <RiTwitterLine  className='icon'></RiTwitterLine>
                                    </button>
                                </div>
                            </div>
                            <div className="col">
                                <h4>BEST MY SKILL</h4>
                                    <div className="button">
                                        <button className="btn-shadow">
                                            <DiAndroid  className='icon'></DiAndroid>
                                        </button>
                                        <button className="btn-shadow">
                                            <DiDatabase className='icon'></DiDatabase>
                                        </button>
                                        <button className="btn-shadow">
                                            <DiDebian className='icon'></DiDebian>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="right right-img">
                        <img src={HeroImg} alt="me"></img>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;