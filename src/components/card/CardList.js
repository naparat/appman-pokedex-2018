import React from 'react';
import './cards.scss'
import cute from '../../cute.png'
const CardList = (props) => {
    return (
        <ul className={"cards__list " + (props.showMycards ? 'half' : null) }>
			{props.cards.map((item,index) => {
				const damageValue =  item.attacks && item.attacks.length > 0 && item.attacks.map((damage)=> Number(damage.damage.replace(/[^0-9]/g, "")) )
				var sum = 0;
				for (var i = 0; damageValue && i < damageValue.length; i++) {
					sum += damageValue[i]
				}
				const hp = item.hp > 100 ? 100 : item.hp != 'None' ? item.hp : 0;
				const damage = sum;
				const strLength = item.attacks && item.attacks.length ? item.attacks.length : 0;
				const weaknessLength = item.weaknesses && item.weaknesses.length > 0 ? item.weaknesses.length : 0;
				const happiness = Math.ceil(((hp / 10) + (damage /10 ) + 10 - (weaknessLength ? weaknessLength : 0)) / 5);

				return (
					<li key={item.id+index}>
                        <a className="cards__button" onClick={props.showMycards ?  ()=>props.deleteFunc(item.id) : ()=>props.add(item)}>
						<div className="cards__box">
							<div className={"cards__img " + (props.showMycards ? 'full' : '')}><img src={item.imageUrl} /></div>
							<div className={"cards__content " + (props.showMycards ? 'full' : '')}>
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
                                            <span className="cards__inner-gate" style={{'width': (strLength === 1 ? '50' : strLength === 2 ? '100' : 0) + '%'}} >
											</span>
                                        </div>
									</div>
									<div>
										<span>WEAK</span>
										<div className="cards__gate">
                                            <span className="cards__inner-gate" style={{'width': (weaknessLength === 1 ? '100' : 0)+'%'}}></span>
                                        </div>
									</div>
									<div id="happinessimg">
										<img src={cute} />
										{happiness}
									</div>
								</div>
							</div>
							<div className="cards__add" >{props.showMycards ? 'X' : 'Add'}</div>
						</div>
                        </a>
					</li>
				)
			})}
		</ul>
    );
}

export default CardList;
