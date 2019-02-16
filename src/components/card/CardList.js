import React from 'react';
import './cards.scss'
const CardList = (props) => {
    return (
        <ul className={"cards__list " + (props.showMycards ? 'half' : null) }>
			{props.cards.map((item,index) => {
				return (
					<li>
                        <a className="cards__button" onClick={()=>props.func(item)}>
						<div className="cards__box">
							<div className="cards__img"><img src={item.imageUrl} /></div>
							<div className="cards__content">
								<p>{item.name}</p>
								<div>
									<div>
										<span>HP</span>
										<div className="cards__gate">
                                            <span className="cards__inner-gate" style={{'width': (item.hp > 100 ? '100' : item.hp ) + '%'}}></span>
                                        </div>
									</div>
									<div>
										<span>STR</span>
										<div className="cards__gate">
                                            <span className="cards__inner-gate" style={{'width':  '0%'}}></span>
                                        </div>
									</div>
									<div>
										<span>WEAK</span>
										<div className="cards__gate">
                                            <span className="cards__inner-gate" style={{'width':'50%'}}></span>
                                        </div>
									</div>
								</div>
							</div>
							<div className="cards__add" >Add</div>
						</div>
                        </a>
					</li>
				)
			})}
		</ul>
    );
}

export default CardList;
